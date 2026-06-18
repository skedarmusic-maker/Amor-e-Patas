import React from 'react';
import { Truck, ShieldCheck, Heart, MessageCircle, CheckCircle2, Star, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSchema from '../components/ServiceSchema';

const ServicoTaxiDog: React.FC = () => {
  const photos = [
    "/images/taxdog/Cão_grande_serviço_taxi_dog_202606181242.jpeg",
    "/images/taxdog/Cão_grande_serviço_taxi_dog_202606181243.jpeg",
    "/images/taxdog/Cão_grande_serviço_taxi_dog_202606181243 (1).jpeg",
    "/images/taxdog/com_base_no_modelo_do_202606181242.jpeg"
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      <SEO
        title="Táxi Dog para Cães de Grande Porte em Uberlândia | Amor & Patas"
        description="Precisa de transporte para cães grandes em Uberlândia? Nosso Táxi Dog possui veículo adaptado, climatizado e seguro para raças grandes no Alto Umuarama. Agende!"
        canonical="https://amorepataspetshop.com.br/servico-taxi-dog"
        keywords="táxi dog uberlândia, transporte de cão grande, transporte pet cão grande porte, táxi pet uberlândia, transporte de cachorro uberlândia, táxi dog alto umuarama, amor e patas táxi dog, pet shop uberlândia"
        ogImage="https://amorepataspetshop.com.br/images/taxdog/Cão_grande_serviço_taxi_dog_202606181242.jpeg"
      />
      
      <ServiceSchema
        serviceName="Táxi Dog para Cães de Grande Porte"
        description="Serviço de transporte pet especializado e seguro para cães de grande porte em Uberlândia. Veículo adaptado com rampa de acesso, caixas higienizadas, cinto de segurança pet e ar-condicionado."
        url="https://amorepataspetshop.com.br/servico-taxi-dog"
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
        serviceType="Pet Transportation - Táxi Dog"
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-accent/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex mb-6 text-sm font-medium text-gray-500">
                <span className="hover:text-primary cursor-pointer">Serviços</span>
                <span className="mx-2">/</span>
                <span className="text-primary">Táxi Dog Grande Porte</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Táxi Dog para <span className="text-primary">Cães de Grande Porte</span> em Uberlândia
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sabemos o desafio que é transportar um cão de grande porte com segurança. Nosso serviço de <strong>Táxi Dog em Uberlândia</strong> conta com veículo totalmente adaptado, climatizado e seguro para levar e trazer o seu melhor amigo de qualquer tamanho ao nosso pet shop.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/5534997622017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-pink-100 flex items-center gap-2 hover:bg-primary/90 transition-all transform hover:-translate-y-1"
                >
                  <MessageCircle size={24} />
                  Solicitar Táxi Dog
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <img 
                src="/images/taxdog/Cão_grande_serviço_taxi_dog_202606181242.jpeg" 
                alt="Táxi Dog para cães de grande porte em Uberlândia" 
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Transporte Seguro, Confortável e sem Estresse</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Desenvolvemos um serviço focado nas necessidades de raças grandes como Golden Retriever, Labrador, Rottweiler, Pastor Alemão e Bernese. Garantimos que a viagem até a <strong>Amor & Patas</strong> seja tranquila e agradável.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Veículo Adaptado</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Espaço interno amplo com rampas de acesso para que cães idosos ou pesados subam sem fazer esforço ou se machucarem.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 bg-third/10 text-third rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Segurança Máxima</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Uso de caixas de transporte super dimensionadas ou cintos de segurança peitorais específicos para animais de grande porte.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ambiente Climatizado</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Cabine com ar-condicionado constante para evitar o superaquecimento, garantindo o conforto térmico de pets peludos.</p>
            </div>
          </div>

          {/* Por que Escolher */}
          <div className="bg-accent/30 rounded-[3rem] p-10 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Diferenciais do nosso <span className="text-primary">Táxi Pet</span></h2>
                <ul className="space-y-4">
                  {[
                    "Motorista treinado em manejo de cães de grande porte",
                    "Higienização e desinfecção completa do veículo a cada viagem",
                    "Rampa de acesso que evita impacto nas articulações do pet",
                    "Veículo com rastreamento e ar-condicionado ligado",
                    "Pontualidade e comunicação direta pelo WhatsApp",
                    "Atendimento nos bairros Alto Umuarama, Grand Ville e proximidades"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {photos.map((url, i) => (
                  <img 
                    key={i} 
                    src={url} 
                    className="rounded-2xl h-48 w-full object-cover shadow-lg hover:scale-105 transition-transform" 
                    alt={`Foto serviço taxi dog caes grandes ${i + 1}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Dúvidas sobre o Táxi Dog</h2>
            <p className="text-gray-600">Perguntas frequentes sobre o transporte de cães grandes.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Vocês transportam cães de até quantos quilos?",
                a: "Não temos limite rígido de peso! Nosso veículo possui amplo espaço livre e rampa reforçada projetada para suportar cães gigantes como Bernese, São Bernardo e Mastiff com total estabilidade."
              },
              {
                q: "Como é garantida a segurança do pet dentro do carro?",
                a: "Eles viajam em caixas de transporte rígidas de tamanho gigante (tamanho número 6 ou superior) ou presos a cintos de segurança peitorais específicos de alta resistência. O veículo é totalmente fechado e com divisórias de segurança."
              },
              {
                q: "Vocês buscam em qualquer bairro de Uberlândia?",
                a: "Nossa principal área de cobertura é no bairro Alto Umuarama, Grand Ville e imediações da Av. Floriano Peixoto. Para outras regiões de Uberlândia, consulte nossa equipe comercial para verificar a disponibilidade de rota e taxas de deslocamento."
              },
              {
                q: "Como o carro é higienizado?",
                a: "A saúde do seu pet é nossa prioridade. Após cada transporte, o veículo passa por uma desinfecção completa com produtos veterinários específicos (como amônia quaternária), eliminando vírus, bactérias e odores para o próximo passageiro."
              },
              {
                q: "Posso mandar meu cão sozinho ou preciso ir junto?",
                a: "O cão viaja sob a responsabilidade do nosso motorista pet-friendly treinado. Não é necessário que o tutor acompanhe a viagem. Nós mantemos contato em tempo real via WhatsApp notificando a retirada e a devolução."
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

      {/* CTA Final */}
      <section className="py-20 bg-gray-900 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Transporte VIP para o seu Gigante!</h2>
          <p className="text-gray-400 text-lg mb-10">Agende o <strong>Táxi Dog para cães de grande porte em Uberlândia</strong> e proporcione o melhor cuidado e conforto para o seu pet.</p>
          <a 
            href="https://wa.me/5534997622017" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-primary/90 transition-all inline-flex items-center gap-3"
          >
            <MessageCircle size={28} />
            Agendar Táxi Dog
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicoTaxiDog;
