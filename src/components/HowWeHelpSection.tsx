import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Native-style production made for platforms like TikTok, Instagram & YouTube",
  "Relatable storytelling that speaks your audience's language",
  "Educational and entertaining content that adds value, not noise",
];

const HowWeHelpSection = () => {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            How We Help You Win with{" "}
            <span className="text-gradient-hero">UGC Content</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            We create social-first, creator-driven video content that actually resonates.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-start gap-4 rounded-2xl border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <CheckCircle2 className="h-5 w-5 text-accent" />
              </div>
              <p className="text-base font-medium text-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
