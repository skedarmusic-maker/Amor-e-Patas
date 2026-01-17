import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Número e mensagem padrão
    const phoneNumber = '5534997622017';
    const message = encodeURIComponent('Olá Amor & Patas! Gostaria de informações sobre serviços para meu pet.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex items-end flex-col gap-2 pointer-events-none">
            {/* Tooltip Message */}
            <div
                className={`bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-100 mb-2 transition-all duration-300 transform origin-bottom-right pointer-events-auto
          ${isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}
            >
                <p className="text-gray-800 text-sm font-medium whitespace-nowrap">
                    Olá! Precisa agendar um banho? 🐶
                </p>
                {/* Seta do tooltip */}
                <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
            </div>

            {/* Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative flex items-center justify-center pointer-events-auto"
                aria-label="Fale conosco no WhatsApp"
            >
                {/* Ping Animation Effect */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-20 animate-ping duration-1000 group-hover:duration-700"></span>

                {/* Main Button */}
                <div className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center">
                    <MessageCircle size={32} strokeWidth={2.5} />
                </div>
            </a>
        </div>
    );
};

export default WhatsAppButton;
