import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Zap, Heart } from "lucide-react";
import WhatMakesUsSection from "@/components/WhatMakesUsSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const values = [
  { icon: Target, title: "Mission-Driven", description: "We're on a mission to democratize high-quality UGC content for every brand, regardless of budget." },
  { icon: Zap, title: "Authenticity First", description: "We believe connection outperforms perfection. Every video we produce feels real because it is real." },
  { icon: Users, title: "Creator Empowered", description: "We connect brands with 1,000+ vetted creators from multiple countries to deliver powerful, relatable content." },
  { icon: Heart, title: "Results Obsessed", description: "Every piece of content we create is designed to convert — not just look pretty." },
];

const team = [
  { name: "Alex Rivera", role: "CEO & Co-founder" },
  { name: "Priya Sharma", role: "CTO & Co-founder" },
  { name: "Marcus Chen", role: "Head of Production" },
  { name: "Sofia Andersson", role: "Head of Creator Relations" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/8 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <h1 className="text-4xl font-black tracking-tight text-foreground md:text-6xl">
            We craft <span className="text-gradient-hero">UGC content</span> that feels real
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            At UGC Media, we produce relatable & impactful UGC videos that help your brand win on social. We don't just make videos — we craft content that speaks your audience's language.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-y bg-secondary/30 py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-2xl font-extrabold text-foreground md:text-3xl">Our Values</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border bg-background p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <v.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatMakesUsSection />

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">Meet the Team</h2>
          <p className="mt-3 text-muted-foreground">The people behind UGC Media.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {team.map((t) => (
              <div key={t.name} className="rounded-2xl border bg-secondary/50 p-6 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-accent/10" />
                <p className="mt-4 text-base font-bold text-foreground">{t.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <ScrollToTopButton />
    </div>
  );
};

export default About;
