export const repoName = 'especialista-ia-automacao-lagoa';

export const site = {
  brand: 'Especialista IA Lagoa',
  tagline:
    'Consultoria em IA, sites, apps, vibe coding e automação no Leste da Ilha, Florianópolis',
  url: `https://paladini.io/${repoName}`,
  locale: 'pt-BR',
  title:
    'Especialista em IA na Lagoa da Conceição | Vibe Coding, Sites, Apps e Automação',
  description:
    'Fernando Paladini, Staff AI Engineer, atende Lagoa da Conceição, Rio Tavares, Campeche e Leste da Ilha. Manutenção de Lovable, Cursor, Codex e Claude; produtização de apps com IA; consultoria e automação. Presencial ou WhatsApp.',
  keywords: [
    'especialista IA Lagoa da Conceição',
    'vibe coding Florianópolis',
    'manutenção Lovable Cursor Codex',
    'consultoria inteligência artificial Leste da Ilha',
    'criar site com IA Campeche',
    'app com IA Rio Tavares',
    'automação WhatsApp Florianópolis',
    'produtização app IA',
    'manutenção código gerado por IA',
    'GitHub Copilot consultoria',
    'Staff AI Engineer Florianópolis',
    'desenvolvedor IA Barra da Lagoa',
  ],
} as const;

export const contact = {
  name: 'Fernando Paladini',
  phoneDisplay: '(48) 99845-9684',
  phoneE164: '+5548998459684',
  whatsappUrl: 'https://wa.me/5548998459684',
  whatsappMessage:
    'Olá Fernando! Vi o site Especialista IA Lagoa e gostaria de conversar sobre um projeto com IA.',
  email: 'fnpaladini@gmail.com',
  location: {
    neighborhood: 'Lagoa da Conceição',
    city: 'Florianópolis',
    state: 'SC',
    country: 'Brasil',
    region: 'Leste da Ilha',
  },
} as const;

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? contact.whatsappMessage);
  return `${contact.whatsappUrl}?text=${text}`;
}

export const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#problemas', label: 'Problemas' },
  { href: '#bairros', label: 'Bairros' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#faq', label: 'FAQ' },
] as const;

export const hero = {
  eyebrow: 'Atendimento local · Leste da Ilha',
  title: {
    lead: 'Especialista em IA',
    place: 'na Lagoa da Conceição',
    region: 'e Leste da Ilha',
  },
  tagline: 'IA e vibe coding com quem já fez isso em escala',
  subheadline:
    'Precisa de ajuda com um site no Lovable, um app no Cursor ou um fluxo que trava no meio do caminho? Sou desenvolvedor há mais de 13 anos — com passagem por Mercado Livre, Mercado Bitcoin, Grupo Boticário e BNY Mellon — e hoje atendo pessoas e negócios da Lagoa, Campeche, Rio Tavares e região.',
  note: 'Atendo presencialmente quando faz sentido: posso ir até você para entender a dor, revisar o código ou planejar o próximo passo do produto. Remoto também, com resposta rápida no WhatsApp.',
} as const;

export const services = [
  {
    title: 'Consultoria em IA',
    description:
      'Entendo o seu contexto, separo o que é hype do que resolve, e monto um plano claro — ferramenta, arquitetura, custo e prioridade.',
  },
  {
    title: 'Sites e apps com IA',
    description:
      'Crio ou corrijo landing pages, MVPs e ferramentas feitas com Lovable, v0, Bolt, Cursor, Claude Code, Codex, Windsurf e ChatGPT.',
  },
  {
    title: 'Manutenção de vibe coding',
    description:
      'Código gerado por IA que quebrou, ficou lento ou impossível de evoluir? Organizo, corrijo e deixo em condições de crescer.',
  },
  {
    title: 'Produtização e próximos passos',
    description:
      'Ajudo a tirar o protótipo do ar e colocar no mundo: deploy, domínio, pagamentos, SEO, métricas e o que falta para vender ou operar.',
  },
  {
    title: 'Automação de fluxos',
    description:
      'Integrações, bots, rotinas repetitivas e processos manuais viram fluxos automáticos — n8n, APIs, webhooks e scripts sob medida.',
  },
  {
    title: 'Mentoria prática com IA',
    description:
      'Sessões para você ou sua equipe aprenderem a usar IA no dia a dia, com pair programming e orientação sobre ferramentas reais.',
  },
] as const;

export const problems = [
  {
    title: 'Site no Lovable ou v0 que não publica direito',
    description:
      'Domínio, deploy, formulário, SEO básico ou integração que não funciona — reviso e deixo no ar.',
  },
  {
    title: 'App no Cursor ou Claude Code cheio de bugs',
    description:
      'Erros de autenticação, banco de dados, API ou layout quebrado após vibe coding acelerado.',
  },
  {
    title: 'Projeto de IA sem rumo depois do MVP',
    description:
      'Você tem um protótipo, mas não sabe o próximo passo: hospedar, cobrar, medir ou escalar com segurança.',
  },
  {
    title: 'Código gerado que ninguém entende mais',
    description:
      'Refatoração, documentação mínima e organização para você ou outro dev conseguirem continuar.',
  },
  {
    title: 'Automação manual que consome tempo',
    description:
      'Planilhas, copy-paste, atendimento repetitivo ou integração entre WhatsApp, CRM e ferramentas do negócio.',
  },
  {
    title: 'Dúvida sobre qual ferramenta de IA usar',
    description:
      'Lovable vs Cursor vs Codex vs n8n — indico o caminho certo para o seu caso, sem empurrar moda.',
  },
  {
    title: 'Landing page sem aparecer no Google',
    description:
      'Ajustes de SEO e GEO para buscas locais na Lagoa, Campeche, Rio Tavares e Florianópolis.',
  },
  {
    title: 'Produto digital que precisa ir além do chat com IA',
    description:
      'Do prompt ao produto: fluxo de usuário, backend, persistência de dados e publicação.',
  },
] as const;

export const neighborhoods = [
  { name: 'Lagoa da Conceição', primary: true },
  { name: 'Rio Tavares', primary: false },
  { name: 'Campeche', primary: false },
  { name: 'Barra da Lagoa', primary: false },
  { name: 'Canto da Lagoa', primary: false },
  { name: 'Canto dos Araçás', primary: false },
  { name: 'Porto da Lagoa', primary: false },
  { name: 'Costa da Lagoa', primary: false },
] as const;

export const about = {
  title: 'Quem está por trás',
  intro:
    'Sou Fernando Paladini, Staff AI Engineer com formação em Ciência da Computação pela UFSC e mais de 13 anos construindo software — de startups em Florianópolis a times de engenharia com milhares de desenvolvedores.',
  paragraphs: [
    'No Grupo Boticário, atuei como Developer Specialist em DevEx e adoção de GenAI para uma organização de mais de 3.000 desenvolvedores — GitHub Copilot, governança de IA, automações e analytics de engenharia. Antes, passei pelo Mercado Livre (logística em Go), Mercado Bitcoin (backend em fintech), Conviso (segurança de aplicações), 1Doc e Adroit (GovTech), além de startups como AllNighter e projetos próprios em open source.',
    'Na região da Lagoa, meu foco é traduzir essa experiência corporativa em ajuda prática: entender sua dor, consertar o que travou e orientar os próximos passos — sem prometer milagre e sem complicar.',
  ],
  openSourceLinks: {
    mcpMe: { label: 'mcp-me', href: 'https://mcp-me.page/' },
    voiceSeparator: { label: 'voice-separator', href: 'https://github.com/paladini/voice-separator-demucs' },
    echoTranscribe: { label: 'echo-transcribe', href: 'https://github.com/paladini/echo-transcribe' },
    seoGuide: { label: 'SEO', href: 'https://github.com/paladini/seo-basics-guide-definitive-edition' },
    geoGuide: { label: 'GEO', href: 'https://paladini.github.io/generative-engine-optimization-basic-guide/' },
    medium: { label: 'Medium', href: 'https://medium.com/@fernandopaladini' },
  },
  highlights: [
    'Staff AI Engineer · 13+ anos em software',
    'Mercado Livre, Mercado Bitcoin, Grupo Boticário e BNY Mellon',
    'Startups e GovTech: 1Doc, AllNighter, Conviso, Adroit',
    'Criador do mcp-me · dezenas de projetos open source',
    'Certificação Microsoft GitHub Copilot — GH-300 (válida até 2028)',
  ],
  education: [
    {
      title: 'Bacharelado em Ciência da Computação',
      institution: 'Universidade Federal de Santa Catarina (UFSC)',
    },
    {
      title: 'Pesquisa de iniciação científica (IoT, Big Data, ML)',
      institution: 'LISHA / UFSC',
    },
  ],
  certifications: [
    {
      title: 'Microsoft GitHub Copilot Certified — GH-300',
      detail: 'Válida de maio/2026 a maio/2028',
    },
    {
      title: 'Introduction to AI Agents',
      detail: 'DataCamp · curso via Learn at BNY (BNY Mellon)',
    },
  ],
  courses: [
    'Big Data (Coursera · UC San Diego) — integração, modelagem e processamento',
    'Introduction to DevOps (Microsoft · edX)',
    'Intro to Python for Data Science (DataCamp)',
    'The Data Scientist’s Toolbox (Johns Hopkins · Coursera)',
    'Digital Marketing Automation (Udemy)',
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/paladini' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fernandopaladini/' },
    { label: 'Medium', href: 'https://medium.com/@fernandopaladini' },
    { label: 'paladini.io', href: 'https://paladini.io' },
  ],
} as const;

export const aiToolsMention =
  'Lovable, v0, Bolt, Cursor, Claude Code, Codex, Windsurf, GitHub Copilot, ChatGPT, Replit, n8n e MCP';

export const faq = [
  {
    question: 'Você atende na Lagoa da Conceição e no Leste da Ilha?',
    answer:
      'Sim. Atendo Lagoa da Conceição, Rio Tavares, Campeche, Barra da Lagoa, Canto da Lagoa, Canto dos Araçás, Porto da Lagoa, Costa da Lagoa e arredores. Quando o projeto pede, vou até o local para conversarmos pessoalmente.',
  },
  {
    question: 'Faz manutenção de projetos feitos no Lovable, Cursor ou Codex?',
    answer:
      'Esse é um dos serviços mais comuns. Corrijo bugs, melhoro deploy, organizo código gerado por Lovable, Cursor, Claude Code, Codex, Windsurf, v0, Bolt ou ChatGPT, e deixo o projeto sustentável para evoluir.',
  },
  {
    question: 'Ajuda a produtizar um app ou site feito com vibe coding?',
    answer:
      'Sim. Além de consertar o que quebrou, ajudo com os próximos passos: publicar, conectar domínio, SEO, integrações, pagamentos, métricas e decisões sobre o que priorizar no produto.',
  },
  {
    question: 'Como funciona o atendimento presencial na região?',
    answer:
      'Você me conta o contexto pelo WhatsApp e combinamos um horário. Posso ir até você na Lagoa, Campeche, Rio Tavares ou bairros próximos para entender a dor, ver o código ou planejar o app — sem compromisso de contrato longo na primeira conversa.',
  },
  {
    question: 'Você orienta qual ferramenta de IA devo usar?',
    answer:
      'Sim. Dependendo do caso, Lovable ou v0 podem bastar para uma landing; Cursor ou Codex funcionam melhor para apps com lógica; n8n para automação. Explico trade-offs de forma direta, sem empurrar ferramenta cara desnecessária.',
  },
  {
    question: 'Quem é Fernando Paladini e qual a experiência dele?',
    answer:
      'Sou Staff AI Engineer, formado em Ciência da Computação pela UFSC, com passagem por Mercado Livre, Mercado Bitcoin, Grupo Boticário (DevEx e GenAI para 3.000+ devs), Conviso, 1Doc, Adroit e curso de AI Agents na BNY Mellon. Certificado GitHub Copilot GH-300 e criador do mcp-me.',
  },
  {
    question: 'Resolve problemas de site que não aparece no Google?',
    answer:
      'Sim. Faço ajustes de SEO e GEO — títulos, descrições, estrutura, dados estruturados e conteúdo local — para melhorar visibilidade em buscas na Lagoa da Conceição, Campeche, Rio Tavares e Florianópolis.',
  },
  {
    question: 'Faz automação com n8n, APIs e WhatsApp?',
    answer:
      'Sim. Integro sistemas, automatizo tarefas repetitivas e crio fluxos que economizam tempo — desde atendimento até rotinas internas de pequenos negócios e profissionais autônomos.',
  },
  {
    question: 'Como agendar uma conversa?',
    answer:
      'Pelo WhatsApp (48) 99845-9684. Informe o que você precisa — site, app, manutenção de vibe coding, automação ou consultoria — e seu bairro. Respondo rápido e combinamos presencial ou remoto.',
  },
] as const;

export const socialLinks = [
  'https://github.com/paladini',
  'https://www.linkedin.com/in/fernandopaladini/',
  'https://medium.com/@fernandopaladini',
  'https://paladini.io',
  'https://www.instagram.com/fernando.paladini',
] as const;

export function buildJsonLd() {
  const areaServed = neighborhoods.map((n) => ({
    '@type': 'Place',
    name: `${n.name}, Florianópolis, SC`,
  }));

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${site.url}/#business`,
      name: site.brand,
      description: site.description,
      url: `${site.url}/`,
      telephone: contact.phoneE164,
      email: contact.email,
      image: `${site.url}/og-image.svg`,
      priceRange: '$$',
      areaServed,
      address: {
        '@type': 'PostalAddress',
        addressLocality: contact.location.city,
        addressRegion: contact.location.state,
        addressCountry: 'BR',
        streetAddress: contact.location.neighborhood,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -27.5969,
        longitude: -48.4778,
      },
      sameAs: [...socialLinks],
      founder: { '@id': `${site.url}/#person` },
      knowsAbout: [
        'Inteligência Artificial',
        'Vibe Coding',
        'Lovable',
        'Cursor',
        'GitHub Copilot',
        'Automação',
        'Produtização de software',
        'SEO local',
        'Florianópolis',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${site.url}/#person`,
      name: contact.name,
      jobTitle: 'Staff AI Engineer',
      url: 'https://paladini.io',
      email: contact.email,
      telephone: contact.phoneE164,
      sameAs: [...socialLinks],
      worksFor: { '@id': `${site.url}/#business` },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Universidade Federal de Santa Catarina',
        sameAs: 'https://ufsc.br',
      },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Microsoft GitHub Copilot Certified — GH-300',
          credentialCategory: 'certification',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Introduction to AI Agents (DataCamp · BNY Mellon)',
          credentialCategory: 'certification',
        },
      ],
      knowsAbout: [
        'Artificial Intelligence',
        'Vibe Coding',
        'Lovable',
        'Cursor',
        'Codex',
        'Model Context Protocol',
        'Open Source',
        'Developer Experience',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ];
}
