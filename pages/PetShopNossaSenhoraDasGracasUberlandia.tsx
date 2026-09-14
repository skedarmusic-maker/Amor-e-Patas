import React from 'react';
import { ShieldCheck, Heart, MessageCircle, CheckCircle2, MapPin, Sparkles, Scissors, Truck, Clock, Award, Star, Droplets } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSchema from '../components/ServiceSchema';
import { Link } from 'react-router-dom';

const PetShopNossaSenhoraDasGracasUberlandia: React.FC = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <SEO
        title="Pet Shop e Banho e Tosa no Bairro Nossa Senhora das Graças Uberlândia | Amor & Patas"
        description="Procurando banho e tosa no Bairro Nossa Senhora das Graças em Uberlândia? A Amor & Patas oferece estética animal humanizada, pet spa e Táxi Dog com busca no seu endereço. Agende!"
        canonical="https://amorepataspetshop.com.br/pet-shop-bairro-nossa-senhora-das-gracas-uberlandia"
        keywords="pet shop bairro nossa senhora das graças uberlândia, banho e tosa nossa senhora das gracas uberlandia, taxi dog nossa senhora das gracas uberlandia, pet shop perto de mim nossa senhora das gracas, pet spa nossa senhora das gracas uberlandia, banho e tosa uberlandia"
        ogImage="https://amorepataspetshop.com.br/images/Logo-Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet-shop-pet-shop-perto-de-mim-banho-e-tosa-Uberlandia_.webp"
      />

      <ServiceSchema
        serviceName="Pet Shop e Banho e Tosa no Bairro Nossa Senhora das Graças Uberlândia"
        description="Centro de estética animal humanizado, banho e tosa e serviço de Táxi Dog para o Bairro Nossa Senhora das Graças em Uberlândia. Cuidado carinhoso e seguro para cães e gatos."
        url="https://amorepataspetshop.com.br/pet-shop-bairro-nossa-senhora-das-gracas-uberlandia"
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
        areaServed="Bairro Nossa Senhora das Graças, Uberlândia - MG"
        serviceType="Pet Shop e Estética Animal"
      />

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
                <span className="text-primary font-bold">Bairro Nossa Senhora das Graças</span>
              </nav>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin size={14} />
                Atendimento no Bairro Nossa Senhora das Graças
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Pet Shop e Banho e Tosa no <span className="text-primary">Bairro Nossa Senhora das Graças</span> em Uberlândia
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mora no <strong>Bairro Nossa Senhora das Graças</strong> e busca um banho e tosa acolhedor, profissional e sem estresse para o seu pet? A <strong>Amor & Patas</strong> fica a poucos minutos do seu bairro, na Av. Floriano Peixoto (Mall Alto Umuarama), oferecendo estética animal de excelência, profissionais especialistas e o prático serviço de <strong>Táxi Dog com busca e entrega na sua porta</strong>.
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
                src="/images/pagina-pet-uberlandia/pet_shop_banho_tosa_3.webp"
                alt="Banho e tosa humanizado para pets do Bairro Nossa Senhora das Graças em Uberlândia"
                className="rounded-[3rem] shadow-2xl border-8 border-white w-[90%] h-96 object-cover object-[center_30%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destaque Táxi Dog Bairro Nossa Senhora das Graças (Praticidade sem Estresse) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-8 md:p-14 text-white">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="bg-primary text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Comodidade Total para Tutores
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  Buscamos e Entregamos seu Pet no Bairro Nossa Senhora das Graças
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Sem tempo de levar seu cão ou gato até o pet shop? Nosso <strong>Táxi Dog</strong> atende todo o Bairro Nossa Senhora das Graças com transporte 100% seguro, caixas higienizadas e motorista cuidadoso. Seu pet desfruta de um centro de estética com estrutura completa e retorna cheiroso para o aconchego do seu lar, sem bagunça em casa.
                </p>
                <div className="flex flex-wrap gap-6 pt-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Veículo adaptado e climatizado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Pontualidade no recolhimento e entrega</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Atende cães de todos os portes e gatos</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-lg-end">
                <a
                  href="https://wa.me/5534997622017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-primary text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 transform hover:-translate-y-0.5"
                >
                  Solicitar Táxi Dog no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços para o Bairro Nossa Senhora das Graças */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm tracking-wider uppercase bg-primary/10 px-4 py-1.5 rounded-full">
              Cuidados Completos
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-4">
              Serviços de Estética e Saúde Animal para o Bairro Nossa Senhora das Graças
            </h2>
            <p className="text-gray-600 text-lg">
              Oferecemos protocolos personalizados para cada tipo de pelagem, respeitando a sensibilidade e o temperamento do seu pet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Banho Terapêutico e Higiênico */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-pink-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Banho Terapêutico & Higiênico</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Utilizamos shampoos e condicionadores dermocosméticos, hipoalergênicos e veganos. Secagem em temperatura controlada para o conforto térmico do pet.
              </p>
              <Link to="/servico-banho-tosa" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
                Conhecer banho e tosa &rarr;
              </Link>
            </div>

            {/* Card 2: Tosa na Tesoura e da Raça */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-pink-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Scissors size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tosa na Tesoura & Padrão de Raça</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Especialistas em tosa higiênica, tosa bebê e acabamentos na tesoura para Spitz Alemão, Shih Tzu, Maltês, Poodle, Golden Retriever e outras raças.
              </p>
              <Link to="/cronograma-pelagem-tosa" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
                Ver cronograma de tosa &rarr;
              </Link>
            </div>

            {/* Card 3: Pet Spa e Hidratação */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-pink-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Droplets size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pet Spa & Hidratações Profundas</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Tratamentos intensivos de hidratação, nutrição de pelos ressecados, cauterização e remoção de subpelo morto para diminuir a queda de pelos em casa.
              </p>
              <Link to="/servicos" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
                Conhecer todos os serviços &rarr;
              </Link>
            </div>

            {/* Card 4: Táxi Dog Bairro Nossa Senhora das Graças */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-pink-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Táxi Dog Busca e Entrega</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Coletamos seu animal no Bairro Nossa Senhora das Graças em horários combinados e entregamos após os cuidados, com total segurança e comodidade.
              </p>
              <Link to="/servico-taxi-dog" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
                Saiba mais sobre o Táxi Dog &rarr;
              </Link>
            </div>

            {/* Card 5: Limpeza Auricular e Corte de Unhas */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-pink-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corte de Unhas e Higiene de Ouvidos</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Procedimentos realizados com máxima delicadeza para prevenir otites, acúmulo de sujidades e desconfortos nas patas do seu melhor amigo.
              </p>
              <Link to="/servico-corte-unhas" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
                Corte de unhas seguro &rarr;
              </Link>
            </div>

            {/* Card 6: Farmácia e Produtos Premium */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-pink-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pet Shop & Farmácia Veterinária</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Rações super premium, petiscos saudáveis, antipulgas, vermífugos, brinquedos e acessórios selecionados para o bem-estar do seu pet.
              </p>
              <Link to="/contato" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
                Fale com nossos consultores &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por que tutores do Nossa Senhora das Graças escolhem a Amor & Patas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-bold text-sm tracking-wider uppercase bg-primary/10 px-4 py-1.5 rounded-full">
                Manejo Humanizado
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Por que tutores do Bairro Nossa Senhora das Graças confiam na Amor & Patas?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Acreditamos que o momento do banho e tosa deve ser relaxante e positivo. Não utilizamos contenções agressivas e respeitamos o tempo e as limitações de cada pet, filhote ou idoso.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-100 text-primary flex items-center justify-center shrink-0 mt-1">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Profissionais Apaixonados e Capacitados</h3>
                    <p className="text-gray-600 text-sm">Groomers experientes que tratam cada pet com carinho, respeito e paciência.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-100 text-primary flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Toalhas Individuais Esterilizadas</h3>
                    <p className="text-gray-600 text-sm">Toalhas 100% esterilizadas e embaladas individualmente para prevenir qualquer contaminação.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-100 text-primary flex items-center justify-center shrink-0 mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Localização Estratégica com Fácil Acesso</h3>
                    <p className="text-gray-600 text-sm">No Mall Alto Umuarama (Av. Floriano Peixoto, 5237), com estacionamento gratuito e segurança.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Galeria de Fotos Reais */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/pagina-pet-uberlandia/pet_shop_banho_tosa_1.webp"
                alt="Tosa em Spitz Alemão atendido na Amor e Patas Uberlândia"
                className="rounded-3xl shadow-md h-56 w-full object-cover object-[center_15%] hover:scale-[1.02] transition-all"
              />
              <img
                src="/images/pagina-pet-uberlandia/pet_shop_banho_tosa_2.webp"
                alt="Cão feliz após banho e tosa na Amor e Patas"
                className="rounded-3xl shadow-md h-56 w-full object-cover object-[center_30%] hover:scale-[1.02] transition-all"
              />
              <img
                src="/images/pagina-pet-uberlandia/pet_shop_banho_tosa_3.webp"
                alt="Resultado de tosa na tesoura em Uberlândia"
                className="rounded-3xl shadow-md h-56 w-full object-cover object-[center_30%] hover:scale-[1.02] transition-all"
              />
              <img
                src="/images/pagina-pet-uberlandia/fachada_pet_shop_uberlandia.jpeg"
                alt="Fachada Amor e Patas Pet Shop Mall Alto Umuarama"
                className="rounded-3xl shadow-md h-56 w-full object-cover hover:scale-[1.02] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações de Clientes da Região */}
      <section className="py-20 bg-accent/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-bold text-sm tracking-wider uppercase bg-primary/10 px-4 py-1.5 rounded-full">
              Depoimentos Reais
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              O que dizem os tutores que atendemos em Uberlândia
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-50">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &ldquo;Moro bem perto e o Táxi Dog foi a melhor coisa que encontrei! Meu cãozinho volta sempre cheiroso, calmo e com a tosa perfeita. Super recomendo!&rdquo;
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Camila Silveira</h4>
                <span className="text-xs text-gray-400">Tutora do Pipoca (Shih Tzu) - Uberlândia</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-50">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &ldquo;Ambiente limpo, toalhas embaladas e funcionários super atenciosos. Tenho um cachorro de grande porte e o atendimento foi impecável do início ao fim.&rdquo;
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Rodrigo Mendonça</h4>
                <span className="text-xs text-gray-400">Tutor do Thor (Golden Retriever) - Uberlândia</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-50">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &ldquo;A tosa na tesoura do meu Spitz ficou maravilhosa, respeitando totalmente o subpelo dele. Dá pra ver o amor que eles têm pelos animais!&rdquo;
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Juliana Alencar</h4>
                <span className="text-xs text-gray-400">Tutora do Luke (Spitz Alemão) - Uberlândia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Local Bairro Nossa Senhora das Graças */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-bold text-sm tracking-wider uppercase bg-primary/10 px-4 py-1.5 rounded-full">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Perguntas Frequentes sobre Atendimento no Bairro Nossa Senhora das Graças
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50/50">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                O Táxi Dog busca meu pet no Bairro Nossa Senhora das Graças?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sim! Realizamos a busca e entrega agendada em qualquer endereço do Bairro Nossa Senhora das Graças e bairros vizinhos em Uberlândia. O transporte é feito em veículo adaptado, seguro e higienizado.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50/50">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Qual a distância da Amor & Patas até o Bairro Nossa Senhora das Graças?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Estamos localizados a menos de 5 minutos do Bairro Nossa Senhora das Graças, no Mall Alto Umuarama (Av. Floriano Peixoto, 5237). O acesso é super rápido e contamos com estacionamento fácil e gratuito na porta.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50/50">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Vocês atendem cães de grande porte e gatos?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sim! Temos infraestrutura com banheiras amplas, sopradores potentes e rampas para cães de grande e gigante porte, além de horários tranquilos para atendimento felino sem estresse.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50/50">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Como agendar o banho e tosa ou táxi dog?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Você pode agendar diretamente pelo nosso WhatsApp <a href="https://wa.me/5534997622017" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">(34) 99762-2017</a>. Nossa equipe responderá prontamente com os melhores horários para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Agende o Banho e Tosa do Seu Pet no Bairro Nossa Senhora das Graças
          </h2>
          <p className="text-pink-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Proporcione ao seu melhor amigo uma experiência de cuidado, carinho e beleza com a equipe mais dedicada de Uberlândia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5534997622017"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-10 py-5 rounded-2xl font-extrabold text-lg shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 flex items-center gap-3"
            >
              <MessageCircle size={24} />
              Falar no WhatsApp: (34) 99762-2017
            </a>
          </div>
          <p className="mt-6 text-sm text-pink-200">
            📍 Av. Floriano Peixoto, 5237 - Loja 14, Mall Alto Umuarama - Uberlândia/MG
          </p>
        </div>
      </section>
    </div>
  );
};

export default PetShopNossaSenhoraDasGracasUberlandia;
