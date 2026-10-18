"use client";
import React from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end', fontFamily: 'serif' }}>
      {/* Background Overlay */}
      <div 
        onClick={onClose} 
        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', cursor: 'pointer' }} 
      />
      
      {/* Drawer Panel */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '400px', height: '100%', backgroundColor: '#FCFBF9', boxShadow: '-4px 0 25px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', zIndex: 101 }}>
        
        {/* Header */}
        <div style={{ padding: '20px', backgroundColor: '#112412', borderBottom: '2px solid #D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FCFBF9' }}>
          <h2 style={{ margin: 0, fontSize: '1.4rem', color: '#D4AF37', fontWeight: 'bold' }}>Your Fresh Cart</h2>
          <button 
            onClick={onClose} 
            style={{ backgroundColor: 'transparent', border: '1px solid #D4AF37', color: '#D4AF37', borderRadius: '6px', padding: '5px 12px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            ✕ Close
          </button>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#777', marginTop: '40px', fontSize: '1.1rem', fontStyle: 'italic' }}>
              Your cart is empty. Fill it with Premium Mithila Pearls!
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '12px', border: '1px solid #EEE', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#112412', fontWeight: 'bold' }}>{item.name}</h4>
                  <p style={{ margin: '0 0 5px 0', fontSize: '0.85rem', color: '#666' }}>Weight: {item.weight}</p>
                  <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold', color: '#AA8C2C' }}>₹{item.price}</p>
                </div>
                
                {/* Quantity Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                    style={{ width: '28px', height: '28px', border: '1px solid #CCC', backgroundColor: '#F3F0E9', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: '1rem', fontWeight: 'bold', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                    style={{ width: '28px', height: '28px', border: '1px solid #CCC', backgroundColor: '#F3F0E9', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    +
                  </button>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    style={{ marginLeft: '10px', backgroundColor: 'transparent', border: 'none', color: '#FF4D4D', cursor: 'pointer', fontSize: '1.2rem' }}
                    title="Remove item"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Panel */}
        {cart.length > 0 && (
          <div style={{ padding: '20px', backgroundColor: '#F3F0E9', borderT: '1px solid #EEE', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold', color: '#112412' }}>
              <span>Subtotal:</span>
              <span style={{ color: '#112412' }}>₹{cartTotal}</span>
            </div>
            <button 
              onClick={() => { onClose(); router.push('/checkout'); }} 
              style={{ width: '100%', backgroundColor: '#D4AF37', color: '#112412', border: 'none', fontWeight: 'bold', padding: '14px', borderRadius: '12px', cursor: 'pointer', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
            >
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
