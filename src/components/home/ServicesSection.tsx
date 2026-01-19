import { Scale, Building2, Gavel } from "lucide-react";
import serviceCivil from "@/assets/service-civil.jpg";
import serviceCriminal from "@/assets/service-criminal.jpg";
import serviceBusiness from "@/assets/service-business.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Atuamos em questões contratuais, responsabilidade civil, direitos reais, família e sucessões com expertise e dedicação.",
      image: serviceCivil,
    },
    {
      icon: Gavel,
      title: "Direito Criminal",
      description: "Defesa especializada em processos criminais, com acompanhamento desde a fase investigativa até recursos superiores.",
      image: serviceCriminal,
    },
    {
      icon: Building2,
      title: "Direito Empresarial",
      description: "Assessoria completa para empresas, desde a constituição até questões societárias, contratos e recuperação judicial.",
      image: serviceBusiness,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            Nossos Serviços
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold">
            Áreas de Atuação em{" "}
            <span className="text-primary">Direito</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-premium group">
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
