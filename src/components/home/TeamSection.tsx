import { Facebook, Instagram, Linkedin, Link as LinkIcon } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Ricardo Almeida",
      role: "Direito Civil",
      image: team1,
    },
    {
      name: "Dra. Marina Santos",
      role: "Direito Empresarial",
      image: team2,
    },
    {
      name: "Dr. Lucas Ferreira",
      role: "Direito Criminal",
      image: team3,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            Nossa Equipe
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold">
            <span className="text-primary">Profissionais</span> Qualificados
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-[3/4] object-cover"
              />
              
              {/* Overlay on Hover */}
              <div className="team-card-overlay">
                <div className="flex gap-3 mb-4">
                  <a href="#" className="w-9 h-9 bg-card/80 backdrop-blur border border-border rounded flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-card/80 backdrop-blur border border-border rounded flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-card/80 backdrop-blur border border-border rounded flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-card/80 backdrop-blur border border-border rounded flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all">
                    <LinkIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Info Card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/90 to-transparent">
                <h3 className="font-serif text-xl font-semibold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
