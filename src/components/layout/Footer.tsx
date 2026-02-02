import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Linkedin, 
  ArrowRight, ShieldCheck, ChevronRight 
} from 'lucide-react';
import logoLight from '@/assets/logo/03 MARCA _ SantaRosa Mello.png';

/**
 * SantaRosa Mello - Footer & CTA Component
 * Otimizado para React + Vite
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Início", sectionId: "inicio" },
    { name: "O Escritório", sectionId: "escritorio" },
    { name: "Áreas", sectionId: "areas" },
    { name: "Contato", sectionId: "contato" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-24">
      <div className="container mx-auto px-6">
        
        {/* CTA Section Inside Footer */}
        <motion.div 
          id="contato"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Precisa de orientação <span className="text-primary italic">jurídica</span>?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10">
            Nossa equipe está pronta para analisar seu caso com excelência.
          </p>
          <button className="bg-primary hover:bg-white text-black px-10 py-4 font-bold uppercase tracking-widest text-xs transition-all flex items-center mx-auto gap-3">
            Falar com Especialista <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <img 
              src={logoLight} 
              alt="SantaRosa Mello Advogados" 
              className="h-14 w-auto object-contain"
            />
            <p className="text-slate-500 text-sm leading-relaxed">
              O equilíbrio da lei com a excelência da liderança. 
              Tradição e retidão na prática de atos da sua vida e empresa.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Explorar</h4>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.sectionId)} 
                    className="text-slate-500 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Áreas</h4>
            <ul className="space-y-3">
              <li className="text-slate-500 text-sm">Direito Civil e Processual</li>
              <li className="text-slate-500 text-sm">Direito Empresarial</li>
              <li className="text-slate-500 text-sm">Família e Sucessões</li>
              <li className="text-slate-500 text-sm">Direito Tributário</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contato</h4>
            <div className="flex items-center gap-3 text-slate-500">
              <MapPin size={16} className="text-primary" />
              <span className="text-xs">Ourinhos - SP</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <Phone size={16} className="text-primary" />
              <span className="text-xs font-bold">(14) 3324-3605</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <Mail size={16} className="text-primary" />
              <span className="text-xs">contato@santarosamello.adv.br</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-600 uppercase tracking-widest">
            © {currentYear} Santarosa Mello Advogados Associados. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-slate-600 hover:text-white uppercase tracking-widest">Políticas</a>
            <a href="#" className="text-[10px] text-slate-600 hover:text-white uppercase tracking-widest">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;