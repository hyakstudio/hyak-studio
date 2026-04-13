/**
 * About Section - Editorial Composition
 * Design: Strong narrative with refined typography and intentional spacing
 * - Asymmetric layout with editorial rhythm
 * - Premium typography hierarchy
 * - Sophisticated visual balance
 */
export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-40 bg-background relative overflow-hidden"
      data-observe
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left Column - Main Text */}
          <div className="space-y-8 md:space-y-12">
            <div>
              <p className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
                About Hyak
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
                We Build Digital Assets, Not Websites
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent" />
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
                Hyak Studio is a premium digital design studio focused on creating conversion-driven experiences for operators who demand excellence. We don't build templates or follow trends—we architect strategic digital assets that communicate value and drive measurable business outcomes.
              </p>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                Every project begins with strategy. We understand your business, your audience, and your goals. Then we design with precision, execute with discipline, and deliver with confidence.
              </p>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                Our work is defined by refined aesthetics, intentional composition, and relentless attention to detail. We believe that premium design is an investment, not an expense.
              </p>
            </div>
          </div>

          {/* Right Column - Stats and Values */}
          <div className="space-y-12">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <p className="text-4xl md:text-5xl font-serif font-bold text-accent">
                  100%
                </p>
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                  Custom design. No templates. No shortcuts.
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-4xl md:text-5xl font-serif font-bold text-accent">
                  Global
                </p>
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                  Working with clients across continents.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6 pt-8 border-t border-border/50">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
                Our Values
              </h3>
              <ul className="space-y-4">
                {[
                  'Precision in every detail',
                  'Strategy before aesthetics',
                  'Results over decoration',
                  'Discipline in design'
                ].map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1.5">→</span>
                    <span className="text-foreground/80 text-sm md:text-base">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
