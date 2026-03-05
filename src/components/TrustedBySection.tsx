const stats = [
  {
    value: "500+",
    label: "Vetted creators",
    description: "From multiple countries, ready to create for your brand.",
  },
  {
    value: "2x–4x",
    label: "Average ROAS",
    description: "UGC outperforms traditional branded ads consistently.",
  },
  {
    value: "AED 1,000",
    label: "Starting price",
    description: "Premium UGC content accessible for every brand.",
  },
];

const TrustedBySection = () => {
  return (
    <section className="bg-accent/5 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-center text-2xl font-semibold text-foreground md:text-3xl">
          Trusted by numerous leading brands in UAE
        </h2>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 divide-y border rounded-xl bg-background md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-8 py-8">
              <p className="text-3xl font-bold text-accent md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-base font-semibold text-foreground">
                {stat.label}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
