import { ArrowRight, Scale, Star, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroJustice from "@/assets/hero-justice.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-navy-light" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div 
              className="section-label mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Mais de 25 anos de excelência jurídica
            </motion.div>
            
            <motion.h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="text-primary">Profissionalismo</span> e Retidão
              na Prática de Atos da Sua Vida e Empresa
            </motion.h1>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Respostas e informações corretas, ética e equilíbrio nos negócios exigem conselhos de profissionais experientes, com conhecimento jurídico e capacidade técnica para orientar decisões na sua vida pessoal e na sua empresa.
            </motion.p>

            {/* Brand Values Icons */}
            <motion.div 
              className="flex flex-wrap gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Scale className="w-5 h-5 text-primary" />
                <span>Justiça & Equilíbrio</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-5 h-5 text-primary" />
                <span>Excelência & Reconhecimento</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Flower2 className="w-5 h-5 text-primary" />
                <span>Tradição & Legado</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link to="/contato" className="btn-primary group text-lg">
                Atendimento Gratuito
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/sobre" className="btn-outline group text-lg">
                Orientação Especializada
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Main Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-3xl" />
              <img
                src={heroJustice}
                alt="Estátua da Justiça - SantaRosa Mello Advogados"
                className="relative z-10 w-full max-w-lg mx-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Badge */}
            <motion.div 
              className="absolute bottom-8 right-0 md:right-8 bg-card border border-border rounded-lg p-6 shadow-xl z-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Confiança</p>
                  <p className="text-primary text-sm">& Ética</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
