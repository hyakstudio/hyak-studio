import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import ProcessSection from '@/components/sections/ProcessSection';
import ManifestoSection from '@/components/sections/ManifestoSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * Design Philosophy: Luxo Cinematográfico com Profundidade
 * 
 * Tipografia: Cormorant Garamond (headlines) + Montserrat (body)
 * Efeitos: Profundidade via sombras, parallax, texturas de filme
 * Animações: Cinematográficas 400-600ms, spotlight effects, fade-in com scale
 */
export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  useScrollAnimation();

  useEffect(() => {
    // Intersection Observer for section reveals with stagger animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add stagger delay based on child elements
          const children = entry.target.querySelectorAll('[data-animate]');
          children.forEach((child, childIndex) => {
            (child as HTMLElement).style.animationDelay = `${childIndex * 100}ms`;
          });
          entry.target.classList.add('section-reveal');
        }
      });
    }, observerOptions);

    // Observe all sections with data-observe attribute
    const sections = mainRef.current?.querySelectorAll('[data-observe]');
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main ref={mainRef} className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PhilosophySection />
        <ProcessSection />
        <ManifestoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
