import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { areasAtuacao } from "@/data/areasAtuacao";
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
  Receipt,
  ArrowRight
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Building2,
  Gavel,
  Users,
  Briefcase,
  ShieldCheck,
  Home,
  FileText,
  Vote,
  Receipt,
};

const Areas = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6 text-center">
          <div className="section-label justify-center mb-4">
            Especialidades Jurídicas
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Áreas de <span className="text-primary">Atuação</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos assistência jurídica em diversas áreas do Direito, desenvolvendo 
            relacionamentos de confiança mútua em decisões estratégicas.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasAtuacao.map((area) => {
              const Icon = iconMap[area.icon] || Scale;
              return (
                <Link
                  key={area.slug}
                  to={`/areas/${area.slug}`}
                  className="card-premium group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {area.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                        Saiba mais
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
            Não encontrou sua área específica?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Entre em contato conosco. Nossa equipe está pronta para analisar seu caso 
            e indicar a melhor solução jurídica.
          </p>
          <Link to="/contato" className="btn-primary inline-flex">
            Fale Conosco
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Areas;
