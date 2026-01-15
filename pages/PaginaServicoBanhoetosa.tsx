import React from 'react';
import { Bath, Scissors, Sparkles, MessageCircle, CheckCircle2, Star, Clock, ShieldCheck, Droplets, Heart } from 'lucide-react';

const PaginaServicoBanhoetosa: React.FC = () => {
  const photos = [
    "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto-de-mim-banho-e-tosa-Uberlandia_Counter_4.webp",
    "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_7.webp",
    "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_12.webp",
    "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_13.webp"
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Hero Section SEO Focused */}
      <section className="relative py-16 lg:py-24 bg-accent/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex mb-6 text-sm font-medium text-gray-500">
                <span className="hover:text-primary">Serviços</span>
                <span className="mx-2">/</span>
                <span className="text-primary">Banho e Tosa</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Especialistas em <span className="text-primary">Banho e Tosa</span> no Alto Umuarama
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Procurando pelo melhor <strong>banho e tosa em Uberlândia</strong>? A Amor & Patas é a sua referência no bairro <strong>Alto Umuarama</strong>. Oferecemos um cuidado humanizado com produtos de linha profissional para garantir a saúde e a beleza do seu pet.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5534997622017"
                  target="_blank"
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-pink-100 flex items-center gap-2 hover:bg-primary/90 transition-all transform hover:-translate-y-1"
                >
                  <MessageCircle size={24} />
                  Agendar por WhatsApp
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_6.webp"
                alt="Serviço de banho e tosa pet em Uberlândia"
                className="rounded-[3rem] shadow-2xl border-8 border-white w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-pink-50 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                  <Heart size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Cuidado</p>
                  <p className="text-xl font-bold text-gray-900">Humanizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: O que está incluso (Inclusões Padrão) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Qualidade Sem Custos Extras</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Incluso em <span className="text-primary">Todo Banho</span></h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Não cobramos taxas adicionais por cuidados básicos essenciais. Aqui, a saúde do seu pet vem em primeiro lugar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Corte de Unha</h4>
              <p className="text-gray-500 text-sm">Realizado por profissionais experientes para garantir o conforto e evitar problemas de postura.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-third mb-6">
                <Scissors size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Tosa Higiênica</h4>
              <p className="text-gray-500 text-sm">Limpeza das patinhas, região íntima e barriga para manter o pet sempre limpo e livre de odores.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6">
                <Droplets size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Limpeza de Ouvidos</h4>
              <p className="text-gray-500 text-sm">Higienização auricular cuidadosa para prevenir o acúmulo de cera e possíveis inflamações.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Tipos de Banho e Produtos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-8 leading-tight">
                Opções de <span className="text-primary">Banho</span> para cada necessidade
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-lg text-primary flex items-center gap-2 mb-2">
                    <Bath size={20} /> Banho Simples (Premium)
                  </h4>
                  <p className="text-gray-500 text-sm">Ideal para manutenção semanal. Limpeza profunda com shampoo e condicionador de alta linha.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-lg text-primary flex items-center gap-2 mb-2">
                    <ShieldCheck size={20} /> Banho Medicamentoso
                  </h4>
                  <p className="text-gray-500 text-sm">Tratamento auxiliar para problemas de pele, utilizando produtos recomendados ou fornecidos pelo cliente.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-lg text-primary flex items-center gap-2 mb-2">
                    <Droplets size={20} /> Banho Antipulgas
                  </h4>
                  <p className="text-gray-500 text-sm">Proteção extra contra parasitas externos, garantindo o bem-estar imediato do seu pet.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-accent text-primary rounded-2xl flex items-center justify-center mb-8">
                <Sparkles size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Segurança com <br /> Produtos de Elite</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Em nosso pet shop no <strong>Alto Umuarama</strong>, utilizamos apenas insumos de marcas líderes de mercado. Todos os nossos produtos possuem:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  Fórmulas Hipoalergênicas
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  pH Neutro balanceado para cães e gatos
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  Fragrâncias suaves e duradouras
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  Hidratação profunda da pelagem
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Orientação sobre Tosa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent/30 rounded-[3rem] p-10 lg:p-16 border border-pink-100">
            <div className="text-center mb-12">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Dicas do Especialista</h2>
              <h3 className="text-3xl font-extrabold text-gray-900">Quando tosar e qual a tosa ideal?</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Clock size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Quando Tosar?</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A frequência ideal varia conforme a raça e o tipo de pelagem. Em geral, recomenda-se a tosa higiênica mensalmente para manter a limpeza. Para tosas completas, o intervalo costuma ser de 45 a 60 dias, garantindo que o pelo não embole e a pele respire adequadamente, principalmente em dias quentes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-third/10 rounded-xl text-third">
                    <Scissors size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Qual a Tosa Ideal?</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A tosa ideal une estética e bem-estar. Para cães de pelo longo (como Shih-tzu e Yorkshire), a <strong>Tosa Bebê</strong> facilita a manutenção e deixa uma aparência jovial. Para raças de pelagem dupla (como Spitz), a <strong>Tosa Trimming</strong> na tesoura é fundamental para não prejudicar o crescimento do pelo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Produtos e Carrossel Animado */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-third font-bold uppercase tracking-widest text-sm mb-4">Exclusividade e Qualidade</h2>
          <h3 className="text-3xl font-extrabold mb-6">Tratamento VIP com Produtos Premium</h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Trabalhamos exclusivamente com linhas premium desenvolvidas especificamente para a fisiologia canina. Desde shampoos hipoalergênicos até condicionadores de alto brilho, cada produto é escolhido para nutrir, proteger e realçar a beleza natural do seu pet, garantindo segurança total e resultados deslumbrantes.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden py-10">
          <style dangerouslySetInnerHTML={{
            __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `
          }} />

          <div className="flex gap-8 w-max animate-marquee">
            {/* Original Items */}
            {[
              "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_1.png",
              "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_2.png",
              "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_3.png",
              "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto-de-mim-banho-e-tosa-Uberlandia_Counter_4.webp"
            ].map((src, i) => (
              <div key={i} className="w-80 h-96 flex-shrink-0 relative group">
                <img
                  src={src}
                  alt={`Pet Shop Uberlândia Premium ${i}`}
                  className="w-full h-full object-cover rounded-3xl border-4 border-white/10 group-hover:border-primary/50 transition-all duration-300 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold flex items-center gap-2">
                    <Sparkles className="text-primary" size={20} />
                    Resultado Premium
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicate Items for Infinite Loop */}
            {[
              "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_1.png",
              "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_2.png",
              "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_3.png",
              "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto-de-mim-banho-e-tosa-Uberlandia_Counter_4.webp"
            ].map((src, i) => (
              <div key={`dup-${i}`} className="w-80 h-96 flex-shrink-0 relative group">
                <img
                  src={src}
                  alt={`Pet Shop Uberlândia Premium ${i}`}
                  className="w-full h-full object-cover rounded-3xl border-4 border-white/10 group-hover:border-primary/50 transition-all duration-300 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold flex items-center gap-2">
                    <Sparkles className="text-primary" size={20} />
                    Resultado Premium
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria e CTA Final */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              {photos.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  className="rounded-2xl h-48 w-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                  alt="Resultado de banho e tosa em pet shop Uberlândia"
                />
              ))}
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Pronto para ver seu <span className="text-primary">Pet Impecável</span>?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nossa agenda no <strong>Alto Umuarama</strong> costuma lotar rápido. Garanta agora o horário do seu melhor amigo e proporcione a ele uma experiência de spa completa.
              </p>
              <a
                href="https://wa.me/5534997622017"
                target="_blank"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-primary/90 transition-all transform hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                Agendar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé SEO */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-xs leading-relaxed">
            A Amor & Patas é referência em <strong>estética animal em Uberlândia</strong>. Se você procura por <strong>banho e tosa Uberlândia</strong> próximo ao Aeroporto, Residencial Grand Ville ou Alto Umuarama, nossa equipe está pronta para te atender. Especialistas em banho medicamentoso, banho antipulgas e finalização premium para todas as raças de cães e gatos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PaginaServicoBanhoetosa;