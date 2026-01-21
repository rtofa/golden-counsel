import { Mail, Linkedin } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "André Luis Camargo Mello",
      role: "Sócio Fundador",
      oab: "OAB/SP 170.033",
      email: "andremello@santarosamello.adv.br",
      image: team1,
    },
    {
      name: "Eliana Santarosa Mello",
      role: "Sócia Fundadora",
      oab: "OAB/SP 185.465",
      email: "eliana@santarosamello.adv.br",
      image: team2,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="section-label justify-center mb-4">
            Profissionais
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Desde 2001, buscamos os melhores talentos para atender demandas pioneiras e complexas. Nossa equipe é dinâmica e entusiasmada: estudamos muito, trabalhamos duro e nos dedicamos de corpo e alma para garantir o sucesso dos nossos clientes.
          </p>
        </div>

        {/* Values Statement */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-muted-foreground italic leading-relaxed">
            "Acreditamos no aperfeiçoamento da sociedade pelo Direito. Acreditamos numa advocacia compromissada com a integridade, responsabilidade, excelência das soluções legais, satisfação de nossos clientes e realização pessoal de nossos integrantes."
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="card-premium flex flex-col md:flex-row gap-6 items-center">
              {/* Photo */}
              <div className="shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20"
                />
              </div>
              
              {/* Info */}
              <div className="text-center md:text-left">
                <h3 className="font-serif text-xl font-semibold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-foreground font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {member.oab}
                </p>
                
                {/* Actions */}
                <div className="flex gap-3 justify-center md:justify-start">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">{member.email}</span>
                    <span className="sm:hidden">E-mail</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-card border border-border rounded flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
