import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

/**
 * COMPONENTE: TeamSection
 * Seção de Profissionais - SantaRosa Mello Advogados
 */
export default function TeamSection() {
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
    <section id="equipe" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-[4px] text-xs">Profissionais</span>
          <h2 className="font-serif text-5xl font-bold mt-4 text-white">
            Conheça Nossa <span className="text-primary italic">Equipe</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6">
            Desde 2001, buscamos os melhores talentos para atender demandas pioneiras e complexas. 
            Nosso foco são as pessoas e a excelência jurídica.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center group hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative w-40 h-40 mx-auto mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-500 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-1">{member.role}</p>
              <p className="text-slate-500 text-xs mb-4">{member.oab}</p>
              
              <a 
                href={`mailto:${member.email}`} 
                className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm"
              >
                <Mail size={14} />
                {member.email}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-slate-400 leading-relaxed">
            Acreditamos no aperfeiçoamento da sociedade pelo Direito. Acreditamos numa advocacia 
            compromissada com a <span className="text-white font-semibold">integridade</span>, <span className="text-white font-semibold">responsabilidade</span>, <span className="text-white font-semibold">excelência</span> das soluções legais, 
            satisfação de nossos clientes e realização pessoal de nossos integrantes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
                            