
// Deployment trigger: 2026-01-16T18:39:00
import React, { useState, useEffect, useRef } from 'react';
import { PawPrint, Star, Crown, ChevronLeft, ChevronRight, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Paw {
  id: number;
  x: number;
  y: number;
  rotate: number;
}

const Hero: React.FC = () => {
  const [paws, setPaws] = useState<Paw[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const nextId = useRef(0);

  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    "/images/2/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_28.webp",
    "/images/2/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_21.webp",
    "/images/2/Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_29.webp"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop) {
        setPaws([]);
      }
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (y < 0 || y > rect.height) return;

      const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);

      if (dist > 80) {
        const angle = Math.atan2(y - lastPos.current.y, x - lastPos.current.x) * (180 / Math.PI) + 90;

        const newPaw: Paw = {
          id: nextId.current++,
          x,
          y,
          rotate: angle,
        };

        lastPos.current = { x, y };
        setPaws((prev) => [...prev.slice(-12), newPaw]);

        setTimeout(() => {
          setPaws((prev) => prev.filter((p) => p.id !== newPaw.id));
        }, 2100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-accent cursor-default"
    >
      <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden z-0">
        {paws.map((paw) => (
          <div
            key={paw.id}
            className="absolute paw-animation"
            style={{
              left: `${paw.x}px`,
              top: `${paw.y}px`,
              '--paw-rotate': `${paw.rotate}deg`
            } as React.CSSProperties}
          >
            <PawPrint className="text-primary w-6 h-6" fill="currentColor" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-white rounded-full text-gray-500 font-medium text-sm mb-6 shadow-sm border border-pink-50">
              Melhor Empresa de Cuidados Pet
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Pet Shop em <span className="text-primary italic">Uberlândia</span> no Alto Umuarama<br />
              <span className="text-2xl lg:text-3xl font-bold text-gray-700 block mt-2">Cuidado, carinho e bem-estar para o seu pet</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0">
              Somos um pet shop localizado na Av. Floriano Peixoto, no Alto Umuarama, em Uberlândia, oferecendo serviços completos com amor, segurança e profissionais apaixonados por animais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5534997622017"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-pink-100 transition-all transform hover:-translate-y-1 text-center"
              >
                Agendar Banho
              </a>
              <Link
                to="/servicos"
                className="bg-third hover:bg-third/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-50 transition-all transform hover:-translate-y-1 text-center"
              >
                Ver Nossos Serviços
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-third/20 rounded-full -z-10 opacity-70"></div>

            <img
              src="/images/hero-poodle-banho-e-tosa-uberlandia.webp"
              alt="Cachorrinho Poodle em Banho e Tosa Especializado em Uberlândia - Amor & Patas"
              className="w-full max-h-[500px] lg:max-h-[560px] object-cover rounded-3xl z-20 border-8 border-white shadow-2xl"
              style={{ objectPosition: 'center 35%' }}
            />

            <a
              href="https://wa.me/5534997622017?text=Ol%C3%A1%20Amor%20%26%20Patas!%20Gostaria%20de%20agendar%20um%20banho%20e%20tosa%20para%20meu%20pet."
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-2xl flex items-center gap-3 sm:gap-4 animate-bounce duration-3000 border border-green-100 group hover:scale-105 transition-transform cursor-pointer z-30"
              aria-label="Falar no WhatsApp para agendar Banho e Tosa"
            >
              <div className="relative">
                <span className="absolute -inset-1 rounded-full bg-green-500 opacity-40 animate-ping"></span>
                <div className="relative w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200 group-hover:scale-105 transition-transform">
                  <MessageCircle size={26} strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <p className="text-xs text-green-600 font-bold uppercase tracking-wide">WhatsApp Online</p>
                </div>
                <p className="font-extrabold text-gray-900 text-base sm:text-lg leading-tight group-hover:text-primary transition-colors">
                  Agendar no WhatsApp
                </p>
              </div>
            </a>

            <div className="absolute top-0 -right-1 bg-white p-3 px-5 rounded-full shadow-2xl hidden md:flex items-center gap-3 border border-pink-100 whitespace-nowrap">
              <span className="text-gray-600 font-bold text-lg">4,9</span>
              <div className="flex gap-0.5 text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <span className="text-primary text-sm font-medium">Excelência Google</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20 lg:mt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight" style={{ color: '#0F172A' }}>
              Excelência em Estética Animal e Banho e Tosa em Uberlândia
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed mb-8 space-y-4">
              <p>
                Paulo Cesar é groomer profissional com mais de 10 anos de experiência em estética animal e banho e tosa em Uberlândia. Especialista em raças como <span className="font-bold text-primary">Spitz Alemão</span>, oferece cuidados personalizados, técnicas seguras e atenção aos detalhes que fazem a diferença no bem-estar do seu pet.
              </p>
              <p>
                No Amor & Patas Pet Shop, cada atendimento é feito com carinho, responsabilidade e conhecimento técnico, garantindo conforto, beleza e saúde para seu animal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start">
              <a
                href="https://www.instagram.com/paulocesargroomer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white border-2 border-primary/20 text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md group"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                <span>Me siga no Instagram @paulocesargroomer</span>
              </a>
            </div>
          </div>

          <div className="order-2 lg:order-2 relative">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden h-[400px] lg:h-[500px] bg-gray-100/50 backdrop-blur-sm group">
              {/* Blurred Background Layer - fills the space with color context */}
              <div
                key={`bg-${currentSlide}`}
                className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-125 transition-all duration-700"
                style={{ backgroundImage: `url("${carouselImages[currentSlide]}")` }}
              />

              {/* Main Image Layer - fully visible without cropping */}
              <div className="relative w-full h-full p-8 lg:p-10 flex items-center justify-center z-10">
                <img
                  key={`img-${currentSlide}`}
                  src={carouselImages[currentSlide]}
                  alt={`Trabalho de estética animal ${currentSlide + 1}`}
                  className="w-full h-full object-contain max-h-full drop-shadow-xl transition-all duration-500 animate-fadeIn"
                  style={{ objectPosition: 'center center' }}
                />
              </div>

              {/* Navigation Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20 hover:scale-110 opacity-0 group-hover:opacity-100"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20 hover:scale-110 opacity-0 group-hover:opacity-100"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>

              {/* Dots Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20 bg-white/30 px-4 py-2 rounded-full backdrop-blur-md">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-primary shadow-lg' : 'w-2.5 bg-white hover:bg-white/80'
                      }`}
                    aria-label={`Ir para imagem ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-third/10 rounded-full -ml-48 blur-3xl"></div>
    </section>
  );
};

export default Hero;
