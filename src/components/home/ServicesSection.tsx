import { 
  Scale, 
  Building2, 
  Gavel, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  Home, 
  FileText,
  Vote,
  Receipt
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const ServicesSection = () => {
  const services = [
    {
      icon: Scale,
      title: "Direito Civil e Processual",
      description: "Representação em processos no âmbito do Direito Civil, obrigações, contratos, responsabilidade civil e matérias relacionadas.",
      slug: "direito-civil",
    },
    {
      icon: FileText,
      title: "Direito Administrativo",
      description: "Consultoria em procedimentos administrativos, licitações, contratos públicos, improbidade e direito regulatório.",
      slug: "direito-administrativo",
    },
    {
      icon: Building2,
      title: "Direito Empresarial",
      description: "Assessoria para empresas em propriedade intelectual, societário, contratos, obrigações e estratégia de negócios.",
      slug: "direito-empresarial",
    },
    {
      icon: Users,
      title: "Família e Sucessões",
      description: "Testamentos, inventários, separação, divórcio, partilhas, alimentos, guarda, adoção e curatela.",
      slug: "familia-sucessoes",
    },
    {
      icon: Briefcase,
      title: "Direito do Trabalho",
      description: "Representação em dissídios individuais e coletivos, defesas na DRT e MPT, negociações de acordos coletivos.",
      slug: "direito-trabalho",
    },
    {
      icon: ShieldCheck,
      title: "Direito do Consumidor",
      description: "Consultoria e representação em demandas consumeristas, responsabilidade de fornecedores e prestadores de serviços.",
      slug: "direito-consumidor",
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description: "Transações imobiliárias, legalização de documentos, aquisição de áreas, contratos e usucapião.",
      slug: "direito-imobiliario",
    },
    {
      icon: Receipt,
      title: "Direito Previdenciário",
      description: "Concessões e revisões de benefícios, defesas administrativas perante INSS e regimes próprios de previdência.",
      slug: "direito-previdenciario",
    },
    {
      icon: Vote,
      title: "Direito Eleitoral",
      description: "Prestação de contas, representação em demandas eleitorais e organização de órgãos partidários.",
      slug: "direito-eleitoral",
    },
    {
      icon: Gavel,
      title: "Direito Penal",
      description: "Defesa em crimes empresariais, tributários, ambientais, contra a administração pública e outros.",
      slug: "direito-penal",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            Áreas de Atuação
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Atuação <span className="text-primary">Diversificada</span> e Especializada
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Oferecemos assistência em diversas áreas do Direito, desenvolvendo relacionamentos de confiança mútua em decisões estratégicas, envolvendo questões legais sofisticadas, complexas ou tecnicamente desafiadoras.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer staggerDelay={0.06} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Link 
                to={`/areas/${service.slug}`}
                className="card-premium group text-center cursor-pointer block h-full"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
