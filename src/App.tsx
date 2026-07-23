import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  GraduationCap,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
} from "lucide-react";

const brandName = "MLX Assessoria Educacional";
const slogan = "O elo que faltava entre você e seu diploma.";

const diplomaImages = [
  "WhatsApp Image 2026-07-21 at 19.38.37 (1).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.37 (2).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.37.jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.38 (1).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.38 (2).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.38 (3).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.38.jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.39 (1).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.39 (2).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.39 (3).jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.39.jpeg",
  "WhatsApp Image 2026-07-21 at 19.38.40.jpeg",
].map((name) => ({
  src: new URL(`../Diplomas/${name}`, import.meta.url).href,
  alt: `Exemplo de diploma apresentado pela ${brandName} - ${name}`,
}));

const clientItems = [
  { name: "Cliente 01", label: "Graduação", initials: "C1" },
  { name: "Cliente 02", label: "Técnico", initials: "C2" },
  { name: "Cliente 03", label: "Pós", initials: "C3" },
  { name: "Cliente 04", label: "Validação", initials: "C4" },
  { name: "Cliente 05", label: "Histórico", initials: "C5" },
  { name: "Cliente 06", label: "Certificação", initials: "C6" },
  { name: "Cliente 07", label: "Documentos", initials: "C7" },
  { name: "Cliente 08", label: "Suporte", initials: "C8" },
];

const courses = [
  "Administração",
  "Pedagogia",
  "Contabilidade",
  "Gestão Comercial",
  "Marketing",
  "Recursos Humanos",
  "Logística",
  "Sistemas de Gestão",
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
      "Sim. A landing já está preparada para destacar cursos superiores, técnicos, pós-graduação e documentação acadêmica complementar.",
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
    <div className="animated-background" aria-hidden="true">
      <div className="background-grid" />
      <div className="gold-haze haze-left" />
      <div className="gold-haze haze-right" />
      <div className="scan-line line-one" />
      <div className="scan-line line-two" />
      <svg className="constellation constellation-one" viewBox="0 0 420 320">
        <polyline points="18,226 72,118 154,94 218,36 312,64 386,18" />
        <circle cx="18" cy="226" r="4" />
        <circle cx="72" cy="118" r="4" />
        <circle cx="154" cy="94" r="4" />
        <circle cx="218" cy="36" r="4" />
        <circle cx="312" cy="64" r="4" />
        <circle cx="386" cy="18" r="4" />
      </svg>
      <svg className="constellation constellation-two" viewBox="0 0 420 320">
        <polyline points="28,48 118,96 184,82 236,168 318,144 388,252" />
        <circle cx="28" cy="48" r="4" />
        <circle cx="118" cy="96" r="4" />
        <circle cx="184" cy="82" r="4" />
        <circle cx="236" cy="168" r="4" />
        <circle cx="318" cy="144" r="4" />
        <circle cx="388" cy="252" r="4" />
      </svg>
      <svg className="constellation constellation-three" viewBox="0 0 420 320">
        <polyline points="34,266 92,216 156,244 248,172 326,214 390,122" />
        <circle cx="34" cy="266" r="4" />
        <circle cx="92" cy="216" r="4" />
        <circle cx="156" cy="244" r="4" />
        <circle cx="248" cy="172" r="4" />
        <circle cx="326" cy="214" r="4" />
        <circle cx="390" cy="122" r="4" />
      </svg>
    </div>
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
  const doubledClients = [...clientItems, ...clientItems];
  const doubledDiplomas = [...diplomaImages, ...diplomaImages];

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
          <a href="#cursos">Cursos</a>
          <a href="#diplomas">Diplomas</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="header-cta" href="#contato">
          <MessageCircle size={18} />
          Atendimento
        </a>
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
            <a className="btn btn-primary" href="#contato">
              <MessageCircle size={20} />
              Falar com a MLX
            </a>
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

      <section className="client-strip" aria-label="Carrossel de clientes">
        <div className="section-heading compact">
          <span>Clientes atendidos</span>
          <h2>Histórias em andamento, cada uma tratada de forma individual</h2>
        </div>
        <div className="circle-marquee">
          <div className="circle-track">
            {doubledClients.map((client, index) => (
              <div className="client-bubble" key={`${client.name}-${index}`}>
                <span>{client.initials}</span>
                <strong>{client.name}</strong>
                <small>{client.label}</small>
              </div>
            ))}
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
          <span>Apresentação visual</span>
          <h2>Diplomas e certificados apresentados com cuidado</h2>
          <p>
            Uma seleção visual dos materiais apresentados, organizada em galeria
            contínua para reforçar confiança logo no primeiro acesso.
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

      <section id="cursos" className="section-pad split-section">
        <div>
          <span className="eyebrow inline">
            <GraduationCap size={15} />
            Áreas de atendimento
          </span>
          <h2>Cursos e formações para diferentes objetivos profissionais</h2>
          <p>
            A MLX atende quem busca organizar sua documentação,
            fortalecer currículo e avançar com mais segurança na carreira.
          </p>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <div className="course-pill" key={course}>
              <BookOpenCheck size={18} />
              {course}
            </div>
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
        <a className="btn btn-primary" href="#top">
          <CheckCircle2 size={20} />
          Quero atendimento MLX
        </a>
      </section>

      <a className="floating-whatsapp" href="#contato" aria-label="Abrir atendimento por WhatsApp">
        <MessageCircle size={26} />
      </a>
    </main>
  );
}

export default App;
