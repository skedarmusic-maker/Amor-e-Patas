import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, ArrowRight, Scissors, Dog } from 'lucide-react';

const HomeBlogSection: React.FC = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Tosa no Spitz Alemão: Por Que Usar Apenas Tesoura? Mitos, Subpelo e Cuidados em Uberlândia",
      excerpt: "Descubra por que a máquina pode causar alopecia pós-tosa no Spitz Alemão e confira por que a tosa na tesoura é a mais indicada para proteger a saúde térmica do seu Lulu.",
      image: "/images/blog/spitz_alemao_tosa_tesoura_1.jpeg",
      category: "Estética & Raças",
      date: "22 de Agosto de 2026",
      readTime: "Leitura de 6 min",
      slug: "/blog/tosa-spitz-alemao-tesoura-subpelo",
      icon: <Scissors size={18} />
    },
    {
      id: 2,
      title: "Cães de Grande Porte: Cuidados Especiais com Banho, Tosa e Transporte em Uberlândia",
      excerpt: "Cuidar de um cão de grande porte exige estrutura profissional. Saiba como evitar dermatites e o estresse na locomoção com nosso serviço de Táxi Dog adaptado.",
      image: "/images/taxdog/cao_grande_servico_taxi_dog_202606181243.jpeg",
      category: "Cuidados & Serviços",
      date: "15 de Julho de 2026",
      readTime: "Leitura de 5 min",
      slug: "/blog/caes-de-grande-porte",
      icon: <Dog size={18} />
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <BookOpen size={14} />
              Dicas & Conhecimento Pet
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Últimas do <span className="text-primary">Blog Amor & Patas</span>
            </h2>
            <p className="text-gray-600 text-lg mt-3 max-w-2xl">
              Conteúdos exclusivos criados por quem vive o dia a dia da estética animal e do cuidado humanizado em Uberlândia.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-3 transition-all self-start md:self-end group"
          >
            Ver todos os artigos
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards de Artigos em Destaque */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Imagem do Card */}
              <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-primary text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  {post.icon}
                  <span>{post.category}</span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                  <Link to={post.slug}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    to={post.slug}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline group-hover:gap-3 transition-all"
                  >
                    Ler artigo completo
                    <ArrowRight size={16} />
                  </Link>
                  <span className="text-xs text-gray-400 font-medium">Uberlândia - MG</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
