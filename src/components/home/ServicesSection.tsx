import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, Building2, Gavel, Users, Briefcase, 
  ShieldCheck, Home, FileText, Vote, Receipt,
  ChevronRight, Coins
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/**
 * COMPONENTE: ServicesSection (React + Vite)
 * Descrição: Grid de serviços jurídico de alto impacto
 */
const ServicesSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const services = [
    { 
      icon: Scale, 
      title: "Direito Civil", 
      cat: "contencioso", 
      slug: "civil",
      description: "Soluções completas para conflitos entre particulares, abrangendo responsabilidade civil, contratos, obrigações e proteção patrimonial. Atuamos com foco na resolução eficiente de disputas e na prevenção de litígios."
    },
    { 
      icon: FileText, 
      title: "Administrativo", 
      cat: "empresarial", 
      slug: "adm",
      description: "Defesa estratégica dos interesses de particulares e empresas frente à Administração Pública. Expertise em licitações, contratos administrativos, processos disciplinares e regulação setorial."
    },
    { 
      icon: Building2, 
      title: "Empresarial", 
      cat: "empresarial", 
      slug: "biz",
      description: "Assessoria jurídica integral para empresas, desde a constituição e estruturação societária até operações de fusões e aquisições (M&A), governança corporativa e gestão de crises."
    },
    { 
      icon: Users, 
      title: "Família", 
      cat: "pessoal", 
      slug: "fam",
      description: "Atuação sensível e discreta em questões familiares, incluindo divórcios, partilhas de bens, guarda, pensão alimentícia e planejamento sucessório para proteção do patrimônio familiar."
    },
    { 
      icon: Briefcase, 
      title: "Trabalhista", 
      cat: "empresarial", 
      slug: "work",
      description: "Gestão estratégica do passivo trabalhista, defesa em reclamatórias e consultoria preventiva para adequação às normas vigentes, visando a segurança jurídica nas relações de trabalho."
    },
    { 
      icon: ShieldCheck, 
      title: "Consumidor", 
      cat: "pessoal", 
      slug: "cons",
      description: "Defesa intransigente dos direitos nas relações de consumo, atuando em casos de práticas abusivas, responsabilidade pelo fato do produto ou serviço e reparação de danos."
    },
    { 
      icon: Home, 
      title: "Imobiliário", 
      cat: "pessoal", 
      slug: "home",
      description: "Segurança jurídica em transações imobiliárias, incluindo compra e venda, locações, regularização de imóveis, incorporações e estruturação de empreendimentos."
    },
    { 
      icon: Receipt, 
      title: "Previdenciário", 
      cat: "pessoal", 
      slug: "prev",
      description: "Planejamento previdenciário personalizado, requerimentos e revisões de benefícios, além de atuação em processos administrativos e judiciais contra o INSS."
    },
    { 
      icon: Vote, 
      title: "Eleitoral", 
      cat: "contencioso", 
      slug: "vote",
      description: "Consultoria especializada para partidos e candidatos, atuando no registro de candidaturas, prestação de contas e defesa em processos eleitorais e crimes conexos."
    },
    { 
      icon: Gavel, 
      title: "Penal", 
      cat: "contencioso", 
      slug: "crime",
      description: "Defesa técnica de excelência em inquéritos policiais e processos criminais, com ênfase em crimes econômicos, tributários e empresariais (Direito Penal Econômico)."
    },
    { 
      icon: Coins, 
      title: "Tributário", 
      cat: "empresarial", 
      slug: "tax",
      description: "Planejamento tributário estratégico, recuperação de créditos fiscais e defesa em execuções fiscais e autos de infração, visando a otimização da carga tributária."
    },
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
              layoutId={service.slug}
              onClick={() => setSelectedService(service)}
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

      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="bg-[#0a0a0a] border-white/10 text-white sm:max-w-[425px]">
          <DialogHeader>
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
              {selectedService && <selectedService.icon size={24} className="text-primary" />}
            </div>
            <DialogTitle className="font-serif text-2xl font-bold text-white">
              {selectedService?.title}
            </DialogTitle>
            <DialogDescription className="text-slate-400 mt-2">
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;