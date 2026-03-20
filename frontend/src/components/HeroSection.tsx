'use client';

import { useState, useEffect, useCallback } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="parallax-bg absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
          alt="Terra Construction"
          className="w-full h-[120%] object-cover object-center"
          style={{ marginTop: '-10%' }}
          loading="lazy"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-terra-900/80 via-terra-900/50 to-terra-900/90 z-10"></div>
      
      {/* Animated Particles Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37,99,235,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.2) 0%, transparent 50%)'
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-6xl mx-auto">
        <p className="hero-animate text-sm md:text-base font-semibold uppercase tracking-[4px] text-terra-400 mb-6">
          Resultados Superiores. Buenas Experiencias Para Todos
        </p>
        <h1 className="hero-animate hero-animate-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-black leading-[1.05] tracking-tight mb-8">
          NOS ENCANTA CONSTRUIR.<br/>
          <span className="bg-gradient-to-r from-white via-terra-300 to-white bg-clip-text text-transparent">
            ES QUIENES SOMOS Y LO QUE HACEMOS.
          </span>
        </h1>
        <p className="hero-animate hero-animate-delay-2 text-lg md:text-2xl font-light max-w-3xl mx-auto mb-12 text-white/80 leading-relaxed">
          Juntos, superamos los desafios mas dificiles y maximizamos los resultados para nuestros clientes, fuerza laboral, comunidades y familias.
        </p>
        <div className="hero-animate hero-animate-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="btn-ripple inline-block bg-terra-600 hover:bg-terra-500 transition-colors px-10 py-4 text-sm font-bold uppercase tracking-[2px] rounded"
          >
            Ver Nuestro Trabajo
          </a>
          <a 
            href="#careers" 
            className="btn-ripple inline-block border-2 border-white/40 hover:bg-white hover:text-terra-900 transition-all px-10 py-4 text-sm font-bold uppercase tracking-[2px] rounded"
          >
            Encuentra Una Carrera
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <svg className="text-white/40 text-xl" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style jsx>{`
        .hero-animate {
          animation: heroFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .hero-animate-delay-1 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .hero-animate-delay-2 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .hero-animate-delay-3 {
          animation-delay: 0.9s;
          opacity: 0;
        }
        
        @keyframes heroFadeUp {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .btn-ripple {
          position: relative;
          overflow: hidden;
        }
        
        .btn-ripple::after {
          content: ''; 
          position: absolute; 
          inset: 0;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
          transform: scale(0); 
          transition: transform 0.5s ease;
        }
        
        .btn-ripple:hover::after { 
          transform: scale(2.5); 
        }
      `}</style>
    </section>
  );
}
