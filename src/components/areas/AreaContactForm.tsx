import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface AreaContactFormProps {
  areaTitle: string;
}

const AreaContactForm = ({ areaTitle }: AreaContactFormProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.nome.trim() || !formData.email.trim() || !formData.mensagem.trim()) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um email válido.");
      return;
    }

    setIsSubmitting(true);

    // Simulação de envio
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="card-premium">
      <h3 className="font-serif text-xl font-semibold mb-2">
        Consulta sobre {areaTitle}
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Preencha o formulário abaixo e nossa equipe especializada entrará em contato.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome Completo *</Label>
          <Input
            id="nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            placeholder="Seu nome completo"
            className="bg-background"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="seu@email.com"
              className="bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              type="tel"
              value={formData.telefone}
              onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
              placeholder="(00) 00000-0000"
              className="bg-background"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensagem">Descreva sua situação *</Label>
          <Textarea
            id="mensagem"
            value={formData.mensagem}
            onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
            placeholder="Conte-nos brevemente sobre o seu caso..."
            rows={4}
            className="bg-background resize-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Enviar Consulta
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Ao enviar, você concorda com nossa política de privacidade.
        </p>
      </form>
    </div>
  );
};

export default AreaContactForm;
