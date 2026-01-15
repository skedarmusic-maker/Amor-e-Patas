
import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Instagram, Youtube, Music2, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Logo e Social */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-primary p-2 rounded-lg">
                <PawPrint className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">Amor & Patas</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Amor & Patas: Seu Pet Shop e Banho e Tosa em Uberlândia. Especialistas em estética animal e bem-estar no bairro Alto Umuarama.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/amorepataspetshop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                title="Siga-nos no Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/@amorpatas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                title="Inscreva-se no YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@petshopamorepatas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                title="Siga-nos no TikTok"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links */}
          <div>
            <h4 className="text-xl font-bold mb-8">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-white transition-colors">Nossos Serviços</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Perfil Google (Substituindo Newsletter) */}
          <div>
            <h4 className="text-xl font-bold mb-8">Nossa Localização</h4>
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/10 shadow-lg grayscale-[30%] hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.1098325906764!2d-48.25499793041308!3d-18.882208067355457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445e53c36adf3%3A0x3f0d71f15404550!2sAmor%20%26%20Patas%20Pet%20Shop%20e%20Est%C3%A9tica%20Animal!5e0!3m2!1spt-BR!2sbr!4v1767973239324!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="mt-4 text-xs text-gray-500 text-center italic">
              Visite-nos no Alto Umuarama
            </p>
          </div>

          {/* Coluna 4: Contatos */}
          <div>
            <h4 className="text-xl font-bold mb-8">Contatos</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">Av. Floriano Peixoto, 5237 (Loja 14) - Alto Umuarama, Uberlândia - MG, CEP 38405-373</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">(34) 99762-2017</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">contato@amorepatas.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center text-gray-500 text-sm">
          <p>© 2026 Amor & Patas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
