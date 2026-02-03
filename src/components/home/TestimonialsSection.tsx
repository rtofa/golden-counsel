import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "R.A.S.",
      role: "Cliente Empresarial",
      text: "A equipe do escritório SantaRosa Mello foi fundamental para resolver uma questão empresarial complexa. Profissionalismo e dedicação em cada etapa do processo. Recomendo a todos que precisam de assessoria jurídica de qualidade.",
      initials: "RS"
    },
    {
      name: "M.C.L.",
      role: "Cliente Pessoa Física",
      text: "Excelente atendimento e resultados surpreendentes em minha causa de família. A atenção aos detalhes, a empatia e o comprometimento fazem toda a diferença. Advogados que realmente se importam.",
      initials: "MC"
    },
    {
      name: "J.P.B.",
      role: "Diretor de Empresa",
      text: "Trabalhamos com o escritório há mais de 10 anos em questões trabalhistas e empresariais. Confiança, agilidade e conhecimento técnico impecável. Parceria que faz a diferença.",
      initials: "JP"
    }
  ];

  return (
    <section id="confianca" className="py-24 bg-black overflow-hidden relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-[4px] text-xs">Depoimentos</span>
          <h2 className="font-serif text-5xl font-bold mt-4">Vozes de <span className="text-primary italic">Confiança</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative p-10 bg-white/5 backdrop-blur-xl border border-white/10 group hover:border-primary/50 transition-all duration-500 rounded-xl"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />
              
              <div className="flex flex-col relative z-10">
                {/* Avatar com iniciais */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center mb-6">
                  <span className="text-primary font-serif text-xl font-bold">{item.initials}</span>
                </div>
                
                <div className="flex gap-1 mb-4 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                
                <p className="text-slate-300 italic text-base leading-relaxed mb-6 flex-1">"{item.text}"</p>
                
                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-serif text-lg font-bold text-white">{item.name}</h4>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;