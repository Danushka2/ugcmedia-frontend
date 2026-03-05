import { Users, Clapperboard, Settings, Zap, BarChart3, Phone } from "lucide-react";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const reasons = [
  { icon: Users, text: "Access 500+ vetted creators without breaking the bank" },
  { icon: Clapperboard, text: "Get scroll-stopping, usage-ready UGC videos — no extra work on your end" },
  { icon: Settings, text: "We handle it all — from script to shoot to final delivery" },
  { icon: Zap, text: "Fast turnaround times so you're never behind trend" },
  { icon: BarChart3, text: "Monthly performance reports to track what's working" },
  { icon: Phone, text: "Weekly check-in calls to keep your content strategy sharp" },
];

const WhyTopBrandsSection = () => {
  const containerRef = useRef(null);
  const entry = useIntersectionObserver(containerRef, {
    threshold: 0.1,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <section className="py-20 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={cn(
            "text-3xl font-extrabold tracking-tight text-foreground md:text-4xl transition-all duration-700 delay-100",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            Why Top Brands{" "}
            <span className="text-gradient-hero">Work with Us</span>
          </h2>
        </div>

        <div
          ref={containerRef}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((r, index) => (
            <div
              key={r.text}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
              className={cn(
                "flex items-start gap-4 rounded-2xl border bg-background p-6 transition-all duration-500 hover:shadow-md",
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-12 opacity-0 scale-95"
              )}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <r.icon className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-foreground">{r.text}</p>
            </div>
          ))}
        </div>

        {/* Pricing callout */}
        <div className={cn(
          "mt-12 rounded-2xl bg-foreground p-8 text-center md:p-12 transition-all duration-700 delay-[1000ms]",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <p className="text-lg font-bold text-background md:text-xl">
            And the best part?
          </p>
          <p className="mt-2 text-3xl font-black text-background md:text-4xl">
            All this starts at just{" "}
            <span className="text-accent">AED 1,000</span>
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90 hover:scale-105 active:scale-95 duration-200"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyTopBrandsSection;
