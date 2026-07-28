# Especialista IA Lagoa

Landing page open source para divulgação local de serviços de inteligência artificial, sites, apps e automação na **Lagoa da Conceição** e **Leste da Ilha**, Florianópolis-SC.

**Site:** [paladini.io/especialista-ia-automacao-lagoa](https://paladini.io/especialista-ia-automacao-lagoa/)  
**WhatsApp:** [(48) 99845-9684](https://wa.me/5548998459684)

> Este projeto é publicado como **GitHub Pages de repositório** e não altera o site principal em [paladini.io](https://paladini.io).

## Serviços

- Consultoria em IA
- Sites e apps com inteligência artificial
- Manutenção de vibe coding (Cursor, Claude, etc.)
- Automação de fluxos e processos
- Produtos digitais com IA
- Mentoria e pair programming com IA

## Stack

- [Astro](https://astro.build) 5 (SSG estático)
- CSS próprio (sem framework UI)
- GitHub Pages (project site)

## Desenvolvimento local

```bash
npm install
npm run dev      # http://localhost:4321/especialista-ia-automacao-lagoa/
npm run build    # gera dist/
npm run preview  # preview da build
```

## Deploy (GitHub Pages)

1. Faça push deste repositório para `github.com/paladini/especialista-ia-automacao-lagoa`
2. Em **Settings → Pages**, configure:
   - **Source:** GitHub Actions
3. O workflow `.github/workflows/deploy.yml` publica automaticamente a cada push na branch `main`

### URL pública

Como **project site** na conta `paladini`, o endereço padrão do GitHub Pages é:

`https://paladini.github.io/especialista-ia-automacao-lagoa/`

Se `paladini.io` já aponta para o GitHub Pages da sua conta, o mesmo conteúdo também fica acessível em:

`https://paladini.io/especialista-ia-automacao-lagoa/`

Não é necessário criar subdomínio nem alterar DNS. O site principal continua em `https://paladini.io/`.

## SEO e GEO

O site inclui:

- Meta tags (title, description, keywords, Open Graph, Twitter)
- Geo tags para Florianópolis / Lagoa da Conceição
- JSON-LD: `ProfessionalService`, `Person`, `FAQPage`
- `robots.txt` e sitemap automático (`sitemap-index.xml`)
- [`llms.txt`](public/llms.txt) para motores generativos (GEO)

## Google Maps / Google Business Profile

O site sozinho **não cria** um pin no Google Maps. Para aparecer em buscas locais:

1. Acesse [Google Business Profile](https://business.google.com)
2. Crie um perfil como **prestador de serviço** (categoria sugerida: *Consultor de tecnologia da informação* ou *Serviço de consultoria de software*)
3. Defina a área de atendimento: Lagoa da Conceição, Costa da Lagoa, Itacorubi, Canto da Lagoa
4. Use o **mesmo NAP** (nome, endereço/região, telefone) do site:
   - Nome: Especialista IA Lagoa — Fernando Paladini
   - Região: Lagoa da Conceição, Florianópolis-SC
   - Telefone/WhatsApp: +55 48 99845-9684
   - Site: https://paladini.io/especialista-ia-automacao-lagoa/
5. Adicione fotos, horário de atendimento e descrição com palavras-chave locais
6. Solicite avaliações de clientes da região

## Licença

MIT — veja [LICENSE](LICENSE).

## Autor

[Fernando Paladini](https://paladini.io) · [GitHub](https://github.com/paladini)
