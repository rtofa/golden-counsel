export interface AreaAtuacao {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  services: string[];
  icon: string;
}

export const areasAtuacao: AreaAtuacao[] = [
  {
    slug: "direito-civil",
    title: "Direito Civil e Processual",
    shortDescription: "Representação em processos no âmbito do Direito Civil, obrigações, contratos, responsabilidade civil e matérias relacionadas.",
    fullDescription: "O Direito Civil é o ramo do direito que regulamenta as relações entre particulares, abrangendo desde questões patrimoniais até direitos da personalidade. Nossa equipe possui vasta experiência em litígios civis, oferecendo representação qualificada em todas as instâncias judiciais. Atuamos com dedicação na defesa dos interesses de nossos clientes, sempre buscando soluções eficientes e estratégicas para cada caso.",
    services: [
      "Ações de cobrança e execução de títulos",
      "Responsabilidade civil e indenizações",
      "Contratos em geral (elaboração, revisão e rescisão)",
      "Obrigações de fazer e não fazer",
      "Ações possessórias",
      "Direitos reais e da personalidade",
      "Recursos e defesas em todas as instâncias"
    ],
    icon: "Scale"
  },
  {
    slug: "direito-administrativo",
    title: "Direito Administrativo",
    shortDescription: "Consultoria em procedimentos administrativos, licitações, contratos públicos, improbidade e direito regulatório.",
    fullDescription: "O Direito Administrativo regula as relações entre a Administração Pública e os administrados. Nossa atuação abrange desde a consultoria preventiva até a representação em processos administrativos e judiciais. Auxiliamos empresas e indivíduos a navegarem com segurança nas complexas relações com o poder público, garantindo o respeito aos seus direitos fundamentais.",
    services: [
      "Licitações e contratos administrativos",
      "Processos administrativos disciplinares",
      "Defesas perante Tribunais de Contas",
      "Ações de improbidade administrativa",
      "Direito regulatório e agências reguladoras",
      "Mandados de segurança",
      "Desapropriação e servidões administrativas"
    ],
    icon: "FileText"
  },
  {
    slug: "direito-empresarial",
    title: "Direito Empresarial",
    shortDescription: "Assessoria para empresas em propriedade intelectual, societário, contratos, obrigações e estratégia de negócios.",
    fullDescription: "O Direito Empresarial é essencial para a condução segura e eficiente dos negócios. Oferecemos assessoria jurídica completa para empresas de todos os portes, desde startups até grandes corporações. Nossa abordagem integrada permite identificar riscos e oportunidades, contribuindo para o crescimento sustentável do seu negócio com segurança jurídica.",
    services: [
      "Constituição e alteração de sociedades",
      "Fusões, aquisições e reestruturações societárias",
      "Contratos empresariais complexos",
      "Propriedade intelectual e marcas",
      "Recuperação judicial e falência",
      "Compliance e governança corporativa",
      "Disputas societárias"
    ],
    icon: "Building2"
  },
  {
    slug: "familia-sucessoes",
    title: "Família e Sucessões",
    shortDescription: "Testamentos, inventários, separação, divórcio, partilhas, alimentos, guarda, adoção e curatela.",
    fullDescription: "O Direito de Família e Sucessões trata das questões mais sensíveis da vida pessoal. Compreendemos que cada família é única e merece um tratamento humanizado e respeitoso. Nossa equipe está preparada para conduzir essas questões com discrição e sensibilidade, sempre buscando soluções que preservem o bem-estar de todos os envolvidos, especialmente quando há crianças e adolescentes.",
    services: [
      "Divórcio judicial e extrajudicial",
      "Inventário e partilha de bens",
      "Testamentos e planejamento sucessório",
      "Pensão alimentícia",
      "Guarda e regulamentação de visitas",
      "Adoção e destituição do poder familiar",
      "União estável e contratos de convivência"
    ],
    icon: "Users"
  },
  {
    slug: "direito-trabalho",
    title: "Direito do Trabalho",
    shortDescription: "Representação em dissídios individuais e coletivos, defesas na DRT e MPT, negociações de acordos coletivos.",
    fullDescription: "O Direito do Trabalho regula as relações entre empregadores e empregados. Nossa atuação compreende tanto a assessoria preventiva para empresas quanto a defesa dos direitos dos trabalhadores. Buscamos sempre o equilíbrio nas relações de trabalho, priorizando soluções negociadas quando possível, mas preparados para a defesa intransigente dos direitos de nossos clientes quando necessário.",
    services: [
      "Reclamações trabalhistas",
      "Defesas empresariais em ações trabalhistas",
      "Acordos e convenções coletivas",
      "Processos perante a DRT e MPT",
      "Terceirização e relações de trabalho",
      "Acidentes de trabalho",
      "Consultoria preventiva trabalhista"
    ],
    icon: "Briefcase"
  },
  {
    slug: "direito-consumidor",
    title: "Direito do Consumidor",
    shortDescription: "Consultoria e representação em demandas consumeristas, responsabilidade de fornecedores e prestadores de serviços.",
    fullDescription: "O Direito do Consumidor protege a parte mais vulnerável nas relações de consumo. Atuamos na defesa dos direitos dos consumidores lesados por práticas abusivas, produtos defeituosos ou serviços inadequados. Também assessoramos empresas na adequação às normas consumeristas, prevenindo conflitos e construindo relações comerciais saudáveis e transparentes.",
    services: [
      "Ações de indenização por danos materiais e morais",
      "Vícios de produtos e serviços",
      "Práticas comerciais abusivas",
      "Publicidade enganosa",
      "Cobrança indevida e negativação irregular",
      "Defesa em órgãos de proteção ao consumidor",
      "Consultoria preventiva para empresas"
    ],
    icon: "ShieldCheck"
  },
  {
    slug: "direito-imobiliario",
    title: "Direito Imobiliário",
    shortDescription: "Transações imobiliárias, legalização de documentos, aquisição de áreas, contratos e usucapião.",
    fullDescription: "O Direito Imobiliário envolve uma das transações mais importantes na vida das pessoas e empresas. Nossa equipe oferece assessoria completa em todas as etapas de negócios imobiliários, desde a due diligence até a conclusão segura da transação. Atuamos também na regularização de imóveis e na defesa de direitos possessórios.",
    services: [
      "Compra e venda de imóveis",
      "Regularização de imóveis e documentos",
      "Usucapião judicial e extrajudicial",
      "Contratos de locação e administração",
      "Incorporação imobiliária",
      "Ações possessórias e reivindicatórias",
      "Due diligence imobiliária"
    ],
    icon: "Home"
  },
  {
    slug: "direito-previdenciario",
    title: "Direito Previdenciário",
    shortDescription: "Concessões e revisões de benefícios, defesas administrativas perante INSS e regimes próprios de previdência.",
    fullDescription: "O Direito Previdenciário garante a proteção social dos trabalhadores e seus dependentes. Atuamos na obtenção e revisão de benefícios junto ao INSS e aos regimes próprios de previdência. Nossa experiência permite identificar o melhor caminho para cada caso, seja na esfera administrativa ou judicial, sempre buscando o reconhecimento integral dos direitos previdenciários de nossos clientes.",
    services: [
      "Aposentadorias (idade, tempo de contribuição, especial)",
      "Pensão por morte",
      "Auxílio-doença e aposentadoria por invalidez",
      "Benefício de Prestação Continuada (BPC/LOAS)",
      "Revisão de benefícios",
      "Recursos administrativos perante o INSS",
      "Planejamento previdenciário"
    ],
    icon: "Receipt"
  },
  {
    slug: "direito-eleitoral",
    title: "Direito Eleitoral",
    shortDescription: "Prestação de contas, representação em demandas eleitorais e organização de órgãos partidários.",
    fullDescription: "O Direito Eleitoral é fundamental para a manutenção do Estado Democrático. Nossa atuação abrange desde a assessoria a partidos políticos e candidatos até a representação em demandas eleitorais perante a Justiça Eleitoral. Oferecemos suporte completo durante todo o processo eleitoral, garantindo o cumprimento das normas e a defesa dos interesses de nossos clientes.",
    services: [
      "Registro de candidaturas",
      "Prestação de contas eleitorais",
      "Propaganda eleitoral",
      "Representações e impugnações",
      "Recursos eleitorais",
      "Organização de órgãos partidários",
      "Consultoria em legislação eleitoral"
    ],
    icon: "Vote"
  },
  {
    slug: "direito-penal",
    title: "Direito Penal",
    shortDescription: "Defesa em crimes empresariais, tributários, ambientais, contra a administração pública e outros.",
    fullDescription: "O Direito Penal exige profissionais altamente capacitados para a defesa técnica e estratégica. Nossa equipe atua em todas as fases do processo criminal, desde o inquérito policial até os recursos aos tribunais superiores. Oferecemos defesa qualificada e comprometida com os direitos fundamentais, sempre observando os princípios constitucionais do devido processo legal e da presunção de inocência.",
    services: [
      "Defesa em inquéritos policiais",
      "Crimes empresariais e econômicos",
      "Crimes tributários",
      "Crimes ambientais",
      "Crimes contra a administração pública",
      "Habeas corpus e liberdade provisória",
      "Recursos criminais em todas as instâncias"
    ],
    icon: "Gavel"
  }
];

export const getAreaBySlug = (slug: string): AreaAtuacao | undefined => {
  return areasAtuacao.find(area => area.slug === slug);
};
