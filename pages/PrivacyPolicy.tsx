import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen font-sans text-gray-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">

                {/* Header */}
                <div className="text-center mb-12 border-b border-gray-100 pb-8">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                        <ShieldCheck className="text-primary w-10 h-10" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Política de Privacidade</h1>
                    <p className="text-gray-500">Última atualização: Janeiro de 2026</p>
                </div>

                {/* Content */}
                <div className="space-y-8 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Eye className="w-5 h-5 text-primary" />
                            1. Introdução
                        </h2>
                        <p>
                            A <strong>Amor & Patas</strong> respeita a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações pessoais que você nos fornece através do nosso site e canais de atendimento (WhatsApp). Ao utilizar nossos serviços, você concorda com os termos aqui descritos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-primary" />
                            2. Coleta de Dados
                        </h2>
                        <p className="mb-2">Não coletamos dados sensíveis automaticamente. As informações que recebemos são fornecidas voluntariamente por você ao entrar em contato conosco para agendamentos, incluindo:</p>
                        <ul className="list-disc pl-5 space-y-1 bg-gray-50 p-4 rounded-xl">
                            <li>Nome completo;</li>
                            <li>Número de telefone (WhatsApp);</li>
                            <li>Informações sobre seu animal de estimação (Raça, nome, idade, etc).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-primary" />
                            3. Uso das Informações
                        </h2>
                        <p>Utilizamos seus dados estritamente para:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Realizar agendamentos de banho, tosa e consultas;</li>
                            <li>Enviar lembretes de horários marcados;</li>
                            <li>Comunicar promoções ou novidades (somente se autorizado);</li>
                            <li>Entrar em contato em caso de emergências sobre seu pet.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">4. Compartilhamento de Dados</h2>
                        <p>
                            A Amor & Patas <strong>não vende, aluga ou compartilha</strong> seus dados pessoais com terceiros para fins de marketing. Seus dados são de uso exclusivo da nossa administração interna para gestão dos serviços prestados ao seu animal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">5. Seus Direitos (LGPD)</h2>
                        <p>
                            Conforme a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar a qualquer momento a visualização, correção ou exclusão dos seus dados da nossa base de contatos. Para isso, basta nos enviar uma mensagem via WhatsApp.
                        </p>
                    </section>

                    <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mt-8">
                        <h2 className="text-lg font-bold text-gray-900 mb-2">Dúvidas?</h2>
                        <p className="text-sm">
                            Se você tiver qualquer dúvida sobre nossa política de privacidade, entre em contato conosco:<br />
                            <strong>E-mail:</strong> contato@amorepatas.com.br<br />
                            <strong>Endereço:</strong> Av. Floriano Peixoto, 5237 (Loja 14) - Alto Umuarama, Uberlândia - MG
                        </p>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicy;
