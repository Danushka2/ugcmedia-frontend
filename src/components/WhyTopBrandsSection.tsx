import { Users, Clapperboard, Settings, Zap, BarChart3, Phone } from "lucide-react";

const reasons = [
  { icon: Users, text: "Access 500+ vetted creators without breaking the bank" },
  { icon: Clapperboard, text: "Get scroll-stopping, usage-ready UGC videos — no extra work on your end" },
  { icon: Settings, text: "We handle it all — from script to shoot to final delivery" },
  { icon: Zap, text: "Fast turnaround times so you're never behind trend" },
  { icon: BarChart3, text: "Monthly performance reports to track what's working" },
  { icon: Phone, text: "Weekly check-in calls to keep your content strategy sharp" },
];

const WhyTopBrandsSection = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Why Top Brands{" "}
            <span className="text-gradient-hero">Work with Us</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.text}
              className="flex items-start gap-4 rounded-2xl border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <r.icon className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-foreground">{r.text}</p>
            </div>
          ))}
        </div>

        {/* Pricing callout */}
        <div className="mt-12 rounded-2xl bg-foreground p-8 text-center md:p-12">
          <p className="text-lg font-bold text-background md:text-xl">
            And the best part?
          </p>
          <p className="mt-2 text-3xl font-black text-background md:text-4xl">
            All this starts at just{" "}
            <span className="text-accent">AED 1,000</span>
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyTopBrandsSection;
