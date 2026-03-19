'use client';

import { useEffect, useState } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // Counter animation
          const counter = entry.target.querySelector('.counter');
          if (counter && !counter.classList.contains('animated')) {
            counter.classList.add('animated');
            animateCounter(counter);
          }
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      observer.observe(el);
    });

    // Counter animation function
    const animateCounter = (counter: Element) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          (counter as HTMLElement).textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          (counter as HTMLElement).textContent = target.toLocaleString();
        }
      };

      updateCounter();
    };

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
