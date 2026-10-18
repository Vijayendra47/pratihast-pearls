import React from 'react';
import Link from 'next/next/link';
import { ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="bg-pearl-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-makhanaGreen-900 text-pearl-50 py-28 px-4 border-b-4 border-gold-500 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#AA8C2C_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-gold-500 uppercase tracking-widest font-semibold text-sm block">Authentic Organic Superfood</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight leading-tight">
            Pratihast Pearls <br /> <span className="text-gold-500">Premium Fox Nuts</span>
          </h1>
          <p className="text-lg sm:text-xl text-pearl-100 max-w-2xl mx-auto font-light italic">
            "Harvested meticulously from the sacred, nutrient-dense Ponds of Mithila to bring crispy, unblemished luxury to your healthy lifestyle."
          </p>
          <div className="pt-4">
            <Link href="/products" className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-makhanaGreen-900 font-bold px-8 py-4 rounded-full transition shadow-xl text-lg group">
              <span>Explore The Collection</span>
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Mithila Makhana Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-makhanaGreen-900 mb-4">Why Mithila Makhana?</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-4"></div>
          <p className="text-gray-600">The geographical conditions of Mithila infuse every Fox Nut with high calcium, protein, and strong anti-aging antioxidants.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 text-center space-y-4">
            <div className="inline-flex p-4 bg-gold-500/10 text-gold-600 rounded-full"><Award size={32} /></div>
            <h3 className="text-xl font-bold text-makhanaGreen-900">GI Tagged Authenticity</h3>
            <p className="text-gray-600 text-sm">Sourced entirely from clean-water ecological pond systems native exclusively to northern Bihar.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 text-center space-y-4">
            <div className="inline-flex p-4 bg-gold-500/10 text-gold-600 rounded-full"><Heart size={32} /></div>
            <h3 className="text-xl font-bold text-makhanaGreen-900">Zero Guilt Superfood</h3>
            <p className="text-gray-600 text-sm">Low glycemic index, gluten-free, cholesterol-free. Excellent snack for heart health and diabetes management.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 text-center space-y-4">
            <div className="inline-flex p-4 bg-gold-500/10 text-gold-600 rounded-full"><ShieldCheck size={32} /></div>
            <h3 className="text-xl font-bold text-makhanaGreen-900">Premium Grade Sizing</h3>
            <p className="text-gray-600 text-sm">Only jumbo-sized kernels resembling pristine white "Pearls" cross our automated quality screening lines.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
