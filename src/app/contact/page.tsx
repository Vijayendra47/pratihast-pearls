"use client";
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function ContactAndB2B() {
  const [b2bForm, setB2bForm] = useState({ clientName: '', bizName: '', email: '', qty: '', note: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleB2BSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(b2bForm)
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-pearl-50 space-y-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Logistics & Location Maps */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-serif font-bold text-makhanaGreen-900">Headquarters & Origins</h1>
            <p className="text-gray-600">Our central processing unit is situated right at the heart of Mithila's finest natural water ecosystems.</p>
          </div>

          <div className="space-y-4 text-makhanaGreen-900 font-medium">
            <div className="flex items-start space-x-3"><MapPin className="text-gold-500 mt-1 flex-shrink-0" /><div><strong>Registered Hub:</strong><p className="text-sm text-gray-600">Pratihast Pearls Infrastructure, Near Historic Ponds, Mithila Region, Bihar, India</p></div></div>
            <div className="flex items-center space-x-3"><Phone className="text-gold-500" /><span>+91 94314 74362</span></div>
            <div className="flex items-center space-x-3"><Mail className="text-gold-500" /><span>logistics@pratihastpearls.com</span></div>
          </div>

          {/* Interactive Google Maps Structural Mockup */}
          <div className="w-full h-72 bg-gray-200 border-2 border-gold-500/20 rounded-2xl overflow-hidden relative shadow-inner flex items-center justify-center">
            <div className="absolute inset-0 bg-cover opacity-40 bg-[url('https://googleapis.com')]" />
            <div className="relative text-center p-4 bg-white/90 backdrop-blur-sm shadow-md rounded-xl mx-4">
              <p className="font-bold text-sm text-makhanaGreen-900">Mithila Processing Unit Lat-Long Coordinate Link</p>
              <a target="_blank" href="https://google.com" className="text-xs font-bold text-gold-600 underline mt-1 block">Launch Live Satellite Map</a>
            </div>
          </div>
        </div>

        {/* High-Yield Bulk / B2B Commercial Lead Form */}
        <div className="bg-white p-8 rounded-2xl border shadow-lg shadow-gray-100">
          <h2 className="text-2xl font-serif font-bold text-makhanaGreen-900 mb-2">B2B Commercial / Global Export Enquiry</h2>
          <p className="text-xs text-gray-500 mb-6">Connect with our primary supply desks for institutional pricing matrices and container-load custom packaging logs.</p>
          
          {submitted ? (
            <div className="p-6 bg-gold-500/10 border border-gold-500/30 text-makhanaGreen-900 rounded-xl font-medium text-center">
              ✓ Enquiry submitted securely. Our commercial desk will contact your organization within 12 business hours.
            </div>
          ) : (
            <form onSubmit={handleB2BSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="Your Name" className="w-full p-3 border rounded-xl text-sm" onChange={e => setB2bForm({...b2bForm, clientName: e.target.value})} />
                <input required type="text" placeholder="Company Legal Name" className="w-full p-3 border rounded-xl text-sm" onChange={e => setB2bForm({...b2bForm, bizName: e.target.value})} />
              </div>
              <input required type="email" placeholder="Corporate Email Address" className="w-full p-3 border rounded-xl text-sm" onChange={e => setB2bForm({...b2bForm, email: e.target.value})} />
              <input required type="number" placeholder="Target Quantity Requirements (in Kilograms)" className="w-full p-3 border rounded-xl text-sm" onChange={e => setB2bForm({...b2bForm, qty: e.target.value})} />
              <textarea placeholder="Tell us about your distribution parameters, packaging specifications, or label alignment needs..." rows={4} className="w-full p-3 border rounded-xl text-sm" onChange={e => setB2bForm({...b2bForm, note: e.target.value})} />
              <button type="submit" className="w-full bg-makhanaGreen-900 hover:bg-makhanaGreen-800 text-gold-500 font-bold tracking-wider uppercase py-3 rounded-xl transition text-xs shadow-md">
                Transmit Wholesale Request
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
