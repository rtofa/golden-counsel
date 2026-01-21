import { ArrowRight, Scale, Star, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroJustice from "@/assets/hero-justice.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-navy-light" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="section-label mb-6">
              Mais de 25 anos de excelência jurídica
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              <span className="text-primary">Profissionalismo</span> e Retidão
              na Prática de Atos da Sua Vida e Empresa
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Respostas e informações corretas, ética e equilíbrio nos negócios exigem conselhos de profissionais experientes, com conhecimento jurídico e capacidade técnica para orientar decisões na sua vida pessoal e na sua empresa.
            </p>

            {/* Brand Values Icons */}
            <div className="flex flex-wrap gap-6 mb-8">
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
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contato" className="btn-primary group text-lg">
                Atendimento Gratuito
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/sobre" className="btn-outline group text-lg">
                Orientação Especializada
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in">
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
            <div className="absolute bottom-8 right-0 md:right-8 bg-card border border-border rounded-lg p-6 shadow-xl z-20 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Confiança</p>
                  <p className="text-primary text-sm">& Ética</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
