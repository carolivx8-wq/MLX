import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileCheck2,
  GraduationCap,
  Instagram,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  X,
} from "lucide-react";
import { useState } from "react";

const brandName = "MLX Assessoria Educacional";
const slogan = "O elo que faltava entre você e seu diploma.";

const maleDiplomaImages = [
  "WhatsApp Image 2026-07-21 at 19.38.38 (1).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.38 (2).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.38 (3).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.38.jpeg",
];

const femaleDiplomaImages = [
  "WhatsApp Image 2026-07-21 at 19.38.37 (1).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.37 (2).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.37.jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.39 (1).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.39 (2).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.39 (3).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.39.jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.40.jpeg",
];

const diplomaImages = femaleDiplomaImages.flatMap((femaleImage, index) => [
  { name: maleDiplomaImages[index % maleDiplomaImages.length], gender: "homem" },
  { name: femaleImage, gender: "mulher" },
]).map(({ name, gender }) => ({
  src: new URL(`../Diplomas/${name}`, import.meta.url).href,
  alt: `Pessoa beneficiada pela ${brandName} segurando diploma (${gender}) - ${name}`,
}));

const institutionLogos = [
  "mma01.png",
  "mma01 (2).png",
  "mma01 (3).png",
  "mma01 (4).png",
  "mma01 (5).png",
  "mma01 (6).png",
  "mma01 (7).png",
  "mma01 (8).png",
  "mma01 (9).png",
  "mma01 (10).png",
  "mma01 (11).png",
  "mma01 (12).png",
  "mma01 (13).png",
  "mma01 (14).png",
  "mma01 (15).png",
].map((name, index) => ({
  src: new URL(`../Instituições/${name}`, import.meta.url).href,
  alt: `Logo de instituição parceira ${index + 1}`,
}));

const genericWhatsAppMessage =
  "Olá! Vim pelo site da MLX Assessoria Educacional e gostaria de receber atendimento.";

const whatsappRegions = [
  { id: "norte", label: "Região Norte", phone: "" },
  { id: "nordeste", label: "Região Nordeste", phone: "" },
  { id: "centro-sul", label: "Região Centro-Sul", phone: "" },
  { id: "sudeste", label: "Região Sudeste", phone: "" },
];

const certificationLevels = [
  {
    name: "Ensino Médio",
    message:
      "Olá! Vim pelo site da MLX Assessoria Educacional e tenho interesse em certificação de Ensino Médio. Pode me orientar?",
  },
  {
    name: "Técnico",
    message:
      "Olá! Vim pelo site da MLX Assessoria Educacional e tenho interesse em certificação de nível Técnico. Pode me orientar?",
  },
  {
    name: "Graduação",
    message:
      "Olá! Vim pelo site da MLX Assessoria Educacional e tenho interesse em certificação de Graduação. Pode me orientar?",
  },
  {
    name: "Pós-Graduação",
    message:
      "Olá! Vim pelo site da MLX Assessoria Educacional e tenho interesse em certificação de Pós-Graduação. Pode me orientar?",
  },
  {
    name: "Especialização/MBA",
    message:
      "Olá! Vim pelo site da MLX Assessoria Educacional e tenho interesse em certificação de Especialização/MBA. Pode me orientar?",
  },
  {
    name: "Mestrado",
    message:
      "Olá! Vim pelo site da MLX Assessoria Educacional e tenho interesse em certificação de Mestrado. Pode me orientar?",
  },
  {
    name: "Doutorado / PHD",
    message:
      "Olá! Vim pelo site da MLX Assessoria Educacional e tenho interesse em certificação de Doutorado / PHD. Pode me orientar?",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Atendimento reservado",
    text: "Você conversa com um especialista e explica sua necessidade acadêmica ou profissional.",
  },
  {
    icon: FileCheck2,
    title: "Análise documental",
    text: "A equipe confere o cenário, orienta próximos passos e separa as opções disponíveis.",
  },
  {
    icon: ShieldCheck,
    title: "Acompanhamento seguro",
    text: "O processo segue com suporte próximo, comunicação clara e cuidado com seus dados.",
  },
  {
    icon: Award,
    title: "Entrega organizada",
    text: "Você recebe orientação final e acompanhamento para conferir cada detalhe do material.",
  },
];

const faq = [
  {
    question: "Como funciona o atendimento?",
    answer:
      "O primeiro contato é feito por WhatsApp. Depois disso, a equipe entende sua situação, confere possibilidades e orienta o caminho mais adequado.",
  },
  {
    question: "Vocês atendem diferentes áreas?",
    answer:
      "Sim. A landing já está preparada para Ensino Médio, Técnico, Graduação, Pós-Graduação, Especialização/MBA, Mestrado e Doutorado / PHD.",
  },
  {
    question: "Como o atendimento é direcionado?",
    answer:
      "O contato pode seguir por WhatsApp, formulário ou outra etapa comercial definida pela MLX.",
  },
  {
    question: "A identidade da MLX já está aplicada?",
    answer:
      "A identidade já está aplicada como MLX Assessoria Educacional e pode receber ajustes finos de marca quando necessário.",
  },
];

function AnimatedBackground() {
  return (
    <div className="animated-background blue-pattern" aria-hidden="true">
      <div className="background-grid" />
      <div className="blue-haze haze-left" />
      <div className="blue-haze haze-right" />
      <div className="school-shapes layer-one" />
      <div className="school-shapes layer-two" />
    </div>
  );
}

type WhatsAppContext =
  | { kind: "generic"; message: string }
  | { kind: "certification"; certification: string; message: string };

function buildWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`whatsapp-glyph ${className}`} aria-hidden="true">
      <MessageCircle className="whatsapp-glyph-bubble" />
      <Phone className="whatsapp-glyph-phone" />
    </span>
  );
}

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Voltar ao inicio">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <defs>
            <linearGradient id="logoGold" x1="13" y1="10" x2="50" y2="56">
              <stop stopColor="#f8dc82" />
              <stop offset="0.52" stopColor="#d4a935" />
              <stop offset="1" stopColor="#9d761f" />
            </linearGradient>
          </defs>
          <path
            d="M32 5 53 15v17c0 13.2-8.5 22.1-21 27-12.5-4.9-21-13.8-21-27V15L32 5Z"
            fill="#090909"
            stroke="url(#logoGold)"
            strokeWidth="3"
          />
          <path d="M17 27 32 19l15 8-15 8-15-8Z" fill="url(#logoGold)" />
          <path
            d="M24 34v6c4.8 3.2 11.2 3.2 16 0v-6"
            fill="none"
            stroke="#f8dc82"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d="M43 30v8"
            fill="none"
            stroke="#f8dc82"
            strokeLinecap="round"
            strokeWidth="2.5"
          />
          <circle cx="43" cy="41" r="2.5" fill="#f8dc82" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>{brandName}</strong>
        <small>{slogan}</small>
      </span>
    </a>
  );
}

function App() {
  const [whatsAppContext, setWhatsAppContext] = useState<WhatsAppContext | null>(
    null,
  );
  const doubledInstitutionLogos = [...institutionLogos, ...institutionLogos];
  const doubledDiplomas = [...diplomaImages, ...diplomaImages];
  const openGenericWhatsApp = () =>
    setWhatsAppContext({ kind: "generic", message: genericWhatsAppMessage });
  const closeWhatsAppPopup = () => setWhatsAppContext(null);
  const chooseRegion = (phone: string) => {
    if (!whatsAppContext) return;
    if (!phone) {
      window.alert("Número desta região ainda não foi configurado.");
      return;
    }
    window.open(buildWhatsAppUrl(phone, whatsAppContext.message), "_blank");
    closeWhatsAppPopup();
  };

  return (
    <main id="top" className="site-shell">
      <AnimatedBackground />
      <div className="top-ribbon">
        <Sparkles size={13} />
        <span>{brandName}</span>
        <strong>{slogan}</strong>
      </div>
      <header className="site-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegacao principal">
          <a href="#como-funciona">Como funciona</a>
          <a href="#certificacoes">Certificações</a>
          <a href="#diplomas">Diplomas</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <button className="header-cta" type="button" onClick={openGenericWhatsApp}>
          <WhatsAppIcon />
          Atendimento
        </button>
      </header>

      <section className="hero section-pad">
        <div className="texture" aria-hidden="true" />
        <div className="hero-inner">
          <span className="eyebrow">
            <Sparkles size={15} />
            {brandName}
          </span>
          <h1>
            <span>O elo que faltava</span> entre você e seu{" "}
            <span>diploma</span>
          </h1>
          <p>
            Assessoria educacional reservada para quem precisa organizar
            diplomas, certificações e documentação acadêmica com orientação
            próxima, linguagem simples e acompanhamento de ponta a ponta.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" type="button" onClick={openGenericWhatsApp}>
              <WhatsAppIcon />
              Falar com a MLX
            </button>
            <a className="btn btn-secondary" href="#como-funciona">
              Ver processo
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="trust-row" aria-label="Destaques">
            <span>
              <BadgeCheck size={18} />
              Atendimento reservado
            </span>
            <span>
              <LockKeyhole size={18} />
              Dados protegidos
            </span>
            <span>
              <UserCheck size={18} />
              Suporte humano
            </span>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section-pad">
        <div className="section-heading">
          <span>Como funciona</span>
          <h2>Um processo simples, discreto e bem acompanhado</h2>
          <p>
            Do primeiro contato à organização final, cada etapa é conduzida com
            clareza para você saber exatamente o que acontece a seguir.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article className="step-card" key={step.title}>
                <div className="step-number">0{index + 1}</div>
                <Icon size={28} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="diplomas" className="diploma-section section-pad">
        <div className="section-heading">
          <span>Resultados reais</span>
          <h2>JÁ SÃO MAIS DE 10 MIL PESSOAS BENEFICIADAS.</h2>
          <p>
            Histórias de conquista apresentadas em uma galeria contínua, com
            pessoas que avançaram em suas trajetórias educacionais.
          </p>
        </div>
        <div className="diploma-frame">
          <div className="diploma-track">
            {doubledDiplomas.map((image, index) => (
              <figure className="diploma-card" key={`${image.src}-${index}`}>
                <img src={image.src} alt={image.alt} loading="eager" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="client-strip" aria-label="Carrossel de instituições parceiras">
        <div className="section-heading compact">
          <span>Instituições</span>
          <h2>ALGUMAS DAS 40 INSTITUIÇÕES PARCEIRAS</h2>
        </div>
        <div className="circle-marquee">
          <div className="circle-track">
            {doubledInstitutionLogos.map((logo, index) => (
              <div className="client-bubble institution-bubble" key={`${logo.src}-${index}`}>
                <img src={logo.src} alt={logo.alt} loading="eager" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificacoes" className="section-pad split-section">
        <div>
          <span className="eyebrow inline">
            <GraduationCap size={15} />
            Níveis de certificação
          </span>
          <h2>Escolha o nível de certificação que você precisa</h2>
          <p>
            A MLX orienta seu atendimento conforme o nível desejado, com
            mensagem específica para agilizar o primeiro contato.
          </p>
        </div>
        <div className="course-grid">
          {certificationLevels.map((level) => (
            <button
              className="course-pill"
              key={level.name}
              type="button"
              onClick={() =>
                setWhatsAppContext({
                  kind: "certification",
                  certification: level.name,
                  message: level.message,
                })
              }
            >
              <BookOpenCheck size={18} />
              <span>{level.name}</span>
              <WhatsAppIcon className="course-whatsapp" />
            </button>
          ))}
        </div>
      </section>

      <section className="proof-band">
        <div className="proof-item">
          <strong>1:1</strong>
          <span>Atendimento individual</span>
        </div>
        <div className="proof-item">
          <strong>24h</strong>
          <span>Retorno inicial ágil</span>
        </div>
        <div className="proof-item">
          <strong>100%</strong>
          <span>Comunicação reservada</span>
        </div>
      </section>

      <section id="duvidas" className="section-pad faq-section">
        <div className="section-heading">
          <span>Dúvidas frequentes</span>
          <h2>Respostas curtas para reduzir atrito antes do contato</h2>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <ChevronDown size={20} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contato" className="final-cta">
        <span className="eyebrow">
          <Star size={15} />
          Próximo passo
        </span>
        <h2>Fale com a MLX e receba orientação personalizada</h2>
          <p>
            Um atendimento breve já ajuda a entender o cenário, levantar os
            documentos necessários e indicar o melhor caminho para seguir.
          </p>
        <button className="btn btn-primary" type="button" onClick={openGenericWhatsApp}>
          <CheckCircle2 size={20} />
          Quero atendimento MLX
        </button>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-mark" aria-hidden="true">
              MLX
            </span>
            <div>
              <strong>{brandName}</strong>
              <p>{slogan}</p>
            </div>
          </div>

          <div className="footer-column">
            <h3>Navegação</h3>
            <a href="#como-funciona">Como funciona</a>
            <a href="#diplomas">Diplomas</a>
            <a href="#certificacoes">Certificações</a>
            <a href="#duvidas">Dúvidas frequentes</a>
          </div>

          <div className="footer-column">
            <h3>Atendimento</h3>
            <button type="button" onClick={openGenericWhatsApp}>
              <WhatsAppIcon />
              WhatsApp regional
            </button>
            <span>
              <Phone size={16} />
              (11) 4002-8922
            </span>
            <span>
              <Mail size={16} />
              contato@mlxeducacional.com.br
            </span>
            <span>
              <Clock3 size={16} />
              Seg. a Sex. das 8h às 18h
            </span>
          </div>

          <div className="footer-column footer-contact">
            <h3>Institucional</h3>
            <span>
              <Building2 size={16} />
              CNPJ 12.345.678/0001-90
            </span>
            <span>
              <MapPin size={16} />
              Rua das Acácias, 128 - Sala 804, Centro, São Paulo - SP
            </span>
            <span>
              <Instagram size={16} />
              @mlx.assessoriaeducacional
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Dados institucionais provisórios para apresentação da landing page.</span>
          <span>© 2026 MLX Assessoria Educacional. Todos os direitos reservados.</span>
        </div>
      </footer>

      <button
        className="floating-whatsapp"
        type="button"
        onClick={openGenericWhatsApp}
        aria-label="Abrir atendimento por WhatsApp"
      >
        <WhatsAppIcon className="whatsapp-glyph-floating" />
      </button>

      {whatsAppContext && (
        <div className="whatsapp-modal" role="dialog" aria-modal="true">
          <button
            className="modal-backdrop"
            type="button"
            aria-label="Fechar seleção de região"
            onClick={closeWhatsAppPopup}
          />
          <div className="region-dialog">
            <button
              className="dialog-close"
              type="button"
              aria-label="Fechar"
              onClick={closeWhatsAppPopup}
            >
              <X size={20} />
            </button>
            <span className="dialog-eyebrow">
              <WhatsAppIcon />
              Atendimento por região
            </span>
            <h3>
              {whatsAppContext.kind === "certification"
                ? `Escolha sua região para ${whatsAppContext.certification}`
                : "Escolha sua região para falar com a MLX"}
            </h3>
            <p>
              Você será direcionado para uma conversa no WhatsApp com a mensagem
              certa já preenchida.
            </p>
            <div className="region-grid">
              {whatsappRegions.map((region) => (
                <button
                  className="region-option"
                  key={region.id}
                  type="button"
                  onClick={() => chooseRegion(region.phone)}
                >
                  <span>{region.label}</span>
                  <Send size={17} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
