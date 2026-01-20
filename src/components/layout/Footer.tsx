import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import logoSantarosa from "@/assets/logo-santarosa.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Precisa de orientação <span className="text-primary">jurídica</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Nossa equipe está pronta para analisar seu caso com a excelência e ética que caracterizam o escritório SantaRosa Mello.
          </p>
          <Link to="/contato" className="btn-primary text-lg px-8 py-4 group">
            Falar com um Especialista
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logoSantarosa} alt="SantaRosa Mello" className="h-12 w-auto" />
              <div>
                <span className="font-serif text-lg font-semibold text-foreground">SantaRosa Mello</span>
                <p className="text-xs text-muted-foreground tracking-widest">ADVOGADOS E ASSOCIADOS</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Justiça Refinada e Equilíbrio do Legado. Combinamos tradição, autoridade e excelência com uma abordagem personalizada e ética.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-foreground">Links Rápidos</h3>
            <ul className="space-y-3">
              {["Início", "A Firma", "Casos", "Blog", "Contato"].map((item) => (
                <li key={item}>
                  <Link to={`/${item === "Início" ? "" : item.toLowerCase().replace(" ", "-")}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-foreground">Áreas de Atuação</h3>
            <ul className="space-y-3">
              {["Direito Civil", "Direito Criminal", "Direito Empresarial", "Direito de Família", "Direito Trabalhista"].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-foreground">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Av. Paulista, 1000<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01310-100
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+551132456789" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  (11) 3245-6789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:contato@santarosamello.adv.br" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  contato@santarosamello.adv.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} SantaRosa Mello Advogados e Associados. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link to="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link>
              <Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
