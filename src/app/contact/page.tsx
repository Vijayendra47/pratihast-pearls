"use client";
import React, { useState } from 'react';

export default function ContactAndB2B() {
  const [b2bForm, setB2bForm] = useState({ clientName: '', bizName: '', email: '', qty: '', note: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleB2BSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', fontFamily: 'serif', backgroundColor: '#FCFBF9' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
        
        {/* Left Side: Address Info */}
        <div style={{ flex: '1 1 450px', minWidth: '300px' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#112412', margin: '0 0 10px 0' }}>Headquarters & Origins</h1>
          <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>Our central processing unit is situated right at the heart of Mithila's finest natural water ecosystems.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#112412', fontSize: '1.1rem' }}>
            <div>📍 <strong>Registered Hub:</strong><p style={{ margin: '5px 0 0 0', color: '#555', fontSize: '1rem' }}>Pratihast Pearls, Nagdah Balain, Benipatti, Madhubani, Bihar, India, 847222</p></div>
            <div>📞 <strong>Phone:</strong> <span style={{ color: '#555' }}>+91 94314 74362</span></div>
            <div>✉️ <strong>Email:</strong> <span style={{ color: '#555' }}>logistics@pratihastpearls.com</span></div>
          </div>

          <div style={{ width: '100%', height: '250px', backgroundColor: '#EEE', border: '1px solid #D4AF37', borderRadius: '16px', marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#555' }}>
            🗺️ [ Interactive Map Placeholder Layer ]
          </div>
        </div>

        {/* Right Side: High-Yield B2B Form */}
        <div style={{ flex: '1 1 450px', minWidth: '300px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '24px', border: '1px solid #EEE', boxShadow: '0 4px 25px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#112412', margin: '0 0 10px 0' }}>B2B Commercial Enquiry</h2>
          <p style={{ color: '#777', fontSize: '0.9rem', marginBottom: '25px' }}>Connect with our primary supply desks for institutional pricing matrices.</p>
          
          {submitted ? (
            <div style={{ padding: '20px', backgroundColor: '#F3F0E9', border: '1px solid #D4AF37', color: '#112412', borderRadius: '12px', textAlignment: 'center', fontWeight: 'bold' }}>
              ✓ Wholesale Enquiry Transmitted Successfully!
            </div>
          ) : (
            <form onSubmit={handleB2BSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input required type="text" placeholder="Your Name" style={{ padding: '12px', border: '1px solid #CCC', borderRadius: '8px', fontSize: '14px' }} />
              <input required type="text" placeholder="Company Legal Name" style={{ padding: '12px', border: '1px solid #CCC', borderRadius: '8px', fontSize: '14px' }} />
              <input required type="email" placeholder="Corporate Email Address" style={{ padding: '12px', border: '1px solid #CCC', borderRadius: '8px', fontSize: '14px' }} />
              <input required type="number" placeholder="Target Quantity Requirements (in kg)" style={{ padding: '12px', border: '1px solid #CCC', borderRadius: '8px', fontSize: '14px' }} />
              <textarea placeholder="Tell us about your distribution parameters..." rows={4} style={{ padding: '12px', border: '1px solid #CCC', borderRadius: '8px', fontSize: '14px', resize: 'none' }} />
              <button type="submit" style={{ backgroundColor: '#112412', color: '#D4AF37', border: 'none', fontWeight: 'bold', padding: '14px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Transmit Wholesale Request
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}
