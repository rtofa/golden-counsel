import { Star } from "lucide-react";

const MarqueeSection = () => {
  const items = [
    "JUSTIÇA",
    "EQUILÍBRIO",
    "EXCELÊNCIA",
    "TRADIÇÃO",
    "LEGADO",
    "ÉTICA",
  ];

  return (
    <section className="py-6 bg-secondary border-y border-border overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-8 mx-8">
              <Star className="w-5 h-5 text-primary fill-primary" />
              <span className="text-2xl md:text-3xl font-serif font-semibold text-foreground whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
