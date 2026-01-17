import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, MapPin, Scissors } from 'lucide-react';

const TopBar: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const messages = [
        { text: "Banho e Tosa Especializado no Alto Umuarama", icon: <MapPin size={14} /> },
        { text: "Cuidamos do seu pet com amor e carinho", icon: <Sparkles size={14} /> },
        { text: "Agende seu horário: (34) 99762-2017", icon: <Clock size={14} /> },
        { text: "Estética animal completa para seu melhor amigo", icon: <Scissors size={14} /> }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % messages.length);
        }, 4000); // Troca a cada 4 segundos

        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <div className="bg-primary text-white text-xs sm:text-sm font-medium h-10 flex items-center justify-center relative overflow-hidden z-[51]">
            <div className="absolute inset-0 bg-black/5"></div> {/* Overlay sutil para textura */}

            <div className="relative flex items-center gap-2 transition-all duration-500 transform animate-in fade-in slide-in-from-bottom-2">
                <span className="opacity-90">{messages[currentIndex].icon}</span>
                <span className="tracking-wide animate-pulse-slow">{messages[currentIndex].text}</span>
            </div>
        </div>
    );
};

export default TopBar;
