'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieAccepted');
    if (!hasAccepted) {
      // Show banner after 1 second
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissCookie = () => {
    setIsVisible(false);
    localStorage.setItem('cookieAccepted', 'true');
  };

  if (!isVisible) return null;

  return (
    <div 
      id="cookieBanner" 
      className="cookie-banner fixed bottom-0 left-0 right-0 z-[100] bg-terra-900 text-white p-6 shadow-2xl" 
      role="dialog" 
      aria-labelledby="cookieTitle" 
      aria-describedby="cookieDescription"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <svg className="text-3xl text-terra-400 shrink-0" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <p id="cookieDescription" className="text-sm text-gray-300">
            Utilizamos cookies para mejorar su experiencia en nuestro sitio. Al continuar navegando, acepta nuestra{' '}
            <a href="#" className="text-terra-400 underline hover:text-white transition-colors">
              Politica de Privacidad
            </a>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button 
            onClick={dismissCookie} 
            className="px-6 py-2 text-sm font-semibold border border-white/20 hover:bg-white/10 transition-colors rounded" 
            aria-label="Rechazar cookies"
          >
            Rechazar
          </button>
          <button 
            onClick={dismissCookie} 
            className="px-6 py-2 text-sm font-bold bg-terra-600 hover:bg-terra-500 transition-colors rounded" 
            aria-label="Aceptar cookies"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
