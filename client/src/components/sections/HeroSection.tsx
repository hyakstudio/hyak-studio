/**
 * Hero Section - Premium Art Direction
 * Design: Cinematic hero with layered CSS effects, strong typography, and refined composition
 * - Geometric gradient background with subtle lighting
 * - Large, impactful serif headline with careful spacing
 * - Refined subheadline and premium CTA
 * - Subtle parallax and grain texture
 */
export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 gradient-overlay grain-texture"
      data-parallax
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #0a0a0a 75%, #050505 100%)',
      }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-900/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-amber-900/3 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-12">
            <div className="inline-block">
              <p className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase">
                Digital Studio
              </p>
            </div>
          </div>

          <h1 className="mb-6 md:mb-8 text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-tight">
            <span className="block">Design</span>
            <span className="block text-accent">That Converts</span>
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-accent to-transparent mb-8 md:mb-10" />

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed mb-10 md:mb-14 font-light">
            We build premium digital experiences for operators who refuse to compromise. Every pixel serves strategy. Every interaction drives results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <button
              onClick={() => scrollToSection('about')}
              className="btn-primary"
            >
              Explore Our Work
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm font-semibold tracking-wide uppercase pt-3"
              type="button"
            >
              Get In Touch →
            </button>
          </div>

          <div className="mt-20 md:mt-24 flex justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="text-accent/50 hover:text-accent transition-colors duration-300 animate-bounce"
              type="button"
              aria-label="Scroll to about section"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14m0 0-6-6m6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}