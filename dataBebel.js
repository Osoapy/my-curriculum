const curriculoPT = {
  nome: "João Gabriel Vieira Silva",
  foto: "foto.png",
  info: `
    Idade: 20 anos<br>
    Telefone: +55 (83) 99408-5691<br>
    Email: joaogabriel61.cz@gmail.com<br>
  `,

  formacao: [
    "Pós Graduação em **Docência do Ensino Superior** (em andamento)",
    "Curso Superior em **Análise e Desenvolvimento de Sistemas** - IFPB",
    "Ensino Médio Completo (2022)"
  ],

  experiencia: [
    {
      empresa: "AM3 Soluções",
      cargo: "Analista de Sistemas Estagiário",
      periodo: "05/2026 – atualmente",
      descricao: "Encarregado a desenvolver aplicativos e criar novas \"features\" para aqueles já existentes, para isso foi necessário obter o domínio de novas ferramentas de programação, solucionar problemas de versionamento, criar e prototipar designs web/mobile."
    },
    {
      empresa: "Fundação de Apoio à Pesquisa do Estado da Paraíba (FAPESQ)",
      cargo: "Bolsista de Iniciação Científica",
      periodo: "09/2025 – 02/2026",
      descricao: "Fui responsável por representar a Paraíba na Espanha, pesquisando sobre Redes Neurais Arficiais enquanto no curso de engenharia informática, contribuindo para o avanço do conhecimento científico do Estado e promovendo a colaboração internacional."
    },
    {
      empresa: "Mondragon Unibertsitatea",
      cargo: "Pesquisador na área de Inteligência Artificial",
      periodo: "09/2025 – 01/2026",
      descricao: "Pesquisei e desenvolvi projetos relacionados à inteligência artificial, nas minhas tarefas hove: Análise de dados; desenvolvimento de modelos, leitura e escrita de artigos científicos; participação em conferências e colaboração com equipes multidisciplinares."
    },
    {
      empresa: "Loopis Soluções Tecnológicas (Empresa Júnior)",
      cargo: "Diretor de Recursos Humanos",
      periodo: "10/2023 – 06/2026",
      descricao: "Atribuído para elaboração de documentos, levantamento de requisitos, gerir diferentes equipes de desenvolvimento, fazer análises de mercado e prospecção ativa de clientes."
    },
    {
      empresa: "Infolight Tecnologia da Informação LTDA",
      cargo: "Analista de Sistemas estagiário",
      periodo: "09/2024 – 06/2025",
      descricao: "Encarregado pela criação de sistemas, testes de software, documentação técnica, automação de serviços diversos, suporte aos clientes do sistema ERP, correção de sped contribuições, implantação de software e manutenção de XML."
    },
    {
      empresa: "Premium Brindes",
      cargo: "Auxiliar de Produção",
      periodo: "12/2022 – 02/2023",
      descricao: "Responsável pelo atendimento ao cliente, confecção de artes, vetorização de artes, operar máquinas de serigrafia, criar telas para a personalização dos pedidos e produção de brindes."
    }
  ],

  extracurricular: [
    {
      titulo: "Capacitação em Tecnologia da Interação: Parceria do SENAC e Pisada do Sertão",
      periodo: "Carga horária: 60 horas. 06/2026 - 07/2026",
      descricao: "Capacitação em recursos de web design do mercado (como a plataforma Figma) e criação de um design autoral. Reconhecendo axiomas do desenvolvimento web e princípios de UI/UX design."
    },
    {
      titulo: "Capacitação em Sistemas Embarcados e Edge AI: Parceria do PNAAT e Ministério da Ciência, Tecnologia e Inovação",
      periodo: "Carga horária: 74 horas",
      descricao: "Capacitação em sistemas embarcados e Edge AI, com foco em eletrônica, programação e inteligência artificial."
    },
    {
      titulo: "Concluinte do ciclo Pré Intermediate 3 do curso More English",
      periodo: "Carga horária: 360 horas. 2018 - 2019",
      descricao: "Capacitação em inglês de forma lúdica e dinâmica, com foco na compreensão do inglês falado e na habilidade de falar em inglês."
    },
  ],

  marcos: [
    "Monitor voluntário de **Algoritmos e Lógica de Programação**",
    "Monitor voluntário do projeto esportivo **De Rede Em Rede** - IFPB",
    "Professor do minicurso **Desvendando Lua: do básico às APIs**",
    "Curso **Fundamentos em IoT e Edge AI** - PNAAT/Governo Federal",
    "Curso **Trilha de Edge AI** - PNAAT/Governo Federal",
    "Curso **Trilha de Eletrônica** - PNAAT/Governo Federal",
    "Curso **Trilha de Sistemas Embarcados** - PNAAT/Governo Federal",
    "Minicurso **Hyperledger Fabric: primeiros passos com Blockchain**",
    "Minicurso **Animações: do 2D ao 3D com GSAP e Three.js**",
    "Bronze na **25ª Olimpíada Brasileira de Astronomia e Astronáutica**",
    "2º lugar no **Ideathon Startup Day 2026** - Sebrae Startups",
    "2º lugar no **Hackathon do IV SertãoComp** - IFPB/Cajazeiras",
    "Participante do **IV e V SertãoComp** - IFPB",
    "Palestra **Suporte Básico de Vida: os 4 passos que salvam vidas**",
    "Clube de leitura do **Colégio Nossa Senhora de Lourdes**",
    "Certificados **Redações + Tops** em três edições de simulados",
    "Três primeiros lugares no **Campeonato Interno de Xadrez - Categoria A** (2017, 2018 e 2019)",
    { texto: "Projetos extracurriculares: ", link: { rotulo: "github.com/Osoapy", url: "https://github.com/Osoapy" } },
    { texto: "LinkedIn: ", link: { rotulo: "linkedin.com/in/joao-gabriel-vieira-silva", url: "https://www.linkedin.com/in/joao-gabriel-vieira-silva" } },
  ],

  habilidades: [
    "Linguagens de programação",
    "Português (Nativo)",
    "Inglês (Avançado)",
    "Espanhol (Conversacional)",
    "Entusiasta em TI e IA",
    "Pensamento estratégico",
    "Fácil adaptação",
  ]
};

// Cada idioma tem todos os textos do currículo no mesmo formato. Assim, trocar
// qualquer conteúdo não exige mexer no HTML nem no renderizador.
const curriculoEN = {
  nome: "João Gabriel Vieira Silva", foto: "foto.png",
  info: `Age: 20<br>Phone: +55 (83) 99408-5691<br>Email: joaogabriel61.cz@gmail.com<br>`,
  formacao: [
    "Postgraduate Certificate in **Higher Education Teaching** (ongoing)",
    "Technology Degree in **Systems Analysis and Development** - IFPB",
    "High School Diploma (2022)"
  ],
  experiencia: [
    { empresa: "AM3 Soluções", cargo: "Systems Analyst Intern", periodo: "05/2026 – present", descricao: "Responsible for developing applications and adding features to existing products, mastering new programming tools, solving version-control issues, and designing and prototyping web and mobile interfaces." },
    { empresa: "Paraíba State Research Support Foundation (FAPESQ)", cargo: "Undergraduate Research Fellow", periodo: "09/2025 – 02/2026", descricao: "Represented Paraíba in Spain while researching Artificial Neural Networks during a Computer Engineering programme, contributing to scientific development and international collaboration." },
    { empresa: "Mondragon Unibertsitatea", cargo: "Artificial Intelligence Researcher", periodo: "09/2025 – 01/2026", descricao: "Researched and developed artificial-intelligence projects. Responsibilities included data analysis, model development, scientific reading and writing, conferences, and collaboration with multidisciplinary teams." },
    { empresa: "Loopis Soluções Tecnológicas (Junior Enterprise)", cargo: "Human Resources Director", periodo: "10/2023 – 06/2026", descricao: "Responsible for preparing and organising documents, gathering requirements, and supporting different development teams." },
    { empresa: "Infolight Tecnologia da Informação LTDA", cargo: "Systems Analyst Intern", periodo: "09/2024 – 06/2025", descricao: "Responsible for system development, software testing, technical documentation, service automation, ERP customer support, SPED Contributions corrections, software deployment, and XML maintenance." },
    { empresa: "Premium Brindes", cargo: "Production Assistant", periodo: "12/2022 – 02/2023", descricao: "Responsible for customer service, artwork creation and vectorisation, screen-printing machine operation, preparation of screens for customised orders, and promotional-product manufacturing." }
  ],
  extracurricular: [
    { titulo: "Interaction Technology Training: SENAC and Pisada do Sertão Partnership", periodo: "Course load: 60 hours. 06/2026 - 07/2026", descricao: "Training in industry web design tools, such as Figma, and creation of an original design, covering web development fundamentals and UI/UX design principles." },
    { titulo: "Embedded Systems and Edge AI Training: PNAAT and Ministry of Science, Technology and Innovation Partnership", periodo: "Course load: 74 hours", descricao: "Training in embedded systems and Edge AI, focused on electronics, programming, and artificial intelligence." },
    { titulo: "Completed the Pre-Intermediate 3 Cycle at More English", periodo: "Course load: 360 hours. 2018 - 2019", descricao: "Playful and dynamic English training focused on listening comprehension and spoken communication." }
  ],
  marcos: [
    "Volunteer teaching assistant for **Algorithms and Programming Logic**",
    "Volunteer assistant for the **De Rede Em Rede** sports project - IFPB",
    "Instructor for **Unravelling Lua: From Basics to APIs**",
    "Course: **IoT and Edge AI Fundamentals** - PNAAT/Federal Government",
    "Course: **Edge AI Track** - PNAAT/Federal Government",
    "Course: **Electronics Track** - PNAAT/Federal Government",
    "Course: **Embedded Systems Track** - PNAAT/Federal Government",
    "Short course: **Hyperledger Fabric: First Steps with Blockchain**",
    "Short course: **Animation: 2D to 3D with GSAP and Three.js**",
    "Bronze at the **25th Brazilian Astronomy and Astronautics Olympiad**",
    "2nd place at the **Startup Day 2026 Ideathon** - Sebrae Startups",
    "2nd place at the **IV SertãoComp Hackathon** - IFPB/Cajazeiras",
    "Attendee at **IV and V SertãoComp** - IFPB",
    "Talk: **Basic Life Support: Four Steps that Save Lives**",
    "Reading club at **Colégio Nossa Senhora de Lourdes**",
    "**Top Essays** certificates in three mock-exam editions",
    "Three first-place finishes at the **Internal Chess Championship - Category A** (2017, 2018 and 2019)",
    { texto: "Extracurricular projects: ", link: { rotulo: "github.com/Osoapy", url: "https://github.com/Osoapy" } },
    { texto: "LinkedIn: ", link: { rotulo: "linkedin.com/in/joao-gabriel-vieira-silva", url: "https://www.linkedin.com/in/joao-gabriel-vieira-silva" } }
  ],
  habilidades: ["Programming languages", "Portuguese (native)", "English (advanced)", "Spanish (conversational)", "IT and AI enthusiast", "Strategic thinking", "Adaptability"]
};

const curriculos = {
  "pt-BR": { dados: curriculoPT, alternativo: "EN-EU", exportar: "Exportar para PDF", titulo: "Currículo - João Gabriel", secoes: ["Formação Acadêmica", "Experiência Profissional", "Experiência Extracurricular", "Marcos Extracurriculares", "Habilidades"] },
  "en-EU": { dados: curriculoEN, alternativo: "PT-BR", exportar: "Export as PDF", titulo: "CV - João Gabriel", secoes: ["Education", "Professional Experience", "Courses and Training", "Additional Achievements", "Skills"] }
};
