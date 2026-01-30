import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import heroJustice from "@/assets/hero-justice.jpg";

const AboutSection = () => {
  const highlights = [
    "Mais de 25 anos de existência sólida",
    "Intercâmbio entre academia e advocacia",
    "Profissionais especializados em aperfeiçoamento contínuo",
    "Abordagem integrada e equipes adaptadas a cada projeto",
  ];

  const stats = [
    { label: "Anos de Experiência", value: "25+" },
    { label: "Áreas de Atuação", value: "12+" },
    { label: "Comprometimento", value: "100%" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-amber-600/30" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-amber-600/30" />
            <img 
              src="/api/placeholder/800/600" 
              alt="Consultoria" 
              className="rounded-sm shadow-2xl relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>

          {/* Content Side */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-amber-500 font-bold uppercase tracking-[4px] text-xs mb-4 block">O Escritório</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
                Sólida Tradição, <br/>
                <span className="text-amber-600 italic">Visão Moderna</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Com mais de 25 anos de existência, somos um escritório de advocacia de notório respeito, cujo compromisso precípuo é a oferta de serviços jurídicos com padrão de qualidade superior.
              </p>
            </motion.div>

            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/5 border border-white/5 hover:border-amber-600/30 transition-all group"
                >
                  <CheckCircle className="text-amber-600 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <span className="block text-3xl font-serif font-bold text-amber-600 mb-1">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
                            