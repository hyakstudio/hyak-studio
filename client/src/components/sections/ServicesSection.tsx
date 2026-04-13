/**
 * Services Section - Asymmetric Premium Layout
 * Design: Editorial-inspired grid with staggered animations and refined hover states
 * - Asymmetric card layout with varying sizes
 * - Premium typography hierarchy
 * - Sophisticated hover interactions
 * - Refined color and spacing
 */
export default function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Website Design',
      description: 'Conversion-focused digital experiences. We design websites that look exceptional and perform relentlessly.',
      size: 'large'
    },
    {
      number: '02',
      title: 'Landing Pages',
      description: 'Strategic landing pages engineered to convert. Every element serves the goal.',
      size: 'small'
    },
    {
      number: '03',
      title: 'Brand Systems',
      description: 'Cohesive digital brand identities. Refined, intentional, and globally credible.',
      size: 'small'
    },
    {
      number: '04',
      title: 'Digital Infrastructure',
      description: 'Modern technical foundations built for scale, performance, and maintainability.',
      size: 'large'
    }
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-40 bg-background relative overflow-hidden"
      data-observe
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-32">
          <p className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
            Capabilities
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
            What We Build
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent" />
        </div>

        {/* Services Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Service 1 - Large */}
          <div className="md:col-span-2 group">
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-secondary/40 to-secondary/10 border border-border rounded-sm hover:border-accent/50 transition-all duration-700 cursor-pointer h-full overflow-hidden">
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-7xl font-serif font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-700">
                    {services[0].number}
                  </span>
                  <svg className="w-6 h-6 text-accent/0 group-hover:text-accent/60 transition-all duration-700 transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground group-hover:text-accent transition-colors duration-700">
                  {services[0].title}
                </h3>
                <p className="text-foreground/70 text-lg leading-relaxed group-hover:text-foreground/80 transition-colors duration-700">
                  {services[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 - Small */}
          <div className="group">
            <div className="relative p-8 bg-gradient-to-br from-secondary/30 to-secondary/5 border border-border rounded-sm hover:border-accent/50 transition-all duration-700 cursor-pointer h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 space-y-4">
                <span className="text-5xl font-serif font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-700">
                  {services[1].number}
                </span>
                <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors duration-700">
                  {services[1].title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-700">
                  {services[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 - Small */}
          <div className="group">
            <div className="relative p-8 bg-gradient-to-br from-secondary/30 to-secondary/5 border border-border rounded-sm hover:border-accent/50 transition-all duration-700 cursor-pointer h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 space-y-4">
                <span className="text-5xl font-serif font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-700">
                  {services[2].number}
                </span>
                <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors duration-700">
                  {services[2].title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-700">
                  {services[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Service 4 - Large */}
          <div className="md:col-span-2 group">
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-secondary/40 to-secondary/10 border border-border rounded-sm hover:border-accent/50 transition-all duration-700 cursor-pointer h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-7xl font-serif font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-700">
                    {services[3].number}
                  </span>
                  <svg className="w-6 h-6 text-accent/0 group-hover:text-accent/60 transition-all duration-700 transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground group-hover:text-accent transition-colors duration-700">
                  {services[3].title}
                </h3>
                <p className="text-foreground/70 text-lg leading-relaxed group-hover:text-foreground/80 transition-colors duration-700">
                  {services[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
