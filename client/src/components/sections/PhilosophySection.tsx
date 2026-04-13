/**
 * Philosophy Section - Editorial Composition
 * Design: Strong editorial layout with refined typography and intentional spacing
 * - Asymmetric grid with varied card sizes
 * - Premium typography and color hierarchy
 * - Sophisticated visual rhythm
 */
export default function PhilosophySection() {
  const principles = [
    {
      title: 'Clarity',
      description: 'We communicate with precision. No jargon, no confusion. Every design decision serves a clear purpose.',
      featured: true
    },
    {
      title: 'Refinement',
      description: 'Excellence lives in the details. Typography, spacing, color, motion—all considered with discipline.',
      featured: false
    },
    {
      title: 'Conversion',
      description: 'Beautiful design without results is decoration. We build for business outcomes and measurable impact.',
      featured: false
    },
    {
      title: 'Structure',
      description: 'Strong foundations enable growth. We architect scalable systems, not temporary solutions.',
      featured: true
    },
    {
      title: 'Credibility',
      description: 'Your digital presence must inspire confidence. We create experiences that build lasting trust.',
      featured: false
    },
    {
      title: 'Experience',
      description: 'Every interaction matters. We design for delight, usability, and emotional resonance.',
      featured: false
    }
  ];

  return (
    <section
      className="py-24 md:py-40 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden"
      data-observe
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-32">
          <p className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
            Our Philosophy
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
            How We Think
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent mb-8" />
          <p className="text-foreground/70 text-lg leading-relaxed">
            We approach every project with conviction. These principles guide our work and define our studio.
          </p>
        </div>

        {/* Principles Grid - Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden transition-all duration-700 ${
                principle.featured ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Card Container */}
              <div className={`relative p-8 md:p-10 rounded-sm border border-border hover:border-accent/50 transition-all duration-700 ${
                principle.featured 
                  ? 'bg-gradient-to-br from-secondary/50 to-secondary/20' 
                  : 'bg-gradient-to-br from-secondary/30 to-secondary/10 hover:from-secondary/40'
              }`}>
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-sm" />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Title */}
                  <h3 className={`font-serif font-bold group-hover:text-accent transition-colors duration-700 ${
                    principle.featured ? 'text-3xl' : 'text-2xl'
                  }`}>
                    {principle.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-8 h-0.5 bg-accent/40 group-hover:bg-accent transition-colors duration-700" />

                  {/* Description */}
                  <p className={`text-foreground/70 group-hover:text-foreground/85 transition-colors duration-700 leading-relaxed ${
                    principle.featured ? 'text-base' : 'text-sm'
                  }`}>
                    {principle.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
