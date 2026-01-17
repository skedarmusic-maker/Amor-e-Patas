import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HomeServicesDetailed from '../components/HomeServicesDetailed';
import ReferenceBanner from '../components/ReferenceBanner';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="py-12 bg-accent/30 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Bem-vindo à Amor & Patas</h2>
        <p className="text-gray-600 mt-2 font-medium italic">Referência em estética animal no Alto Umuarama.</p>
      </div>

      {/* Nova Seção de Informações Detalhadas do WhatsApp */}
      <HomeServicesDetailed />

      {/* Seção de Serviços Existente (Cards com Link para Páginas Internas) */}
      <Services />

      <Testimonials />
      <FAQ />
      <ReferenceBanner />
    </>
  );
};

export default Home;