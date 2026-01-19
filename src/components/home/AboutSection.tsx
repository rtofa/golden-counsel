import { CheckCircle } from "lucide-react";
import lawyerConsulting from "@/assets/lawyer-consulting.jpg";

const AboutSection = () => {
  const highlights = [
    "Mais de 10 anos de experiência no mercado",
    "Atendimento humanizado e estratégico",
    "Soluções sob medida para cada caso",
    "Acompanhamento em todas as etapas processuais",
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 border-l-4 border-t-4 border-primary opacity-50" />
            <img
              src={lawyerConsulting}
              alt="Advogado em consulta com cliente"
              className="relative z-10 rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-r-4 border-b-4 border-primary opacity-50" />
          </div>

          {/* Content */}
          <div>
            <div className="section-label mb-4">
              Sobre Nós
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Seu <span className="text-primary">Parceiro</span> de Confiança em Questões Jurídicas
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossas áreas de atuação incluem, mas não se limitam a, direito civil, criminal, de família, empresarial e trabalhista. Com uma abordagem personalizada, oferecemos soluções jurídicas que atendem às necessidades específicas de cada cliente.
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6 pt-4 border-t border-border">
              <div className="text-center">
                <span className="block text-4xl font-serif font-bold text-primary">10+</span>
                <span className="text-sm text-muted-foreground">Anos de Experiência</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="block text-4xl font-serif font-bold text-primary">500+</span>
                <span className="text-sm text-muted-foreground">Casos Resolvidos</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="block text-4xl font-serif font-bold text-primary">98%</span>
                <span className="text-sm text-muted-foreground">Satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
