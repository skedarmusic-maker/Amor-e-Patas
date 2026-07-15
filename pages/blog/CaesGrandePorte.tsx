import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Heart, Shield, Truck, Scissors, Clock } from 'lucide-react';
import SEO from '../../components/SEO';

const CaesGrandePorte: React.FC = () => {
  // Efeito para injetar os dados estruturados de artigo (JSON-LD) no head do DOM
  useEffect(() => {
    const schemaId = 'blog-post-schema';
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
        "@id": "https://amorepataspetshop.com.br/blog/caes-de-grande-porte"
      },
      "headline": "Cães de Grande Porte: Cuidados Especiais com Banho, Tosa e Transporte em Uberlândia",
      "description": "Veja os principais cuidados no banho, tosa e transporte de cães de grande porte in Uberlândia. Dicas essenciais de saúde e como o Táxi Dog facilita sua rotina!",
      "image": "https://amorepataspetshop.com.br/images/taxdog/cao_grande_servico_taxi_dog_202606181243.jpeg",
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
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15"
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
        title="Cães de Grande Porte: Cuidados, Banho e Táxi Dog em Uberlândia | Blog"
        description="Dicas essenciais de cuidados, banho, tosa e transporte de cães de grande porte em Uberlândia. Saiba como o Táxi Dog especializado facilita sua rotina pet."
        canonical="https://amorepataspetshop.com.br/blog/caes-de-grande-porte"
        keywords="caes de grande porte, banho e tosa caes grandes, taxi dog uberlandia, pet shop uberlandia, transporte de caes grandes, amor e patas blog"
        ogImage="https://amorepataspetshop.com.br/images/taxdog/cao_grande_servico_taxi_dog_202606181243.jpeg"
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
              src="/images/taxdog/cao_grande_servico_taxi_dog_202606181243.jpeg" 
              alt="Cão de grande porte sendo transportado com segurança no Táxi Dog da Amor & Patas" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="bg-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                Cuidados & Serviços
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
                Cães de Grande Porte: Cuidados Especiais com Banho, Tosa e Transporte em Uberlândia
              </h1>
            </div>
          </div>

          {/* Meta informações */}
          <div className="flex flex-wrap items-center gap-6 px-8 md:px-12 py-6 border-b border-gray-100 bg-gray-50 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>15 de Julho de 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Por Amor & Patas</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Leitura de 5 min</span>
            </div>
          </div>

          {/* Conteúdo do Artigo */}
          <div className="px-8 md:px-12 py-10 prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              Ter um cão de grande porte — como um Golden Retriever, Bernese, Labrador, Rottweiler ou Pastor Alemão — é sinônimo de muito amor, lealdade e alegria. Contudo, devido ao tamanho e à estrutura física desses animais, os cuidados de rotina exigem planejamento. Em cidades com clima quente como <strong>Uberlândia</strong>, a atenção ao banho, secagem e transporte seguro é crucial para manter a saúde e o bem-estar do seu gigante.
            </p>

            <h2 className="text-2xl font-extrabold text-gray-900 pt-4 border-b border-gray-100 pb-2">
              1. O Desafio do Banho e Secagem em Cães Gigantes
            </h2>
            <p>
              Dar banho em um cão de 30kg ou mais em casa pode parecer uma tarefa simples à primeira vista, mas costuma trazer riscos tanto para o tutor quanto para o animal. O estresse físico de levantar o cão, o risco de escorregões no box e a falta de equipamentos profissionais são apenas os primeiros obstáculos.
            </p>
            <p>
              O maior perigo oculto reside na <strong>secagem da pelagem</strong>. Cães de grande porte, frequentemente com pelagem dupla, acumulam muita umidade na raiz dos pelos. Se não forem secos com secadores e sopradores industriais adequados, a umidade residual se torna o ambiente perfeito para a proliferação de fungos e bactérias, resultando em dermatites severas e no famoso odor forte de "cachorro molhado".
            </p>
            <p>
              Por isso, contar com a infraestrutura de um <Link to="/pet-shop-uberlandia" className="text-primary font-bold hover:underline">pet shop em Uberlândia</Link> qualificado é o melhor caminho. Na Amor & Patas, dispomos de banheiras espaçosas e sopradores de alta potência que removem a água desde a derme, prevenindo problemas dermatológicos.
            </p>

            <h2 className="text-2xl font-extrabold text-gray-900 pt-4 border-b border-gray-100 pb-2">
              2. Estética e Tosa: Muito Além da Beleza
            </h2>
            <p>
              A tosa e a escovação em cães grandes não são caprichos estéticos. Para raças de pelagem longa ou dupla, a escovação semanal remove o subpelo morto, permitindo que a pele respire e auxiliando no controle térmico do animal, especialmente nos dias de forte calor em Uberlândia.
            </p>
            <p>
              A técnica de <strong>cardagem</strong> (remoção de pelos mortos) é altamente recomendada para diminuir a queda drástica de pelos pela casa e evitar a formação de nós dolorosos na pele.
            </p>
            <p>
              Quer entender melhor quais tratamentos se adaptam ao pelo do seu pet? Acesse a nossa página completa de <Link to="/servicos" className="text-primary font-bold hover:underline">serviços estéticos pet</Link> e conheça nossas opções de hidratação e tosa higiênica.
            </p>

            <h2 className="text-2xl font-extrabold text-gray-900 pt-4 border-b border-gray-100 pb-2">
              3. Transporte Seguro: O Desafio de Ir e Vir com Conforto
            </h2>
            <p>
              Levar um cão de grande porte ao veterinário ou ao banho e tosa é outro gargalo enfrentado pelos tutores. Colocar um pet pesado no banco de trás de um carro de passeio convencional pode gerar estresse para o animal, além de arranhões no estofado, acúmulo massivo de pelos e o risco de infrações de trânsito se ele não estiver preso corretamente pelo cinto adaptado.
            </p>
            <p>
              Além disso, cães idosos ou com problemas articulares (comuns em raças grandes, como displasia coxofemoral) sofrem muito ao tentar pular para dentro de porta-malas ou bancos altos.
            </p>
            <p>
              Pensando nisso, desenvolvemos um serviço exclusivo de <Link to="/servico-taxi-dog" className="text-primary font-bold hover:underline">Táxi Dog para cães de grande porte em Uberlândia</Link>. Nosso veículo conta com rampa de acesso suave para evitar impacto nas articulações do pet, ar-condicionado em toda a cabine de transporte e caixas de contenção espaçosas que garantem uma viagem tranquila e segura no Alto Umuarama e bairros vizinhos.
            </p>

            <div className="my-8 p-6 bg-accent/30 rounded-3xl border border-primary/10 grid md:grid-cols-3 gap-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 text-primary p-3 rounded-2xl shrink-0">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Táxi Dog Seguro</h4>
                  <p className="text-gray-500 text-xs mt-1">Veículo climatizado com rampa suave de acesso.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-third/10 text-third p-3 rounded-2xl shrink-0">
                  <Scissors size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Estética Especializada</h4>
                  <p className="text-gray-500 text-xs mt-1">Banho, tosa e cardagem de subpelo.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 text-primary p-3 rounded-2xl shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Manejo Humanizado</h4>
                  <p className="text-gray-500 text-xs mt-1">Cuidados calmos respeitando o tempo do cão.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-gray-900 pt-4 border-b border-gray-100 pb-2">
              4. Checklist: 3 Dicas Diárias para Tutores de Cães Grandes
            </h2>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-3 items-start">
                <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 text-sm font-bold mt-1">1</span>
                <div>
                  <strong>Cuidado com as articulações:</strong> Evite brincadeiras de muito impacto em pisos lisos (como cerâmica ou porcelanato). Coloque tapetes antiderrapantes nas áreas onde o cão costuma correr.
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 text-sm font-bold mt-1">2</span>
                <div>
                  <strong>Passeios nos horários corretos:</strong> Devido à maior massa corporal, cães grandes sofrem mais rápido com a hipertermia (superaquecimento). Passeie antes das 08h ou após as 18h em Uberlândia.
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 text-sm font-bold mt-1">3</span>
                <div>
                  <strong>Agendamento planejado de banho:</strong> Recomendamos banhos a cada 15 dias para manter a higiene e a escovação em dia, evitando nós espessos que abafam a derme do animal.
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-extrabold text-gray-900 pt-8 border-b border-gray-100 pb-2">
              Conclusão: Facilite a Rotina do Seu Amigo na Amor & Patas
            </h2>
            <p>
              Cuidar do seu parceiro gigante não precisa ser sinônimo de cansaço ou estresse. Ao delegar o transporte e a estética para profissionais capacitados que entendem de manejo humanizado, você garante a saúde dele e ganha mais tempo livre para curtir os melhores momentos juntos.
            </p>
            <p>
              Que tal agendar o próximo banho do seu peludo com o nosso serviço de transporte integrado?
            </p>

            {/* CTA do Artigo */}
            <div className="bg-gray-900 rounded-[2.5rem] p-8 text-center text-white mt-12">
              <h3 className="text-2xl font-bold mb-4">Gostou das dicas? Agende agora o atendimento do seu gigante!</h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
                Buscamos seu cão de grande porte na sua porta com o Táxi Dog climatizado e entregamos banhado e cheiroso sem nenhum estresse.
              </p>
              <a 
                href="https://wa.me/5534997622017" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all inline-flex items-center gap-2"
              >
                Falar Conosco no WhatsApp
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CaesGrandePorte;
