import React from 'react';
import { Sparkles, MessageCircle, CheckCircle2, Star, Clock, ShieldCheck, Heart } from 'lucide-react';

const CronogramaPelagemTosa: React.FC = () => {
  const photos = [
    "/images/2/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_19.webp",
    "/images/2/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_20.webp",
    "/images/2/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_22.webp",
    "/images/2/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_23.webp"
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="relative py-16 lg:py-24 bg-accent/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex mb-6 text-sm font-medium text-gray-500">
                <span className="hover:text-primary cursor-pointer">Serviços</span>
                <span className="mx-2">/</span>
                <span className="text-primary">Escovação Pet</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Especialista em <span className="text-primary">Cronograma de Pelagem e Tosa</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                O <strong>cronograma de pelagem e tosa</strong> é essencial para a saúde da pele e beleza da pelagem. No <strong>pet shop</strong> da Amor & Patas, utilizamos técnicas de desembolo e remoção de subpelo (cardagem) para garantir o conforto do seu pet.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/5534997622017" target="_blank" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-pink-100 flex items-center gap-2 hover:bg-primary/90 transition-all transform hover:-translate-y-1">
                  <MessageCircle size={24} />
                  Agendar Cronograma
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <img src="/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_12.webp" alt="Serviço de escovação para cães" className="rounded-[3rem] shadow-2xl border-8 border-white w-[90%] h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Pelo Saudável e sem Nós</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              O serviço de <strong>cronograma de pelagem</strong> remove pelos mortos, prevenindo problemas dermatológicos e mantendo a casa limpa. Nossa <strong>equipe</strong> profissional utiliza os melhores equipamentos do mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Brilho Intenso</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Distribuição da oleosidade natural da pele para um pelo muito mais brilhoso e sedoso.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 bg-third/10 text-third rounded-2xl flex items-center justify-center mb-6">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Saúde da Pele</h3>
              <p className="text-gray-500 text-sm leading-relaxed">A massagem durante o <strong>tratamento</strong> estimula a circulação sanguínea periférica.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prevenção de Nós</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Evitamos o acúmulo de sujeira e a formação de nós dolorosos através da manutenção frequente.</p>
            </div>
          </div>

          <div className="bg-accent/30 rounded-[3rem] p-10 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Por que contratar nosso <span className="text-primary">Cronograma</span>?</h2>
                <ul className="space-y-4">
                  {["Redução de pelos espalhados pela casa", "Prevenção de dermatites e alergias", "Desembolo humanizado e sem dor", "Uso de fluidos desembaraçadores premium", "Profissionais pacientes e cuidadosos"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {photos.map((url, i) => (
                  <img key={i} src={url} className="rounded-2xl h-64 w-full object-cover object-top shadow-lg hover:scale-105 transition-transform" alt="Escovação pet" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Mantenha seu pet impecável!</h2>
          <p className="text-gray-400 text-lg mb-10">Agende agora o <strong>cronograma de pelagem e tosa</strong> e veja a diferença na saúde do seu melhor amigo.</p>
          <a href="https://wa.me/5534997622017" target="_blank" className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-primary/90 transition-all flex inline-flex items-center gap-3">
            <MessageCircle size={28} />
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </div>
  );
};

export default CronogramaPelagemTosa;