import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Sparkles, Droplets, Ruler } from 'lucide-react';

const services = [
  {
    title: 'BANHO E TOSA',
    description: 'Estética completa com produtos premium para deixar seu pet cheiroso e com a pelagem perfeita.',
    icon: <Scissors className="w-8 h-8" />,
    color: 'bg-primary/10 text-primary',
    path: '/servico-banho-tosa'
  },
  {
    title: 'CRONOGRAMA DE PELAGEM E TOSA',
    description: 'Escovação profissional para remover pelos mortos, evitar nós e garantir brilho intenso na pelagem.',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'bg-third/10 text-third',
    path: '/cronograma-pelagem-tosa'
  },
  {
    title: 'LIMPEZA DE ORELHA DE CÃES',
    description: 'Higienização cuidadosa para prevenir infecções e manter a saúde auditiva do seu pet sempre em dia.',
    icon: <Droplets className="w-8 h-8" />,
    color: 'bg-primary/10 text-primary',
    path: '/servico-limpeza-orelhas'
  },
  {
    title: 'CORTE DE UNHA DE CÃES',
    description: 'Procedimento seguro e rápido para garantir o conforto e a saúde das patas do seu melhor amigo.',
    icon: <Ruler className="w-8 h-8" />,
    color: 'bg-third/10 text-third',
    path: '/servico-corte-unhas'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Nossos Serviços</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">Serviços de Banho e Tosa e Estética Animal em Uberlândia</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group flex flex-col h-full"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 h-14 flex items-center">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {service.path ? (
                <Link to={service.path} className="text-gray-900 font-bold flex items-center gap-2 hover:text-primary transition-colors mt-auto">
                  Saiba Mais <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                </Link>
              ) : (
                <a href="#" className="text-gray-900 font-bold flex items-center gap-2 hover:text-primary transition-colors mt-auto">
                  Saiba Mais <span className="text-xl">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;