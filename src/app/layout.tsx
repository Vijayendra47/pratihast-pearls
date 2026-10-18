import './globals.css'; // Includes fundamental @tailwind directives
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Pratihast Pearls - Premium Mithila Fox Nuts',
  description: 'Gourmet Organic Makhana Sourced Directly from the Pristine Aquatic Ecosystems of Mithila.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-pearl-50 antialiased selection:bg-gold-500 selection:text-makhanaGreen-900">
        <CartProvider>
          <Navbar />
          {children}
          <footer className="bg-makhanaGreen-900 text-pearl-100/60 text-xs text-center py-8 border-t border-gold-500/10">
            © {new Date().getFullYear()} Pratihast Pearls Premium Fox Nuts. From the Ponds of Mithila. All Rights Reserved.
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
