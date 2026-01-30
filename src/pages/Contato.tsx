import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nome.trim() || !formData.email.trim() || !formData.mensagem.trim()) {
      toast.error("Por favor, preencha os campos obrigatórios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: MapPin, title: "Endereço", info: "Ourinhos - SP" },
    { icon: Phone, title: "Telefone", info: "(14) 3324-3605" },
    { icon: Mail, title: "E-mail", info: "contato@santarosamello.adv.br" },
    { icon: Clock, title: "Horário", info: "Seg - Sex: 8h às 18h" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="section-label mb-4">Contato</div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl">
            Entre em <span className="text-primary">Contato</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
            Estamos prontos para atendê-lo. Preencha o formulário ou utilize um de nossos canais de atendimento.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="card-premium flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card-premium">
                <h2 className="font-serif text-2xl font-semibold mb-6">Envie sua Mensagem</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="Seu nome"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="seu@email.com"
                      maxLength={255}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="(11) 99999-9999"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium mb-2">
                      Assunto
                    </label>
                    <select
                      id="assunto"
                      value={formData.assunto}
                      onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Selecione...</option>
                      <option value="civil">Direito Civil</option>
                      <option value="criminal">Direito Criminal</option>
                      <option value="empresarial">Direito Empresarial</option>
                      <option value="familia">Direito de Família</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    rows={5}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Descreva brevemente seu caso ou dúvida..."
                    maxLength={1000}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
