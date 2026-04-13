import { useEffect, useRef } from 'react';

/**
 * Hook para animações de scroll e parallax
 * Aplica efeitos cinematográficos ao scroll da página
 */
export function useScrollAnimation() {
  useEffect(() => {
    // Parallax effect for hero and manifesto sections
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const yOffset = scrollPercent * 30;
        
        if (element instanceof HTMLElement) {
          element.style.transform = `translateY(${yOffset}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

/**
 * Hook para revelar elementos ao entrar na viewport
 */
export function useIntersectionObserver(ref: React.RefObject<HTMLElement>, callback?: () => void) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-reveal');
          callback?.();
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, callback]);
}
