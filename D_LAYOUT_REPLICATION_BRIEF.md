# D_LAYOUT_REPLICATION_BRIEF - Landing Page Diplomas

## Objetivo

**Tela alvo:** landing page React/Vite em `src/App.tsx` e `src/styles.css`  
**Referencia:** https://diplomaplus.netlify.app/#  
**Modo:** ADAPTACAO_INSPIRADA  
**Autorizacao de copia:** terceiro sem autorizacao clara

## Tokens Extraidos

### Cores

| Token | Valor | Origem |
|---|---|---|
| background | `#080808` | referencia adaptada |
| surface | `#121212` | referencia adaptada |
| primary/gold | `#dfac2a` | referencia medida na referencia |
| bright gold | `#ffcf4a` | referencia adaptada para destaque |
| text | `#f6f1e4` | referencia adaptada |
| muted | `#b7b0a4` | referencia adaptada |
| support accent | `#71c7a5` | original para evitar paleta monotona |

### Tipografia

| Uso | Fonte | Size | Weight | Line-height |
|---|---|---:|---:|---:|
| H1 | Sora | `clamp(42px, 8vw, 84px)` | 800 | 0.98 |
| H2 | Sora | `clamp(30px, 4vw, 48px)` | 800 | 1.08 |
| Body | Inter | 16-18px | 400-700 | 1.65-1.75 |

### Layout

| Elemento | Medida/Regra |
|---|---|
| Container | `min(1180px, calc(100% - 32px))` |
| Header | fixed, 76px desktop, glass dark, border gold |
| Hero | centralizado, min-height 760px desktop |
| Cards | radius 8px, dark surfaces, gold borders |
| Mobile | header compacto, grids em uma coluna |

## Componentes Replicados

- Header fixo com logo, navegacao e CTA.
- Faixa superior dourada com slogan.
- Hero centralizado com badge, titulo grande, copy e botoes.
- Fundo animado com grid, linhas douradas, brilhos laterais e constelacoes.
- Carrossel circular de clientes em marquee horizontal.
- Secao "Como funciona" com quatro cards numerados.
- Galeria/carrossel de diplomas com as 12 imagens locais.
- Cursos em grid compacto.
- Faixa de provas/metricas.
- FAQ em acordeon.
- CTA final e botao flutuante de WhatsApp.

## Assets

| Asset | Status | Acao |
|---|---|---|
| Logo | ausente | criada marca vetorial original inline |
| Diplomas | disponivel | usadas 12 imagens em `Diplomas/` |
| Carrossel de clientes | nao localizado no workspace | criada estrutura circular separada com placeholders editaveis |

## Validacao

- Build executado com `npm run build`.
- Servidor local executado com `npm run dev -- --port 5173`.
- Screenshots gerados em desktop e mobile.
- Checagem Playwright sem erros de console.
- Checagem Playwright confirmou 24/24 imagens carregadas no carrossel duplicado.
- Checagem Playwright confirmou `scrollWidth == clientWidth` fora dos trilhos animados com overflow controlado.
- Nova validacao de paridade executada apos ajuste dourado: screenshots `desktop-gold.png` e `mobile-gold.png`.

## Divergencias Intencionais

- Nao foram copiados logo, marca, textos distintivos nem assets proprietarios da referencia.
- Conteudo foi reposicionado para `MLX Assessoria Educacional`, com slogan `O elo que faltava entre voce e seu diploma.`
- Mascote nao foi criado, conforme instruido.
