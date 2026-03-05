import { useState } from "react";
import { Play } from "lucide-react";

const caseStudies = [
  {
    brand: "Else Nutrition",
    tab: "Else Nutrition",
    headline: "25% Increase in Website Traffic & Customer Acquisition",
    quote:
      '"Quite simply, ugcmedia is the best tool that we found for UGC. The creators are top quality and very easy to work with. This tool is saving us hours and hours of work."',
    person: "Barak Orenstein",
    role: "VP of Marketing",
    company: "Else Nutrition",
    stats: [
      { value: "$47", label: "Average cost per 30 second video" },
      { value: "20%", label: "Lower CPA vs. other creatives" },
      { value: "100%", label: "Top performing ads were ugcmedia creatives" },
    ],
  },
  {
    brand: "FreshSkin",
    tab: "FreshSkin",
    headline: "3.5x ROAS Improvement Within 30 Days",
    quote:
      '"We switched to ugcmedia and saw immediate results. The AI-generated videos outperformed everything we had tried before. Our ad spend became dramatically more efficient."',
    person: "Sarah Chen",
    role: "Head of Growth",
    company: "FreshSkin",
    stats: [
      { value: "3.5x", label: "Return on ad spend" },
      { value: "45%", label: "Decrease in cost per acquisition" },
      { value: "200+", label: "Videos produced in first month" },
    ],
  },
  {
    brand: "Golden Tree",
    tab: "Golden Tree",
    headline: "Scaled Ad Creative Production by 10x",
    quote:
      '"Golden Tree needed volume without sacrificing quality. ugcmedia delivered both. We went from producing 5 creatives per week to 50, and performance only got better."',
    person: "Marco Petrov",
    role: "CMO",
    company: "Golden Tree",
    stats: [
      { value: "10x", label: "Increase in creative output" },
      { value: "60%", label: "Reduction in production costs" },
      { value: "2.8x", label: "Average ROAS across campaigns" },
    ],
  },
];

const CaseStudySection = () => {
  const [active, setActive] = useState(0);
  const study = caseStudies[active];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        {/* Tabs — rounded top only, no bottom border, flush with card */}
        <div className="flex">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.tab}
              onClick={() => setActive(i)}
              className={`relative flex-1 px-6 py-5 text-center text-base font-bold transition-colors first:rounded-tl-2xl last:rounded-tr-2xl ${
                active === i
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {cs.tab}
            </button>
          ))}
        </div>

        {/* Content card — flush with tabs */}
        <div className="grid gap-8 rounded-b-2xl border border-t-0 bg-background p-8 md:grid-cols-[1fr_260px] md:p-12">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
              {study.headline}
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              {study.quote}
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-col gap-7">
              {study.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-foreground md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Video card */}
          <div className="flex items-end justify-center md:justify-end">
            <div className="relative w-52 overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-[9/16] flex flex-col items-center justify-center bg-gradient-to-b from-accent/20 via-accent/10 to-foreground/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background/90 shadow-lg backdrop-blur-sm">
                  <Play className="h-6 w-6 text-accent" fill="hsl(var(--accent))" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent p-4 pt-16">
                <p className="text-sm font-semibold text-background">
                  {study.person}
                </p>
                <p className="text-xs font-medium text-background/80">
                  {study.role}
                </p>
                <p className="text-xs text-background/60">at {study.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
