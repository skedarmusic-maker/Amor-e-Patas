import React from 'react';
import { ShieldCheck, Heart, MessageCircle, CheckCircle2, Star, MapPin, Sparkles, Image as ImageIcon, Scissors, Truck } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSchema from '../components/ServiceSchema';

const PetShopUberlandia: React.FC = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <SEO
        title="Pet Shop em Uberlândia – Banho e Tosa Premium | Amor & Patas"
        description="Buscando o melhor pet shop em Uberlândia? A Amor & Patas no Alto Umuarama oferece banho e tosa humanizado, estética animal premium e táxi dog. Agende seu pet!"
        canonical="https://amorepataspetshop.com.br/pet-shop-uberlandia"
        keywords="pet shop uberlandia, pet shop em uberlândia, banho e tosa uberlandia, pet shop perto de mim, pet shop alto umuarama, estetica animal uberlandia, amor e patas uberlandia"
        ogImage="https://amorepataspetshop.com.br/images/Logo-Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet-shop-pet-shop-perto-de-mim-banho-e-tosa-Uberlandia_.webp"
      />
      
      <ServiceSchema
        serviceName="Pet Shop e Estética Animal em Uberlândia"
        description="Amor & Patas: Seu pet shop de confiança em Uberlândia no bairro Alto Umuarama. Banho e tosa, cardagem, hidratação profunda, corte de unhas e táxi dog com atendimento humanizado."
        url="https://amorepataspetshop.com.br/pet-shop-uberlandia"
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
        areaServed="Uberlândia, MG"
        serviceType="Pet Shop e Estética Animal"
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-accent/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex mb-6 text-sm font-medium text-gray-500">
                <span className="hover:text-primary cursor-pointer">Início</span>
                <span className="mx-2">/</span>
                <span className="text-primary">Pet Shop Uberlândia</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Sua Referência em <span className="text-primary">Pet Shop em Uberlândia</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Procurando por um <strong>pet shop em Uberlândia</strong> que une carinho, segurança e altíssimo padrão de atendimento? A <strong>Amor & Patas</strong> é especializada em estética animal humanizada, banho e tosa premium e cuidados que fazem seu melhor amigo se sentir em casa. Localizados estrategicamente no bairro Alto Umuarama.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/5534997622017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-pink-100 flex items-center gap-2 hover:bg-primary/90 transition-all transform hover:-translate-y-1"
                >
                  <MessageCircle size={24} />
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>
            {/* Foto Hero */}
            <div className="relative flex justify-center w-full">
              <img 
                src="/images/pagina-pet-uberlandia/pet_shop_banho_tosa_1.webp" 
                alt="Serviço de banho e tosa profissional no pet shop Amor & Patas" 
                className="rounded-[3rem] shadow-2xl border-8 border-white w-[90%] h-96 object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Por que somos o Pet Shop preferido do Alto Umuarama?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Trabalhamos com o conceito de estética animal regenerativa e livre de estresse. Cada pet é tratado individualmente, respeitando seu tempo e limitações físicas e emocionais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col h-full">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Segurança Absoluta</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">Ambiente protegido e monitorado, com protocolos rigorosos de desinfecção para evitar contaminação cruzada e proteger a saúde do seu pet.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col h-full">
              <div className="w-14 h-14 bg-third/10 text-third rounded-2xl flex items-center justify-center mb-6">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manejo Amigo do Pet</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">Técnicas de reforço positivo para cães e gatos medrosos ou idosos. Não utilizamos métodos punitivos ou de contenção forçada.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col h-full">
              <div className="w-14 h-14 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cosmética de Alto Padrão</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">Shampoos e condicionadores com pH fisiológico balanceado para pets, além de tratamentos hipoalergênicos e hidratações profundas.</p>
            </div>
          </div>

          {/* O que oferecemos */}
          <div className="bg-accent/30 rounded-[3rem] p-10 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Nossos Serviços Especializados</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                      <Scissors size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Banho e Tosa em Uberlândia</h4>
                      <p className="text-gray-500 text-sm">Cortes na máquina e tesoura seguindo padrões de raça ou tosas higiênicas e estéticas completas.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-third/10 text-third rounded-xl flex items-center justify-center shrink-0">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Estética Higiênica Completa</h4>
                      <p className="text-gray-500 text-sm">Corte de unhas seguro, limpeza detalhada das orelhas e escovação de dentes para a saúde do seu pet.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                      <Truck size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Táxi Dog Próprio (Inclusive G. Porte)</h4>
                      <p className="text-gray-500 text-sm">Buscamos e levamos com veículo totalmente adaptado com rampa e climatização no Alto Umuarama.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Galeria de Fotos */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { url: "/images/pagina-pet-uberlandia/pet_shop_banho_tosa_1.webp", alt: "Estética animal Amor & Patas em Uberlândia", pos: "object-cover" },
                  { url: "/images/pagina-pet-uberlandia/pet_shop_banho_tosa_2.webp", alt: "Manejo humanizado no banho e tosa", pos: "object-cover object-[center_30%]" },
                  { url: "/images/pagina-pet-uberlandia/pet_shop_banho_tosa_3.webp", alt: "Fachada do Pet Shop Amor & Patas", pos: "object-cover" },
                  { url: "/images/pagina-pet-uberlandia/fachada_pet_shop_uberlandia.jpeg", alt: "Cãozinho shih tzu na Amor & Patas", pos: "object-cover object-[center_30%]" }
                ].map((img, i) => (
                  <img 
                    key={i} 
                    src={img.url} 
                    alt={img.alt} 
                    className={`rounded-2xl h-40 w-full ${img.pos} shadow-lg hover:scale-105 transition-transform`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização Estratégica SEO Local */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Fácil Acesso em Uberlândia</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Estamos localizados na <strong>Av. Floriano Peixoto, 5237 (Loja 14)</strong>, no bairro <strong>Alto Umuarama em Uberlândia</strong>. O pet shop fica situado no Mall Alto Umuarama, oferecendo um espaço moderno, seguro, com <strong>estacionamento facilitado</strong> para você deixar e buscar seu pet com tranquilidade e sem pressa.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <MapPin className="text-primary flex-shrink-0" size={24} />
                  <span>Av. Floriano Peixoto, 5237 - Loja 14, Uberlândia - MG</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-third flex-shrink-0" size={24} />
                  <span>Próximo ao aeroporto e principais vias da região</span>
                </div>
              </div>
            </div>
            {/* Fachada do Local */}
            <div className="relative flex justify-center">
              <img 
                src="/images/pagina-pet-uberlandia/pet_shop_banho_tosa_3.webp" 
                alt="Fachada do pet shop Amor & Patas no Mall Alto Umuarama em Uberlândia" 
                className="rounded-[3rem] shadow-2xl border-8 border-white w-full h-80 object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Pet Shop Uberlândia */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Dúvidas sobre o Pet Shop</h2>
            <p className="text-gray-600">Perguntas comuns sobre cuidados estéticos e banho e tosa em Uberlândia.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Qual o horário de funcionamento do pet shop?",
                a: "Funcionamos de segunda a sexta, das 07:30 às 18:20, e aos sábados das 07:30 às 12:30. Trabalhamos exclusivamente sob agendamento para evitar aglomerações e garantir a melhor experiência para os animais."
              },
              {
                q: "Vocês atendem todas as raças de cães em Uberlândia?",
                a: "Sim! Somos capacitados para atender cães de todos os portes e temperamentos — desde raças toy como Spitz Alemão, Shih-Tzu e Yorkshire, até cães de grande porte como Golden Retriever, Labrador e Bernese Mountain Dog."
              },
              {
                q: "Qual o valor do banho e tosa na Amor & Patas?",
                a: "Os valores variam conforme o porte do animal, o tipo de pelagem (curta, longa, dupla) e o estado geral dos pelos (presença de nós). Entre em contato via WhatsApp para podermos fornecer um orçamento preciso e agendar o horário do seu melhor amigo."
              },
              {
                q: "Como funciona o serviço de Táxi Dog no Alto Umuarama?",
                a: "Buscamos o seu pet na sua residência e o levamos de volta em segurança após a finalização do serviço estético. Nosso carro possui climatização permanente e caixas de transporte seguras e higienizadas após cada viagem. Atendemos o Alto Umuarama, Grand Ville e redondezas."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 px-8">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gray-900 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Traga o seu melhor amigo para o melhor Pet Shop de Uberlândia!</h2>
          <p className="text-gray-400 text-lg mb-10">Agende agora a sessão de estética ou o banho e tosa do seu pet com toda a segurança e cuidado que ele merece.</p>
          <a 
            href="https://wa.me/5534997622017" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-primary/90 transition-all inline-flex items-center gap-3"
          >
            <MessageCircle size={28} />
            Agendar Banho e Tosa
          </a>
        </div>
      </section>
    </div>
  );
};

export default PetShopUberlandia;
// Forçando novo deploy após erro de rede FTP da Hostinger

