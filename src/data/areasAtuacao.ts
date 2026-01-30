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
    shortDescription: "Representação em processos no âmbito do Direito Civil lato sensu, em todas as instâncias, administrativa e judicial.",
    fullDescription: "A Santarosa Mello Advogados Associados representa seus Clientes em processos no âmbito do Direito Civil lato sensu, nas matérias obrigações, contratos, empresarial, coisas, responsabilidade civil, família e sucessões, consumerista, administrativo, criminal, eleitoral e trabalhista, em todas as instâncias, administrativa e judicial.",
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
    shortDescription: "Consultoria e representação em procedimentos administrativos, licitações, contratos públicos e direito regulatório.",
    fullDescription: "Consultoria e representação em procedimentos administrativos e atos processuais judiciais no âmbito do Direito Administrativo, especialmente no que se refere a servidores públicos(as), licitações, contratos com a administração pública, improbidade administrativa e perante agências executivas e reguladoras (direito regulatório).",
    services: [
      "Licitações e contratos administrativos",
      "Processos administrativos de servidores públicos",
      "Defesas perante Tribunais de Contas",
      "Ações de improbidade administrativa",
      "Direito regulatório e agências reguladoras",
      "Mandados de segurança",
      "Contratos com a administração pública"
    ],
    icon: "FileText"
  },
  {
    slug: "direito-empresarial",
    title: "Direito Empresarial, Obrigações e Contratos",
    shortDescription: "Assessoria jurídica para empresas e empresários individuais na mais ampla gama de negócios.",
    fullDescription: "Assessoria jurídica para empresas e empresários individuais na mais ampla gama de negócios, tais como: assessoria judicial e extrajudicial envolvendo temas de propriedade intelectual (marcas, patentes, direito de autor, contratos de cessão, etc.); temas de societário (revisão de contrato social, acordos e/ou estatuto); auxílio na opção societária e estratégia de negócio; temas de obrigações e direito contratual; assessoria judicial e extrajudicial envolvendo crédito (títulos, avaliação, etc.).",
    services: [
      "Propriedade intelectual (marcas, patentes, direito de autor)",
      "Revisão de contrato social, acordos e estatutos",
      "Opção societária e estratégia de negócio",
      "Obrigações e direito contratual",
      "Assessoria envolvendo crédito e títulos",
      "Contratos de cessão",
      "Fusões, aquisições e reestruturações societárias"
    ],
    icon: "Building2"
  },
  {
    slug: "familia-sucessoes",
    title: "Direito das Famílias e Sucessões",
    shortDescription: "Assistência e consultoria em testamentos, inventários, divórcio, partilhas, alimentos, guarda e curatela.",
    fullDescription: "Assistência e consultoria nos mais variados assuntos relacionados com a matéria de direito das famílias e sucessões, tais como preparação e registro de testamentos, arrolamento e inventário de bens, separação, divórcio, reconhecimento e dissolução de união estável e respectivas partilhas, alteração do regime patrimonial de casamento, alimentos, guarda, adoção, investigação de paternidade/maternidade, curatela etc.",
    services: [
      "Preparação e registro de testamentos",
      "Arrolamento e inventário de bens",
      "Separação e divórcio",
      "Reconhecimento e dissolução de união estável",
      "Alteração do regime patrimonial de casamento",
      "Alimentos, guarda e adoção",
      "Investigação de paternidade/maternidade e curatela"
    ],
    icon: "Users"
  },
  {
    slug: "direito-trabalho",
    title: "Direito do Trabalho",
    shortDescription: "Representação e consultoria em questões trabalhistas, dissídios individuais e coletivos, negociações coletivas.",
    fullDescription: "Representação e consultoria em Direito do Trabalho referente aos assuntos decorrentes da relação empregado-empregador-sindicatos, com assessoria em questões referentes a dissídios individuais e coletivos, de forma preventiva, mediante a elaboração de pareceres, suporte jurídico ao setor de recursos humanos e empresas de terceirização de serviços, negociações coletivas para Acordos e Convenções Coletivas de Trabalho. Na área contenciosa, o escritório atua em todas as instâncias, representando os Clientes em Reclamações Trabalhistas, demandas que decorram da responsabilidade Civil por Acidente do Trabalho, defesas administrativas na Delegacia Regional do Trabalho (DRT) e Ministério Público do Trabalho (MPT).",
    services: [
      "Reclamações trabalhistas em todas as instâncias",
      "Dissídios individuais e coletivos",
      "Negociações para Acordos e Convenções Coletivas",
      "Suporte jurídico ao setor de RH",
      "Responsabilidade civil por acidente do trabalho",
      "Defesas administrativas na DRT e MPT",
      "Assessoria a empresas de terceirização"
    ],
    icon: "Briefcase"
  },
  {
    slug: "direito-consumidor",
    title: "Direitos dos Consumidores",
    shortDescription: "Consultoria consumerista com representação em procedimentos administrativos e judiciais.",
    fullDescription: "Consultoria em matéria consumerista, com representação em procedimentos administrativos e judiciais dos interesses dos Clientes sobre os mais diversos temas decorrentes do fato do produto ou dos serviços, bem como das responsabilidades de fornecedores, fabricantes e prestadores(as) de serviços.",
    services: [
      "Ações de indenização por danos materiais e morais",
      "Vícios de produtos e serviços",
      "Responsabilidade de fornecedores e fabricantes",
      "Responsabilidade de prestadores de serviços",
      "Fato do produto ou serviço",
      "Defesa em órgãos de proteção ao consumidor",
      "Consultoria preventiva para empresas"
    ],
    icon: "ShieldCheck"
  },
  {
    slug: "direito-imobiliario",
    title: "Direito das Coisas e Imobiliário",
    shortDescription: "Consultoria e acompanhamento em transações imobiliárias, legalização de documentos e usucapião.",
    fullDescription: "Consultoria e acompanhamento em diversas matérias envolvendo transações com imóveis, tais como: legalização de documentos imobiliários; consultoria na aquisição de áreas (rural e urbana); preparação de documentação jurídica; atividades relacionadas com contratos referentes a condomínios e similares, retificação de área, usucapião etc.",
    services: [
      "Legalização de documentos imobiliários",
      "Consultoria na aquisição de áreas rurais e urbanas",
      "Preparação de documentação jurídica",
      "Contratos de condomínios e similares",
      "Retificação de área",
      "Usucapião judicial e extrajudicial",
      "Due diligence imobiliária"
    ],
    icon: "Home"
  },
  {
    slug: "direito-previdenciario",
    title: "Direito Previdenciário",
    shortDescription: "Assistência em contribuições previdenciárias, concessões e revisões de benefícios perante INSS.",
    fullDescription: "Assistência para empresas sobre o recolhimento das contribuições previdenciárias, defesas administrativas perante os órgãos competentes, para casos como de lançamento de débitos previdenciários pelo INSS. Representação no âmbito administrativo e judicial de concessões e revisões de benefícios e serviços perante o INSS e demais Regimes Próprios de Previdência Social.",
    services: [
      "Contribuições previdenciárias para empresas",
      "Defesas administrativas perante o INSS",
      "Concessão e revisão de benefícios",
      "Aposentadorias (idade, tempo de contribuição, especial)",
      "Pensão por morte e auxílio-doença",
      "Regimes Próprios de Previdência Social",
      "Planejamento previdenciário"
    ],
    icon: "Receipt"
  },
  {
    slug: "direito-eleitoral",
    title: "Direito Eleitoral",
    shortDescription: "Assessoria em prestação de contas, representação judicial eleitoral e organização de órgãos partidários.",
    fullDescription: "Assessoria em matéria Eleitoral, como prestação de contas, representação judicial em demandas eleitorais, constituição, organização e registro de órgãos partidários municipais.",
    services: [
      "Prestação de contas eleitorais",
      "Representação judicial em demandas eleitorais",
      "Constituição de órgãos partidários municipais",
      "Organização e registro de partidos",
      "Registro de candidaturas",
      "Propaganda eleitoral",
      "Recursos eleitorais"
    ],
    icon: "Vote"
  },
  {
    slug: "direito-penal",
    title: "Direito Penal e Processual Penal",
    shortDescription: "Defesa e representação criminal com ênfase em crimes empresariais e contra a administração pública.",
    fullDescription: "Defesa e representação no âmbito criminal, com ênfase na assistência legal em casos que investigam crimes ocorridos no âmbito empresarial, tais como: contra o meio ambiente, contra a ordem tributária, contra a ordem previdenciária, contra as relações de consumo, contra a ordem econômica, contra a Administração Pública, contra a organização do trabalho, contra a saúde pública, entre outros crimes previstos no Código Penal e na Legislação Extravagante.",
    services: [
      "Crimes contra o meio ambiente",
      "Crimes contra a ordem tributária",
      "Crimes contra a ordem previdenciária",
      "Crimes contra as relações de consumo",
      "Crimes contra a ordem econômica",
      "Crimes contra a Administração Pública",
      "Habeas corpus e liberdade provisória"
    ],
    icon: "Gavel"
  },
  {
    slug: "direito-tributario",
    title: "Direito Tributário",
    shortDescription: "Consultoria e planejamento tributário, assessoria em benefícios fiscais e representação em processos.",
    fullDescription: "Consultoria e planejamento tributário, análise de questões tributárias com emissão de orientações, opiniões legais e pareceres, bem como assessoria voltada à prevenção de riscos de autuações fiscais, à utilização de benefícios e créditos fiscais, restituição e compensação de tributos pagos indevidamente e obtenção de certidões de regularidade fiscal. Representação em processos administrativos e judiciais nas esferas federal, estadual e municipal, em todas as instâncias.",
    services: [
      "Consultoria e planejamento tributário",
      "Análise de questões tributárias e pareceres",
      "Prevenção de riscos de autuações fiscais",
      "Utilização de benefícios e créditos fiscais",
      "Restituição e compensação de tributos",
      "Certidões de regularidade fiscal",
      "Processos nas esferas federal, estadual e municipal"
    ],
    icon: "Receipt"
  }
];

export const getAreaBySlug = (slug: string): AreaAtuacao | undefined => {
  return areasAtuacao.find(area => area.slug === slug);
};
