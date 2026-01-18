import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PaginaServicoBanhoetosa from './pages/PaginaServicoBanhoetosa';
import CronogramaPelagemTosa from './pages/CronogramaPelagemTosa';
import ServicoLimpezaOrelhas from './pages/ServicoLimpezaOrelhas';
import ServicoCorteUnhas from './pages/ServicoCorteUnhas';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/servico-banho-tosa" element={<PaginaServicoBanhoetosa />} />
            <Route path="/cronograma-pelagem-tosa" element={<CronogramaPelagemTosa />} />
            <Route path="/servico-limpeza-orelhas" element={<ServicoLimpezaOrelhas />} />
            <Route path="/servico-corte-unhas" element={<ServicoCorteUnhas />} />
            <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
            {/* Redirecionamentos de conveniência */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;