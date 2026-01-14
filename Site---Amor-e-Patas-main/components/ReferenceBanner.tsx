
import React from 'react';
import { MessageSquare } from 'lucide-react';

const ReferenceBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[300px]">
        {/* Lado Esquerdo - Imagem e Texto de Referência */}
        <div className="relative w-full md:w-1/2 bg-gray-900 flex items-center justify-center py-12 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
              alt="Cuidado Animal" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-primary/20"></div>
          </div>
          
          <div className="relative z-10 text-center text-white">
            <p className="text-xl md:text-2xl font-light mb-2">Referência em</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Atenção e Cuidado Animal
            </h2>
            <p className="text-lg md:text-xl font-medium opacity-90">desde 2015.</p>
          </div>
        </div>

        {/* Lado Direito - Diagonal Azul e Botão Rosa */}
        <div className="relative w-full md:w-1/2 bg-third flex items-center justify-center py-12 px-8 overflow-hidden">
          {/* Efeito de Corte Diagonal */}
          <div 
            className="hidden md:block absolute top-0 left-0 h-full w-24 bg-third -translate-x-12 skew-x-[-15deg] origin-top"
            style={{ transform: 'translateX(-50%) skewX(-20deg)' }}
          ></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 max-w-xl text-center lg:text-left">
            <p className="text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-sm">
              Entre em contato e diga <br className="hidden lg:block" /> como podemos ajudá-lo!
            </p>
            
            <a 
              href="https://wa.me/5534997622017" 
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap bg-primary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-pink-900/10 transition-all flex items-center gap-3 transform hover:scale-105 active:scale-95"
            >
              <MessageSquare size={22} />
              Envie uma mensagem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceBanner;
