
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
            <img 
              src="https://images.unsplash.com/photo-1591768793355-74d7af236c1f?auto=format&fit=crop&q=80&w=300" 
              alt="Ambiente Acolhedor" 
              className="absolute -bottom-40 left-0 w-60 h-44 object-cover rounded-2xl rotate-[12deg] shadow-2xl border-4 border-white opacity-90"
            />
          </div>
        </div>
        
        {/* Mobile-only images (Simplified) */}
        <div className="grid grid-cols-2 gap-4 mt-20 lg:hidden">
           <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400" className="rounded-2xl h-40 w-full object-cover" alt="Serviço" />
           <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400" className="rounded-2xl h-40 w-full object-cover" alt="Pet" />
        </div>
      </div>
    </section>
  );
};

export default About;
