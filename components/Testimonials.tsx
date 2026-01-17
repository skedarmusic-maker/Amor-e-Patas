import React, { useEffect, useState, useRef } from 'react';

const Testimonials: React.FC = () => {
  const [loadScript, setLoadScript] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadScript(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loadScript) return;

    // Carrega o script do Elfsight dinamicamente
    const id = "ElfsightPlatformScript";
    if (!document.getElementById(id)) {
      const js = document.createElement("script");
      js.id = id;
      js.src = "https://elfsightcdn.com/platform.js";
      js.async = true;
      document.getElementsByTagName("head")[0].appendChild(js);
    }
  }, [loadScript]);

  return (
    <section id="testimonials" className="py-24 bg-accent/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Estilo para remover o título redundante do widget Elfsight */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .elfsight-app-fbacc0f5-b8ed-4660-9a02-87d745f084ac [class*="Header__Title"] {
            display: none !important;
          }
          .elfsight-app-fbacc0f5-b8ed-4660-9a02-87d745f084ac [class*="Header__Container"] {
            padding-top: 0 !important;
            margin-top: 0 !important;
          }
        `}} />

        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Depoimentos</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">O que nossos clientes dizem</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes e o bem-estar dos pets são o nosso maior combustível.
          </p>
        </div>

        {/* Container do Widget */}
        <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-pink-100/50 border border-white">
          <div className="elfsight-app-fbacc0f5-b8ed-4660-9a02-87d745f084ac" data-elfsight-app-lazy></div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Amor+%26+Patas+Pet+Shop+e+Est%C3%A9tica+Animal/@-18.8822081,-48.2549979,17z/data=!4m8!3m7!1s0x94a445e53c36adf3:0x3f0d71f15404550!8m2!3d-18.8822081!4d-48.252423!9m1!1b1!16s%2Fg%2F11f_206m_0?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline transition-all"
          >
            Ver todas as avaliações no Google <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
