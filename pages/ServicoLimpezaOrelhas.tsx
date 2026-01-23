import React from 'react';
import { Droplets, MessageCircle, CheckCircle2, Star, ShieldCheck, Heart, AlertCircle } from 'lucide-react';

const ServicoLimpezaOrelhas: React.FC = () => {
  const photos = [
    "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600"
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
                <span className="text-primary">Limpeza de Ouvidos</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Cuidadosa <span className="text-primary">Limpeza de Orelha de Cães</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A <strong>limpeza de orelha de cães</strong> é fundamental para prevenir otites e infecções dolorosas. Nossa <strong>limpeza de ouvido pet</strong> é feita com produtos específicos que não agridem o canal auditivo.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/5534997622017" target="_blank" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-pink-100 flex items-center gap-2 hover:bg-primary/90 transition-all transform hover:-translate-y-1">
                  <MessageCircle size={24} />
                  Agendar Limpeza Auricular
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800" alt="Limpeza de orelha de cães" className="rounded-[3rem] shadow-2xl border-8 border-white object-cover aspect-[4/3] w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Prevenção é o Melhor Remédio</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Muitas raças possuem orelhas caídas que acumulam umidade e cerúmen. A <strong>limpeza de orelha de cães</strong> frequente é a melhor forma de evitar gastos com veterinários e desconforto para o animal. Busque sempre um <strong>pet shop limpeza de orelha</strong> qualificado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Segurança Higiênica</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Materiais descartáveis e esterilizados para cada atendimento individualizado.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 bg-third/10 text-third rounded-2xl flex items-center justify-center mb-6">
                <AlertCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inspeção Visual</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Nossos esteticistas verificam sinais de inflamação ou parasitas durante a limpeza.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Droplets size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Loções Específicas</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Produtos com PH balanceado que dissolvem o excesso de cera sem irritar.</p>
            </div>
          </div>

          <div className="bg-accent/30 rounded-[3rem] p-10 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4">
                {photos.map((url, i) => (
                  <img key={i} src={url} className="rounded-2xl h-48 w-full object-cover shadow-lg" alt="Limpeza de ouvido pet" />
                ))}
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Benefícios da Higiene Auricular</h2>
                <ul className="space-y-4">
                  {["Previne mau cheiro característico", "Evita o acúmulo de ácaros e bactérias", "Reduz o desconforto e coceiras", "Monitoramento de saúde auditiva", "Procedimento indolor e relaxante"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Dúvidas Frequentes</h2>
            <p className="text-gray-600">Perguntas comuns sobre higienização de orelhas em pets</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Com que frequência devo limpar a orelha do meu cachorro?",
                a: "A frequência ideal varia conforme a raça e a produção de cerúmen. Geralmente, uma vez por semana ou quinzenalmente é o recomendado. Cães com orelhas caídas (como Cocker e Golden) precisam de atenção redobrada."
              },
              {
                q: "A limpeza de ouvido dói?",
                a: "Não! Se o ouvido estiver saudável, a limpeza é indolor e pode até ser relaxante. Caso o pet sinta dor, é um sinal de alerta para possíveis inflamações, e nosso especialista irá avisá-lo imediatamente."
              },
              {
                q: "Vocês usam pinça para tirar pelos de dentro do ouvido?",
                a: "A remoção de pelos excessivos do canal auditivo (depilação) é feita apenas quando necessário e com extremo cuidado, pois em alguns casos pode causar irritação. Avaliamos cada animal individualmente."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Saúde começa pela higiene!</h2>
          <p className="text-gray-400 text-lg mb-10">Agende a <strong>limpeza de orelha de cães</strong> e garanta o bem-estar do seu pet hoje mesmo.</p>
          <a href="https://wa.me/5534997622017" target="_blank" className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-primary/90 transition-all inline-flex items-center gap-3">
            <MessageCircle size={28} />
            Agendar Horário
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicoLimpezaOrelhas;