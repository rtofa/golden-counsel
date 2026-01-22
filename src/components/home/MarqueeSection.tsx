import { Star } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.section 
      className="py-6 bg-secondary border-y border-border overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
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
    </motion.section>
  );
};

export default MarqueeSection;
