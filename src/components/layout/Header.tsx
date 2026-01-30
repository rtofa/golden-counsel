
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Menu, X, ArrowRight, Download, ShieldCheck } from 'lucide-react';

/**
 * Premium Interactive Header Component
 * SantaRosa Mello Advogados & Associados
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ativa efeito de vidro e encolhimento após 50px de scroll
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função de Exportação de Dados / Portfólio
  const handleExportPortfolio = () => {
    const date = new Date().toLocaleDateString('pt-BR');
    console.log(`Gerando portfólio digital SantaRosa Mello - ${date}`);
    
    // Simulação de download
    const link = document.createElement('a');
    link.href = '#';
    alert(`Preparando download do Dossiê Institucional (PDF)... \nData: ${date}`);
  };

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "A Firma", path: "/sobre" },
    { name: "Áreas de Atuação", path: "/areas" },
    { name: "Casos", path: "/casos" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 flex justify-center ${
      isScrolled ? "pt-4" : "pt-8"
    }`}>
      
      {/* Floating Island Header */}
      <div className={`transition-all duration-500 px-6 py-3 flex items-center justify-between mx-4 max-w-7xl w-full border ${
        isScrolled 
        ? "bg-slate-950/80 backdrop-blur-2xl border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
        : "bg-transparent border-transparent"
      }`}>
        
        {/* Branding Area */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center p-2 group-hover:bg-white transition-all duration-500 shadow-lg shadow-amber-600/20">
             <span className="text-slate-950 font-serif font-black text-xl">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-white leading-none">
              SantaRosa Mello
            </span>
            <span className="text-[7px] tracking-[4px] text-amber-500 font-bold uppercase mt-1">
              Advogados Associados
            </span>
          </div>
        </Link>

        {/* Navigation - Center */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link to={link.path} className="text-[11px] font-bold uppercase tracking-[2px] text-slate-400 hover:text-white transition-all">
                  {link.name}
                </Link>
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-amber-600 -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <button 
            onClick={handleExportPortfolio}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-slate-400 hover:text-amber-500 transition-colors"
          >
            <Download size={16} /> Exportar
          </button>
          
          <Link to="/contato" className="bg-amber-600 hover:bg-white text-slate-950 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[2px] rounded-full transition-all flex items-center gap-2 shadow-xl shadow-amber-600/10">
            Contato <ArrowRight size={14} />
          </Link>
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
        <div className="lg:hidden fixed inset-0 bg-slate-950/95 backdrop-blur-3xl z-[110] p-8 flex flex-col justify-center gap-12 text-center animate-in fade-in slide-in-from-bottom duration-500">
           <button className="absolute top-8 right-8 text-white" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
           </button>
           <ul className="space-y-8">
             {navLinks.map((link) => (
               <li key={link.name}>
                 <Link 
                    to={link.path} 
                    className="text-3xl font-serif text-white hover:text-amber-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                 >
                   {link.name}
                 </Link>
               </li>
             ))}
           </ul>
           <div className="pt-10 flex flex-col gap-4">
              <button onClick={handleExportPortfolio} className="text-amber-500 font-bold uppercase tracking-widest text-sm">
                 Exportar Dossiê
              </button>
              <Link to="/contato" className="bg-amber-600 text-slate-950 py-5 font-bold uppercase tracking-widest">
                 Atendimento Gratuito
              </Link>
           </div>
        </div>
      )}
    </header>
  );
};

export default Header;
                                