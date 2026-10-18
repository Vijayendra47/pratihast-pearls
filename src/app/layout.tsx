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
        {/* 📱 मोबाइल और टैबलेट व्यू को 100% परफेक्ट बनाने के लिए ग्लोबल CSS मैजिक */}
        <style>{`
          /* मोबाइल रिस्पॉन्सिव ग्रिड लेआउट */
          @media (max-width: 768px) {
            div, section, main {
              grid-template-columns: 1fr !important; /* सभी ग्रिड सिंगल कॉलम हो जाएंगे */
              flex-direction: column !important;     /* फ्लेक्स बॉक्स एक के नीचे एक आ जाएंगे */
            }
            nav {
              padding: 10px 15px !important;
              flex-direction: row !important;       /* नेवबार का अलाइनमेंट सही रखने के लिए */
            }
            nav div {
              gap: 12px !important;                 /* मोबाइल मेनू में गैप कम करने के लिए */
            }
            h1 {
              font-size: 2rem !important;           /* हेडिंग का साइज मोबाइल के हिसाब से */
            }
            h2 {
              font-size: 1.6rem !important;
            }
            form {
              padding: 10px !important;
            }
            input, textarea, button {
              font-size: 16px !important;          /* मोबाइल पर ज़ूम इन न हो इसलिए */
            }
          }
        `}</style>
      </head>
      <body className="bg-[#FCFBF9] antialiased" style={{ margin: 0, padding: 0 }}>
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
