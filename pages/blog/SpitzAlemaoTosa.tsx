import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Heart, Shield, Scissors, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO';

const SpitzAlemaoTosa: React.FC = () => {
  // Efeito para injetar os dados estruturados de artigo (JSON-LD) no head do DOM
  useEffect(() => {
    const schemaId = 'spitz-blog-post-schema';
    let script = document.getElementById(schemaId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://amorepataspetshop.com.br/blog/tosa-spitz-alemao-tesoura-subpelo"
      },
      "headline": "Tosa no Spitz Alemão: Por Que Usar Apenas Tesoura? Mitos, Subpelo e Cuidados em Uberlândia",
      "description": "Entenda os mitos e verdades da tosa no Spitz Alemão (Lulu da Pomerânia). Descubra por que a tosa na tesoura protege o subpelo contra alopecia pós-tosa e garante a saúde do pet em Uberlândia.",
      "image": "https://amorepataspetshop.com.br/images/blog/spitz_alemao_tosa_tesoura_1.jpeg",
      "author": {
        "@type": "Organization",
        "name": "Amor & Patas Pet Shop e Estética Animal",
        "url": "https://amorepataspetshop.com.br"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Amor & Patas",
        "logo": {
          "@type": "ImageObject",
          "url": "https://amorepataspetshop.com.br/images/Logo-Amor-e-Patas-Pet-Shop-e-Estetica-Animal-pet-shop-pet-shop-perto-de-mim-banho-e-tosa-Uberlandia_.webp"
        }
      },
      "datePublished": "2026-08-22",
      "dateModified": "2026-08-22"
    };

    script.text = JSON.stringify(schemaData);

    return () => {
      const existingScript = document.getElementById(schemaId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="pt-28 bg-gray-50 min-h-screen">
      <SEO
        title="Tosa no Spitz Alemão: Mitos, Subpelo e Tosa na Tesoura em Uberlândia"
        description="Pode tosar Spitz Alemão na máquina? Saiba tudo sobre a tosa na tesoura padrão da raça, perigos da alopecia pós-tosa e os cuidados ideais de banho e tosa em Uberlândia."
        canonical="https://amorepataspetshop.com.br/blog/tosa-spitz-alemao-tesoura-subpelo"
        keywords="tosa spitz alemao uberlandia, lulu da pomerania tosa tesoura, alopecia pos tosa spitz, tosa na tesoura spitz alemao, banho e tosa spitz uberlandia, pet shop alto umuarama"
        ogImage="https://amorepataspetshop.com.br/images/blog/spitz_alemao_tosa_tesoura_1.jpeg"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Botão Voltar */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-primary font-bold hover:underline mb-8 transition-all"
        >
          <ArrowLeft size={20} />
          Voltar para o Blog
        </Link>

        {/* Cabeçalho do Artigo */}
        <article className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="h-96 w-full relative">
            <img 
              src="/images/blog/spitz_alemao_tosa_tesoura_1.jpeg" 
              alt="Spitz Alemão após tosa na tesoura padrão da raça no Pet Shop Amor & Patas" 
              className="w-full h-full object-cover object-[center_35%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="bg-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                Estética & Raças
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
                Tosa no Spitz Alemão: Por Que Usar Apenas Tesoura? Mitos, Subpelo e Cuidados em Uberlândia
              </h1>
            </div>
          </div>

          {/* Meta informações */}
          <div className="flex flex-wrap items-center gap-6 px-8 md:px-12 py-6 border-b border-gray-100 bg-gray-50 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>22 de Agosto de 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Por Amor & Patas</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} />
              <span>Especialista em Estética Canina</span>
            </div>
          </div>

          {/* Conteúdo do Artigo */}
          <div className="px-8 md:px-12 py-10 prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              O <strong>Spitz Alemão</strong> (também conhecido popularmente como <strong>Lulu da Pomerânia</strong>) é uma das raças mais queridas e admiradas de Uberlândia. Com sua pelagem exuberante que lembra uma bolinha de algodão, ele conquista olhares por onde passa. No entanto, o cuidado com essa pelagem exige conhecimento técnico apurado: um erro na escolha da tosa pode prejudicar irreversivelmente a saúde da pele e o crescimento dos pelos do seu companheiro.
            </p>

            <h2 className="text-2xl font-extrabold text-gray-900 pt-4 border-b border-gray-100 pb-2">
              1. A Anatomia da Pelagem Dupla: Entendendo o Subpelo
            </h2>
            <p>
              Para entender como cuidar do Spitz Alemão, o primeiro passo é conhecer a estrutura do seu pelo. A raça possui uma <strong>pelagem dupla</strong> dividida em duas camadas distintas:
            </p>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <strong>Pelo de Cobertura (Pelo Principal):</strong> É mais longo, liso, firme e protege a pele contra raios solares, água, sujeira e agressões externas.
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <strong>Subpelo:</strong> É uma camada densa, curta e macia (com textura semelhante ao algodão) responsável por criar um isolamento térmico natural. O subpelo protege o cão tanto do frio quanto do calor intenso de <strong>Uberlândia</strong>.
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-extrabold text-gray-900 pt-4 border-b border-gray-100 pb-2">
              2. O Mito da Tosa na Máquina: Por Que Nunca Raspar o Spitz?
            </h2>
            <p>
              Muitos tutores, na intenção de aliviar o calor nos dias mais quentes do ano em Uberlândia, acreditam no mito de que "raspar o Spitz na máquina vai deixá-lo mais fresco". <strong>Isso é um grave equívoco!</strong>
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl my-6 text-red-900">
              <div className="flex gap-3 items-center font-bold text-lg text-red-700 mb-2">
                <AlertTriangle size={24} />
                O Perigo da Alopecia Pós-Tosa (BSD / Alopecia X)
              </div>
              <p className="text-sm text-red-800 leading-relaxed">
                Ao utilizar a máquina de tosa rente ao corpo do Spitz Alemão, a lâmina corta o subpelo muito próximo à pele e causa microtraumas nos folículos pilosos. Isso pode desencadear a chamada <strong>Alopecia Pós-Tosa</strong>. O pelo para de crescer, a pele fica exposta a queimaduras solares e pode desenvolver hiperpigmentação (manchas escuras), deixando o pet com falhas permanentes de pelagem.
              </p>
            </div>

            <p>
              Além do risco de alopecia, sem a proteção da camada dupla, o animal fica <strong>mais vulnerável ao calor</strong>, pois perde a barreira isolante natural que impede que o calor da atmosfera atinja sua pele diretamente.
            </p>

            <h2 className="text-2xl font-extrabold text-gray-900 pt-4 border-b border-gray-100 pb-2">
              3. Tosa na Tesoura Padrão da Raça: A Escolha Segura e Elegante
            </h2>
            <p>
              A única forma recomendada por veterinários e esteticistas caninos para modelar a pelagem do Spitz Alemão é a <strong>Tosa na Tesoura</strong> (também conhecida como tosa padrão da raça ou tosa comercial arredondada).
            </p>
            <p>
              Nesse procedimento, todo o trabalho é realizado à mão utilizando tesouras profissionais específicas (retas, curvas e tubarões). O profissional experiente realiza um nivelamento suave das pontas dos pelos, esculpindo o formato arredondado sem encostar na raiz ou agredir o subpelo.
            </p>

            {/* Galeria de Fotos Reais de Spitz */}
            <div className="my-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Resultado de Tosa na Tesoura Padrão da Raça no Amor & Patas:
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md h-64 border border-gray-100">
                  <img 
                    src="/images/blog/spitz_alemao_tosa_tesoura_1.jpeg" 
                    alt="Spitz Alemão com tosa na tesoura perfeita" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-64 border border-gray-100">
                  <img 
                    src="/images/blog/spitz_alemao_tosa_tesoura_2.jpeg" 
                    alt="Lulu da Pomerânia pós banho e tosa na tesoura em Uberlândia" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-64 border border-gray-100">
                  <img 
                    src="/images/blog/spitz_alemao_tosa_tesoura_3.jpeg" 
                    alt="Spitz Alemão hidratado e tosado com tesoura" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-gray-900 pt-4 border-b border-gray-100 pb-2">
              4. Cuidados Essenciais no Banho e Escovação
            </h2>
            <p>
              Além de escolher a tosa correta na tesoura, manter o visual impecável do Spitz no dia a dia exige um ritual de higiene adequado:
            </p>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-3 items-start">
                <span className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 text-sm font-bold mt-1">1</span>
                <div>
                  <strong>Escovação Frequente:</strong> Escovar de 2 a 3 vezes por semana usando escova de pinos sem bolinhas na ponta + fluido desembarasçante. Isso evita que o subpelo crie nós e emaranhados que abafam a pele.
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 text-sm font-bold mt-1">2</span>
                <div>
                  <strong>Hidratação Profunda:</strong> Utilizar produtos com pH fisiológico para cães e máscaras de hidratação específicas para pelagem dupla, devolvendo a elasticidade aos fios. Saiba mais na nossa página de <Link to="/cronograma-pelagem-tosa" className="text-primary font-bold hover:underline">cronograma de pelagem e tosa</Link>.
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 text-sm font-bold mt-1">3</span>
                <div>
                  <strong>Banho e Secagem Profissional:</strong> Banhos a cada 15 dias são o ideal. A secagem deve ser minuciosamente realizada com soprador profissional para garantir que nenhuma umidade fique presa na raiz do subpelo. Conheça nosso serviço de <Link to="/servico-banho-tosa" className="text-primary font-bold hover:underline">banho e tosa em Uberlândia</Link>.
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-extrabold text-gray-900 pt-6 border-b border-gray-100 pb-2">
              Amor & Patas: Especialista em Tosa na Tesoura no Alto Umuarama
            </h2>
            <p>
              Na <strong>Amor & Patas</strong>, nosso time de esteticistas possui treinamento específico para o manejo e a escultura de pelagens duplas como a do Spitz Alemão. Trabalhamos com ambiente calmo, cosméticos de alta performance e tesouras de altíssima precisão.
            </p>
            <p>
              E para a sua comodidade, você não precisa se preocupar com a locomoção! Oferecemos o serviço de <Link to="/servico-taxi-dog" className="text-primary font-bold hover:underline">Táxi Dog em Uberlândia</Link>, buscando e levando seu pet com veículo climatizado no bairro Alto Umuarama, Grand Ville e região.
            </p>
            <p>
              Consulte também nosso guia completo de serviços do nosso <Link to="/pet-shop-uberlandia" className="text-primary font-bold hover:underline">pet shop em Uberlândia</Link> para agendar a sessão do seu melhor amigo.
            </p>

            {/* CTA do Artigo */}
            <div className="bg-gray-900 rounded-[2.5rem] p-8 text-center text-white mt-12">
              <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quer a tosa na tesoura perfeita para o seu Spitz Alemão?</h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
                Agende um horário na Amor & Patas! Cuidamos do seu Lulu da Pomerânia com todo o carinho, respeito ao subpelo e técnica na tesoura que ele merece.
              </p>
              <a 
                href="https://wa.me/5534997622017" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all inline-flex items-center gap-2"
              >
                Agendar via WhatsApp
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SpitzAlemaoTosa;
