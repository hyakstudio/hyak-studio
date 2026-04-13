/**
 * Manifesto Section - Premium Editorial Statement
 * Design: Full-screen cinematic section with layered CSS effects
 * - Geometric gradient background
 * - Large, impactful typography
 * - Refined composition and spacing
 */
export default function ManifestoSection() {
  return (
    <section
      className="relative min-h-screen md:min-h-[120vh] flex items-center justify-center overflow-hidden py-20 md:py-32 gradient-overlay grain-texture"
      data-parallax
      data-observe
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 20%, #0f0f0f 50%, #1a1a1a 80%, #0a0a0a 100%)',
      }}
    >
      {/* Geometric Accent Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-amber-900/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-tr from-amber-900/5 to-transparent rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-4xl">
        <div className="space-y-8 md:space-y-12">
          {/* Eyebrow */}
          <p className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase">
            Our Manifesto
          </p>

          {/* Main Statement */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-tight">
            <span className="block mb-4">Design</span>
            <span className="text-accent">that thinks</span>
            <span className="block">is design</span>
            <span className="text-accent">that works</span>
          </h2>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          {/* Supporting Text */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              In a world saturated with mediocrity, we believe in the power of intentional design. Every pixel, every word, every interaction is an opportunity to communicate value and build trust.
            </p>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              We don't build websites. We build strategic assets that drive business growth and create lasting impressions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
