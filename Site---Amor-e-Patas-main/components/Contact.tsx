
import React from 'react';
import { MapPin, Phone, Instagram, Send, MessageCircle, Car } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Contato</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">Onde nos Encontrar</h3>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Estamos prontos para receber você e seu pet com todo carinho e profissionalismo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-accent p-8 rounded-3xl border border-primary/10">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Nosso Endereço</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Av. Floriano Peixoto, 5237 - 14 - Alto Umuarama,<br />
                      Uberlândia - MG, 38405-373
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-primary font-semibold text-sm">
                      <Car size={16} />
                      <span>Estacionamento fácil e vaga exclusiva para clientes</span>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://wa.me/5534997622017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-third rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                    <p className="text-gray-600 group-hover:text-primary transition-colors">(34) 99762-2017</p>
                    <span className="text-xs text-third font-bold">Clique para iniciar conversa →</span>
                  </div>
                </a>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FF5C35] rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Siga-nos</h4>
                    <a 
                      href="https://www.instagram.com/amorepataspetshop/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-bold hover:underline block"
                    >
                      @amorepataspetshop
                    </a>
                    <p className="text-xs text-gray-500 mt-1 italic">Veja os fofinhos do dia no nosso Instagram!</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4">Envie uma mensagem rápida</h4>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Seu nome" 
                    className="flex-grow bg-gray-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                  <button className="bg-primary text-white p-2 rounded-xl hover:bg-primary/90 transition-colors">
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-third/10 p-6 rounded-2xl border border-third/20">
              <p className="text-third-dark text-sm font-medium">
                🕒 Horário de Funcionamento:<br />
                Segunda a Sexta: 07:30 às 18:20<br />
                Sábado: 07:30 às 12:30<br />
                Domingo: Fechado
              </p>
            </div>
          </div>

          {/* Map Side */}
          <div className="w-full h-[450px] rounded-3xl overflow-hidden border-8 border-accent shadow-xl relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.1098325906764!2d-48.25499793041308!3d-18.882208067355457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445e53c36adf3%3A0x3f0d71f15404550!2sAmor%20%26%20Patas%20Pet%20Shop%20e%20Est%C3%A9tica%20Animal!5e0!3m2!1spt-BR!2sbr!4v1767973239324!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
