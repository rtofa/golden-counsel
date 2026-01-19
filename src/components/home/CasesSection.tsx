import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import caseFamily from "@/assets/case-family.jpg";
import caseCriminal from "@/assets/case-criminal.jpg";
import caseCivil from "@/assets/case-civil.jpg";
import caseDefense from "@/assets/case-defense.jpg";

const CasesSection = () => {
  const cases = [
    {
      title: "Direito de Família",
      category: "Família",
      image: caseFamily,
    },
    {
      title: "Defesa Criminal",
      category: "Criminal",
      image: caseCriminal,
    },
    {
      title: "Processos Cíveis",
      category: "Civil",
      image: caseCivil,
    },
    {
      title: "Defesa do Réu",
      category: "Criminal",
      image: caseDefense,
    },
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="section-label mb-4">
              Casos de Estudo
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold">
              Insights e{" "}
              <span className="text-primary">Descobertas</span>
            </h2>
          </div>
          <Link to="/casos" className="btn-outline shrink-0 group">
            Orientação Especializada
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((caseItem, index) => (
            <Link
              to="/casos"
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] block"
            >
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-xs text-primary font-medium tracking-wider uppercase mb-2">
                  {caseItem.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {caseItem.title}
                  </h3>
                  <div className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
