import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import equipeBg from "@/assets/equipe.png";

/**
 * COMPONENTE: SantaRosaScrollReveal
 * Estilo: Premium Law Firm
 * Dependências: framer-motion, lucide-react (opcional)
 */
export default function SantaRosaScrollReveal() {
  const containerRef = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Mapeamento dos valores de animação baseados no scroll (0 a 1)
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);
  const blur = useTransform(scrollYProgress, [0.1, 0.4], ['20px', '0px']);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-slate-950">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Animado */}
        <motion.div 
          style={{ opacity: scrollYProgress }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={equipeBg} 
            className="w-full h-full object-cover opacity-40"
            alt="Equipe SantaRosa"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        </motion.div>

        {/* Texto Reveal Principal */}
        <motion.div 
          style={{ opacity, scale, filter: `blur(${blur})` }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="font-serif text-6xl md:text-9xl font-black uppercase tracking-tighter text-white">
            Venha ser <br/>
            <span className="text-amber-500 italic font-light">SantaRosa</span>
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
                            