import { Link } from "react-router-dom";
import { MapPin, Mail, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import logoSantarosa from "@/assets/logo-santarosa.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "A Firma", path: "/sobre" },
    { name: "Casos", path: "/casos" },
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      {/* Top Bar */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-6 py-2 flex flex-wrap justify-between items-center text-sm">
          <p className="text-muted-foreground hidden md:block">
            O Equilíbrio da Lei com a Excelência da Liderança
          </p>
          <div className="flex items-center gap-6 text-muted-foreground ml-auto">
            <a href="tel:+551433243605" className="flex items-center gap-2 hover:text-primary transition-colors">
              <span className="hidden sm:inline">(14) 3324-3605</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="hidden sm:inline">Rua Arlindo Luz, 633 - Ourinhos/SP</span>
            </a>
            <a href="mailto:contato@santarosamello.adv.br" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              <span className="hidden sm:inline">contato@santarosamello.adv.br</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoSantarosa} alt="SantaRosa Mello" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <span className="font-serif text-lg font-semibold text-foreground">SantaRosa Mello</span>
              <p className="text-xs text-muted-foreground tracking-widest">ADVOGADOS E ASSOCIADOS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-foreground/90 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contato" className="btn-primary group">
              Atendimento Gratuito
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-foreground/90 hover:text-primary font-medium transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/contato" className="btn-primary w-full justify-center" onClick={() => setIsMobileMenuOpen(false)}>
                  Atendimento Gratuito
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
