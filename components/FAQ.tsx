import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Quais os horários de atendimento da Amor & Patas?",
            answer: "Atendemos de segunda a sexta, das 08h às 18h, e aos sábados das 08h às 14h, sempre com agendamento prévio para garantir a exclusividade do seu pet."
        },
        {
            question: "Onde vocês estão localizados em Uberlândia?",
            answer: "Estamos no coração do bairro Alto Umuarama, na Av. Floriano Peixoto, 5237 (Loja 14) – dentro do Mall Alto Umuarama. Temos estacionamento fácil!"
        },
        {
            question: "Quais tipos de tosa vocês realizam?",
            answer: "Realizamos tosa na máquina, tosa na tesoura (trimming), tosa higiênica e tosas específicas de raças (como a do Shih-tzu, Spitz Alemão e Golden Retriever)."
        },
        {
            question: "O que é o cronograma de pelagem e tosa?",
            answer: "É um tratamento de manutenção frequente (semanal ou quinzenal) que evita a formação de nós, remove o subpelo morto, hidrata profundamente e mantém a pele do pet saudável o ano todo."
        },
        {
            question: "Meu pet é muito agitado ou medroso, vocês conseguem atender?",
            answer: "Com certeza! Nosso atendimento é focado no bem-estar animal. Utilizamos técnicas de manejo humanizado e muita paciência para respeitar o limite de cada pet, transformando o banho em uma experiência positiva."
        },
        {
            question: "Como funciona o agendamento de banho e tosa?",
            answer: "O agendamento é feito preferencialmente via WhatsApp. Assim podemos conversar sobre as necessidades do seu pet e reservar o melhor horário na agenda."
        },
        {
            question: "Quais produtos vocês utilizam no banho?",
            answer: "Utilizamos apenas linhas profissionais premium e hipoalergênicas, adequadas para cada tipo de pelagem e sensibilidade de pele, garantindo perfume duradouro e saúde dermatológica."
        },
        {
            question: "O corte de unhas está incluso no banho?",
            answer: "Sim, o corte de unhas e a limpeza de ouvidos são procedimentos básicos de higiene inclusos em todos os nossos pacotes de banho e tosa."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                        <MessageCircleQuestion className="text-primary w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Dúvidas Frequentes
                    </h2>
                    <p className="text-lg text-gray-600">
                        Tudo o que você precisa saber sobre nossos cuidados com seu melhor amigo.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={`text-lg font-bold ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180 text-primary' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
