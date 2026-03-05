import { Flame, Target, Users } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "Simple",
    description:
      "Our formats are quick, clean, and made to go viral — no fluff, just fire.",
  },
  {
    icon: Target,
    title: "Relevant",
    description:
      "We blend trending moments with evergreen messages to meet your brand's short-term and long-term goals.",
  },
  {
    icon: Users,
    title: "Targeted",
    description:
      "Every UGC video is made with your dream audience in mind. More views, more trust, more conversions.",
  },
];

const WhatMakesUsSection = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            🔥 What Makes Our{" "}
            <span className="text-gradient-hero">UGC Content</span> Hit Hard?
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border bg-background p-8 text-center transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                <p.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-accent/5 border border-accent/10 p-8 text-center">
          <p className="text-base text-muted-foreground md:text-lg">
            We connect you with{" "}
            <span className="font-bold text-foreground">1,000+ UGC creators</span> from
            multiple countries and deliver powerful UGC that sells your product — not just
            shows it.
          </p>
          <p className="mt-3 text-sm font-semibold text-accent">
            💥 Video Ads · Testimonials · TikToks · Reels
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsSection;
