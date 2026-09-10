const curriculoPT = {
  nome: "João Gabriel Vieira Silva",
  foto: "assets/foto.png",
  info: `
    Idade: 20 anos<br>
    Telefone: +55 (83) 99408-5691<br>
    Email: joaogabriel61.cz@gmail.com<br>
  `,

  formacao: [
    "Curso Superior em **Análise e Desenvolvimento de Sistemas** - IFPB (2026)",
    "Graduação Sanduíche em **Engenharia Informática** - Mondragon Unibertsitatea, Espanha (2026)",
    "Ensino Médio Completo (2022)"
  ],

  links: [
    { texto: "GitHub: ", link: { rotulo: "github.com/Osoapy", url: "https://github.com/Osoapy" } },
    { texto: "LinkedIn: ", link: { rotulo: "linkedin.com/in/joao-gabriel-vieira-silva", url: "https://www.linkedin.com/in/joao-gabriel-vieira-silva" } }
  ],

  experiencia: [
    {
      empresa: "AM3 Soluções",
      cargo: "Analista de Sistemas Estagiário",
      periodo: "05/2026 – atualmente",
      descricao: "Desenvolvimento de **sistemas web e mobile** com **Flutter/Dart** e **FlutterFlow**; implementação de funcionalidades e controle de versão.",
      descricoes: {
        dev: "Desenvolvimento de **sistemas web e mobile** com **Flutter/Dart** e **FlutterFlow**; implementação de funcionalidades e controle de versão.",
        "ui-ux": "Criação e **prototipação de interfaces web/mobile** para aplicativos e novas funcionalidades de produtos existentes."
      }
    },
    {
      empresa: "Fundação de Apoio à Pesquisa do Estado da Paraíba (FAPESQ)",
      cargo: "Bolsista de Iniciação Científica",
      periodo: "09/2025 – 02/2026",
      descricao: "Pesquisa em **Redes Neurais Artificiais** durante a graduação sanduíche em **Engenharia Informática** na Espanha.",
      views: ["dev", "tudo"]
    },
    {
      empresa: "Mondragon Unibertsitatea",
      cargo: "Pesquisador na área de Inteligência Artificial",
      periodo: "09/2025 – 01/2026",
      descricao: "Projetos de **inteligência artificial**, **análise de dados** e soluções em **Python** para desafios propostos pela **OpenAI**.",
      views: ["dev", "tudo"]
    },
    {
      empresa: "Loopis Soluções Tecnológicas (Empresa Júnior)",
      cargo: "Diretor de Recursos Humanos",
      periodo: "10/2023 – 06/2026",
      descricao: "Atribuído para elaboração de documentos, levantamento de requisitos, gerir diferentes equipes de desenvolvimento, fazer análises de mercado e prospecção ativa de clientes.",
      descricoes: {
        dev: "**Levantamento de requisitos**, elaboração de documentos e gestão de diferentes **equipes de desenvolvimento**.",
        "ui-ux": "**Levantamento de requisitos**, análises de mercado e colaboração com diferentes equipes de desenvolvimento."
      }
    },
    {
      empresa: "Infolight Tecnologia da Informação LTDA",
      cargo: "Analista de Sistemas estagiário",
      periodo: "09/2024 – 06/2025",
      descricao: "Frontend com **React, TypeScript e CSS**; backend com **Node.js**, além de testes, automação, suporte ERP e XML.",
      views: ["dev", "tudo"]
    },
    {
      empresa: "Premium Brindes",
      cargo: "Auxiliar de Produção",
      periodo: "12/2022 – 02/2023",
      descricao: "Responsável pelo atendimento ao cliente, confecção de artes, vetorização de artes, operar máquinas de serigrafia, criar telas para a personalização dos pedidos e produção de brindes.",
      views: ["ui-ux", "tudo"]
    }
  ],

  extracurricular: [
    {
      titulo: "Capacitação em Tecnologia da Interação: Parceria do SENAC e Pisada do Sertão",
      periodo: "Carga horária: 60 horas. 06/2026 - 07/2026",
      descricao: "**Figma**, web design, desenvolvimento web e princípios de **UI/UX**.",
      views: ["dev", "ui-ux", "tudo"]
    },
    {
      titulo: "Capacitação em Sistemas Embarcados e Edge AI: Parceria do PNAAT e Ministério da Ciência, Tecnologia e Inovação",
      periodo: "Carga horária: 74 horas",
      descricao: "**Sistemas embarcados**, **Edge AI**, eletrônica, programação e inteligência artificial.",
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
  info: `Age: 20<br>Phone: +55 (83) 99408-5691<br>Email: joaogabriel61.cz@gmail.com<br>`,
  formacao: [
    "Technology Degree in **Systems Analysis and Development** - IFPB (2026)",
    "Study-abroad degree programme in **Computer Engineering** - Mondragon Unibertsitatea, Spain (2026)",
    "High School Diploma (2022)"
  ],
  links: [
    { texto: "GitHub: ", link: { rotulo: "github.com/Osoapy", url: "https://github.com/Osoapy" } },
    { texto: "LinkedIn: ", link: { rotulo: "linkedin.com/in/joao-gabriel-vieira-silva", url: "https://www.linkedin.com/in/joao-gabriel-vieira-silva" } }
  ],
  experiencia: [
    { empresa: "AM3 Soluções", cargo: "Systems Analyst Intern", periodo: "05/2026 – present", descricao: "Development of **web and mobile systems** with **Flutter/Dart** and **FlutterFlow**; feature implementation and version control.", descricoes: { dev: "Development of **web and mobile systems** with **Flutter/Dart** and **FlutterFlow**; feature implementation and version control.", "ui-ux": "Creating and **prototyping web and mobile interfaces** for applications and new features in existing products." } },
    { empresa: "Paraíba State Research Support Foundation (FAPESQ)", cargo: "Undergraduate Research Fellow", periodo: "09/2025 – 02/2026", descricao: "Research in **Artificial Neural Networks** during a study-abroad **Computer Engineering** programme in Spain.", views: ["dev", "tudo"] },
    { empresa: "Mondragon Unibertsitatea", cargo: "Artificial Intelligence Researcher", periodo: "09/2025 – 01/2026", descricao: "**Artificial intelligence**, **data analysis**, and **Python** solutions for challenges proposed by **OpenAI**.", views: ["dev", "tudo"] },
    { empresa: "Loopis Soluções Tecnológicas (Junior Enterprise)", cargo: "Human Resources Director", periodo: "10/2023 – 06/2026", descricao: "Responsible for preparing and organising documents, gathering requirements, managing development teams, market analysis, and active client prospecting.", descricoes: { dev: "**Gathering requirements**, preparing documents, and managing different **development teams**.", "ui-ux": "**Gathering requirements**, conducting market analysis, and collaborating with different development teams." } },
    { empresa: "Infolight Tecnologia da Informação LTDA", cargo: "Systems Analyst Intern", periodo: "09/2024 – 06/2025", descricao: "Frontend with **React, TypeScript, and CSS**; backend with **Node.js**, plus testing, automation, ERP support, and XML.", views: ["dev", "tudo"] },
    { empresa: "Premium Brindes", cargo: "Production Assistant", periodo: "12/2022 – 02/2023", descricao: "Responsible for customer service, artwork creation and vectorisation, screen-printing machine operation, preparation of screens for customised orders, and promotional-product manufacturing.", views: ["ui-ux", "tudo"] }
  ],
  extracurricular: [
    { titulo: "Interaction Technology Training: SENAC and Pisada do Sertão Partnership", periodo: "Course load: 60 hours. 06/2026 - 07/2026", descricao: "**Figma**, web design, web development, and **UI/UX** principles.", views: ["dev", "ui-ux", "tudo"] },
    { titulo: "Embedded Systems and Edge AI Training: PNAAT and Ministry of Science, Technology and Innovation Partnership", periodo: "Course load: 74 hours", descricao: "**Embedded systems**, **Edge AI**, electronics, programming, and artificial intelligence.", views: ["dev", "tudo"] },
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
  "pt-BR": { dados: curriculoPT, alternativo: "EN-EU", exportar: "Exportar para PDF", titulo: "Currículo - João Gabriel", secoes: { formacao: "Formação Acadêmica", links: "Links Importantes", experiencia: "Experiência Profissional", extracurricular: "Cursos e Capacitações", marcosTecnicos: "Formação e Conquistas Técnicas", habilidades: "Habilidades" } },
  "en-EU": { dados: curriculoEN, alternativo: "PT-BR", exportar: "Export as PDF", titulo: "CV - João Gabriel", secoes: { formacao: "Education", links: "Important Links", experiencia: "Professional Experience", extracurricular: "Courses and Training", marcosTecnicos: "Technical Training and Achievements", habilidades: "Skills" } }
};
