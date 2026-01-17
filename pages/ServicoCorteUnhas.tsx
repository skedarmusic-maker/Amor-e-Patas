import React from 'react';
import { Ruler, MessageCircle, CheckCircle2, Star, ShieldCheck, Heart, Scissors } from 'lucide-react';

const ServicoCorteUnhas: React.FC = () => {
  const photos = [
    "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop-perto-de-mim-banho-e-tosa-Uberlandia_Counter_8.webp",
    "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_13.webp",
    "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet-shop-pet-shop-perto-de-mim-banho-e-tosa-Uberlandia_Counter.webp",
    "/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_7.webp"
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
                <span className="text-primary">Corte de Unhas</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Seguro <span className="text-primary">Corte de Unha de Cães</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                O <strong>corte de unha de cães</strong> é vital para evitar problemas de locomoção e dores nas articulações. Em nosso <strong>pet shop corte de unha</strong>, realizamos o procedimento com ferramentas profissionais e calma absoluta.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/5534997622017" target="_blank" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-pink-100 flex items-center gap-2 hover:bg-primary/90 transition-all transform hover:-translate-y-1">
                  <MessageCircle size={24} />
                  Agendar Manicure Pet
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <img src="/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_11.webp" alt="Corte de unhas pet shop" className="rounded-[3rem] shadow-2xl border-8 border-white w-[85%] h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Conforto a cada passo</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Unhas muito longas podem se curvar e machucar as almofadas das patas. Nosso <strong>corte de unhas pet</strong> inclui lixamento opcional para evitar que o pet arranhe pisos ou móveis, garantindo um <strong>corte de unha de cães</strong> perfeito.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Ruler size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Medição Técnica</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Respeitamos a "veia" da unha, cortando apenas o necessário para evitar sangramentos e dor.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 bg-third/10 text-third rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ferramentas de Ponta</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Alicates e lixas elétricas de silêncio absoluto para não assustar o animal.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Star size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Paciência Infinita</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Técnicas de reforço positivo para que o pet se acostume e não tenha medo do procedimento.</p>
            </div>
          </div>

          <div className="bg-accent/30 rounded-[3rem] p-10 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Por que é importante?</h2>
                <ul className="space-y-4">
                  {["Previne inflamações nas patas", "Evita desvios na coluna e postura", "Reduz barulho de 'clique' no piso", "Protege seus móveis e estofados", "Garante o conforto ao caminhar"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {photos.map((url, i) => (
                  <img key={i} src={url} className="rounded-2xl h-64 w-full object-cover object-top shadow-lg hover:scale-105 transition-transform" alt="Corte de unha pet" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Passos firmes e sem dor!</h2>
          <p className="text-gray-400 text-lg mb-10">Agende o <strong>corte de unha de cães</strong> e proteja a saúde das patas do seu pet.</p>
          <a href="https://wa.me/5534997622017" target="_blank" className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-primary/90 transition-all inline-flex items-center gap-3">
            <MessageCircle size={28} />
            Agendar agora
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicoCorteUnhas;