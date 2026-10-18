"use client";
import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { CreditCard, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', pin: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulating secure gateway network ping
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form, amount: cartTotal, items: cart })
    });

    if (res.ok) {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }
  };

  if (isSuccess) return (
    <div className="max-w-md mx-auto text-center py-20 px-4 space-y-4">
      <div className="inline-flex text-green-600 bg-green-50 p-4 rounded-full"><CheckCircle size={48} /></div>
      <h2 className="text-3xl font-serif font-bold text-makhanaGreen-900">Order Confirmed!</h2>
      <p className="text-gray-600">Your premium Mithila Pearls order has been verified. Check your email for real-time tracking details.</p>
    </div>
  );

  return (
    <main className="max-w-4xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 bg-pearl-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border space-y-4 shadow-sm">
        <h2 className="text-xl font-bold font-serif text-makhanaGreen-900">Secure Dispatch Details</h2>
        <input required type="text" placeholder="Full Name" className="w-full p-3 border rounded-xl" onChange={e => setForm({...form, name: e.target.value})} />
        <input required type="email" placeholder="Email Address" className="w-full p-3 border rounded-xl" onChange={e => setForm({...form, email: e.target.value})} />
        <input required type="text" placeholder="Delivery Address" className="w-full p-3 border rounded-xl" onChange={e => setForm({...form, address: e.target.value})} />
        <div className="grid grid-cols-2 gap-4">
          <input required type="text" placeholder="City" className="w-full p-3 border rounded-xl" onChange={e => setForm({...form, city: e.target.value})} />
          <input required type="text" placeholder="Postal PIN Code" className="w-full p-3 border rounded-xl" onChange={e => setForm({...form, pin: e.target.value})} />
        </div>
        <button type="submit" disabled={isProcessing || cart.length === 0} className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gray-200 text-makhanaGreen-900 font-bold py-3 rounded-xl transition flex items-center justify-center space-x-2 shadow-md">
          <CreditCard size={18} /> <span>{isProcessing ? "Verifying Payment..." : `Authorize Payment (₹${cartTotal})`}</span>
        </button>
      </form>

      <div className="bg-makhanaGreen-900 text-pearl-50 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold font-serif text-gold-500 border-b border-gold-500/20 pb-2">Order Summary</h2>
          <div className="divide-y divide-pearl-100/10 max-h-64 overflow-y-auto space-y-2 mt-2">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between text-sm py-2">
                <div><span>{item.name}</span><p className="text-xs text-pearl-100/60">Qty: {item.quantity} × {item.weight}</p></div>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gold-500/20 pt-4 flex justify-between font-bold text-lg text-gold-500">
          <span>Payable Gross Total:</span>
          <span>₹{cartTotal}</span>
        </div>
      </div>
    </main>
  );
}
