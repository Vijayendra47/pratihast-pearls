"use client";
import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import Script from 'next/script';

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  const [loading, setLoading] = useState(false);
  const [orderDone, setOrderDone] = useState(false);

  const handleStandardCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cartTotal <= 0) return alert("Your cart is empty!");
    
    setLoading(true);

    try {
      // स्टेप 1: बैकएंड से ऑर्डर आईडी क्रिएट करना
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: cartTotal }),
      });
      
      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.error || 'Failed to initialize order');

      // स्टेप 2: रेज़रपे स्टैंडर्ड गेटवे मॉडल को कॉन्फ़िगर करना
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Pratihast Pearls",
        description: "Premium Mithila Fox Nuts Gourmet Order",
        image: "https://razorpay.com", // आपकी ब्रांड लोगो इमेज पाथ
        order_id: orderData.order_id,
        handler: async function (response: any) {
          // स्टेप 3: पेमेंट सिग्नेचर को बैकएंड पर वेरीफाई करना
          setLoading(true);
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyRes.ok && verifyData.status === 'success') {
            setOrderDone(true);
          } else {
            alert("Payment Verification Failed: " + (verifyData.error || "Unknown Error"));
          }
          setLoading(false);
        },
        prefill: {
          name: (document.getElementById('cust-name') as HTMLInputElement)?.value || "",
          email: (document.getElementById('cust-email') as HTMLInputElement)?.value || "",
        },
        theme: {
          color: "#112412", // मखाना डीप ग्रीन ब्रांडिंग थीम कलर
          backdrop_color: "rgba(0,0,0,0.6)"
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            alert("Payment gateway session dismissed by user.");
          }
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        alert("Payment Failed! Reason: " + response.error.description);
        setLoading(false);
      });
      
      rzp.open();
    } catch (err: any) {
      alert("Checkout initialization failed: " + err.message);
      setLoading(false);
    }
  };

  if (orderDone) {
    return (
      <main style={{ padding: '80px 20px', textAlign: 'center', fontFamily: 'serif', backgroundColor: '#FCFBF9', minHeight: '80vh' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '24px', border: '1px solid #EEE', boxShadow: '0 4px 25px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎉</div>
          <h1 style={{ color: '#112412', fontSize: '2.2rem', margin: '0 0 10px 0' }}>Order Authorized!</h1>
          <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.5' }}>Payment verified securely via SHA-256. Premium Mithila Pearls will be dispatched shortly.</p>
          <a href="/products" style={{ backgroundColor: '#112412', color: '#D4AF37', fontWeight: 'bold', padding: '12px 30px', borderRadius: '10px', textDecoration: 'none', display: 'inline-block' }}>Continue Shopping</a>
        </div>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', fontFamily: 'serif', backgroundColor: '#FCFBF9' }}>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <h1 style={{ fontSize: '2.5rem', color: '#112412', borderBottom: '2px solid #D4AF37', paddingBottom: '15px', marginBottom: '40px' }}>Secure Checkout</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        <div style={{ flex: '1 1 500px', minWidth: '300px', backgroundColor: '#FFFFFF', padding: '35px', borderRadius: '24px', border: '1px solid #EEE', boxShadow: '0 4px 25px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.6rem', color: '#112412', margin: '0 0 25px 0' }}>Secure Dispatch Details</h2>
          
          <form onSubmit={handleStandardCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input required id="cust-name" type="text" placeholder="Full Name" style={{ padding: '12px', border: '1px solid #CCC', borderRadius: '8px', fontSize: '14px' }} />
            <input required id="cust-email" type="email" placeholder="Email Address" style={{ padding: '12px', border: '1px solid #CCC', borderRadius: '8px', fontSize: '14px' }} />
            <input required type="text" placeholder="Delivery Address" style={{ padding: '12px', border: '1px solid #CCC', borderRadius: '8px', fontSize: '14px' }} />
            
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <input required type="text" placeholder="City" style={{ flex: '1 1 180px', padding: '12px', border: '1px solid #CCC', borderRadius: '8px', fontSize: '14px' }} />
              <input required type="number" placeholder="Postal PIN Code" style={{ flex: '1 1 180px', padding: '12px', border: '1px solid #CCC', borderRadius: '8px', fontSize: '14px' }} />
            </div>

            <button type="submit" disabled={loading} style={{ backgroundColor: loading ? '#666' : '#112412', color: '#D4AF37', border: 'none', fontWeight: 'bold', padding: '14px', borderRadius: '10px', cursor: 'pointer', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '10px' }}>
              {loading ? 'Connecting Secure Gateway...' : `💳 Proceed to Secure Payment (₹${cartTotal})`}
            </button>
          </form>
        </div>

        <div style={{ flex: '1 1 350px', minWidth: '300px', backgroundColor: '#F3F0E9', padding: '30px', borderRadius: '24px', border: '1px solid #D4AF37', height: 'fit-content' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#112412', margin: '0 0 20px 0' }}>Order Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', borderBottom: '1px solid #DDD', paddingBottom: '20px', marginBottom: '20px' }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', color: '#333' }}>
                <div>
                  <strong style={{ color: '#112412' }}>{item.name}</strong>
                  <div style={{ fontSize: '0.85rem', color: '#666' }}>Qty: {item.quantity} × {item.weight}</div>
                </div>
                <span style={{ fontWeight: 'bold' }}>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: 'bold', color: '#112412' }}>
            <span>Payable Gross Total:</span>
            <span>₹{cartTotal}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
