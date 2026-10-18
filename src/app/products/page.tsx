"use client";
import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

const STATIC_PRODUCTS = [
  { id: '1', name: 'Raw Premium Jumbo Pearls', desc: 'Handpicked giant grade raw makhana kernels.', variants: ['Raw Premium'], weights: ['500g', '1kg'], price: 420 },
  { id: '2', name: 'Classic Himalayan Salted', desc: 'Lightly roasted in organic cow ghee and sea-salt.', variants: ['Classic Salted'], weights: ['250g', '500g'], price: 290 },
  { id: '3', name: 'Zesty Roasted Peri-Peri', desc: 'Spicy bold fusion for your savory gourmet cravings.', variants: ['Roasted Peri-Peri'], weights: ['250g'], price: 310 },
  { id: '4', name: 'Refreshing Garden Mint', desc: 'Cool refreshing dried pudina infusion.', variants: ['Mint'], weights: ['250g'], price: 299 }
];

export default function ProductCatalog() {
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-pearl-50">
      <h1 className="text-3xl font-serif font-bold text-makhanaGreen-900 mb-8 border-b pb-4">Our Premium Collections</h1>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATIC_PRODUCTS.map((prod) => {
          const defaultWeight = prod.weights[0];
          const defaultVariant = prod.variants[0];
          const itemId = `${prod.id}-${defaultWeight}`;

          return (
            <div key={prod.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md flex flex-col justify-between p-4 group">
              <div className="bg-pearl-100 h-48 rounded-xl flex items-center justify-center relative mb-4">
                <span className="text-gray-400 font-mono text-sm">[ Premium Packaging Mesh ]</span>
                <span className="absolute top-2 left-2 bg-makhanaGreen-800 text-gold-500 font-bold text-xs uppercase px-3 py-1 rounded-md">
                  {defaultWeight}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-makhanaGreen-900 group-hover:text-gold-600 transition">{prod.name}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">{prod.desc}</p>
                <div className="text-xl font-bold text-makhanaGreen-900 py-2">₹{prod.price}</div>
              </div>
              <div className="space-y-2 mt-4">
                <button 
                  onClick={() => addToCart({ id: itemId, name: prod.name, flavor: defaultVariant, weight: defaultWeight, price: prod.price })}
                  className="w-full border border-makhanaGreen-800 text-makhanaGreen-900 hover:bg-makhanaGreen-900 hover:text-pearl-50 flex items-center justify-center space-x-2 py-2 rounded-xl transition text-sm font-semibold"
                >
                  <ShoppingCart size={16} /> <span>Add To Cart</span>
                </button>
                <button 
                  onClick={() => {
                    addToCart({ id: itemId, name: prod.name, flavor: defaultVariant, weight: defaultWeight, price: prod.price });
                    router.push('/checkout');
                  }}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-makhanaGreen-900 font-bold py-2 rounded-xl transition text-sm shadow-md"
                >
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
