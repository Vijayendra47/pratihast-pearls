"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X } from 'lucide-react';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-makhanaGreen-900 border-b border-gold-500/20 text-pearl-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-bold tracking-widest text-gold-500 font-serif">PRATIHAST PEARLS</span>
              <span className="text-xs uppercase tracking-wider text-pearl-100/70">Premium Fox Nuts</span>
            </Link>

            <div className="hidden md:flex space-x-8 font-medium tracking-wide">
              <Link href="/" className="hover:text-gold-500 transition">Home</Link>
              <Link href="/products" className="hover:text-gold-500 transition">Shop Makhana</Link>
              <Link href="/contact" className="hover:text-gold-500 transition">B2B Enquiry & Map</Link>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-pearl-50 hover:text-gold-500 transition">
                <ShoppingBag size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-500 text-makhanaGreen-900 font-bold rounded-full text-xs w-5 h-5 flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-makhanaGreen-800 border-t border-gold-500/20 px-4 pt-2 pb-4 space-y-2">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-pearl-50">Home</Link>
            <Link href="/products" onClick={() => setIsMenuOpen(false)} className="block py-2 text-pearl-50">Shop Makhana</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block py-2 text-pearl-50">B2B & Distribution</Link>
          </div>
        )}
      </nav>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
