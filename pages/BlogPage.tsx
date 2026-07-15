import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const BlogPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Cães de Grande Porte: Cuidados Especiais com Banho, Tosa e Transporte em Uberlândia",
      excerpt: "Cuidar de um cão de grande porte exige planejamento, principalmente na hora do banho, tosa e transporte. Saiba como evitar dermatites e o estresse de locomoção em Uberlândia!",
      image: "/images/taxdog/cao_grande_servico_taxi_dog_202606181243.jpeg",
      category: "Cuidados & Serviços",
      date: "15 de Julho de 2026",
      readTime: "Leitura de 5 min",
      slug: "/blog/caes-de-grande-porte"
    }
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      <SEO
        title="Blog Amor & Patas | Dicas e Cuidados com o seu Pet em Uberlândia"
        description="Acompanhe o blog da Amor & Patas. Dicas de banho e tosa, saúde animal, transporte seguro Táxi Dog e cuidados gerais para cães e gatos em Uberlândia."
        canonical="https://amorepataspetshop.com.br/blog"
        keywords="blog pet shop uberlandia, dicas de cuidados pet, banho e tosa uberlandia, estetica animal uberlandia, amor e patas blog"
        ogImage="https://amorepataspetshop.com.br/images/Logo-Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet-shop-pet-shop-perto-de-mim-banho-e-tosa-Uberlandia_.webp"
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-accent/50 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            <BookOpen size={16} />
            Canal de Informações
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Blog <span className="text-primary">Amor & Patas</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Dicas, novidades e informações preparadas por especialistas para garantir que o seu melhor amigo tenha uma vida feliz, saudável e cheia de bem-estar.
          </p>
        </div>
      </section>

      {/* Listagem de Posts */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhum artigo publicado no momento. Volte em breve!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-[2.5rem] shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-2 transition-all duration-300 group"
                >
                  {/* Imagem do Card */}
                  <div className="h-56 w-full overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* Detalhes do Post */}
                  <div className="p-8 flex flex-col flex-grow">
                    {/* Meta info */}
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

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto">
                      <Link 
                        to={post.slug} 
                        className="inline-flex items-center gap-2 text-primary font-bold hover:underline group-hover:gap-3 transition-all"
                      >
                        Ler Artigo Completo
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
