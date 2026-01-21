import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AreaContactForm from "@/components/areas/AreaContactForm";
import { getAreaBySlug, areasAtuacao } from "@/data/areasAtuacao";
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
  CheckCircle2,
  ArrowLeft,
  ChevronRight
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

const AreaAtuacao = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getAreaBySlug(slug) : undefined;

  if (!area) {
    return <Navigate to="/areas" replace />;
  }

  const Icon = iconMap[area.icon] || Scale;

  // Outras áreas para sugestão
  const otherAreas = areasAtuacao.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">
              Início
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/areas" className="hover:text-primary transition-colors">
              Áreas de Atuação
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{area.title}</span>
          </nav>

          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                {area.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {area.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-6">
                  Sobre esta Área
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {area.fullDescription}
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-6">
                  Serviços que Oferecemos
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {area.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="card-premium">
                <h2 className="font-serif text-2xl font-semibold mb-6">
                  Por que Escolher o SantaRosa Mello?
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Scale className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Experiência Comprovada</h4>
                      <p className="text-sm text-muted-foreground">
                        Mais de 25 anos atuando com excelência jurídica
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Atendimento Personalizado</h4>
                      <p className="text-sm text-muted-foreground">
                        Cada caso é tratado com dedicação exclusiva
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Sigilo e Ética</h4>
                      <p className="text-sm text-muted-foreground">
                        Compromisso absoluto com a confidencialidade
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Estratégia Jurídica</h4>
                      <p className="text-sm text-muted-foreground">
                        Planejamento focado em resultados
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form & Other Areas */}
            <div className="space-y-8">
              <AreaContactForm areaTitle={area.title} />

              {/* Other Areas */}
              <div>
                <h3 className="font-serif text-lg font-semibold mb-4">
                  Outras Áreas de Atuação
                </h3>
                <div className="space-y-3">
                  {otherAreas.map((otherArea) => {
                    const OtherIcon = iconMap[otherArea.icon] || Scale;
                    return (
                      <Link
                        key={otherArea.slug}
                        to={`/areas/${otherArea.slug}`}
                        className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group"
                      >
                        <OtherIcon className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {otherArea.title}
                        </span>
                        <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    );
                  })}
                </div>
                <Link
                  to="/areas"
                  className="flex items-center gap-2 text-primary text-sm font-medium mt-4 hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Ver todas as áreas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AreaAtuacao;
