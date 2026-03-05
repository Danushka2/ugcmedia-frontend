const brands = [
  "Canon", "Whatnot", "PupRing", "AXE", "Alamar Cosmetics",
  "KeaBabies", "Preply", "Speak", "Glossier", "Hims",
];

const BrandMarquee = () => {
  return (
    <section className="overflow-hidden border-y bg-secondary/50 py-8">
      <div className="relative flex">
        <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
          {brands.map((brand) => (
            <span
              key={brand}
              className="whitespace-nowrap text-lg font-bold tracking-wide text-muted-foreground/40 md:text-xl"
            >
              {brand}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16" aria-hidden>
          {brands.map((brand) => (
            <span
              key={brand}
              className="whitespace-nowrap text-lg font-bold tracking-wide text-muted-foreground/40 md:text-xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
