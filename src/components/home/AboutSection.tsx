import { CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import lawyerConsulting from "@/assets/lawyer-consulting.jpg";

const AboutSection = () => {
  const highlights = [
    "Mais de 25 anos de existência",
    "Intercâmbio entre academia e advocacia",
    "Profissionais especializados e em aperfeiçoamento contínuo",
    "Abordagem integrada e equipes adaptadas a cada projeto",
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left" duration={0.8}>
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 border-l-4 border-t-4 border-primary opacity-50" />
              <img
                src={lawyerConsulting}
                alt="Advogado em consulta com cliente"
                className="relative z-10 rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-r-4 border-b-4 border-primary opacity-50" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal delay={0.1}>
              <div className="section-label mb-4">
                Sobre Nós
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
                <span className="text-primary">O Escritório</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Com mais de 25 anos de existência, somos um escritório de advocacia de notório respeito, cujo compromisso precípuo é a oferta de serviços jurídicos com padrão de qualidade, excelência e profissionalismo.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Com inovação e pioneirismo, conseguimos aprimorar o intercâmbio entre a academia e a advocacia, com a especialização dos profissionais e no incentivo da busca de novos conhecimentos e aperfeiçoamento contínuo.
              </p>
            </ScrollReveal>

            <StaggerContainer staggerDelay={0.1} delay={0.3} className="mb-8">
              <ul className="space-y-4">
                {highlights.map((item, index) => (
                  <StaggerItem key={index}>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>

            <ScrollReveal delay={0.6}>
              <div className="flex items-center gap-6 pt-4 border-t border-border">
                <div className="text-center">
                  <span className="block text-4xl font-serif font-bold text-primary">25+</span>
                  <span className="text-sm text-muted-foreground">Anos de Experiência</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <span className="block text-4xl font-serif font-bold text-primary">10+</span>
                  <span className="text-sm text-muted-foreground">Áreas de Atuação</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <span className="block text-4xl font-serif font-bold text-primary">100%</span>
                  <span className="text-sm text-muted-foreground">Comprometimento</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
