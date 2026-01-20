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
      title: "Excelência & Reconhecimento",
      description: "As estrelas da nossa marca representam os Sócios Fundadores, sendo as guias da ética e da estratégia do escritório.",
    },
    {
      icon: Users,
      title: "Justiça & Equilíbrio",
      description: "A balança representa nosso compromisso inabalável com a justiça e a busca pelo equilíbrio ideal em cada contenda legal.",
    },
    {
      icon: Target,
      title: "Tradição & Legado",
      description: "O brasão confere o senso de legado e tradição sólida do escritório, representando proteção jurídica e autoridade no campo do Direito.",
    },
  ];

  const team = [
    { name: "Dr. Santa Rosa", role: "Sócio Fundador - Direito Civil", image: team1 },
    { name: "Dra. Mello", role: "Sócia Fundadora - Direito Empresarial", image: team2 },
    { name: "Dr. Lucas Ferreira", role: "Associado - Direito Criminal", image: team3 },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="section-label mb-4">SantaRosa Mello Advogados e Associados</div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl">
            Justiça Refinada e o <span className="text-primary">Equilíbrio do Legado</span>
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
                Nosso <span className="text-primary">Conceito</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                O conceito central da marca SantaRosa Mello Advogados e Associados é a "Justiça Refinada e o Equilíbrio do Legado". Este conceito se apoia na fusão dos elementos tradicionais da advocacia com um toque de sofisticação e uma referência pessoal forte ao nome "Santa Rosa".
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A marca projeta autoridade, tradição, excelência e uma abordagem personalizada e ética. Os sócios fundadores, Mello e Santa Rosa, são as guias da ética e da estratégia do escritório.
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
