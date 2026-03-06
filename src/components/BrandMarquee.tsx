const brands = [
  { name: "Canon", logo: "/brands/1.png" },
  { name: "Whatnot", logo: "/brands/2.png" },
  { name: "PupRing", logo: "/brands/3.png" },
  { name: "AXE", logo: "/brands/4.png" },
  { name: "Alamar Cosmetics", logo: "/brands/5.png" },
  { name: "KeaBabies", logo: "/brands/6.png" },
  { name: "Preply", logo: "/brands/7.png" },
  { name: "Speak", logo: "/brands/8.png" },
  { name: "Glossier", logo: "/brands/42.png" },
  { name: "Hims", logo: "/brands/43.png" },
];

const BrandMarquee = () => {
  const loopBrands = [...brands, ...brands, ...brands]; // ensures no visible gap

  return (
    <section className="overflow-hidden border-y bg-secondary/50 py-5">
      <div className="flex w-max animate-marquee items-center gap-24">
        {loopBrands.map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={brand.name}
            className="h-20 w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  );
};

export default BrandMarquee;