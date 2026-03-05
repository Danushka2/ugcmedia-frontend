import { UserCheck, Lightbulb, FileEdit, Share2 } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    number: "01",
    title: "Choose Your Creators",
    description: "Browse our vetted network of 500+ creators and pick the perfect match for your brand.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Approve Concepts",
    description: "Review creative concepts and angles tailored to your campaign goals.",
  },
  {
    icon: FileEdit,
    number: "03",
    title: "Review Script & Edits",
    description: "Collaborate on scripts and review edits until every frame is perfect.",
  },
  {
    icon: Share2,
    number: "04",
    title: "Publish to Your Channels",
    description: "Get fully edited, platform-formatted, usage-ready content delivered fast.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            How it <span className="text-gradient-hero">Works</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Fast. Collaborative. Strategic.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative rounded-2xl border bg-background p-7 transition-shadow hover:shadow-lg"
            >
              <span className="text-4xl font-black text-accent/15">{step.number}</span>
              <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                <step.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          All content comes fully edited, formatted for your platform, and usage-ready.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
