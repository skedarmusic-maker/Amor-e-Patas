
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Scissors } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-third/10 rounded-full blur-3xl hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block italic">
            Nossa História em Uberlândia
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tighter">
            Somos um time de <span className="text-primary">apaixonados</span>, cuidadores e especialistas em <span className="text-third">bem-estar animal</span>.
          </h2>
        </div>

        {/* Floating Images Grid (Desktop) */}
        <div className="relative min-h-[400px] lg:min-h-[300px] flex flex-col items-center justify-center">
          <div className="max-w-3xl text-center z-10 mb-12">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Na <strong className="text-gray-900">Amor & Patas Pet Shop e Estética Animal</strong>, seu melhor amigo recebe muito mais que um serviço; ele recebe cuidado humanizado e atenção especial. Há mais de <span className="text-primary font-bold">8 anos</span> somos referência no bairro <strong className="text-gray-900">Alto Umuarama</strong>, oferecendo o que há de melhor em estética animal em Uberlândia.
            </p>
            <p className="mt-8 text-gray-500 text-base">
              Localizados na <strong className="text-gray-700">Av. Floriano Peixoto, 5237</strong>, contamos com um ambiente seguro, acolhedor e produtos de alta performance para garantir que seu pet saia daqui não apenas lindo, mas extremamente feliz.
            </p>
          </div>

          {/* CTA Section */}
          <div className="z-10 mt-8 flex flex-col sm:flex-row items-center gap-6 justify-center w-full">
            <Link
              to="/servicos"
              className="group flex items-center gap-3 bg-third hover:bg-third/90 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100 transition-all transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Scissors className="group-hover:rotate-12 transition-transform" size={24} />
              Conheça Nossos Serviços
            </Link>

            <a
              href="https://wa.me/5534997622017"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-pink-100 transition-all transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <MessageSquare size={24} />
              Agendar no WhatsApp
            </a>
          </div>

          {/* Imagens Flutuantes Estilo Studio (Apenas Desktop) */}
          <div className="hidden lg:block pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=300"
              alt="Estética Animal"
              className="absolute -top-40 -left-10 w-48 h-64 object-cover rounded-2xl rotate-[-6deg] shadow-2xl border-4 border-white opacity-90"
            />
            <img
              src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=300"
              alt="Pet Feliz"
              className="absolute -top-60 right-0 w-50 h-40 object-cover rounded-2xl rotate-[4deg] shadow-2xl border-4 border-white opacity-90"
            />
            <img
              src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=300"
              alt="Banho e Tosa"
              className="absolute -bottom-20 -right-10 w-52 h-52 object-cover rounded-2xl rotate-[-8deg] shadow-2xl border-4 border-white opacity-90"
            />
            <div className="absolute -bottom-20 -left-12 w-48 h-auto p-1.5 bg-white rounded-2xl rotate-[6deg] shadow-2xl z-10">
              <img
                src="/images/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter.webp"
                alt="Ambiente Acolhedor"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Mobile-only images (Simplified) */}
        <div className="grid grid-cols-2 gap-4 mt-20 lg:hidden">
          <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400" className="rounded-2xl h-40 w-full object-cover" alt="Serviço" />
          <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400" className="rounded-2xl h-40 w-full object-cover" alt="Pet" />
        </div>

        {/* Professional Trajectory Section */}
        <div className="mt-24 lg:mt-40 border-t border-gray-100 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div className="relative order-1">
              <div className="absolute inset-0 bg-third/10 rounded-[2.5rem] transform -rotate-3 scale-105 -z-10 transition-transform hover:rotate-0 duration-500"></div>
              <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] transform rotate-2 scale-105 -z-10"></div>

              <img
                src="/images/2/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_21.webp"
                alt="Paulo Cesar Groomer Especialista"
                className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl border-8 border-white bg-white"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-white p-5 rounded-2xl shadow-xl border border-gray-50 flex flex-col items-center animate-bounce duration-[3000ms]">
                <span className="text-3xl font-extrabold text-primary">10+</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-1">Anos de Experiência</span>
              </div>
            </div>

            {/* Text Side */}
            <div className="order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-third"></span>
                <span className="text-blue-900 font-bold text-xs uppercase tracking-widest">Groomer Especialista</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                A Paixão por Trás do <span className="text-primary">Cuidado</span>
              </h3>

              <h4 className="text-xl font-bold text-gray-500 mb-8 font-sans">
                Paulo Cesar – Groomer Especialista
              </h4>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Com mais de uma década de dedicação à estética animal, <strong className="text-gray-900">Paulo Cesar</strong> transformou o Amor & Patas em uma referência de carinho e técnica em Uberlândia.
                </p>
                <p>
                  Sua jornada de 10 anos é marcada pelo constante aperfeiçoamento das técnicas de tosa e um olhar atento ao bem-estar de cada pet. Para o Paulo, cada animal é único e merece um tratamento que une <span className="text-third font-bold">beleza</span>, <span className="text-third font-bold">higiene</span> e, acima de tudo, <span className="text-third font-bold">respeito</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
