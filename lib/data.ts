import { IProject } from '@/types';

export const GENERAL_INFO = {
    name: 'Victor Tunchez',
    email: 'victortunchez2003@gmail.com',

    emailSubject: 'Colaboremos en un proyecto',
    emailBody: 'Hola Victor, te escribo porque...',

    github: 'https://github.com/VictorTunchez',
    linkedin: 'https://www.linkedin.com/in/victortunchez/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: GENERAL_INFO.github },
    { name: 'linkedin', url: GENERAL_INFO.linkedin },
];

export const MY_STACK = {
    backend: [
        { name: 'Java', icon: '/logo/java.svg' },
        { name: 'Spring Boot', icon: '/logo/spring.svg' },
        { name: 'C#', icon: '/logo/csharp.svg' },
        { name: '.NET', icon: '/logo/dotnetcore.svg' },
        { name: 'Node.js', icon: '/logo/node.png' },
    ],
    frontend: [
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
    ],
    'bases de datos': [
        { name: 'SQL Server', icon: '/logo/sqlserver.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'DB2', icon: '/logo/db2.svg' },
    ],
    herramientas: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'Azure DevOps', icon: '/logo/azuredevops.svg' },
        { name: 'Linux', icon: '/logo/linux.svg' },
        { name: 'SSIS (ETL)', icon: '/logo/etl.svg' },
        { name: 'JasperReports', icon: '/logo/jasper.svg' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Point of Sale',
        slug: 'point-of-sale',
        year: 2025,
        techStack: ['Spring Boot', 'React', 'PostgreSQL', 'JWT / Auth0'],
        thumbnail: '/projects/mine/pos.png',
        images: ['/projects/mine/login.png', '/projects/mine/pos.png'],
        sourceCode: 'https://github.com/VictorTunchez/POS-Electrodometicos.git',
        liveUrl: 'http://el-hogar.westus3.cloudapp.azure.com/login',
        description: `
      Aplicación de punto de venta para una tienda de electrodomésticos ("El Hogar") con interfaz moderna. <br/><br/>

      Características principales:
      <ul>
        <li>Backend en Spring Boot con APIs REST seguras y autenticación JWT / Auth0</li>
        <li>Gestión de inventario, ventas por sucursal y reportes</li>
        <li>Frontend en React con dashboard de ventas, carrito y procesamiento de pagos</li>
        <li>Base de datos PostgreSQL optimizada para transacciones</li>
      </ul>
      `,
        role: '',
    },
    {
        title: 'Arduino Translator',
        slug: 'arduino-translator',
        techStack: ['C#', 'Arduino', 'Análisis léxico', 'Análisis sintáctico'],
        thumbnail: '/projects/mine/image.png',
        images: ['/projects/mine/image.png', '/projects/mine/car1.png'],
        sourceCode: 'https://github.com/VictorTunchez/Traductor-Arduino.git',
        description: `
      Herramienta que convierte instrucciones en lenguaje natural a código Arduino ejecutable. <br/><br/>

      <ul>
        <li>Análisis léxico y sintáctico completo con tokens personalizados</li>
        <li>Desarrollado en C# con soporte para sentencias de control, funciones y librerías estándar de Arduino</li>
        <li>Reduce la curva de aprendizaje para principiantes sin perder flexibilidad</li>
      </ul>
      `,
        role: '',
    },
    {
        title: 'Business Intelligence',
        slug: 'business-intelligence',
        year: 2025,
        techStack: ['Power BI / DAX', 'SSIS', 'Modelo Estrella', 'OLAP'],
        thumbnail: '/projects/mine/bd2.png',
        images: ['/projects/mine/bd2.png'],
        sourceCode: 'https://github.com/VictorTunchez/Etl-Datawarehouse.git',
        description: `
      Ecosistema de Business Intelligence para análisis y toma de decisiones estratégicas. <br/><br/>

      <ul>
        <li>ETLs con SSIS hacia un data warehouse optimizado con vistas materializadas</li>
        <li>Modelado dimensional (estrella / copo de nieve)</li>
        <li>Dashboards interactivos en Power BI con KPIs y análisis OLAP multidimensional</li>
        <li>Reportes personalizados para ejecutivos</li>
      </ul>
      `,
        role: '',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'DS Specialist Software',
        company: 'GBM',
        duration: 'Jul. 2026 - Actualidad',
        description: [
            'Desarrollo y mantenimiento de aplicaciones empresariales con Java, Spring Boot, Java EE, C# y .NET.',
            'Levantamiento, análisis y pruebas de aplicaciones, incluyendo validación y resolución de errores.',
            'Elaboración de documentación técnica, funcional y de arquitectura.',
            'Participación en la planificación y el seguimiento de sprints bajo Scrum, utilizando Azure DevOps.',
            'Instalación y configuración de ambientes de desarrollo y producción.',
        ],
    },
    {
        title: 'DS Technician Software',
        company: 'GBM',
        duration: 'Nov. 2025 - Jun. 2026',
        description: [
            'Soporte funcional y técnico a usuarios finales de aplicaciones empresariales.',
            'Análisis, documentación y resolución de incidentes y requerimientos reportados en Mesa de Ayuda.',
            'Corrección de errores en aplicaciones desarrolladas con Java y C#.',
            'Ejecución de pruebas funcionales y validación de aplicaciones.',
            'Instalación y configuración de aplicaciones de software en estaciones de trabajo.',
            'Elaboración de documentación técnica y de uso, y seguimiento de incidencias hasta su resolución.',
        ],
    },
    {
        title: 'Technical Support & Customer Service',
        company: 'CyberPlus',
        duration: 'Ene. 2025 - Jun. 2025',
        description: [
            'Soporte técnico general en configuración, mantenimiento y diagnóstico de equipos.',
            'Mantenimiento preventivo y correctivo de equipos informáticos.',
            'Instalación y configuración de sistemas operativos.',
        ],
    },
];

export const MY_EDUCATION = [
    {
        title: 'Ingeniería en Sistemas y Ciencias de la Computación',
        institution: 'Universidad Mariano Gálvez',
        duration: '2022 - Actualidad',
    },
    {
        title: 'Perito en Electrónica y Dispositivos Digitales',
        institution: 'Instituto de Computación Informática ICI',
        duration: '2019 - 2021',
    },
];

export const MY_CERTIFICATIONS = [
    {
        title: 'Java y Spring Framework',
        issuer: 'Alura Cursos',
        url: 'https://app.aluracursos.com/degree/certificate/5632a491-11f3-437d-8ed9-02aa7ffb5e17?lang',
    },
    {
        title: 'Git y GitHub',
        issuer: 'Alura Cursos',
        url: 'https://app.aluracursos.com/certificate/07742d63-e2cd-4a68-b390-f8aa94bb4045?lang',
    },
    {
        title: 'ONE Tech Foundation G8',
        issuer: 'Alura Cursos',
        url: 'https://app.aluracursos.com/program/certificate/e84554a3-423e-419b-870b-08f89ef60336?lang',
    },
    {
        title: 'Administración de Sistemas',
        issuer: 'LinkedIn Learning',
        url: 'https://www.linkedin.com/learning/certificates/3c04d3c5998438b9d84cf4426d81a4dd95ef8859b09c1c0caad168dfcefabd25',
    },
];
