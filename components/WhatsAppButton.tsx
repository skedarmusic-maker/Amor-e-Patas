import React, { useState } from 'react';
import { Crown, MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Número e mensagem padrão
    const phoneNumber = '5534997622017';
    const message = encodeURIComponent('Olá Amor & Patas! Gostaria de agendar um Banho & Tosa Especializado.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex items-end flex-col gap-2 pointer-events-none">
            {/* Tooltip Message */}
            <div
                className={`bg-white px-4 py-2 rounded-xl shadow-xl border border-pink-100 mb-1 transition-all duration-300 transform origin-bottom-right pointer-events-auto
          ${isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}
            >
                <p className="text-gray-800 text-xs font-semibold whitespace-nowrap flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Agende seu horário com Paulo Cesar Groomer ✂️
                </p>
                {/* Seta do tooltip */}
                <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-pink-100 transform rotate-45"></div>
            </div>

            {/* Badge Flutuante Banho & Tosa Especializado */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative flex items-center gap-3 bg-white p-2.5 sm:p-3 pr-4 sm:pr-5 rounded-2xl shadow-2xl border-2 border-pink-100 pointer-events-auto hover:border-primary/40 hover:shadow-pink-200/60 hover:-translate-y-1 transition-all duration-300 active:scale-95 cursor-pointer"
                aria-label="Banho e Tosa Especializado em Uberlândia - Falar no WhatsApp"
            >
                {/* Ícone da Coroa / Banho e Tosa Especializado */}
                <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center text-white shadow-md shadow-pink-200 group-hover:rotate-6 transition-transform">
                    <Crown size={22} fill="currentColor" />
                </div>

                <div className="text-left">
                    <p className="font-extrabold text-gray-900 text-sm sm:text-base leading-tight group-hover:text-primary transition-colors">
                        Banho & Tosa
                    </p>
                    <div className="flex items-center gap-1.5">
                        <span className="text-[11px] text-primary font-bold uppercase tracking-wider">Especializado</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                    </div>
                </div>

                {/* Mini botão WhatsApp integrado */}
                <div className="relative ml-1">
                    <span className="absolute -inset-0.5 rounded-full bg-green-500 opacity-30 animate-ping"></span>
                    <div className="relative w-7 h-7 bg-[#25D366] group-hover:bg-[#20bd5a] rounded-full flex items-center justify-center text-white shadow-sm transition-colors">
                        <MessageCircle size={15} strokeWidth={2.5} />
                    </div>
                </div>
            </a>
        </div>
    );
};

export default WhatsAppButton;
