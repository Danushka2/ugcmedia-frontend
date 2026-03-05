import { Video, TrendingUp, MessageCircle, XCircle, AlertTriangle, Meh } from "lucide-react";

const stats = [
  { icon: Video, value: "85%", label: "of people watch video content daily" },
  { icon: TrendingUp, value: "49%", label: "faster growth for brands using video" },
  { icon: MessageCircle, value: "12x", label: "more engagement than text & images combined" },
];

const problems = [
  { icon: XCircle, text: "Slick, TV-style ads no one relates to" },
  { icon: Meh, text: 'Long, boring videos that scream "sales pitch"' },
  { icon: AlertTriangle, text: "Overpolished content that feels totally inauthentic" },
];

const WhyUGCSection = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            But Why <span className="text-gradient-hero">UGC Videos</span>?
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Let's be honest — overly-produced ads are out. UGC Videos are in. And they work.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border bg-secondary/50 p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <p className="mt-4 text-4xl font-black text-foreground">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Connection statement */}
        <p className="mx-auto mt-10 max-w-2xl text-center text-base text-muted-foreground">
          Nothing hits like UGC content — raw, real, and ridiculously relatable. That's why we focus on authentic UGC Videos — content created by real people, for real people. Because{" "}
          <span className="font-semibold text-foreground">connection outperforms perfection</span>.
        </p>

      </div>
    </section>
  );
};

export default WhyUGCSection;
