"use client";
import React from 'react';
import { useCart } from '../../context/CartContext';
import { useRouter } from 'next/navigation';

const STATIC_PRODUCTS = [
  { id: '1', name: 'Raw Premium Jumbo Pearls', desc: 'Handpicked giant grade raw makhana kernels.', weights: '500g', price: 420 },
  { id: '2', name: 'Classic Himalayan Salted', desc: 'Lightly roasted in organic cow ghee and sea-salt.', weights: '250g', price: 290 },
  { id: '3', name: 'Zesty Roasted Peri-Peri', desc: 'Spicy bold fusion for your savory gourmet cravings.', weights: '250g', price: 310 },
  { id: '4', name: 'Refreshing Garden Mint', desc: 'Cool refreshing dried pudina infusion.', weights: '250g', price: 299 }
];

export default function ProductCatalog() {
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'serif', backgroundColor: '#FCFBF9' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#112412', borderBottom: '2px solid #D4AF37', paddingBottom: '15px', marginBottom: '40px' }}>Our Premium Collections</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
        {STATIC_PRODUCTS.map((prod) => {
          const itemId = `${prod.id}-${prod.weights}`;

          return (
            <div key={prod.id} style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', border: '1px solid #EEE', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'between', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ backgroundColor: '#F3F0E9', height: '180px', borderRadius: '12px', display: 'flex', itemsCenter: 'center', justifyContent: 'center', color: '#888', position: 'relative', marginBottom: '15px', fontSize: '14px', fontWeight: 'bold', paddingTop: '75px' }}>
                [ Premium Packaging ]
                <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#1E3F20', color: '#D4AF37', fontSize: '12px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '6px' }}>
                  {prod.weights}
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#112412', margin: '0 0 10px 0', fontWeight: 'bold' }}>{prod.name}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: '0 0 15px 0', lineHeight: '1.4' }}>{prod.desc}</p>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#112412', marginBottom: '20px' }}>₹{prod.price}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button 
                  onClick={() => addToCart({ id: itemId, name: prod.name, flavor: prod.name, weight: prod.weights, price: prod.price })}
                  style={{ width: '100%', border: '2px solid #1E3F20', backgroundColor: 'transparent', color: '#1E3F20', fontWeight: 'bold', padding: '10px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px' }}
                >
                  🛒 Add To Cart
                </button>
                <button 
                  onClick={() => {
                    addToCart({ id: itemId, name: prod.name, flavor: prod.name, weight: prod.weights, price: prod.price });
                    router.push('/checkout');
                  }}
                  style={{ width: '100%', backgroundColor: '#D4AF37', border: 'none', color: '#112412', fontWeight: 'bold', padding: '10px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
                >
                  ⚡ Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
