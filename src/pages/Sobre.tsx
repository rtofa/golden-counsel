import Layout from "@/components/layout/Layout";
import { CheckCircle, Award, Users, Target } from "lucide-react";
import lawyerConsulting from "@/assets/lawyer-consulting.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import advogadoBg from "@/assets/sala.png";

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
    { 
      name: "André Luis Camargo Mello", 
      role: "Sócio Fundador", 
      oab: "OAB/SP 170.033", 
      email: "andremello@santarosamello.adv.br", 
      image: team1 
    },
    { 
      name: "Eliana Santarosa Mello", 
      role: "Sócia Fundadora", 
      oab: "OAB/SP 185.465", 
      email: "eliana@santarosamello.adv.br", 
      image: team2 
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-black min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
          <img src={advogadoBg} alt="Background" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="section-label mb-4 text-primary border-primary/20">SantaRosa Mello Advogados e Associados</div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl text-white">
            Justiça Refinada e o <span className="text-primary">Equilíbrio do Legado</span>
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src={lawyerConsulting} alt="Escritório" className="rounded-lg shadow-2xl opacity-80" />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-white">
                O <span className="text-primary">Escritório</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Com mais de 25 anos de existência, somos um escritório de advocacia de notório respeito, cujo compromisso precípuo é a oferta de serviços jurídicos com padrão de qualidade, excelência e profissionalismo.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Com inovação e pioneirismo, o escritório conseguiu, ao longo dos anos, aprimorar o intercâmbio entre a academia e a advocacia, com a especialização dos profissionais e no incentivo da busca de novos conhecimentos e aperfeiçoamento contínuo dos trabalhos jurídicos desenvolvidos.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Sua atuação diversificada e excelência de seus profissionais, oferece assistência em diversas áreas do Direito, o que lhes permite desenvolver relacionamentos de confiança mútua, tanto no dia a dia como em decisões estratégicas, envolvendo questões legais sofisticadas, complexas ou tecnicamente desafiadoras.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Assim, Santarosa Mello Advogados Associados desenvolveu-se como um escritório independente, de atuação diversificada, especializado em operações multidisciplinares e capaz de traduzir o ambiente legal brasileiro em benefício de seus clientes.
              </p>
              <ul className="space-y-3">
                {["Mais de 25 anos de existência e notório respeito", "Intercâmbio entre academia e advocacia", "Equipes adaptadas às necessidades de cada projeto", "Advogados prontos e disponíveis quando e onde necessário"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4 text-primary border-primary/20">Nossos Valores</div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white">
              O Que Nos <span className="text-primary">Guia</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="p-8 rounded-lg border border-white/10 bg-white/5 text-center hover:border-primary/30 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <div className="section-label justify-center mb-4 text-primary border-primary/20">Profissionais</div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-white">
              Conheça Nossos <span className="text-primary">Sócios</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto mb-4">
              Desde 2001, buscamos os melhores talentos para atender demandas pioneiras e complexas. Nossa equipe é dinâmica e entusiasmada: estudamos muito, trabalhamos duro e nos dedicamos de corpo e alma para garantir o sucesso dos nossos clientes, com soluções criativas, seguras e eficientes.
            </p>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Acreditamos no aperfeiçoamento da sociedade pelo Direito. Acreditamos numa advocacia compromissada com a integridade, responsabilidade, excelência das soluções legais, satisfação de nossos clientes e realização pessoal de nossos integrantes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {team.map((member, i) => (
              <div key={i} className="p-8 rounded-lg border border-white/10 bg-white/5 flex flex-col sm:flex-row items-center gap-6 hover:border-primary/30 transition-colors">
                <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full border-4 border-primary/20" />
                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-xl font-semibold text-primary">{member.name}</h3>
                  <p className="text-white font-medium">{member.role}</p>
                  <p className="text-slate-400 text-sm mb-2">{member.oab}</p>
                  <a href={`mailto:${member.email}`} className="text-sm text-slate-400 hover:text-primary transition-colors">
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;