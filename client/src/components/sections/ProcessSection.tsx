/**
 * Process Section - Refined Methodology
 * Design: Clear, elegant process flow with premium typography
 * - Timeline-style layout with visual hierarchy
 * - Strategic copywriting with conviction
 * - Sophisticated visual rhythm
 */
export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Strategy',
      description: 'We immerse ourselves in your business. Market analysis, competitive landscape, audience insights—we build a foundation of understanding before any design work begins.'
    },
    {
      number: '02',
      title: 'Direction',
      description: 'Creative direction emerges from strategy. We establish visual language, positioning, and the core narrative that will guide every design decision.'
    },
    {
      number: '03',
      title: 'Execution',
      description: 'Design work is refined and intentional. Every pixel, every transition, every interaction serves the strategy. We craft, not assemble.'
    },
    {
      number: '04',
      title: 'Delivery',
      description: 'We deliver production-ready solutions with clean code, optimized performance, and comprehensive documentation. Your digital asset is ready for the world.'
    }
  ];

  return (
    <section
      id="process"
      className="py-24 md:py-40 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden"
      data-observe
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-32">
          <p className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
            Our Approach
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
            A Refined Process
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent mb-8" />
          <p className="text-foreground/70 text-lg leading-relaxed">
            We follow a disciplined methodology that ensures strategic alignment, creative excellence, and measurable results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 border border-border/50 group-hover:border-accent/30" />

              {/* Step Content */}
              <div className="relative z-10 p-8 md:p-10 space-y-6">
                {/* Step Number */}
                <div className="flex items-baseline justify-between">
                  <span className="text-6xl md:text-7xl font-serif font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-700">
                    {step.number}
                  </span>
                  <svg className="w-5 h-5 text-accent/0 group-hover:text-accent/60 transition-all duration-700 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Step Title */}
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground group-hover:text-accent transition-colors duration-700">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-foreground/70 group-hover:text-foreground/80 transition-colors duration-700 leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
