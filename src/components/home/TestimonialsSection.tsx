import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowUpRight } from 'lucide-react';
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Empresário",
      text: "A equipe da Advocacia foi fundamental para resolver uma questão empresarial complexa. Profissionalismo e dedicação em cada etapa do processo.",
      image: testimonial1
    },
    {
      name: "Fernanda Lima",
      role: "Diretora Executiva",
      text: "Excelente atendimento e resultados surpreendentes. A atenção aos detalhes e o comprometimento fazem toda a diferença.",
      image: testimonial2
    }
  ];

  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-amber-500 font-bold uppercase tracking-[4px] text-xs">Depoimentos</span>
          <h2 className="font-serif text-5xl font-bold mt-4">Vozes de <span className="text-amber-600 italic">Confiança</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative p-12 bg-white/5 backdrop-blur-xl border border-white/10 group hover:border-amber-500/50 transition-all duration-500"
            >
              <Quote className="absolute top-10 right-10 w-20 h-20 text-amber-500/5" />
              
              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <img src={item.image} className="w-24 h-24 rounded-full object-cover border-2 border-amber-500/30" alt={item.name} />
                
                <div>
                  <div className="flex gap-1 mb-4 text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-300 italic text-lg leading-relaxed mb-6">"{item.text}"</p>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-white">{item.name}</h4>
                    <p className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">{item.role}</p>
                  </div>
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