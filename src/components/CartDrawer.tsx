"use client";
import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-pearl-50 shadow-2xl flex flex-col">
          <div className="p-6 bg-makhanaGreen-900 flex items-center justify-between border-b border-gold-500/20 text-pearl-50">
            <h2 className="text-lg font-bold font-serif tracking-wide text-gold-500">Your Fresh Cart</h2>
            <button onClick={onClose} className="p-1 hover:text-gold-500 transition"><X size={24} /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-12 text-gray-500">Your cart is empty. Fill it with Premium Mithila Pearls!</div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div>
                    <h4 className="font-bold text-makhanaGreen-900">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.flavor} | {item.weight}</p>
                    <p className="text-sm font-semibold text-gold-600 mt-1">₹{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 border rounded bg-gray-50"><Minus size={14} /></button>
                    <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 border rounded bg-gray-50"><Plus size={14} /></button>
                    <button onClick={() => removeFromCart(item.id)} className="p-1 text-red-500 hover:bg-red-50 rounded pl-2"><Trash2 size={16} /></button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 bg-pearl-100 border-t border-gray-200 space-y-4">
              <div className="flex justify-between text-base font-bold text-makhanaGreen-900">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              <button onClick={() => { onClose(); router.push('/checkout'); }} className="w-full bg-gold-500 hover:bg-gold-600 text-makhanaGreen-900 font-bold py-3 px-4 rounded-xl transition shadow-lg tracking-wide uppercase text-sm">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
