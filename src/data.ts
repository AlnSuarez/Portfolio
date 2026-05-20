import type { Education, Experience, Profile, Project } from './types';

export const dataEn = {
  profile: {
    fullName: 'Alan Suarez',
    headline: 'Full Stack Developer',
    location: 'Mexico',
    email: 'alansuarezsantamaria@gmail.com',
    phone: '+52 000 000 0000',
    linkedin: 'https://www.linkedin.com/in/alnsuarez/',
    summary:
      'Full Stack Developer with experience in React, Vue, and Django, creating high-impact digital products for communication, automation, and real-world operations.',
  } as Profile,
  skills: [
    'JavaScript / TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'REST APIs',
    'SQL / NoSQL',
    'Git / GitHub',
    'UI/UX',
  ],
  experiences: [
    {
      role: 'Full Stack Developer',
      company: 'DIATOMC · Mexico',
      period: '01/2024 - Present',
      bullets: [
        'Development of web products focused on performance, scalability, and user experience.',
        'Implementation of frontend and backend features to solve real operational and business needs.',
        'Collaboration with product teams to transform requirements into high-impact technical solutions.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Nuxiba · Mexico City, Mexico',
      period: '10/2023 - Present',
      bullets: [
        'Participated in the development of key communication features, including the WhatsApp interface and chat module, using Redux for efficient state management and seamless multi-channel integration.',
        'Provided ongoing maintenance to React components (class and functional), designed layouts using SCSS, documented components with Storybook, and conducted code reviews to enhance quality, performance, and stability.',
      ],
    },
    {
      role: 'Fullstack Developer',
      company: 'Datagram · Puebla, Mexico',
      period: '05/2022 - 12/2023',
      bullets: [
        'Led the development of an application for accountants, building the frontend with React, Redux, and Material UI for an intuitive and responsive experience.',
        'Architected the backend with Django, implementing data storage and API integrations for robust communication between frontend and backend.',
        'Configured and deployed an Nginx server for PDF processing, enabling seamless loading and document handling within the application.',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'Monoestereo · Nuevo Leon, Mexico',
      period: '08/2021 - 04/2022',
      bullets: [
        'Participated in the development of a pilot flight application using Vue.js, creating dynamic and interactive interfaces with a component-based architecture.',
        'Integrated asynchronous data management by connecting Vue.js with PouchDB for offline storage and synchronization, allowing operations in low-connectivity environments.',
      ],
    },
  ] as Experience[],
  education: [
    {
      degree: 'B.S. in Digital Systems and Robotics',
      institution: 'Tecnologico de Monterrey · Puebla, Mexico',
      period: '2020 - 2024',
      details:
        'Relevant coursework: Fundamentals of Programming, Data Structures, Operating Systems, Object-Oriented Programming, Network Interconnection, Web Application Development, Languages and Translators, Computer Architecture.',
    },
  ] as Education[],
  certifications: [
    'Learn React + Firebase (June 2022) - Udemy',
    'Frontend Development Libraries (May 2022) - FreeCodeCamp',
    'Data Structures in Python (April 2022) - University of Michigan (Coursera)',
    'Legacy JavaScript Algorithms and Data Structures (January 2022) - FreeCodeCamp',
    'Building Web Applications in PHP (July 2021) - University of Michigan (Coursera)',
    'Introduction to SQL (July 2021) - Google',
    'Introduction to Git and GitHub (November 2020) - Google (Coursera)',
    'Advanced Styling with Responsive Design (November 2020) - University of Michigan (Coursera)',
    'Interactivity with JavaScript (October 2020) - University of Michigan (Coursera)',
  ],
  projects: [
    {
      title: 'Lumena Lab Website',
      description:
        'Corporate website for Lumena Lab, focused on showcasing services, value proposition, and converting visitors into business opportunities.',
      stack: ['Next.js', 'TypeScript', 'UI/UX'],
      link: 'https://lumena-lab.com',
    },
    {
      title: 'Featured Project 2',
      description:
        'Project focused on user experience, integrations, and performance.',
      stack: ['Next.js', 'PostgreSQL', 'Tailwind'],
    },
  ] as Project[],
};

export const dataEs = {
  profile: {
    fullName: 'Alan Suarez',
    headline: 'Desarrollador Full Stack',
    location: 'México',
    email: 'alansuarezsantamaria@gmail.com',
    phone: '+52 000 000 0000',
    linkedin: 'https://www.linkedin.com/in/alnsuarez/',
    summary:
      'Desarrollador Full Stack con experiencia en React, Vue y Django, creando productos digitales de alto impacto para comunicación, automatización y operaciones en entornos reales.',
  } as Profile,
  skills: [
    'JavaScript / TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'APIs REST',
    'SQL / NoSQL',
    'Git / GitHub',
    'UI/UX',
  ],
  experiences: [
    {
      role: 'Desarrollador Full Stack',
      company: 'DIATOMC · México',
      period: '01/2024 - Actualidad',
      bullets: [
        'Desarrollo de productos web enfocados en rendimiento, escalabilidad y experiencia de usuario.',
        'Implementación de funcionalidades frontend y backend para resolver necesidades reales de operación y negocio.',
        'Colaboración con equipos de producto para transformar requerimientos en soluciones técnicas de alto impacto.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Nuxiba · Ciudad de México, México',
      period: '10/2023 - Actualidad',
      bullets: [
        'Participé en el desarrollo de funciones clave de comunicación, incluyendo interfaz de WhatsApp y módulo de chat, utilizando Redux para un manejo de estado eficiente e integración fluida entre canales.',
        'Brindé mantenimiento continuo a componentes React (de clase y funcionales), diseñé layouts con SCSS, documenté componentes con Storybook y realicé code reviews para mejorar calidad, rendimiento y estabilidad.',
      ],
    },
    {
      role: 'Fullstack Developer',
      company: 'Datagram · Puebla, México',
      period: '05/2022 - 12/2023',
      bullets: [
        'Lideré el desarrollo de una aplicación para contadores, construyendo el frontend con React, Redux y Material UI para una experiencia intuitiva y responsiva.',
        'Arquitecté el backend con Django, implementando almacenamiento de datos e integraciones API para una comunicación sólida entre frontend y backend.',
        'Configuré y desplegué un servidor Nginx para procesamiento de PDF, habilitando carga y manejo de documentos dentro de la aplicación.',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'Monoestereo · Nuevo León, México',
      period: '08/2021 - 04/2022',
      bullets: [
        'Participé en el desarrollo de una aplicación de vuelo piloto con Vue.js, creando interfaces dinámicas e interactivas con arquitectura basada en componentes.',
        'Integré gestión asíncrona de datos conectando Vue.js con PouchDB para almacenamiento offline y sincronización, permitiendo operar en entornos de baja conectividad.',
      ],
    },
  ] as Experience[],
  education: [
    {
      degree: 'Licenciatura en Sistemas Digitales y Robótica',
      institution: 'Tecnológico de Monterrey · Puebla, México',
      period: '2020 - 2024',
      details:
        'Cursos relevantes: Fundamentos de Programación, Estructuras de Datos, Sistemas Operativos, Programación Orientada a Objetos, Interconexión de Redes, Desarrollo de Aplicaciones Web, Lenguajes y Traductores, Arquitectura de Computadoras.',
    },
  ] as Education[],
  certifications: [
    'Aprende React + Firebase (junio 2022) - Udemy',
    'Librerías de Desarrollo Frontend (mayo 2022) - FreeCodeCamp',
    'Estructuras de Datos en Python (abril 2022) - University of Michigan (Coursera)',
    'Algoritmos y Estructuras de Datos con JavaScript Legacy (enero 2022) - FreeCodeCamp',
    'Construcción de Aplicaciones Web en PHP (julio 2021) - University of Michigan (Coursera)',
    'Introducción a SQL (julio 2021) - Google',
    'Introducción a Git y GitHub (noviembre 2020) - Google (Coursera)',
    'Estilos Avanzados con Diseño Responsivo (noviembre 2020) - University of Michigan (Coursera)',
    'Interactividad con JavaScript (octubre 2020) - University of Michigan (Coursera)',
  ],
  projects: [
    {
      title: 'Lumena Lab Website',
      description:
        'Sitio web corporativo para Lumena Lab, enfocado en presentación de servicios, propuesta de valor y conversión de visitas en oportunidades de negocio.',
      stack: ['Next.js', 'TypeScript', 'UI/UX'],
      link: 'https://lumena-lab.com',
    },
    {
      title: 'Proyecto destacado 2',
      description:
        'Proyecto con enfoque en experiencia de usuario, integraciones y rendimiento.',
      stack: ['Next.js', 'PostgreSQL', 'Tailwind'],
    },
  ] as Project[],
};
