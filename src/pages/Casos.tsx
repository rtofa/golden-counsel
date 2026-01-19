import Layout from "@/components/layout/Layout";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import caseFamily from "@/assets/case-family.jpg";
import caseCriminal from "@/assets/case-criminal.jpg";
import caseCivil from "@/assets/case-civil.jpg";
import caseDefense from "@/assets/case-defense.jpg";

const Casos = () => {
  const cases = [
    {
      title: "Disputa de Guarda Familiar",
      category: "Direito de Família",
      description: "Resolução de caso complexo envolvendo guarda compartilhada e pensão alimentícia.",
      image: caseFamily,
    },
    {
      title: "Defesa em Processo Criminal",
      category: "Direito Criminal",
      description: "Absolvição em caso de acusação injusta, com defesa técnica especializada.",
      image: caseCriminal,
    },
    {
      title: "Indenização por Danos Morais",
      category: "Direito Civil",
      description: "Obtenção de indenização significativa em caso de danos à honra e imagem.",
      image: caseCivil,
    },
    {
      title: "Habeas Corpus Preventivo",
      category: "Direito Criminal",
      description: "Concessão de HC preventivo para evitar prisão indevida do cliente.",
      image: caseDefense,
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="section-label mb-4">Casos</div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl">
            Estudos de <span className="text-primary">Caso</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
            Conheça alguns dos casos que conduzimos com sucesso, demonstrando nossa expertise e compromisso com resultados.
          </p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <Link
                to="#"
                key={index}
                className="card-premium group overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
                    {caseItem.category}
                  </div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{caseItem.title}</h3>
                <p className="text-muted-foreground text-sm">{caseItem.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Casos;
