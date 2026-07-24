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
| background | `#011F67` | requisito do cliente |
| surface | `#0F4ED1` | tom azul claro dos prints |
| surface highlight | `#1B67E9` | hover/cards destacados |
| text | `#FFFFFF` | requisito do cliente |
| muted | `rgba(255,255,255,.78)` | contraste secundario |
| whatsapp | `#25D366` | cor fiel ao WhatsApp |

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
| Header | fixed, 76px desktop, glass azul, borda branca translucida |
| Hero | centralizado, min-height 760px desktop |
| Cards | radius 8px, surfaces azuis claras, bordas brancas |
| Mobile | header compacto, grids em uma coluna |

## Componentes Replicados

- Header fixo com logo, navegacao e CTA.
- Faixa superior azul com slogan.
- Hero centralizado com badge, titulo grande, copy e botoes.
- Fundo animado com grid e formas academicas sutis, inspirado nos prints.
- Carrossel circular de clientes em marquee horizontal.
- Secao "Como funciona" com quatro cards numerados.
- Galeria/carrossel de diplomas com as 12 imagens locais.
- Niveis de certificacao em grid compacto.
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
- Ajuste posterior de identidade educacional: fundo `#011F67`, fonte branca, surfaces em azul claro e padrao com formas academicas conforme prints fornecidos.
- Fluxo de WhatsApp validado via Playwright: botao flutuante abre modal regional, nivel de certificacao abre o mesmo modal com mensagem especifica.
- Validacao posterior confirmou os niveis Ensino Medio, Tecnico, Graduacao, Pos-Graduacao, Especializacao/MBA, Mestrado e Doutorado / PHD com pop-up regional.

## Divergencias Intencionais

- Nao foram copiados logo, marca, textos distintivos nem assets proprietarios da referencia.
- Conteudo foi reposicionado para `MLX Assessoria Educacional`, com slogan `O elo que faltava entre voce e seu diploma.`
- Numeros de WhatsApp ficaram preparados em `whatsappRegions`, com `phone: ""` para preencher por regiao.
- Mascote nao foi criado, conforme instruido.
