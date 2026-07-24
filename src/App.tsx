import {
  Award,
  BookOpenCheck,
  Check,
  Clock3,
  FileText,
  Lock,
  ScrollText,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";
import { useState } from "react";

const brandName = "MLX Assessoria Educacional";
const brandTagline = "ASSESSORIA EDUCACIONAL";
const slogan = "O elo que faltava entre você e seu diploma";

const logoSrc = new URL("../assets/mlx-logo.png", import.meta.url).href;

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

// Alterna homem/mulher sem repetir nenhuma foto: as 12 imagens entram uma unica vez.
const orderedDiplomaNames: { name: string; gender: string }[] = [];
const longestList = Math.max(maleDiplomaImages.length, femaleDiplomaImages.length);
for (let index = 0; index < longestList; index += 1) {
  if (maleDiplomaImages[index]) {
    orderedDiplomaNames.push({ name: maleDiplomaImages[index], gender: "homem" });
  }
  if (femaleDiplomaImages[index]) {
    orderedDiplomaNames.push({ name: femaleDiplomaImages[index], gender: "mulher" });
  }
}

const diplomaImages = orderedDiplomaNames.map(({ name, gender }) => ({
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
  alt: `Logo de instituição disponível ${index + 1}`,
}));

const heroHighlights = ["TEMPO RECORDE", "SEM BUROCRACIA", "100% ON-LINE"];

const benefits = [
  {
    icon: ScrollText,
    title: "Histórico Completo",
    text: "Diploma acompanhado de histórico escolar detalhado com todas as disciplinas cursadas.",
  },
  {
    icon: ShieldCheck,
    title: "Reconhecido pelo MEC",
    text: "Todos os diplomas possuem validade nacional com reconhecimento do Ministério da Educação.",
  },
  {
    icon: FileText,
    title: "Diário Oficial da União",
    text: "Registro oficial publicado no DOU, garantindo autenticidade e legalidade do documento.",
  },
  {
    icon: Award,
    title: "Instituições Credenciadas",
    text: "Parcerias com universidades e instituições do ensino superior reconhecidas nacionalmente.",
  },
  {
    icon: Lock,
    title: "Sigilo Absoluto",
    text: "Seus dados são protegidos com criptografia de ponta. Privacidade total garantida.",
  },
  {
    icon: Clock3,
    title: "Entrega Expressa",
    text: "Processo ágil com entrega em prazo reduzido, direto no endereço de sua preferência.",
  },
];

const genericWhatsAppMessage =
  "Olá! Vim pelo site da MLX Assessoria Educacional e gostaria de receber atendimento.";

const whatsappRegions = [
  { id: "norte", name: "Norte", states: "AC - AP - AM - PA - RO - RR - TO", phone: "" },
  {
    id: "nordeste",
    name: "Nordeste",
    states: "AL - BA - CE - MA - PB - PE - PI - RN - SE",
    phone: "",
  },
  { id: "centro-oeste", name: "Centro-Oeste", states: "DF - GO - MT - MS", phone: "" },
  { id: "sudeste", name: "Sudeste", states: "ES - MG - RJ - SP", phone: "" },
  { id: "sul", name: "Sul", states: "RS - PR - SC", phone: "" },
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

function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
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
    <svg
      className={`whatsapp-glyph ${className}`}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M20.52 3.449A11.86 11.86 0 0 0 12.045 0C5.463 0 .104 5.359.101 11.945a11.9 11.9 0 0 0 1.595 5.945L0 24l6.335-1.652a11.98 11.98 0 0 0 5.71 1.454h.006c6.585 0 11.946-5.359 11.949-11.945a11.87 11.87 0 0 0-3.48-8.408M12.051 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.207c.002-5.45 4.437-9.885 9.888-9.885a9.82 9.82 0 0 1 6.988 2.896 9.83 9.83 0 0 1 2.892 6.994c-.003 5.45-4.437 9.834-9.884 9.834m5.421-7.403c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12 12 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"
      />
    </svg>
  );
}

function Logo() {
  return (
    <a className="brand" href="#top" aria-label={`${brandName} - voltar ao início`}>
      <img className="brand-logo" src={logoSrc} alt={brandName} />
      <span className="brand-copy">{brandTagline}</span>
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

      <header className="site-header">
        <Logo />
        <button className="header-cta" type="button" onClick={openGenericWhatsApp}>
          <WhatsAppIcon />
          <span>Atendimento</span>
        </button>
      </header>

      <section className="hero">
        <p className="hero-slogan">{slogan}</p>
        <div className="hero-card">
          <h1>Conquiste o seu diploma em:</h1>
          <ul className="hero-highlights">
            {heroHighlights.map((highlight) => (
              <li key={highlight}>
                <Check size={18} strokeWidth={3} />
                {highlight}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary" type="button" onClick={openGenericWhatsApp}>
            <WhatsAppIcon />
            Falar com a MLX
          </button>
        </div>
      </section>

      <section id="diplomas" className="diploma-section">
        <h2 className="display-title">JÁ SÃO MAIS DE 10 MIL PESSOAS BENEFICIADAS</h2>
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

      <section className="benefits-section section-pad">
        <div className="benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article className="dark-card benefit-card" key={benefit.title}>
                <span className="card-icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="client-strip" aria-label="Carrossel de instituições disponíveis">
        <h2 className="display-title">
          ALGUMAS DAS 40 INSTITUIÇÕES <span>DISPONÍVEIS</span>
        </h2>
        <div className="circle-marquee">
          <div className="circle-track">
            {doubledInstitutionLogos.map((logo, index) => (
              <div className="institution-bubble" key={`${logo.src}-${index}`}>
                <img src={logo.src} alt={logo.alt} loading="eager" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificacoes" className="section-pad certification-section">
        <h2 className="display-title">
          Escolha o nível de certificação que <span>você precisa</span>
        </h2>
        <div className="course-grid">
          {certificationLevels.map((level) => (
            <button
              className="dark-card course-pill"
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

      <footer className="site-footer">
        <img className="footer-logo" src={logoSrc} alt={brandName} />
        <span className="footer-tagline">{brandTagline}</span>
        <span className="footer-copy">
          © 2026 {brandName}. Todos os direitos reservados.
        </span>
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
                  <span className="region-label">
                    <strong>{region.name}</strong>
                    <small>{region.states}</small>
                  </span>
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
