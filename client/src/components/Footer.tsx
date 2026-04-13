/**
 * Footer Component - Premium Minimal Design
 * Design: Refined footer with elegant typography and spacing
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const email = 'hyakstudio.ofc@gmail.com';
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <footer className="bg-secondary/30 border-t border-border/50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16">
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-serif font-bold text-foreground">
              <span className="text-accent">H</span>yak Studio
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Premium digital experiences for operators who demand excellence.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/60 hover:text-accent transition-colors duration-300 text-sm font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">
              Contact
            </h4>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-foreground/60 hover:text-accent transition-colors duration-300 text-sm font-medium break-all"
            >
              {email}
            </a>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/50 text-xs">
              © {currentYear} Hyak Studio. All rights reserved.
            </p>
            <p className="text-foreground/50 text-xs">
              Crafted with precision and care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}