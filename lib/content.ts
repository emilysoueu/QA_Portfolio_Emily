// Conteúdo centralizado — extraído do currículo de Emily Costa.
// Ajustar aqui é suficiente para atualizar o site inteiro.

export const profile = {
  name: 'Emily Costa',
  role: 'QA Automation Engineer',
  roleLine: 'QA Engineer | QA Automation Engineer | Quality Assurance Specialist',
  location: 'São Luís, MA — Brasil',
  email: 'emilys2costa@gmail.com',
  phone: '+55 (98) 92004-3656',
  phoneDigits: '5598920043656', // somente números, com código do país — usado no link do WhatsApp
  linkedin: 'https://www.linkedin.com/in/emilysoueu',
  github: 'https://github.com/',
  languages: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'C1 — Avançado' },
  ],
};

export const heroStats = [
  { label: 'anos em tecnologia', value: '5+' },
  { label: 'stack de automação', value: 'Selenium · Pytest · Robot FW' },
  { label: 'especialização', value: 'Salesforce CRM' },
  { label: 'inglês', value: 'C1' },
];

// Linhas exibidas no "test runner" da hero — a suite de testes roda contra
// o próprio perfil profissional, e tudo passa.
export const heroTestSuite = [
  { id: 'salesforce_qa.spec', desc: 'Salesforce CRM · testes funcionais e regressão', time: '0.41s' },
  { id: 'automation.spec', desc: 'Selenium · Pytest · Robot Framework', time: '0.38s' },
  { id: 'api_contracts.spec', desc: 'Postman · Newman · validação de contratos', time: '0.22s' },
  { id: 'ci_pipeline.spec', desc: 'GitHub Actions · execução contínua', time: '0.19s' },
  { id: 'requirements.spec', desc: 'Elicitação de requisitos · critérios de aceite', time: '0.27s' },
  { id: 'data_quality.spec', desc: 'SQL · ETL · Power BI · qualidade de dados', time: '0.33s' },
];

export const highlights = [
  { label: '+5 anos', sub: 'em tecnologia e QA' },
  { label: 'Salesforce CRM', sub: 'testes funcionais & regressão' },
  { label: 'Python + Pytest', sub: 'automação de testes' },
  { label: 'Selenium WebDriver', sub: 'testes E2E web' },
  { label: 'Robot Framework', sub: 'automação BDD' },
  { label: 'Postman + Newman', sub: 'testes de API' },
  { label: 'GitHub Actions', sub: 'CI/CD' },
  { label: 'Inglês C1', sub: 'leitura e escrita técnica' },
  { label: 'Mestrado em IA', sub: 'sistemas aeroespaciais (UFMA)' },
];

export const about = {
  paragraphs: [
    'Comecei na tecnologia pela porta da análise de negócios — entendendo como sistemas deveriam se comportar antes de aprender a comprová-lo. Foi na Capgemini, validando integrações Salesforce e pipelines de dados, que percebi que a pergunta que mais me motivava não era "o que esse sistema faz", e sim "o que aconteceria se ele falhasse aqui".',
    'Essa pergunta me levou para QA. Hoje combino testes manuais e funcionais com automação em Python, Selenium e Robot Framework, sempre ancorada em requisitos bem elicitados e critérios de aceite claros — porque um teste automatizado sem entendimento de negócio só corre rápido na direção errada.',
    'Minha visão sobre qualidade é simples: automação não substitui pensamento crítico, ela libera tempo para usá-lo onde importa — nos riscos, nas regras de negócio e nas integrações que ninguém documentou. Trato cada suíte de testes como infraestrutura: precisa ser legível, manutenível e confiável para quem vier depois de mim.',
  ],
};

export const skillCategories = [
  {
    title: 'Testes',
    status: 'pass' as const,
    items: ['Funcionais', 'Regressão', 'Smoke', 'Sanidade', 'E2E', 'UAT'],
  },
  {
    title: 'Automação',
    status: 'pass' as const,
    items: ['Selenium WebDriver', 'Pytest', 'Robot Framework', 'Cypress (estrutura preparada)', 'Playwright'],
  },
  {
    title: 'APIs',
    status: 'pass' as const,
    items: ['Postman', 'Newman', 'REST Assured', 'Insomnia'],
  },
  {
    title: 'Gestão de Testes & Defeitos',
    status: 'pass' as const,
    items: ['JIRA', 'TestRail', 'Zephyr Scale', 'Xray', 'Bugzilla'],
  },
  {
    title: 'Ferramentas',
    status: 'pass' as const,
    items: ['Confluence', 'Notion', 'GitHub', 'Salesforce CRM', 'Cypress'],
  },
  {
    title: 'Dados',
    status: 'pass' as const,
    items: ['SQL', 'Python (Pandas)', 'Power BI', 'Excel avançado'],
  },
];

export const certifications = [
  { name: 'Salesforce Certified Associate', issuer: 'Salesforce' },
  { name: 'Salesforce Business Analyst', issuer: 'Salesforce' },
  { name: 'Salesforce AI Associate', issuer: 'Salesforce' },
  { name: 'Salesforce Agentforce Specialist', issuer: 'Salesforce' },
];

export const education = [
  {
    degree: 'Mestrado em Inteligência Artificial Aplicada a Sistemas Aeroespaciais',
    institution: 'UFMA',
    period: 'previsão: 2026',
  },
  {
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'UFMA',
    period: '2023',
  },
];

export const processSteps = [
  { step: '01', title: 'Requisito', desc: 'Elicitação junto a stakeholders e times técnicos.' },
  { step: '02', title: 'Análise de Risco', desc: 'Priorização do que mais impacta o negócio.' },
  { step: '03', title: 'Planejamento', desc: 'Estratégia de testes e escopo de cobertura.' },
  { step: '04', title: 'Casos de Teste', desc: 'Cenários claros, rastreáveis e reutilizáveis.' },
  { step: '05', title: 'Execução', desc: 'Manual e funcional, com evidências documentadas.' },
  { step: '06', title: 'Automação', desc: 'Selenium, Pytest e Robot Framework nos fluxos críticos.' },
  { step: '07', title: 'Reporte', desc: 'Bugs priorizados e rastreados até a resolução.' },
  { step: '08', title: 'Validação', desc: 'Confirmação das correções com os times de dev.' },
  { step: '09', title: 'Deploy', desc: 'Acompanhamento da entrega em produção.' },
];

export const experience = [
  {
    company: 'Capgemini',
    role: 'QA Analyst / Analista de Negócios Jr.',
    period: '09/2024 – Presente',
    summary:
      'Testes manuais, funcionais e de regressão em Salesforce CRM, com automação em Python/Pytest e validação de regras de negócio em integrações de dados.',
    bullets: [
      'Executo testes manuais, funcionais e de regressão em Salesforce CRM, cobrindo integrações entre plataformas e pipelines de dados.',
      'Elaboro planos de teste, casos de teste e checklists com base em requisitos elicitados junto a stakeholders.',
      'Registro, priorizo e acompanho bugs no JIRA até a resolução e validação das correções.',
      'Automatizo cenários de teste com Python e Pytest, reduzindo o tempo de execução de regressões.',
      'Valido regras de negócio em integrações de dados, identificando inconsistências entre sistemas.',
      'Participo de cerimônias ágeis (Scrum), contribuindo com perspectiva de qualidade no refinamento de histórias.',
    ],
    tech: ['Salesforce CRM', 'Python', 'Pytest', 'JIRA', 'Scrum'],
  },
  {
    company: 'Capgemini',
    role: 'QA Trainee / Analista de Negócios',
    period: '01/2022 – 09/2024',
    summary:
      'Formação técnica intensiva em qualidade, validação de sistemas e integração com Salesforce CRM, incluindo Apex e triggers.',
    bullets: [
      'Programa intensivo de formação técnica com foco em processos de qualidade e validação de sistemas.',
      'Estruturação e execução de testes manuais e funcionais, com documentação de evidências.',
      'Familiaridade com Apex e triggers Salesforce, apoiando validação de soluções de engenharia.',
      'Boas práticas de controle de versão (Git) e organização de artefatos de teste.',
      'Scripts básicos de automação com Python para validação de dados e massa de testes.',
    ],
    tech: ['Salesforce', 'Apex', 'Git', 'Python'],
  },
  {
    company: 'DARTi Lab / UFMA',
    role: 'QA Automation Analyst (Freelancer / Projetos Acadêmicos)',
    period: '07/2019 – Presente',
    summary:
      'Automação web e de API para sistemas de coleta e análise de dados de pesquisa, com BDD e CI via GitHub Actions.',
    bullets: [
      'Estratégias de teste para sistemas de coleta e análise de dados: integração, sanidade e validação de outputs.',
      'Scripts de automação com Selenium WebDriver e Pytest para interfaces web e fluxos de dados.',
      'Testes de API com Postman e Newman, validando contratos de integração entre sistemas.',
      'Robot Framework para automação funcional, integrando resultados a pipelines de CI (GitHub Actions).',
      'Documentação de cenários em BDD (Gherkin/Behave) para comunicação entre times técnicos e não técnicos.',
      'Análise de dados (Python/Pandas) para validar consistência e qualidade de datasets de pesquisa.',
    ],
    tech: ['Selenium', 'Robot Framework', 'Postman', 'Newman', 'GitHub Actions', 'BDD'],
  },
  {
    company: 'Ferry Brasil',
    role: 'Estagiária em QA & BI',
    period: '01/2021 – 01/2022',
    summary:
      'Validação de dashboards Power BI e pipelines ETL em SQL/Excel para indicadores operacionais.',
    bullets: [
      'Casos de teste para dashboards Power BI: volume de passageiros, atrasos e receita por rota.',
      'Pipelines ETL com SQL e Excel, com validação de dados em cada etapa.',
      'Rotinas de coleta e consolidação de dados, documentando inconsistências e propondo correções.',
      'Validação de dashboards conectados ao Trello, testando atualização em tempo real de indicadores.',
    ],
    tech: ['Power BI', 'SQL', 'ETL', 'Excel'],
  },
];

export const cases = [
  {
    title: 'Automação de Testes E2E — Salesforce CRM',
    org: 'Capgemini',
    challenge:
      'Regressões manuais em fluxos críticos do Salesforce consumiam tempo da equipe a cada ciclo de entrega, com risco de inconsistências não detectadas entre integrações.',
    solution:
      'Desenvolvimento de scripts de automação com Python e Pytest cobrindo integrações entre sistemas e pipelines de dados, integrados ao pipeline de CI via GitHub Actions.',
    result:
      'Redução do tempo de execução de regressões e maior confiabilidade nas entregas contínuas.',
    tech: ['Python', 'Pytest', 'Salesforce CRM', 'GitHub Actions'],
  },
  {
    title: 'Suíte de Testes de API com Postman/Newman',
    org: 'DARTi Lab',
    challenge:
      'Contratos de integração entre sistemas de coleta e processamento de dados precisavam de validação contínua, sem depender de testes manuais repetitivos.',
    solution:
      'Criação de coleções de testes de API no Postman, com automação da execução via Newman dentro do pipeline de CI.',
    result:
      'Relatórios de cobertura e falhas gerados automaticamente a cada execução, acelerando a detecção de regressões de contrato.',
    tech: ['Postman', 'Newman', 'CI/CD'],
  },
  {
    title: 'Automação Web com Selenium & Robot Framework',
    org: 'Projetos Acadêmicos / UFMA',
    challenge:
      'Interfaces web de sistemas de pesquisa exigiam testes funcionais repetíveis, comunicáveis tanto para times técnicos quanto não técnicos.',
    solution:
      'Testes automatizados com Selenium e Robot Framework, com cenários escritos em BDD (Gherkin/Behave) e documentação de suítes integrada ao GitHub Actions.',
    result:
      'Execução contínua dos testes funcionais e comunicação clara de cenários entre stakeholders técnicos e de negócio.',
    tech: ['Selenium', 'Robot Framework', 'Gherkin/Behave', 'GitHub Actions'],
  },
  {
    title: 'Validação de Dashboards e Pipelines ETL',
    org: 'Ferry Brasil',
    challenge:
      'Indicadores operacionais (passageiros, atrasos, receita por rota) dependiam de pipelines ETL manuais com risco de inconsistência nos dados exibidos.',
    solution:
      'Testes de qualidade de dados em pipelines SQL/Excel e dashboards Power BI, com documentação de casos de teste e registro de inconsistências.',
    result:
      'Validação das correções junto à equipe de desenvolvimento e maior confiabilidade dos relatórios operacionais.',
    tech: ['Power BI', 'SQL', 'ETL'],
  },
];

// Repositórios do GitHub — adicione os seus aqui sempre que quiser.
// Basta copiar um objeto do array e preencher: name, description e url.
// language é só uma etiqueta visual (ex.: "Python", "JavaScript", "TypeScript").
// Os itens abaixo são placeholders — substitua por seus repositórios reais
// (ou apague os que não usar).
export const githubRepos = [
  {
    name: 'salesforce-qa-automation',
    description: 'Adicione aqui uma descrição breve do que esse repositório faz.',
    url: 'https://github.com/seu-usuario/seu-repositorio',
    language: 'Python',
  },
  {
    name: 'api-testing-suite',
    description: 'Adicione aqui uma descrição breve do que esse repositório faz.',
    url: 'https://github.com/seu-usuario/seu-repositorio',
    language: 'Postman',
  },
  {
    name: 'robot-framework-tests',
    description: 'Adicione aqui uma descrição breve do que esse repositório faz.',
    url: 'https://github.com/seu-usuario/seu-repositorio',
    language: 'Robot Framework',
  },
];

export const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Competências', href: '#competencias' },
  { label: 'Processo', href: '#processo' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Cases', href: '#cases' },
  { label: 'GitHub', href: '#github' },
  { label: 'Certificações', href: '#certificacoes' },
  { label: 'Contato', href: '#contato' },
];
