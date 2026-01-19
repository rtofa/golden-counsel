import Layout from "@/components/layout/Layout";
import { CheckCircle, Award, Users, Target } from "lucide-react";
import lawyerConsulting from "@/assets/lawyer-consulting.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const Sobre = () => {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos os melhores resultados em cada caso, com dedicação e profissionalismo.",
    },
    {
      icon: Users,
      title: "Humanização",
      description: "Tratamos cada cliente de forma única, entendendo suas necessidades específicas.",
    },
    {
      icon: Target,
      title: "Estratégia",
      description: "Desenvolvemos soluções jurídicas personalizadas para cada situação.",
    },
  ];

  const team = [
    { name: "Dr. Ricardo Almeida", role: "Sócio Fundador - Direito Civil", image: team1 },
    { name: "Dra. Marina Santos", role: "Sócia - Direito Empresarial", image: team2 },
    { name: "Dr. Lucas Ferreira", role: "Associado - Direito Criminal", image: team3 },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="section-label mb-4">A Firma</div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl">
            Tradição e <span className="text-primary">Inovação</span> em Advocacia
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src={lawyerConsulting} alt="Escritório" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Nossa <span className="text-primary">História</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fundado há mais de uma década, nosso escritório nasceu da visão de oferecer serviços jurídicos de excelência, combinando conhecimento técnico aprofundado com atendimento humanizado.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ao longo dos anos, construímos uma reputação sólida baseada em resultados consistentes, ética inabalável e compromisso genuíno com os interesses de nossos clientes.
              </p>
              <ul className="space-y-3">
                {["Mais de 500 casos resolvidos", "98% de satisfação dos clientes", "Equipe multidisciplinar especializada", "Atendimento em todo o território nacional"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">Nossos Valores</div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold">
              O Que Nos <span className="text-primary">Guia</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="card-premium text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">Equipe</div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold">
              Conheça Nossos <span className="text-primary">Advogados</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <img src={member.image} alt={member.name} className="w-full aspect-square object-cover rounded-lg mb-4" />
                <h3 className="font-serif text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
