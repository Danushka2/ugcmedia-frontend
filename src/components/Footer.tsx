import { ArrowRight } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const footerLinks = {
  Navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact Us", href: "/contact" },
    { label: "Terms of Service", href: "#" },
  ],
  Services: [
    { label: "UGC Videos", href: "#" },
    { label: "Video Ads", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "TikTok Content", href: "#" },
    { label: "Reels & Shorts", href: "#" },
  ],
  "Follow Us": [
    { label: "TikTok", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const isFaq = href.startsWith("/#");

    if (isFaq) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else if (href === "#") {
      return;
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
        <Link
          to="/contact"
          onClick={(e) => handleNavClick(e as any, "/contact")}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Links Grid */}
      <div className="border-t border-background/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              onClick={(e) => handleNavClick(e as any, "/")}
              className="flex items-center gap-2 text-lg font-bold"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-background">
                <span className="text-xs font-black text-foreground">U</span>
              </div>
              UGC Media
            </Link>
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
                    <Link
                      to={link.href}
                      onClick={(e) => handleNavClick(e as any, link.href)}
                      className="text-sm text-background/60 transition-colors hover:text-background"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-background/40">
          <p>© {new Date().getFullYear()} UGC Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;