
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Contato', href: '/contato' },
  ];

  const activeStyles = "text-primary relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full";
  const idleStyles = "text-gray-600 hover:text-primary";

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/images/LOGO-Amor-e- Patas-Pet-Shop-e-Estetica-Animal-pet shop-pet shop perto de mim-banho-e-tosa-Uberlandia_Counter_7.png"
              alt="Amor & Patas Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 py-1 ${isActive ? activeStyles : idleStyles}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contato"
              className="bg-white border-2 border-gray-900 text-gray-900 px-6 py-2.5 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Agendar Horário
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-6 px-4 space-y-4 shadow-xl">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 font-bold text-lg transition-colors pl-4 ${isActive ? 'text-primary border-l-4 border-primary' : 'text-gray-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-gray-50">
            <Link
              to="/contato"
              className="block w-full bg-primary text-white text-center py-4 rounded-2xl font-bold shadow-lg shadow-pink-100"
              onClick={() => setIsOpen(false)}
            >
              Falar pelo WhatsApp
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
