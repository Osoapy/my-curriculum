const curriculoPT = {
  nome: "João Gabriel Vieira Silva",
  foto: "assets/foto.png",
  info: `
    Tenho 20 anos<br>
    Telefone: +55 (83) 99408-5691<br>
    Email: <a href="mailto:joaogabriel61.cz@gmail.com">joaogabriel61.cz@gmail.com</a><br>
  `,

  resumos: {
    dev: "Sou desenvolvedor Full Stack com experiência em aplicações **web e mobile**, utilizando **React, TypeScript, Flutter/Dart, Node.js e Python**. Também atuo com testes, automação, levantamento de requisitos e pesquisa em inteligência artificial.",
    "ui-ux": "Sou profissional de tecnologia com experiência em **interfaces web e mobile**, da prototipação ao desenvolvimento. Trabalho com **Figma, FlutterFlow, React, TypeScript e CSS**, combinando visão de produto, levantamento de requisitos e colaboração com equipes de desenvolvimento.",
    tudo: "Sou profissional de tecnologia com experiência em **desenvolvimento web e mobile, UI/UX e inteligência artificial**. Combino atuação técnica com React, TypeScript, Flutter/Dart, Node.js e Python com vivência em pesquisa, requisitos e coordenação de equipes."
  },

  formacao: [
    "Cursei **Análise e Desenvolvimento de Sistemas** no IFPB (2026)",
    "Realizei graduação sanduíche em **Engenharia Informática** - Mondragon Unibertsitatea, Espanha (2026)"
  ],

  links: [
    { texto: "GitHub: ", link: { rotulo: "github.com/Osoapy", url: "https://github.com/Osoapy" } },
    { texto: "LinkedIn: ", link: { rotulo: "linkedin.com/in/joao-gabriel-vieira-silva", url: "https://www.linkedin.com/in/joao-gabriel-vieira-silva" } },
    { texto: "Portfólio: ", link: { rotulo: "osoapy.github.io/portrait/", url: "https://osoapy.github.io/portrait/" } }
  ],

  experiencia: [
    {
      empresa: "AM3 Soluções",
      cargo: "Desenvolvedor Full Stack",
      periodo: "05/2026 – atualmente",
      descricao: "Desenvolvo aplicações web e mobile com Flutter/Dart e FlutterFlow. Construo funcionalidades, interfaces e fluxos de navegação, implemento deep links e integro sistemas a terminais POS (maquininhas de pagamento).",
      descricoes: {
        dev: "Desenvolvo aplicações web e mobile com Flutter/Dart e FlutterFlow. Construo funcionalidades, interfaces e fluxos de navegação, implemento deep links e integro sistemas a terminais POS (maquininhas de pagamento).",
        "ui-ux": "Crio e prototipo interfaces web e mobile, estruturo fluxos de navegação e deep links para novas funcionalidades e participo da integração com terminais POS (maquininhas de pagamento)."
      }
    },
    {
      empresa: "Fundação de Apoio à Pesquisa do Estado da Paraíba (FAPESQ)",
      cargo: "Bolsista de Iniciação Científica",
      periodo: "09/2025 – 02/2026",
      descricao: "Desenvolvi um produto educacional sobre Redes Neurais Artificiais e Inteligência Artificial durante minha iniciação científica vinculada à graduação sanduíche na Espanha.",
      views: ["dev", "tudo"]
    },
    {
      empresa: "Mondragon Unibertsitatea",
      cargo: "Pesquisador na área de Inteligência Artificial",
      periodo: "09/2025 – 01/2026",
      descricao: "Estudei arquitetura de software para sistemas de contrainteligência voltados ao combate a scammers, envolvendo Inteligência Artificial, e desenvolvi soluções com Python e aprendizado de máquina para problemas propostos pela OpenAI.",
      views: ["dev", "tudo"]
    },
    {
      empresa: "Loopis Soluções Tecnológicas (Empresa Júnior)",
      cargo: "Diretor de Recursos Humanos e Scrum Master",
      periodo: "10/2023 – 06/2026",
      descricao: "Atuei como Scrum Master na coordenação de equipes de desenvolvimento e apoiei projetos por meio de levantamento de requisitos, documentação, análise de mercado e prospecção ativa de clientes.",
      descricoes: {
        dev: "Atuei como Scrum Master na coordenação de equipes de desenvolvimento. Também levantei requisitos e documentei projetos.",
        "ui-ux": "Atuei como Scrum Master, levantei necessidades de projetos, documentei requisitos e colaborei com equipes de desenvolvimento. Também apoiei análises de mercado."
      }
    },
    {
      empresa: "Infolight Tecnologia da Informação LTDA",
      cargo: "Analista de Sistemas estagiário",
      periodo: "09/2024 – 06/2025",
      descricao: "Desenvolvi um sistema web ERP com React, TypeScript, CSS e Node.js para substituir o sistema legado, incluindo testes, automações e processamento de XML.",
      views: ["dev", "tudo"]
    },
    {
      empresa: "Premium Brindes",
      cargo: "Auxiliar de Produção",
      periodo: "12/2022 – 02/2023",
      descricao: "Atendi clientes e preparei artes e arquivos vetoriais para personalização. Também confeccionei telas, operei equipamentos de serigrafia e acompanhei a produção dos pedidos.",
      views: ["ui-ux", "tudo"]
    }
  ],

  extracurricular: [
    {
      titulo: "Capacitação em Tecnologia da Interação: Parceria do SENAC e Pisada do Sertão",
      periodo: "Carga horária: 60 horas. 06/2026 - 07/2026",
      descricao: "Aprofundei meus conhecimentos em **Figma**, web design, desenvolvimento web e fundamentos de **UI/UX** por meio de atividades práticas.",
      views: ["dev", "ui-ux", "tudo"]
    },
    {
      titulo: "Capacitação em Sistemas Embarcados e Edge AI: Parceria do PNAAT e Ministério da Ciência, Tecnologia e Inovação",
      periodo: "Carga horária: 74 horas",
      descricao: "Estudei **sistemas embarcados**, **Edge AI**, eletrônica, programação e inteligência artificial.",
      views: ["dev", "tudo"]
    },
    {
      titulo: "Concluí o ciclo Pré Intermediate 3 do curso More English",
      periodo: "Carga horária: 360 horas. 2018 - 2019",
      descricao: "Desenvolvi minha compreensão do inglês falado e minha comunicação oral por meio de atividades lúdicas e dinâmicas.",
      views: ["tudo"]
    },
  ],

  marcos: [
    { texto: "Atuei como monitor voluntário de **Algoritmos e Lógica de Programação**", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Ministrei o minicurso **Desvendando Lua: do básico às APIs**", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Concluí o curso **Fundamentos em IoT e Edge AI** - PNAAT/Governo Federal", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Concluí o curso **Trilha de Edge AI** - PNAAT/Governo Federal", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Concluí o curso **Trilha de Eletrônica** - PNAAT/Governo Federal", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Concluí o curso **Trilha de Sistemas Embarcados** - PNAAT/Governo Federal", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Participei do minicurso **Hyperledger Fabric: primeiros passos com Blockchain**", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "Participei do minicurso **Animações: do 2D ao 3D com GSAP e Three.js**", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
    { texto: "Conquistei o 2º lugar no **Ideathon Startup Day 2026** - Sebrae Startups", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
    { texto: "Conquistei o 2º lugar no **Hackathon do IV SertãoComp** - IFPB/Cajazeiras", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
    { texto: "Participei do **IV e V SertãoComp** - IFPB", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
  ],

  habilidades: [
    "Trabalho em equipe",
    "Comunicação clara",
    "Fácil adaptação",
    "Organização e cumprimento de prazos",
    "Resolução colaborativa de problemas",
    "Iniciativa e responsabilidade",
    "Português (nativo)",
    "Inglês (avançado)",
    "Espanhol (conversacional)",
  ]
};

// Cada idioma tem todos os textos do currículo no mesmo formato. Assim, trocar
// qualquer conteúdo não exige mexer no HTML nem no renderizador.
const curriculoEN = {
  nome: "João Gabriel Vieira Silva", foto: "assets/foto.png",
  info: `I am 20 years old<br>Phone: +55 (83) 99408-5691<br>Email: <a href="mailto:joaogabriel61.cz@gmail.com">joaogabriel61.cz@gmail.com</a><br>`,
  resumos: {
    dev: "I am a Full-Stack Developer with experience in **web and mobile applications** using **React, TypeScript, Flutter/Dart, Node.js, and Python**. I also work with testing, automation, requirements gathering, and artificial intelligence research.",
    "ui-ux": "I am a technology professional with experience in **web and mobile interfaces**, from prototyping through development. I work with **Figma, FlutterFlow, React, TypeScript, and CSS**, combining product thinking, requirements gathering, and collaboration with development teams.",
    tudo: "I am a technology professional with experience in **web and mobile development, UI/UX, and artificial intelligence**. I combine hands-on work with React, TypeScript, Flutter/Dart, Node.js, and Python with experience in research, requirements gathering, and team coordination."
  },
  formacao: [
    "I studied **Systems Analysis and Development** at IFPB (2026)",
    "I completed a study-abroad programme in **Computer Engineering** - Mondragon Unibertsitatea, Spain (2026)"
  ],
  links: [
    { texto: "GitHub: ", link: { rotulo: "github.com/Osoapy", url: "https://github.com/Osoapy" } },
    { texto: "LinkedIn: ", link: { rotulo: "linkedin.com/in/joao-gabriel-vieira-silva", url: "https://www.linkedin.com/in/joao-gabriel-vieira-silva" } },
    { texto: "Portfolio: ", link: { rotulo: "osoapy.github.io/portrait/", url: "https://osoapy.github.io/portrait/" } }
  ],
  experiencia: [
    { empresa: "AM3 Soluções", cargo: "Full-Stack Developer", periodo: "05/2026 – present", descricao: "I develop web and mobile applications with Flutter/Dart and FlutterFlow. I build features, interfaces, and navigation flows, implement deep links, and integrate systems with POS payment terminals.", descricoes: { dev: "I develop web and mobile applications with Flutter/Dart and FlutterFlow. I build features, interfaces, and navigation flows, implement deep links, and integrate systems with POS payment terminals.", "ui-ux": "I create and prototype web and mobile interfaces, structure navigation flows and deep links for new features, and contribute to POS payment terminal integrations." } },
    { empresa: "Paraíba State Research Support Foundation (FAPESQ)", cargo: "Undergraduate Research Fellow", periodo: "09/2025 – 02/2026", descricao: "I developed an educational product about Artificial Neural Networks and Artificial Intelligence during my undergraduate research project linked to the study-abroad programme in Spain.", views: ["dev", "tudo"] },
    { empresa: "Mondragon Unibertsitatea", cargo: "Artificial Intelligence Researcher", periodo: "09/2025 – 01/2026", descricao: "I studied software architecture for counterintelligence systems designed to combat scammers using Artificial Intelligence and developed Python and machine learning solutions for problems proposed by OpenAI.", views: ["dev", "tudo"] },
    { empresa: "Loopis Soluções Tecnológicas (Junior Enterprise)", cargo: "Human Resources Director and Scrum Master", periodo: "10/2023 – 06/2026", descricao: "I worked as Scrum Master coordinating development teams and supported projects through requirements gathering, documentation, market analysis, and active client prospecting.", descricoes: { dev: "I worked as Scrum Master coordinating development teams. I also gathered requirements and documented projects.", "ui-ux": "I worked as Scrum Master, identified project needs, documented requirements, and collaborated with development teams. I also supported market analysis." } },
    { empresa: "Infolight Tecnologia da Informação LTDA", cargo: "Systems Analyst Intern", periodo: "09/2024 – 06/2025", descricao: "I developed a web-based ERP system with React, TypeScript, CSS, and Node.js to replace the legacy system, including testing, automation, and XML processing.", views: ["dev", "tudo"] },
    { empresa: "Premium Brindes", cargo: "Production Assistant", periodo: "12/2022 – 02/2023", descricao: "I served customers and prepared artwork and vector files for customisation. I also produced screens, operated screen-printing equipment, and followed orders through production.", views: ["ui-ux", "tudo"] }
  ],
  extracurricular: [
    { titulo: "Interaction Technology Training: SENAC and Pisada do Sertão Partnership", periodo: "Course load: 60 hours. 06/2026 - 07/2026", descricao: "I strengthened my skills in **Figma**, web design, web development, and **UI/UX** foundations through hands-on activities.", views: ["dev", "ui-ux", "tudo"] },
    { titulo: "Embedded Systems and Edge AI Training: PNAAT and Ministry of Science, Technology and Innovation Partnership", periodo: "Course load: 74 hours", descricao: "I studied **embedded systems**, **Edge AI**, electronics, programming, and artificial intelligence.", views: ["dev", "tudo"] },
    { titulo: "I completed the Pre-Intermediate 3 Cycle at More English", periodo: "Course load: 360 hours. 2018 - 2019", descricao: "I developed my English listening and speaking skills through engaging activities.", views: ["tudo"] }
  ],
  marcos: [
    { texto: "I volunteered as a teaching assistant for **Algorithms and Programming Logic**", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "I taught the short course **Unravelling Lua: From Basics to APIs**", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "I completed **IoT and Edge AI Fundamentals** - PNAAT/Federal Government", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "I completed the **Edge AI Track** - PNAAT/Federal Government", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "I completed the **Electronics Track** - PNAAT/Federal Government", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "I completed the **Embedded Systems Track** - PNAAT/Federal Government", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "I attended the short course **Hyperledger Fabric: First Steps with Blockchain**", grupo: "tecnicos", views: ["dev", "tudo"] },
    { texto: "I attended the short course **Animation: 2D to 3D with GSAP and Three.js**", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
    { texto: "I won 2nd place at the **Startup Day 2026 Ideathon** - Sebrae Startups", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
    { texto: "I won 2nd place at the **IV SertãoComp Hackathon** - IFPB/Cajazeiras", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
    { texto: "I attended **IV and V SertãoComp** - IFPB", grupo: "tecnicos", views: ["dev", "ui-ux", "tudo"] },
  ],
  habilidades: ["Teamwork", "Clear communication", "Adaptability", "Organization and meeting deadlines", "Collaborative problem-solving", "Initiative and responsibility", "Portuguese (native)", "English (advanced)", "Spanish (conversational)"]
};

const curriculos = {
  "pt-BR": { dados: curriculoPT, alternativo: "EN-EU", exportar: "Exportar para PDF", titulo: "Currículo - João Gabriel", secoes: { resumo: "Resumo Profissional", formacao: "Formação Acadêmica", links: "Links Importantes", experiencia: "Experiência Profissional", extracurricular: "Cursos e Capacitações", marcosTecnicos: "Formação e Conquistas Técnicas", habilidades: "Habilidades" } },
  "en-EU": { dados: curriculoEN, alternativo: "PT-BR", exportar: "Export as PDF", titulo: "CV - João Gabriel", secoes: { resumo: "Professional Summary", formacao: "Education", links: "Important Links", experiencia: "Professional Experience", extracurricular: "Courses and Training", marcosTecnicos: "Technical Training and Achievements", habilidades: "Skills" } }
};
