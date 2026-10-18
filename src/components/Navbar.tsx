"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav style={{
        backgroundColor: '#112412',
        borderBottom: '2px solid #D4AF37',
        padding: '15px 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'serif',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        {/* Branding Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ color: '#FCFBF9', fontSize: '1.4rem', fontWeight: 'bold', margin: 0 }}>
            PRATIHAST <span style={{ color: '#D4AF37' }}>PEARLS</span>
            <div style={{ fontSize: '10px', color: '#D4AF37', letterSpacing: '1px', fontWeight: 'normal', marginTop: '2px' }}>
              PREMIUM FOX NUTS
            </div>
          </div>
        </Link>

        {/* Links Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          <Link href="/" style={{ color: '#FCFBF9', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>
            Home
          </Link>
          <Link href="/products" style={{ color: '#FCFBF9', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>
            Shop Makhana
          </Link>
          <Link href="/contact" style={{ color: '#FCFBF9', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>
            B2B Enquiry & Map
          </Link>

          {/* Cart Trigger Button */}
          <button 
            onClick={() => setIsCartOpen(true)}
            style={{
              backgroundColor: '#1E3F20',
              border: '1px solid #D4AF37',
              color: '#D4AF37',
              padding: '8px 15px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px'
            }}
          >
            👜 <span>{totalItems}</span>
          </button>
        </div>
      </nav>

      {/* Cart Drawer Component Component Overlay */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
