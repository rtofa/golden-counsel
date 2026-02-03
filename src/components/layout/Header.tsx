
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Mail, Phone, Menu, X, ArrowRight, Download, ShieldCheck } from 'lucide-react';
import logoLight from '@/assets/logo/03 MARCA _ SantaRosa Mello.png';

/**
 * Premium Interactive Header Component
 * SantaRosa Mello Advogados & Associados
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Ativa efeito de vidro e encolhimento após 50px de scroll
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função de scroll suave para as seções
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Início", sectionId: "inicio" },
    { name: "Estratégias", sectionId: "areas" },
    { name: "Resultados", sectionId: "resultados" },
    { name: "A Confiança", sectionId: "confianca" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 flex justify-center ${
      isScrolled ? "pt-4" : "pt-8"
    }`}>
      
      {/* Floating Island Header */}
      <div className={`transition-all duration-500 px-6 py-3 flex items-center justify-between mx-4 max-w-7xl w-full border ${
        isScrolled 
        ? "bg-black/80 backdrop-blur-2xl border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
        : "bg-transparent border-transparent"
      }`}>
        
        {/* Branding Area */}
        <Link to="/" className="flex items-center gap-4 group">
          <img 
            src={logoLight} 
            alt="SantaRosa Mello Advogados" 
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Navigation - Center */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <button 
                  onClick={() => scrollToSection(link.sectionId)} 
                  className="text-[11px] font-bold uppercase tracking-[2px] text-slate-400 hover:text-white transition-all"
                >
                  {link.name}
                </button>
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-primary -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('contato')}
            className="bg-primary hover:bg-white text-slate-950 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[2px] rounded-full transition-all flex items-center gap-2 shadow-xl shadow-primary/10"
          >
            Contato <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle UI */}
        <button 
          className="lg:hidden text-white p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Sidebar Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-3xl z-[110] p-8 flex flex-col justify-center gap-12 text-center animate-in fade-in slide-in-from-bottom duration-500">
           <button className="absolute top-8 right-8 text-white" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
           </button>
           <ul className="space-y-8">
             {navLinks.map((link) => (
               <li key={link.name}>
                 <button 
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-3xl font-serif text-white hover:text-primary"
                 >
                   {link.name}
                 </button>
               </li>
             ))}
           </ul>
           <div className="pt-10 flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('contato')} 
                className="bg-primary text-slate-950 py-5 font-bold uppercase tracking-widest"
              >
                 Fale Conosco
              </button>
           </div>
        </div>
      )}
    </header>
  );
};

export default Header;
                                