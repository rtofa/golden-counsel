import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, Building2, Gavel, Users, Briefcase, 
  ShieldCheck, Home, FileText, Vote, Receipt,
  ChevronRight, Coins
} from 'lucide-react';

/**
 * COMPONENTE: ServicesSection (React + Vite)
 * Descrição: Grid de serviços jurídico de alto impacto
 */
const ServicesSection = () => {
  const [filter, setFilter] = useState('all');

  const services = [
    { icon: Scale, title: "Direito Civil", cat: "contencioso", slug: "civil" },
    { icon: FileText, title: "Administrativo", cat: "empresarial", slug: "adm" },
    { icon: Building2, title: "Empresarial", cat: "empresarial", slug: "biz" },
    { icon: Users, title: "Família", cat: "pessoal", slug: "fam" },
    { icon: Briefcase, title: "Trabalhista", cat: "empresarial", slug: "work" },
    { icon: ShieldCheck, title: "Consumidor", cat: "pessoal", slug: "cons" },
    { icon: Home, title: "Imobiliário", cat: "pessoal", slug: "home" },
    { icon: Receipt, title: "Previdenciário", cat: "pessoal", slug: "prev" },
    { icon: Vote, title: "Eleitoral", cat: "contencioso", slug: "vote" },
    { icon: Gavel, title: "Penal", cat: "contencioso", slug: "crime" },
    { icon: Coins, title: "Tributário", cat: "empresarial", slug: "tax" },
  ];

  // Filtro inteligente
  const filtered = filter === 'all' 
    ? services 
    : services.filter(s => s.cat === filter);

  return (
    <section id="areas" className="py-24 bg-black">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="font-serif text-5xl font-bold text-white mb-6">
            Especialidades <span className="text-primary italic">Estratégicas</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
             {['all', 'empresarial', 'pessoal', 'contencioso'].map(tag => (
                <button 
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-6 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${
                    filter === tag ? 'bg-primary border-primary text-black' : 'border-white/10 text-slate-500 hover:border-primary'
                  }`}
                >
                  {tag}
                </button>
             ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {filtered.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 p-8 rounded-sm border border-white/5 hover:border-primary/30 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary transition-colors">
                 <service.icon size={24} className="text-primary group-hover:text-black" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-4">Clique para ver detalhes</p>
              <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;