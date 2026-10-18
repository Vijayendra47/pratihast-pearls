import React from 'react';

export default function HomePage() {
  return (
    <main style={{
      backgroundColor: '#FCFBF9',
      minHeight: '100vh',
      fontFamily: 'serif',
      margin: 0,
      padding: 0,
      color: '#112412'
    }}>
      {/* Premium Hero Section */}
      <section style={{
        backgroundColor: '#112412',
        color: '#FCFBF9',
        padding: '80px 20px',
        textAlign: 'center',
        borderBottom: '4px solid #D4AF37',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{
            color: '#D4AF37',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontWeight: 'bold',
            fontSize: '14px',
            display: 'block',
            marginBottom: '10px'
          }}>
            Authentic Organic Superfood
          </span>
          <h1 style={{
            fontSize: '3rem',
            margin: '0 0 20px 0',
            fontWeight: 'bold',
            lineHeight: '1.2'
          }}>
            Pratihast Pearls <br />
            <span style={{ color: '#D4AF37' }}>Premium Fox Nuts</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#F3F0E9',
            maxWidth: '600px',
            margin: '0 auto 30px auto',
            fontStyle: 'italic',
            fontWeight: '300'
          }}>
            "Harvested meticulously from the sacred, nutrient-dense Ponds of Mithila to bring crispy, unblemished luxury to your healthy lifestyle."
          </p>
          <div>
            <a href="/products" style={{
              backgroundColor: '#D4AF37',
              color: '#112412',
              fontWeight: 'bold',
              padding: '15px 35px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-block',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}>
              Explore The Collection →
            </a>
          </div>
        </div>
      </section>

      {/* Why Mithila Makhana Section */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto 50px auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#112412',
            margin: '0 0 10px 0'
          }}>
            Why Mithila Makhana?
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#D4AF37',
            margin: '0 auto 20px auto'
          }}></div>
          <p style={{ color: '#555', fontSize: '1.1rem' }}>
            The geographical conditions of Mithila infuse every Fox Nut with high calcium, protein, and strong anti-aging antioxidants.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          padding: '0 10px'
        }}>
          {/* Card 1 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '40px 20px',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            border: '1px solid #EEE'
          }}>
            <h3 style={{ color: '#112412', fontSize: '1.4rem', margin: '0 0 15px 0' }}>
              🏅 GI Tagged Authenticity
            </h3>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Sourced entirely from clean-water ecological pond systems native exclusively to northern Bihar.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '40px 20px',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            border: '1px solid #EEE'
          }}>
            <h3 style={{ color: '#112412', fontSize: '1.4rem', margin: '0 0 15px 0' }}>
              ❤️ Zero Guilt Superfood
            </h3>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Low glycemic index, gluten-free, cholesterol-free. Excellent snack for heart health and diabetes management.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '40px 20px',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            border: '1px solid #EEE'
          }}>
            <h3 style={{ color: '#112412', fontSize: '1.4rem', margin: '0 0 15px 0' }}>
              ⭐ Premium Grade Sizing
            </h3>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Only jumbo-sized kernels resembling pristine white "Pearls" cross our automated quality screening lines.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
