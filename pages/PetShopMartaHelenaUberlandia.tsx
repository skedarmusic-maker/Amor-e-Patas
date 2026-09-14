import React from 'react';
import { ShieldCheck, Heart, MessageCircle, CheckCircle2, MapPin, Sparkles, Scissors, Truck, Clock, Award, Star, Droplets, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSchema from '../components/ServiceSchema';
import FAQSchema from '../components/FAQSchema';
import { Link } from 'react-router-dom';

const PetShopMartaHelenaUberlandia: React.FC = () => {
  const faqList = [
    {
      question: "O Táxi Dog da Amor & Patas atende no Bairro Marta Helena?",
      answer: "Sim! Atendemos toda a extensão do Bairro Marta Helena com nossa rota de Táxi Dog. Buscamos o animal no conforto da sua residência e o levamos de volta assim que o procedimento estiver concluído."
    },
    {
      question: "Qual o diferencial do banho e tosa da Amor & Patas em relação a outros pet shops?",
      answer: "Trabalhamos com o método de atendimento humanizado. Não utilizamos sedativos, os produtos são dermatologicamente testados para cães e gatos, e os animais são tratados com reforço positivo, minimizando qualquer ansiedade."
    },
    {
      question: "Vocês realizam tosa na tesoura específica de raça no Marta Helena?",
      answer: "Sim, somos especialistas em tosa na tesoura padrão para Spitz Alemão (Lulu da Pomerânia), Shih Tzu, Poodle, Maltês, Bichon Frisé e outras raças que necessitam de acabamento manual sem uso de máquina no subpelo."
    },
    {
      question: "Como faço para agendar um horário para o Bairro Marta Helena?",
      answer: "O agendamento é simples e rápido diretamente pelo nosso WhatsApp (34) 99762-2017. Basta nos informar a raça do seu pet, o serviço desejado e se precisará do serviço de busca Táxi Dog."
    }
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      <SEO
        title="Pet Shop e Banho e Tosa no Bairro Marta Helena Uberlândia | Amor & Patas"
        description="Procurando banho e tosa no Bairro Marta Helena em Uberlândia? A Amor & Patas oferece estética animal humanizada, pet spa e Táxi Dog com busca no seu endereço. Agende!"
        canonical="https://amorepataspetshop.com.br/pet-shop-bairro-marta-helena-uberlandia"
        keywords="pet shop bairro marta helena uberlândia, banho e tosa marta helena uberlandia, taxi dog marta helena uberlandia, pet shop perto de mim marta helena, banho e tosa a domicilio marta helena, pet spa marta helena"
        ogImage="https://amorepataspetshop.com.br/images/Logo-Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet-shop-pet-shop-perto-de-mim-banho-e-tosa-Uberlandia_.webp"
      />

      <ServiceSchema
        serviceName="Pet Shop e Banho e Tosa no Bairro Marta Helena Uberlândia"
        description="Centro de estética animal humanizado, banho e tosa e serviço de Táxi Dog para o Bairro Marta Helena em Uberlândia. Cuidado carinhoso e seguro para cães e gatos."
        url="https://amorepataspetshop.com.br/pet-shop-bairro-marta-helena-uberlandia"
        provider={{
          name: "Amor & Patas Pet Shop e Estética Animal",
          url: "https://amorepataspetshop.com.br",
          telephone: "+5534997622017",
          address: {
            streetAddress: "Av. Floriano Peixoto, 5237 - Loja 14",
            addressLocality: "Uberlândia",
            addressRegion: "MG",
            postalCode: "38405-373"
          }
        }}
        areaServed="Bairro Marta Helena, Uberlândia - MG"
        serviceType="Pet Shop e Estética Animal"
      />

      <FAQSchema items={faqList} id="faq-schema-marta-helena" />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-accent/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex mb-6 text-sm font-medium text-gray-500">
                <Link to="/" className="hover:text-primary">Início</Link>
                <span className="mx-2">/</span>
                <Link to="/pet-shop-uberlandia" className="hover:text-primary">Uberlândia</Link>
                <span className="mx-2">/</span>
                <span className="text-primary font-bold">Bairro Marta Helena</span>
              </nav>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin size={14} />
                Atendimento no Bairro Marta Helena
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Pet Shop e Banho e Tosa no <span className="text-primary">Bairro Marta Helena</span> em Uberlândia
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mora no <strong>Bairro Marta Helena</strong> e procura um banho e tosa diferenciado para o seu pet? A <strong>Amor & Patas</strong> é o centro de estética animal referência na região da Av. Floriano Peixoto. Oferecemos manejo humanizado, tosa na tesoura, pet spa e a facilidade do <strong>Táxi Dog com busca e entrega no Marta Helena</strong>.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5534997622017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-pink-100 flex items-center gap-2 hover:bg-primary/90 transition-all transform hover:-translate-y-1"
                >
                  <MessageCircle size={24} />
                  Agendar pelo WhatsApp
                </a>
                <Link
                  to="/servico-taxi-dog"
                  className="bg-white border-2 border-primary/20 text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/5 transition-all flex items-center gap-2"
                >
                  <Truck size={22} />
                  Pedir Táxi Dog
                </Link>
              </div>
            </div>

            {/* Foto Hero */}
            <div className="relative flex justify-center w-full">
              <img
                src="/images/pagina-pet-uberlandia/pet_shop_banho_tosa_2.webp"
                alt="Banho e tosa carinhoso para pets do Bairro Marta Helena em Uberlândia"
                className="rounded-[3rem] shadow-2xl border-8 border-white w-[90%] h-96 object-cover object-[center_30%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destaque Táxi Dog Bairro Marta Helena (Alternativa Superior ao Banho a Domicílio) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-8 md:p-14 text-white">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="bg-primary text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Comodidade Sem Sujeira em Casa
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  Quer a Comodidade do Banho a Domicílio Sem Bagunça na Sua Casa?
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Com o nosso serviço de <strong>Táxi Dog no Bairro Marta Helena</strong>, você tem todo o conforto de não precisar se deslocar. Nós buscamos seu pet em veículo 100% climatizado e higienizado, realizamos o banho e tosa em nossa estrutura moderna com sopradores silenciosos e devolvemos seu melhor amigo cheiroso na sua porta.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-lg-end">
                <a
                  href="https://wa.me/5534997622017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-primary text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
                >
                  Solicitar Táxi Dog Marta Helena
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços Especializados para o Bairro Marta Helena */}
      <section className="py-20 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Estética Animal Premium</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
              Serviços de Banho e Tosa Perto do Bairro Marta Helena
            </h2>
            <p className="text-gray-600 text-lg">
              Cuidado humanizado e produtos com pH balanceado para garantir a saúde da pele e o brilho dos pelos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Scissors size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tosa na Tesoura e Máquina</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Tosa padrão de raça 100% na tesoura (especialistas em Spitz Alemão, Shih Tzu e Poodle) e tosas higiênicas precisas que respeitam a derme do animal.
                </p>
              </div>
              <Link to="/servico-banho-tosa" className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline">
                Saiba Mais sobre Tosa →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="w-14 h-14 bg-third/10 text-third rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Droplets size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pet Spa & Hidratação</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Banho relaxante com água morninha, cronograma capilar de nutrição profunda, desembolo suave de nós e cardagem para retirada de pelos mortos.
                </p>
              </div>
              <Link to="/cronograma-pelagem-tosa" className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline">
                Conhecer o Spa Pet →
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="w-14 h-14 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Higiene Completa</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Corte de unhas profissional sem sangramentos, higienização dos condutos auditivos para prevenir otites e escovação dental com produtos veterinários.
                </p>
              </div>
              <Link to="/servico-limpeza-orelhas" className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline">
                Ver Cuidados Higiênicos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que os Tutores do Marta Helena Escolhem a Amor & Patas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Localização & Estrutura</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Por Que os Moradores do Bairro Marta Helena Escolhem a Amor & Patas?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Situada na <strong>Av. Floriano Peixoto, 5237 (Loja 14)</strong>, no <strong>Mall Alto Umuarama</strong>, a Amor & Patas oferece fácil acesso para quem vem do Bairro Marta Helena e adjacências.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Banho sem Gaiolas e Sem Estresse</h4>
                    <p className="text-gray-500 text-sm">Ambiente seguro com música ambiente e toalhas esterilizadas individuais.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Acesso Rápido e Estacionamento Gratuito</h4>
                    <p className="text-gray-500 text-sm">Espaço amplo no Mall para você deixar e buscar seu pet com segurança.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Atendimento a Cães Grandes e Pequenos</h4>
                    <p className="text-gray-500 text-sm">Equipamentos preparados para atender desde portes mini até gigantes com conforto.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Galeria de Fotos */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/blog/spitz_alemao_tosa_tesoura_2.jpeg"
                alt="Tosa na tesoura profissional perto do bairro Marta Helena"
                className="rounded-3xl h-56 w-full object-cover object-[center_15%] shadow-lg"
              />
              <img
                src="/images/pagina-pet-uberlandia/fachada_pet_shop_uberlandia.jpeg"
                alt="Cãozinho feliz no pet shop Amor e Patas"
                className="rounded-3xl h-56 w-full object-cover object-[center_30%] shadow-lg"
              />
              <img
                src="/images/taxdog/cao_grande_servico_taxi_dog_202606181243.jpeg"
                alt="Transporte pet seguro no Táxi Dog para o Marta Helena"
                className="rounded-3xl h-56 w-full object-cover shadow-lg"
              />
              <img
                src="/images/pagina-pet-uberlandia/pet_shop_banho_tosa_3.webp"
                alt="Fachada Amor e Patas no Mall Alto Umuarama"
                className="rounded-3xl h-56 w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Bairro Marta Helena */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Dúvidas Frequentes - Bairro Marta Helena</h2>
            <p className="text-gray-600">Perguntas comuns sobre banho e tosa e táxi dog para o Bairro Marta Helena.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "O Táxi Dog da Amor & Patas atende no Bairro Marta Helena?",
                a: "Sim! Atendemos toda a extensão do Bairro Marta Helena com nossa rota de Táxi Dog. Buscamos o animal no conforto da sua residência e o levamos de volta assim que o procedimento estiver concluído."
              },
              {
                q: "Qual o diferencial do banho e tosa da Amor & Patas em relação a outros pet shops?",
                a: "Trabalhamos com o método de atendimento humanizado. Não utilizamos sedativos, os produtos são dermatologicamente testados para cães e gatos, e os animais são tratados com reforço positivo, minimizando qualquer ansiedade."
              },
              {
                q: "Vocês realizam tosa na tesoura específica de raça no Marta Helena?",
                a: "Sim, somos especialistas em tosa na tesoura padrão para Spitz Alemão (Lulu da Pomerânia), Shih Tzu, Poodle, Maltês, Bichon Frisé e outras raças que necessitam de acabamento manual sem uso de máquina no subpelo."
              },
              {
                q: "Como faço para agendar um horário para o Bairro Marta Helena?",
                a: "O agendamento é simples e rápido diretamente pelo nosso WhatsApp (34) 99762-2017. Basta nos informar a raça do seu pet, o serviço desejado e se precisará do serviço de busca Táxi Dog."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 px-8">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-linking Bairros Vizinhos e Uberlândia */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-primary font-bold text-xs uppercase tracking-wider bg-primary/10 px-3.5 py-1.5 rounded-full">
              Cobertura Regional
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-3">
              Também Atendemos Outros Bairros em Uberlândia
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/pet-shop-bairro-aclimacao-uberlandia"
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors flex items-center justify-between mb-2">
                Bairro Aclimação <ArrowRight size={16} className="text-primary" />
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                Banho e tosa humanizado e Táxi Dog rápido para tutores e pets residentes no Bairro Aclimação.
              </p>
            </Link>

            <Link
              to="/pet-shop-bairro-nossa-senhora-das-gracas-uberlandia"
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors flex items-center justify-between mb-2">
                Bairro N. Sra. das Graças <ArrowRight size={16} className="text-primary" />
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                Estética animal humanizada e busca e entrega no Bairro Nossa Senhora das Graças.
              </p>
            </Link>

            <Link
              to="/pet-shop-uberlandia"
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors flex items-center justify-between mb-2">
                Pet Shop Uberlândia (Geral) <ArrowRight size={16} className="text-primary" />
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                Conheça nossa estrutura completa no Mall Alto Umuarama na Av. Floriano Peixoto.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gray-900 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Agende o Banho e Tosa do Seu Pet no Bairro Marta Helena!
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Proporcione ao seu melhor amigo uma experiência de banho e tosa relaxante, com todo o carinho e segurança da Amor & Patas.
          </p>
          <a
            href="https://wa.me/5534997622017"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-primary/90 transition-all inline-flex items-center gap-3"
          >
            <MessageCircle size={28} />
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default PetShopMartaHelenaUberlandia;
