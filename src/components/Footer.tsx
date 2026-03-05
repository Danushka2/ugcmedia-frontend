import { ArrowRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "UGC Videos", href: "#" },
    { label: "Video Ads", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "TikTok Content", href: "#" },
    { label: "Reels & Shorts", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Creator Network", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      {/* CTA Banner */}
      <div className="mx-auto max-w-7xl px-5 py-16 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Ready to create UGC that actually converts?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-background/60">
          Join leading brands in UAE creating high-performing, authentic UGC videos — starting from just AED 1,000.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Links Grid */}
      <div className="border-t border-background/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 text-lg font-bold">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-background">
                <span className="text-xs font-black text-foreground">U</span>
              </div>
              UGC Media
            </a>
            <p className="mt-4 text-xs leading-relaxed text-background/50">
              Relatable & impactful UGC videos that help your brand win on social. Real stories. Real faces. Real connection.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-background/40">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/60 transition-colors hover:text-background"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-background/40 md:flex-row">
          <p>© {new Date().getFullYear()} UGC Media. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-background">TikTok</a>
            <a href="#" className="transition-colors hover:text-background">Instagram</a>
            <a href="#" className="transition-colors hover:text-background">LinkedIn</a>
            <a href="#" className="transition-colors hover:text-background">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
