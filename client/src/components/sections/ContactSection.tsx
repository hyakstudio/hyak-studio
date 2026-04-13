/**
 * Contact Section - Premium Final Statement
 * Design: Refined contact CTA with strong typography and elegant spacing
 */
export default function ContactSection() {
  const email = 'hyakstudio.ofc@gmail.com';
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert('Email copied to clipboard.');
    } catch {
      alert('Could not copy the email automatically. Please copy it manually.');
    }
  };

  const openGmail = () => {
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      className="py-32 md:py-48 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden"
      data-observe
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 md:mb-28 space-y-6">
            <p className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase">
              Let's Work Together
            </p>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground">
              Ready to Build Something Exceptional?
            </h2>
            <div className="flex justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent" />
            </div>
          </div>

          <div className="mb-12 md:mb-16">
            <button
              type="button"
              onClick={openGmail}
              className="w-full text-left relative p-8 md:p-12 lg:p-14 bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border rounded-sm overflow-hidden group hover:border-accent/50 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 text-center space-y-5">
                <p className="text-foreground/60 text-xs md:text-sm font-bold tracking-widest uppercase">
                  Contact Us
                </p>

                <p className="text-[1.9rem] md:text-[2.9rem] lg:text-[3.2rem] font-serif font-bold text-foreground leading-none tracking-tight md:whitespace-nowrap">
                  {email}
                </p>

                <p className="text-foreground/70 text-sm md:text-base">
                  Click here to open Gmail and write to us directly
                </p>
              </div>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <button
              onClick={openGmail}
              className="btn-primary"
              type="button"
            >
              Open Gmail
            </button>

            <button
              onClick={copyEmail}
              className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm font-semibold tracking-wide uppercase"
              type="button"
            >
              Copy Email
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-foreground/50 text-xs md:text-sm">
              Based globally • Working with clients worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}