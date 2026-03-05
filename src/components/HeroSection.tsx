import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReelsSlider from "@/components/ReelsSlider";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pb-12 pt-10 md:pb-20 md:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground">
          <span>Relatable & Impactful</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
            <Sparkles className="h-3 w-3" />
            UGC Videos
          </span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-7xl">
          UGC That Actually{" "}
          <span className="text-gradient-hero">Converts!</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          We craft content that speaks your audience's language, scrolls like native content, and sells like nothing else. Real stories. Real faces. Real connection.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="rounded-full bg-foreground px-8 py-6 text-base font-semibold text-background shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            Get Started — From AED 1,000
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground">No contracts · Fast turnaround</p>
        </div>
      </div>

      {/* Reels Slider */}
      <div className="mt-14">
        <ReelsSlider />
      </div>
    </section>
  );
};

export default HeroSection;
