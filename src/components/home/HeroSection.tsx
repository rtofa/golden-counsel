import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import advogadoBg from "@/assets/advogado.png";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-600 selection:text-black">
      {/* HERO IMPACT SECTION (CENTERED TEXT) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" id="inicio">
        <div className="absolute inset-0 opacity-40">
           {/* Imagem de Fundo Dinâmica */}
           <img src={advogadoBg} className="w-full h-full object-cover" alt="Background" />
           <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
             <h1 className="font-serif text-6xl md:text-9xl font-bold tracking-tighter text-white leading-none">
               RETIDÃO <br />
               <span className="italic font-light text-amber-500">ESTRATÉGICA</span>
             </h1>
             <p className="mt-8 text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-light">
               Defesa técnica premium para empresas e famílias que buscam 
               <span className="text-white font-bold"> resultados sólidos e éticos.</span>
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
             <button className="bg-amber-600 text-slate-950 px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl">
               Consulta Digital
             </button>
             <button className="border border-white/20 text-white px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
               Nossas Áreas
             </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-amber-500 opacity-40">
           <ChevronRight size={40} className="rotate-90" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
