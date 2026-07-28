export const repoName = 'especialista-ia-automacao-lagoa';

export const site = {
  brand: 'Especialista IA Lagoa',
  tagline: 'Inteligência artificial, sites, apps e automação na Lagoa da Conceição',
  url: `https://paladini.io/${repoName}`,
  locale: 'pt-BR',
  title: 'Especialista em IA na Lagoa da Conceição | Sites, Apps e Automação',
  description:
    'Consultoria em IA, criação de sites e apps com inteligência artificial, manutenção de vibe coding e automação de fluxos na Lagoa da Conceição e Leste da Ilha, Florianópolis. Fale no WhatsApp.',
  keywords: [
    'especialista IA Lagoa da Conceição',
    'inteligência artificial Florianópolis',
    'automação Leste da Ilha',
    'vibe coding manutenção',
    'criar site com IA',
    'app com IA',
    'consultoria IA WhatsApp',
    'produtos digitais IA',
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
  { href: '#bairros', label: 'Bairros' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#faq', label: 'FAQ' },
] as const;

export const hero = {
  eyebrow: 'Atendimento local',
  headline: 'IA na sua região, sem complicação',
  subheadline:
    'A Lagoa da Conceição é um dos bairros mais dinâmicos de Florianópolis — e cada negócio aqui merece tecnologia que funciona de verdade. Ajudo pessoas e empresas da região a resolver problemas com inteligência artificial, sites, apps e automação.',
  note: 'Fernando Paladini atende na Lagoa da Conceição e arredores (Costa da Lagoa, Itacorubi, Canto da Lagoa). Presencial ou remoto, com resposta rápida pelo WhatsApp.',
} as const;

export const services = [
  {
    title: 'Consultoria em IA',
    description:
      'Diagnóstico claro do seu problema, indicação de ferramentas e plano prático — sem jargão desnecessário.',
  },
  {
    title: 'Sites e apps com IA',
    description:
      'Criação e correção de sites e aplicativos feitos com Cursor, Claude, ChatGPT e outras ferramentas de vibe coding.',
  },
  {
    title: 'Manutenção de vibe coding',
    description:
      'Seu projeto de IA parou de funcionar, ficou lento ou difícil de evoluir? Organizo, corrijo e deixo sustentável.',
  },
  {
    title: 'Automação de fluxos',
    description:
      'Integrações, bots, rotinas repetitivas e processos manuais transformados em fluxos automáticos confiáveis.',
  },
  {
    title: 'Produtos digitais',
    description:
      'Landing pages, ferramentas internas, MVPs e produtos digitais prontos para vender ou operar no dia a dia.',
  },
  {
    title: 'Mentoria com IA',
    description:
      'Sessões práticas para você ou sua equipe aprenderem a usar IA no trabalho — pair programming incluído.',
  },
] as const;

export const neighborhoods = [
  { name: 'Lagoa da Conceição', primary: true },
  { name: 'Costa da Lagoa', primary: false },
  { name: 'Itacorubi', primary: false },
  { name: 'Canto da Lagoa', primary: false },
] as const;

export const about = {
  title: 'Quem está por trás',
  paragraphs: [
    'Sou Fernando Paladini, Staff AI Engineer com mais de 13 anos de experiência em software, open source e plataformas de inteligência artificial. Moro em Florianópolis e atendo a região da Lagoa com foco em soluções práticas — não em promessas vazias.',
    'Criei projetos como o mcp-me (camada de identidade para assistentes de IA), voice-separator, echo-transcribe e diversos guias open source de SEO e GEO. Escrevo sobre vibe coding, IA e automação no Medium e mantenho dezenas de repositórios públicos.',
  ],
  highlights: [
    '13+ anos em software e plataformas',
    'Criador do mcp-me e projetos open source de IA',
    '47 artigos sobre IA, vibe coding e automação',
    'Formação UFSC · Florianópolis',
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/paladini' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fernandopaladini/' },
    { label: 'Medium', href: 'https://medium.com/@fernandopaladini' },
    { label: 'paladini.io', href: 'https://paladini.io' },
  ],
} as const;

export const faq = [
  {
    question: 'Você atende IA na Lagoa da Conceição?',
    answer:
      'Sim! A Lagoa da Conceição é a área principal de atendimento. Atendo presencialmente quando faz sentido e remotamente para a maior parte dos projetos — sempre com comunicação direta pelo WhatsApp.',
  },
  {
    question: 'Quais bairros próximos à Lagoa são atendidos?',
    answer:
      'Além da Lagoa da Conceição, atendo Costa da Lagoa, Itacorubi e Canto da Lagoa. Se você está no Leste da Ilha e não encontrou seu bairro na lista, mande uma mensagem — confirmo na hora.',
  },
  {
    question: 'Ajuda com site ou app feito no Cursor ou outra IA?',
    answer:
      'Esse é um dos serviços mais pedidos. Corrijo bugs, melhoro performance, organizo o código gerado por vibe coding e deixo o projeto pronto para evoluir com segurança.',
  },
  {
    question: 'Como funciona a consultoria em inteligência artificial?',
    answer:
      'Começo entendendo seu problema e contexto. Depois indico a melhor abordagem — ferramenta certa, automação, produto digital ou mentoria — com estimativa clara de escopo e próximos passos.',
  },
  {
    question: 'Como agendar atendimento na região?',
    answer:
      'Pelo WhatsApp! Informe o que você precisa (site, app, automação, consultoria IA) e seu bairro na Lagoa ou Leste da Ilha. Respondo rápido e combinamos horário.',
  },
  {
    question: 'Você faz automação de processos para negócios locais?',
    answer:
      'Sim. Integro sistemas, automatizo tarefas repetitivas e crio fluxos que economizam tempo — desde atendimento até rotinas internas de pequenos negócios e profissionais autônomos.',
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
      url: site.url,
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
        'Automação',
        'Desenvolvimento Web',
        'Produtos Digitais',
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
      knowsAbout: [
        'Artificial Intelligence',
        'Model Context Protocol',
        'Vibe Coding',
        'Open Source',
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
