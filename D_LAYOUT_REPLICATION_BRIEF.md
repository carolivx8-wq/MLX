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

Estrutura atual, na ordem definida pelo cliente:

1. Header fixo com logo oficial `assets/mlx-logo.png` + texto `ASSESSORIA EDUCACIONAL` e botao de atendimento.
2. Slogan `O elo que faltava entre voce e seu diploma`.
3. Card `CONQUISTE O SEU DIPLOMA EM:` com TEMPO RECORDE / SEM BUROCRACIA / 100% ON-LINE e CTA de WhatsApp.
4. Titulo `JA SAO MAIS DE 10 MIL PESSOAS BENEFICIADAS` + carrossel com as 12 fotos (todas unicas, alternando homem/mulher).
5. Seis cartoes escuros: Historico Completo, Reconhecido pelo MEC, Diario Oficial da Uniao, Instituicoes Credenciadas, Sigilo Absoluto e Entrega Expressa.
6. Titulo `ALGUMAS DAS 40 INSTITUICOES DISPONIVEIS` + carrossel circular com as 15 logos.
7. `Escolha o nivel de certificacao que voce precisa` com os niveis em cartoes escuros ligados ao pop-up regional.
8. Rodape basico: logo, assinatura e copyright.
9. Botao flutuante de WhatsApp com o icone oficial da marca.

Fundo animado azul com grid e halos suaves segue ativo atras de todo o conteudo.

### Secoes removidas (nao existem no projeto do cliente)

- Faixa superior com slogan e navegacao do header.
- Secao "Como funciona" com quatro cards numerados.
- Faixa de provas/metricas (1:1, 24h, 100%).
- FAQ em acordeon.
- CTA final.
- Rodape institucional com dados ficticios, links rapidos e contatos.

## Assets

| Asset | Status | Acao |
|---|---|---|
| Logo | disponivel | `assets/mlx-logo.png` aplicado no header e no rodape |
| Diplomas | disponivel | usadas 12 imagens em `Diplomas/` |
| Logos de instituicoes | disponivel | usadas 15 imagens circulares em `Instituições/` no carrossel |

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
- Regioes de WhatsApp separadas em Norte, Nordeste, Centro-Oeste, Sudeste e Sul.
- Validacao posterior confirmou os niveis Ensino Medio, Tecnico, Graduacao, Pos-Graduacao, Especializacao/MBA, Mestrado e Doutorado / PHD com pop-up regional.
- Carrossel atualizado com logos reais de instituicoes e icone de WhatsApp redesenhado com telefone dentro do balao.
- Reestruturacao conforme o print do cliente (24/07/2026): logo oficial no header, bloco "Conquiste o seu diploma em", cartoes escuros, rodape basico e icone oficial do WhatsApp no botao flutuante.
- Playwright confirmou 12 fotos unicas no carrossel, 0 imagens quebradas, 0 erros de console e nenhum overflow horizontal no mobile.
- Pop-up regional validado nos dois gatilhos: nivel de certificacao (mensagem especifica) e botao flutuante (mensagem generica).

## Divergencias Intencionais

- Nao foram copiados logo, marca, textos distintivos nem assets proprietarios da referencia.
- Conteudo foi reposicionado para `MLX Assessoria Educacional`, com slogan `O elo que faltava entre voce e seu diploma.`
- Numeros de WhatsApp ficaram preparados em `whatsappRegions`, com `phone: ""` para preencher por regiao.
- Mascote nao foi criado, conforme instruido.
