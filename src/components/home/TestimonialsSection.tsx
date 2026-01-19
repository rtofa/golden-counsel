import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Empresário",
      image: testimonial1,
      text: "A equipe da Advocacia foi fundamental para resolver uma questão empresarial complexa. Profissionalismo e dedicação em cada etapa do processo. Recomendo fortemente.",
      rating: 5,
    },
    {
      name: "Fernanda Lima",
      role: "Diretora Executiva",
      image: testimonial2,
      text: "Excelente atendimento e resultados surpreendentes. A atenção aos detalhes e o comprometimento com o cliente fazem toda a diferença. Serviço de primeira qualidade.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="section-label mb-4">
              Depoimentos
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold">
              O Que Nossos{" "}
              <span className="text-primary">Clientes</span> Dizem
            </h2>
          </div>
          <Link to="/contato" className="btn-outline shrink-0 group">
            Orientação Especializada
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-premium flex flex-col md:flex-row gap-6">
              {/* Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground italic leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="font-serif text-lg font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative shrink-0">
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl" />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-card"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
