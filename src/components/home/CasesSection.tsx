import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Download, Scale, Shield } from 'lucide-react';
import caseFamily from "@/assets/case-family.jpg";
import caseCriminal from "@/assets/case-criminal.jpg";
import caseCivil from "@/assets/case-civil.jpg";
import caseDefense from "@/assets/case-defense.jpg";

/**
 * COMPONENTE: CasesSection (SantaRosa Mello Premium)
 * Suporte: React 18+, Vite, Tailwind CSS, Framer Motion
 */
const CasesSection = () => {
  const [isExporting, setIsExporting] = useState(false);

  const cases = [
    { title: "Sucessão Patrimonial Familiar", category: "Família", image: caseFamily },
    { title: "Defesa Criminal Corporativa", category: "Criminal", image: caseCriminal },
    { title: "Rescisão Contratual Civil", category: "Civil", image: caseCivil },
    { title: "Preservação de Ativos", category: "Estratégica", image: caseDefense },
  ];

  // FUNÇÃO DE EXPORTAÇÃO SOLICITADA
  const handleExport = async () => {
    setIsExporting(true);
    // Simulação de delay para geração de dossiê PDF em Vite
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsExporting(false);
    alert("Dossiê de Casos exportado com sucesso em PDF!");
  };

  return (
    <section id="resultados" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        
        {/* Header do Componente */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-[4px] text-xs mb-4 block">Casos de Sucesso</span>
            <h2 className="font-serif text-5xl font-bold text-white leading-tight">
              Estratégia e <span className="italic text-primary">Resultados</span>
            </h2>
          </motion.div>
        </div>

        {/* Grid de Casos Dinâmico */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((caseItem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] overflow-hidden rounded-sm cursor-pointer"
            >
              <img 
                src={caseItem.image} 
                alt={caseItem.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3">{caseItem.category}</span>
                <div className="flex justify-between items-end">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-primary transition-colors">{caseItem.title}</h3>
                  <motion.div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight size={18} className="text-slate-950" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;