import React from 'react';
import { Bath, Scissors, Dog, Sparkles, Calendar, Heart, ShieldAlert, ShoppingBag, Check, Ruler } from 'lucide-react';

const HomeServicesDetailed: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Dobra 1: O que vem no Banho (Combo) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Padrão de Qualidade</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">O que seu pet recebe <br /> em <span className="text-primary">todo Banho e Tosa no nosso Pet Shop</span></h3>
          </div>

          <div className="bg-accent/50 rounded-[3rem] p-8 md:p-12 border border-pink-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Bath size={150} className="text-primary" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { title: "Banho Premium", icon: <Bath />, desc: "Produtos hipoalergênicos e secagem cuidadosa." },
                { title: "Corte de Unha", icon: <Check />, desc: "Para conforto e saúde das patinhas." },
                { title: "Tosa Higiênica", icon: <Scissors />, desc: "Higiene essencial em áreas críticas." },
                { title: "Limpeza de Ouvido", icon: <Sparkles />, desc: "Remoção de cerúmen e prevenção de otites." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm border border-pink-50">
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-500 italic text-sm">
              * Itens inclusos sem custo adicional em todos os nossos serviços de banho.
            </p>
          </div>
        </div>

        {/* Dobra 2: Serviços de Estética e Comodidade */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
              <Scissors className="text-primary" /> Estética Especializada
            </h3>
            <div className="space-y-4">
              {[
                { name: "Banho e Tosa (Tesoura)", tag: "Premium" },
                { name: "Banho e Tosa (Máquina)", tag: "Prático" },
                { name: "Tosa Padrão da Raça", tag: "Especialista" },
                { name: "Banho Medicamentoso", tag: "Cuidados" },
                { name: "Escovação de Dente", tag: "Saúde Bucal" }
              ].map((s, i) => (
                <div key={i} className="flex justify-between items-center p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                  <span className="font-bold text-gray-800">{s.name}</span>
                  <span className="text-xs font-bold px-3 py-1 bg-white rounded-full text-primary border border-pink-100 uppercase tracking-tighter">
                    {s.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
              <Dog className="text-third" /> Comodidade e Carinho
            </h3>
            <div className="grid gap-6">
              <div className="bg-third/10 p-6 rounded-3xl border border-third/20 flex gap-5 items-center">
                <div className="w-16 h-16 bg-third text-white rounded-2xl flex items-center justify-center shrink-0">
                  <Dog size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">Táxi Dog</h4>
                  <p className="text-gray-600 text-sm">Táxi Dog em Uberlândia e Alto Umuarama: Buscamos e levamos seu pet com segurança e conforto.</p>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-3xl border border-pink-100 flex gap-5 items-center">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0">
                  <Calendar size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">Planos de Assinatura</h4>
                  <div className="flex gap-3 mt-2">
                    <span className="bg-white text-primary text-xs font-bold px-3 py-1 rounded-full border border-pink-200">PACOTE MENSAL</span>
                    <span className="bg-white text-primary text-xs font-bold px-3 py-1 rounded-full border border-pink-200">PACOTE ANUAL</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex gap-5 items-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center shrink-0">
                  <Ruler size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">Atendimento a Porte Grande</h4>
                  <p className="text-gray-600 text-sm">Estrutura preparada e equipe especializada para receber cães de grande porte (Golden, Bernese, etc) com segurança.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dobra 3: Mimos e Saúde (Produtos Separados) */}
        <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 p-10 opacity-10">
            <ShoppingBag size={120} />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-3xl font-extrabold mb-4">Mimos e Saúde</h3>
              <p className="text-gray-400">Pequenos cuidados que fazem uma grande diferença na rotina do seu melhor amigo.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 w-48 text-center">
                <Heart className="mx-auto mb-3 text-primary" />
                <h4 className="font-bold text-lg mb-1">Petisco</h4>
                <p className="text-xs text-gray-400">Recompensa após o banho</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 w-48 text-center">
                <ShieldAlert className="mx-auto mb-3 text-third" />
                <h4 className="font-bold text-lg mb-1">Antipulga</h4>
                <p className="text-xs text-gray-400">Remédio para carrapato</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeServicesDetailed;