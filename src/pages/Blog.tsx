import Layout from "@/components/layout/Layout";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import serviceCivil from "@/assets/service-civil.jpg";
import serviceCriminal from "@/assets/service-criminal.jpg";
import serviceBusiness from "@/assets/service-business.jpg";

const Blog = () => {
  const posts = [
    {
      title: "Como Funciona o Processo de Divórcio no Brasil",
      excerpt: "Entenda as etapas, documentos necessários e prazos para realizar seu divórcio de forma legal e tranquila.",
      category: "Direito de Família",
      author: "Dra. Marina Santos",
      date: "15 Jan 2026",
      image: serviceCivil,
    },
    {
      title: "Direitos do Consumidor: O Que Você Precisa Saber",
      excerpt: "Conheça seus direitos como consumidor e saiba como se proteger de práticas abusivas no mercado.",
      category: "Direito Civil",
      author: "Dr. Ricardo Almeida",
      date: "10 Jan 2026",
      image: serviceBusiness,
    },
    {
      title: "Quando Posso Solicitar um Habeas Corpus?",
      excerpt: "Saiba em quais situações o habeas corpus pode ser requerido e como funciona esse importante instrumento.",
      category: "Direito Criminal",
      author: "Dr. Lucas Ferreira",
      date: "05 Jan 2026",
      image: serviceCriminal,
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="section-label mb-4">Blog</div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl">
            Artigos e <span className="text-primary">Insights</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
            Fique por dentro das novidades do mundo jurídico com nossos artigos escritos por especialistas.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="card-premium group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                
                <Link to="#" className="inline-flex items-center gap-2 text-primary text-sm font-medium group/link">
                  Ler mais
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
