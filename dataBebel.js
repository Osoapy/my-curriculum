const curriculoPT = {
  nome: "João Gabriel Vieira Silva",
  foto: "assets/foto.png",
  info: `
    Idade: 20 anos<br>
    Telefone: +55 (83) 99408-5691<br>
    Email: <a href="mailto:joaogabriel61.cz@gmail.com">joaogabriel61.cz@gmail.com</a><br>
  `,

  resumos: {
    dev: "Desenvolvedor Full Stack com experiência em aplicações **web e mobile**, utilizando **React, TypeScript, Flutter/Dart, Node.js e Python**. Atua também com testes, automação, levantamento de requisitos e pesquisa em inteligência artificial.",
    "ui-ux": "Profissional de tecnologia com experiência em **interfaces web e mobile**, da prototipação ao desenvolvimento. Trabalha com **Figma, FlutterFlow, React, TypeScript e CSS**, combinando visão de produto, levantamento de requisitos e colaboração com equipes de desenvolvimento.",
    tudo: "Profissional de tecnologia com experiência em **desenvolvimento web e mobile, UI/UX e inteligência artificial**. Reúne atuação técnica com React, TypeScript, Flutter/Dart, Node.js e Python e vivência em pesquisa, requisitos e coordenação de equipes."
  },

  formacao: [
    "Curso Superior em **Análise e Desenvolvimento de Sistemas** - IFPB (2026)",
    "Graduação Sanduíche em **Engenharia Informática** - Mondragon Unibertsitatea, Espanha (2026)"
  ],

  links: [
    { texto: "GitHub: ", link: { rotulo: "github.com/Osoapy", url: "https://github.com/Osoapy" } },
    { texto: "LinkedIn: ", link: { rotulo: "linkedin.com/in/joao-gabriel-vieira-silva", url: "https://www.linkedin.com/in/joao-gabriel-vieira-silva" } }
  ],

  experiencia: [
    {
      empresa: "AM3 Soluções",
      cargo: "Desenvolvedor Full Stack",
      periodo: "05/2026 – atualmente",
      descricao: "Desenvolve aplicações web e mobile com Flutter/Dart e FlutterFlow, atuando na construção de funcionalidades, interfaces e fluxos de navegação, na implementação de deep links e na integração com terminais POS (maquininhas de pagamento).",
      descricoes: {
        dev: "Desenvolve aplicações web e mobile com Flutter/Dart e FlutterFlow, atuando na construção de funcionalidades, interfaces e fluxos de navegação, na implementação de deep links e na integração com terminais POS (maquininhas de pagamento).",
        "ui-ux": "Cria e prototipa interfaces web e mobile, estruturando fluxos de navegação e deep links para novas funcionalidades e participando da integração com terminais POS (maquininhas de pagamento)."
      }
    },
    {
      empresa: "Fundação de Apoio à Pesquisa do Estado da Paraíba (FAPESQ)",
      cargo: "Bolsista de Iniciação Científica",
      periodo: "09/2025 – 02/2026",
      descricao: "Desenvolveu um produto educacional sobre Redes Neurais Artificiais e Inteligência Artificial durante a iniciação científica vinculada à graduação sanduíche na Espanha.",
      views: ["dev", "tudo"]
    },
    {
      empresa: "Mondragon Unibertsitatea",
      cargo: "Pesquisador na área de Inteligência Artificial",
      periodo: "09/2025 – 01/2026",
      descricao: "Estudou arquitetura de software para sistemas de contrainteligência voltados ao combate a scammers, envolvendo Inteligência Artificial, e desenvolveu soluções com Python e aprendizado de máquina para problemas propostos pela OpenAI.",
      views: ["dev", "tudo"]
    },
    {
      empresa: "Loopis Soluções Tecnológicas (Empresa Júnior)",
      cargo: "Diretor de Recursos Humanos e Scrum Master",
      periodo: "10/2023 – 06/2026",
      descricao: "Atuou como Scrum Master na coordenação de equipes de desenvolvimento e apoiou projetos por meio de levantamento de requisitos, documentação, análise de mercado e prospecção ativa de clientes.",
      descricoes: {
        dev: "Atuou como Scrum Master na coordenação de equipes de desenvolvimento, realizando também levantamento de requisitos e documentação de projetos.",
        "ui-ux": "Atuou como Scrum Master, levantou necessidades de projetos, documentou requisitos e colaborou com equipes de desenvolvimento, apoiando também análises de mercado."
      }
    },
    {
      empresa: "Infolight Tecnologia da Informação LTDA",
      cargo: "Analista de Sistemas estagiário",
      periodo: "09/2024 – 06/2025",
      descricao: "Desenvolveu um sistema web ERP com React, TypeScript, CSS e Node.js para substituir o sistema legado, incluindo testes, automações e processamento de XML.",
      views: ["dev", "tudo"]
    },
    {
      empresa: "Premium Brindes",
      cargo: "Auxiliar de Produção",
      periodo: "12/2022 – 02/2023",
      descricao: "Atendeu clientes e preparou artes e arquivos vetoriais para personalização, além de confeccionar telas, operar equipamentos de serigrafia e acompanhar a produção dos pedidos.",
      views: ["ui-ux", "tudo"]
    }
  ],

  extracurricular: [
    {
      titulo: "Capacitação em Tecnologia da Interação: Parceria do SENAC e Pisada do Sertão",
      periodo: "Carga horária: 60 horas. 06/2026 - 07/2026",
      descricao: "Formação prática em **Figma**, web design, desenvolvimento web e fundamentos de **UI/UX**.",
      views: ["dev", "ui-ux", "tudo"]
    },
    {
      titulo: "Capacitação em Sistemas Embarcados e Edge AI: Parceria do PNAAT e Ministério da Ciência, Tecnologia e Inovação",
      periodo: "Carga horária: 74 horas",
      descricao: "Formação em **sistemas embarcados**, **Edge AI**, eletrônica, programação e inteligência artificial.",
      views: ["dev", "tudo"]
    },
    {
      titulo: "Concluinte do ciclo Pré Intermediate 3 do curso More English",
      periodo: "Carga horária: 360 horas. 2018 - 2019",
      descricao: "Capacitação em inglês de forma lúdica e dinâmica, com foco na compreensão do inglês falado e na habilidade de falar em inglês.",
      views: ["tudo"]
    },
  ],

  marcos: [
    { texto: "Monitor voluntário de **Algoritmos e Lógica de Programação**", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Professor do minicurso **Desvendando Lua: do básico às APIs**", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Curso **Fundamentos em IoT e Edge AI** - PNAAT/Governo Federal", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Curso **Trilha de Edge AI** - PNAAT/Governo Federal", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Curso **Trilha de Eletrônica** - PNAAT/Governo Federal", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Curso **Trilha de Sistemas Embarcados** - PNAAT/Governo Federal", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Minicurso **Hyperledger Fabric: primeiros passos com Blockchain**", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Minicurso **Animações: do 2D ao 3D com GSAP e Three.js**", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
    { texto: "2º lugar no **Ideathon Startup Day 2026** - Sebrae Startups", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
    { texto: "2º lugar no **Hackathon do IV SertãoComp** - IFPB/Cajazeiras", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
    { texto: "Participante do **IV e V SertãoComp** - IFPB", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
  ],

  habilidades: [
    "Flutter, Dart e FlutterFlow",
    "React, TypeScript e CSS",
    "Node.js e Python",
    "Desenvolvimento de sistemas web e mobile",
    "Inteligência Artificial, Redes Neurais e análise de dados",
    "Testes de software, automação, ERP e XML",
    "Fácil adaptação",
    "Português (Nativo)",
    "Inglês (Avançado)",
    "Espanhol (Conversacional)",
  ]
};

// Cada idioma tem todos os textos do currículo no mesmo formato. Assim, trocar
// qualquer conteúdo não exige mexer no HTML nem no renderizador.
const curriculoEN = {
  nome: "João Gabriel Vieira Silva", foto: "assets/foto.png",
  info: `Age: 20<br>Phone: +55 (83) 99408-5691<br>Email: <a href="mailto:joaogabriel61.cz@gmail.com">joaogabriel61.cz@gmail.com</a><br>`,
  resumos: {
    dev: "Full-Stack Developer experienced in **web and mobile applications** using **React, TypeScript, Flutter/Dart, Node.js, and Python**. Also works with testing, automation, requirements gathering, and artificial intelligence research.",
    "ui-ux": "Technology professional experienced in **web and mobile interfaces**, from prototyping through development. Works with **Figma, FlutterFlow, React, TypeScript, and CSS**, combining product thinking, requirements gathering, and collaboration with development teams.",
    tudo: "Technology professional experienced in **web and mobile development, UI/UX, and artificial intelligence**. Combines hands-on work with React, TypeScript, Flutter/Dart, Node.js, and Python with research, requirements gathering, and team coordination experience."
  },
  formacao: [
    "Technology Degree in **Systems Analysis and Development** - IFPB (2026)",
    "Study-abroad degree programme in **Computer Engineering** - Mondragon Unibertsitatea, Spain (2026)"
  ],
  links: [
    { texto: "GitHub: ", link: { rotulo: "github.com/Osoapy", url: "https://github.com/Osoapy" } },
    { texto: "LinkedIn: ", link: { rotulo: "linkedin.com/in/joao-gabriel-vieira-silva", url: "https://www.linkedin.com/in/joao-gabriel-vieira-silva" } }
  ],
  experiencia: [
    { empresa: "AM3 Soluções", cargo: "Full-Stack Developer", periodo: "05/2026 – present", descricao: "Develops web and mobile applications with Flutter/Dart and FlutterFlow, building features, interfaces, and navigation flows, implementing deep links, and delivering POS payment terminal integrations.", descricoes: { dev: "Develops web and mobile applications with Flutter/Dart and FlutterFlow, building features, interfaces, and navigation flows, implementing deep links, and delivering POS payment terminal integrations.", "ui-ux": "Creates and prototypes web and mobile interfaces, structuring navigation flows and deep links for new features and contributing to POS payment terminal integrations." } },
    { empresa: "Paraíba State Research Support Foundation (FAPESQ)", cargo: "Undergraduate Research Fellow", periodo: "09/2025 – 02/2026", descricao: "Developed an educational product about Artificial Neural Networks and Artificial Intelligence during an undergraduate research project linked to the study-abroad programme in Spain.", views: ["dev", "tudo"] },
    { empresa: "Mondragon Unibertsitatea", cargo: "Artificial Intelligence Researcher", periodo: "09/2025 – 01/2026", descricao: "Studied software architecture for counterintelligence systems designed to combat scammers using Artificial Intelligence and developed Python and machine learning solutions for problems proposed by OpenAI.", views: ["dev", "tudo"] },
    { empresa: "Loopis Soluções Tecnológicas (Junior Enterprise)", cargo: "Human Resources Director and Scrum Master", periodo: "10/2023 – 06/2026", descricao: "Worked as Scrum Master coordinating development teams and supported projects through requirements gathering, documentation, market analysis, and active client prospecting.", descricoes: { dev: "Worked as Scrum Master coordinating development teams while also performing requirements gathering and project documentation.", "ui-ux": "Worked as Scrum Master, identified project needs, documented requirements, and collaborated with development teams while also supporting market analysis." } },
    { empresa: "Infolight Tecnologia da Informação LTDA", cargo: "Systems Analyst Intern", periodo: "09/2024 – 06/2025", descricao: "Developed a web-based ERP system with React, TypeScript, CSS, and Node.js to replace the legacy system, including testing, automation, and XML processing.", views: ["dev", "tudo"] },
    { empresa: "Premium Brindes", cargo: "Production Assistant", periodo: "12/2022 – 02/2023", descricao: "Served customers and prepared artwork and vector files for customisation; also produced screens, operated screen-printing equipment, and followed orders through production.", views: ["ui-ux", "tudo"] }
  ],
  extracurricular: [
    { titulo: "Interaction Technology Training: SENAC and Pisada do Sertão Partnership", periodo: "Course load: 60 hours. 06/2026 - 07/2026", descricao: "Hands-on training in **Figma**, web design, web development, and **UI/UX** foundations.", views: ["dev", "ui-ux", "tudo"] },
    { titulo: "Embedded Systems and Edge AI Training: PNAAT and Ministry of Science, Technology and Innovation Partnership", periodo: "Course load: 74 hours", descricao: "Training in **embedded systems**, **Edge AI**, electronics, programming, and artificial intelligence.", views: ["dev", "tudo"] },
    { titulo: "Completed the Pre-Intermediate 3 Cycle at More English", periodo: "Course load: 360 hours. 2018 - 2019", descricao: "Playful and dynamic English training focused on listening comprehension and spoken communication.", views: ["tudo"] }
  ],
  marcos: [
    { texto: "Volunteer teaching assistant for **Algorithms and Programming Logic**", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Instructor for **Unravelling Lua: From Basics to APIs**", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Course: **IoT and Edge AI Fundamentals** - PNAAT/Federal Government", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Course: **Edge AI Track** - PNAAT/Federal Government", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Course: **Electronics Track** - PNAAT/Federal Government", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Course: **Embedded Systems Track** - PNAAT/Federal Government", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Short course: **Hyperledger Fabric: First Steps with Blockchain**", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Short course: **Animation: 2D to 3D with GSAP and Three.js**", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
    { texto: "2nd place at the **Startup Day 2026 Ideathon** - Sebrae Startups", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
    { texto: "2nd place at the **IV SertãoComp Hackathon** - IFPB/Cajazeiras", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
    { texto: "Attendee at **IV and V SertãoComp** - IFPB", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
  ],
  habilidades: ["Flutter, Dart, and FlutterFlow", "React, TypeScript, and CSS", "Node.js and Python", "Web and mobile systems development", "Artificial Intelligence, Neural Networks, and data analysis", "Software testing, automation, ERP, and XML", "Adaptability", "Portuguese (native)", "English (advanced)", "Spanish (conversational)"]
};

const curriculos = {
  "pt-BR": { dados: curriculoPT, alternativo: "EN-EU", exportar: "Exportar para PDF", titulo: "Currículo - João Gabriel", secoes: { resumo: "Resumo Profissional", formacao: "Formação Acadêmica", links: "Links Importantes", experiencia: "Experiência Profissional", extracurricular: "Cursos e Capacitações", marcosTecnicos: "Formação e Conquistas Técnicas", habilidades: "Habilidades" } },
  "en-EU": { dados: curriculoEN, alternativo: "PT-BR", exportar: "Export as PDF", titulo: "CV - João Gabriel", secoes: { resumo: "Professional Summary", formacao: "Education", links: "Important Links", experiencia: "Professional Experience", extracurricular: "Courses and Training", marcosTecnicos: "Technical Training and Achievements", habilidades: "Skills" } }
};
