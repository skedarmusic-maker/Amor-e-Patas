import React from 'react';
import { Link } from 'react-router-dom';
import { Bath, Scissors, Dog, Sparkles, Calendar, ShieldAlert, CheckCircle2, MessageCircle, MapPin, Truck, Heart, Star } from 'lucide-react';


const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">

      {/* 1. Hero Section - SEO Local Focused */}
      <section className="bg-accent/50 py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Estética Animal de Elite no <span className="text-primary italic">Alto Umuarama</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubra por que a Amor & Patas é a referência em <strong>banho e tosa em Uberlândia</strong>. Oferecemos cuidados humanizados, produtos premium e uma equipe apaixonada pelo que faz.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/5534997622017" target="_blank" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-pink-100 flex items-center gap-2 hover:scale-105 transition-transform">
                <MessageCircle size={24} />
                Consultar Preços
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <Dog size={400} />
        </div>
      </section>

      {/* 2. Banner de Transparência */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white border-2 border-third/20 p-6 rounded-[2rem] shadow-xl flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-third/10 text-third rounded-full flex items-center justify-center shrink-0">
            <ShieldAlert size={32} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">Informação ao Cliente</h4>
            <p className="text-gray-500 text-sm">
              Focamos 100% na estética e bem-estar do seu pet. <strong>Importante:</strong> Não realizamos consultas médicas, pois <span className="text-primary font-bold">não possuímos médico veterinário no local</span>.
            </p>
          </div>
        </div>
      </div>

      {/* 3. A Base de Tudo: O Combo de Banho */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Padronização de Excelência</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">O que está incluso <br /> em <span className="text-primary">todo Banho</span></h3>
            <p className="text-gray-500 mt-4">Transparência total: você sabe exatamente o que seu pet recebe.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Banho 🧼", desc: "Higienização completa com shampoos de pH neutro e condicionamento.", icon: <Bath className="text-primary" />, link: null },
              { title: "Corte de Unha 💅", desc: "Corte técnico para evitar dores articulares e desconforto.", icon: <CheckCircle2 className="text-third" />, link: "/servico-corte-unhas" },
              { title: "Tosa Higiênica 🐾", desc: "Remoção de pelos em áreas críticas para saúde e limpeza.", icon: <Scissors className="text-primary" />, link: "/servico-banho-tosa" },
              { title: "Limpeza de Ouvido 👂", desc: "Higienização auricular cuidadosa para prevenção de otites.", icon: <Sparkles className="text-third" />, link: "/servico-limpeza-orelhas" }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="h-full p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all">
                  <div className="mb-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                  {item.link && (
                    <Link to={item.link} className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                      Saiba mais <span className="text-lg">→</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Menu de Tosas Especializadas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                A Arte da <span className="text-primary">Tosa Perfeita</span>
              </h2>
              <div className="space-y-6">
                {[
                  { name: "Banho e Tosa (Máquina)", desc: "Ideal para manter o pet fresco e com fácil manutenção diária.", link: "/servico-banho-tosa" },
                  { name: "Banho e Tosa (Tesoura)", desc: "Acabamento premium e artesanal, ideal para manter o volume desejado.", link: "/servico-banho-tosa" },
                  { name: "Tosa Padrão da Raça", desc: "Respeitamos as características clássicas de cada linhagem (Poodle, Schnauzer, etc).", link: "/servico-banho-tosa" },
                  { name: "Cronograma de Pelagem", desc: "Recuperação profunda da pelagem, devolvendo brilho e maciez (sem cortes).", link: "/cronograma-pelagem-tosa" }
                ].map((tosa, i) => (
                  <Link key={i} to={tosa.link!} className="block">
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex gap-6 items-start hover:border-primary/30 hover:shadow-md transition-all">
                      <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary shrink-0">
                        <Scissors size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{tosa.name}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{tosa.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800"
                className="rounded-[3rem] shadow-2xl border-8 border-white"
                alt="Tosa em Uberlândia"
              />
              <div className="absolute -top-6 -right-6 bg-primary text-white p-8 rounded-full shadow-xl">
                <Star size={32} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Saúde e Cuidados Adicionais */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-extrabold text-gray-900">Cuidados que fazem a diferença</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50/50 p-10 rounded-[3rem] border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <ShieldAlert size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Remédio p/ Carrapato</h4>
              <p className="text-gray-600 mb-6 text-sm">Aplicação e orientação para manter seu pet livre de parasitas e proteger sua casa.</p>
              <span className="text-blue-600 font-bold uppercase text-xs tracking-widest">Saúde Preventiva</span>
            </div>
            <div className="bg-pink-50/50 p-10 rounded-[3rem] border border-pink-100">
              <div className="w-16 h-16 bg-primary text-white rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-pink-200">
                <Dog size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Banho Medicamentoso</h4>
              <p className="text-gray-600 mb-6 text-sm">Tratamentos específicos sob recomendação (shampoos veterinários trazidos pelo cliente ou da loja).</p>
              <span className="text-primary font-bold uppercase text-xs tracking-widest">Dermatologia</span>
            </div>
            <div className="bg-third/10 p-10 rounded-[3rem] border border-third/20">
              <div className="w-16 h-16 bg-third text-white rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-blue-100">
                <Star size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Escovação de Dente</h4>
              <p className="text-gray-600 mb-6 text-sm">Higiene bucal para prevenir tártaro e manter o hálito sempre fresquinho.</p>
              <span className="text-third font-bold uppercase text-xs tracking-widest">Higiene Oral</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Logística e Planos de Fidelidade */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="w-20 h-20 bg-third text-white rounded-[2rem] flex items-center justify-center shrink-0">
                  <Truck size={36} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4">Táxi Dog Uberlândia</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Não tem tempo de trazer seu pet? Nosso <strong>Táxi Dog no Alto Umuarama</strong> busca seu melhor amigo com segurança e conforto no veículo adaptado.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="w-20 h-20 bg-primary text-white rounded-[2rem] flex items-center justify-center shrink-0">
                  <Calendar size={36} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4">Assinaturas e Pacotes</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Economize e garanta a agenda do seu pet com nossos <strong>pacotes de banho mensal ou anual</strong>. Prioridade no agendamento e descontos exclusivos.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[4rem] border border-white/10">
              <h3 className="text-3xl font-bold mb-8 text-center">Peça seu Orçamento</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl">
                  <Heart className="text-primary" />
                  <span>Petisco incluso após cada banho!</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl">
                  <MapPin className="text-third" />
                  <span>Atendimento: Alto Umuarama e proximidades.</span>
                </div>
              </div>
              <a
                href="https://wa.me/5534997622017"
                target="_blank"
                className="mt-10 block w-full bg-primary text-white text-center py-5 rounded-3xl font-bold text-xl hover:bg-primary/90 transition-all shadow-2xl"
              >
                Agendar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* 8. Rodapé SEO Local */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm leading-relaxed">
            Se você mora no bairro <strong>Alto Umuarama</strong>, Residencial Grand Ville ou próximo à Av. Floriano Peixoto em <strong>Uberlândia</strong>, a Amor & Patas é sua melhor escolha. Somos especialistas em <strong>banho e tosa pet em Uberlândia</strong>, oferecendo serviços de tosa na tesoura, tosa na máquina, hidratação de pelagem e muito mais. Nossa missão é ser o <strong>pet shop de confiança</strong> para sua família, cuidando de cada cão como se fosse nosso.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;