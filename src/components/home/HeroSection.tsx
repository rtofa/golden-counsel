import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import advogadoBg from "@/assets/sala.png";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-primary selection:text-black">
      {/* HERO IMPACT SECTION (CENTERED TEXT) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" id="inicio">
        <div className="absolute inset-0 opacity-40">
           {/* Imagem de Fundo Dinâmica */}
           <img src={advogadoBg} className="w-full h-full object-cover" alt="Background" />
           <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
             <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tighter text-white leading-none">
               PROFISSIONALISMO <br />
               <span className="italic font-light text-primary">E RETIDÃO</span>
             </h1>
             <p className="mt-8 text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-light">
               Na prática de atos de sua vida e de sua empresa.
               <span className="text-white font-bold"> Respostas corretas, ética e equilíbrio nos negócios.</span>
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
             <button 
               onClick={() => scrollToSection('escritorio')}
               className="bg-primary text-slate-950 px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl"
             >
               Conheça o Escritório
             </button>
             <button 
               onClick={() => scrollToSection('areas')}
               className="border border-white/20 text-white px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
             >
               Áreas de Atuação
             </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary opacity-40">
           <ChevronRight size={40} className="rotate-90" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
