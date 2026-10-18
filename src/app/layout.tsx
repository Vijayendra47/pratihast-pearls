import './globals.css';
import React from 'react';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Pratihast Pearls - Premium Mithila Fox Nuts',
  description: 'Gourmet Organic Makhana Sourced Directly from the Pristine Aquatic Ecosystems of Mithila.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Tailwind CSS का पक्का और सीधा डायरेक्ट लिंक */}
        <script src="https://tailwindcss.com"></script>
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  pearl: {
                    50: '#FCFBF9',
                    100: '#F3F0E9',
                  },
                  gold: {
                    500: '#D4AF37',
                    600: '#AA8C2C',
                  },
                  makhanaGreen: {
                    800: '#1E3F20',
                    900: '#112412',
                  }
                }
              }
            }
          }
        </script>
      </head>
      <body className="bg-[#FCFBF9] antialiased">
        <CartProvider>
          <Navbar />
          {children}
          <footer className="bg-[#112412] text-[#F3F0E9]/60 text-xs text-center py-8 border-t border-[#D4AF37]/10 mt-12">
            © {new Date().getFullYear()} Pratihast Pearls Premium Fox Nuts. All Rights Reserved.
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
