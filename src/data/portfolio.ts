export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  /** Engineering résumé. */
  resumeUrl: string;
  /** Academic CV — publications, research and teaching. */
  academicCvUrl: string;
  bio: string;
}

export interface Education {
  school: string;
  degree: string;
  cgpa: string;
  date: string;
  coursework: string[];
  highlights?: string[];
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  date: string;
  link: string;
  highlight: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  date: string;
  type: string;
  bullets: string[];
  tech?: string[];
}

export interface Project {
  title: string;
  description: string;
  type: string;
  url?: string;
  github?: string;
  /** What I did and what it was worth — rendered under "My contribution". */
  contribution: string;
  tech: string[];
  /** Screenshot/preview image URL. When omitted, a monogram placeholder is rendered. */
  image?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Ajayi Emmanuel Tomiwa",
  title: "Senior Front-End Developer & Bioinformatics Researcher",
  location: "Lagos, Nigeria",
  email: "ajayiemmanuel630@gmail.com",
  phone: "+234 815 405 0552",
  github: "https://github.com/Iam-tomiwa",
  linkedin: "https://www.linkedin.com/in/ajayi-tomiwa/",
  resumeUrl:
    "https://docs.google.com/document/d/1dtb7AJfWbIcJOrzvQ2LCRHPSELty0c9QPFd9Ck-vMM8/edit?tab=t.0#heading=h.ltwgrasdmgm5",
  academicCvUrl:
    "https://docs.google.com/document/d/1qtV02ZJ0Yk6WeKpXPFVLrQT2lCmR7WG6MUcz8qVAhPk/edit?tab=t.0",
  bio: "Senior Front-End Engineer with 6+ years of experience specializing in building, scaling, and optimizing high-performance applications across Fintech, SaaS dashboards, and E-commerce. A first-class Microbiology graduate and bioinformatics researcher, applying systems thinking to frontend architecture and genomic data analysis.",
};

export const education: Education = {
  school: "University of Lagos",
  degree: "B.Sc. (Hons) in Microbiology (First Class Honours)",
  cgpa: "4.74 / 5.00 (94.8%)",
  date: "November 2018 - August 2024",
  coursework: [
    "Bioinformatics",
    "Biostatistics",
    "Environmental Microbiology",
    "Microbial Genetics",
  ],
  highlights: [
    "Balanced rigorous academic work with professional software development experience.",
    "Applied analytical and systems thinking skills to software engineering and frontend architecture.",
  ],
};

export const publications: Publication[] = [
  {
    title:
      "A Review of Hibiscus cannabinus L. (Kenaf) Fibre as a Sustainable Alternative to Enhance Regulatory Efforts against Expanded Polystyrene Foam and Single-Use Plastics in Nigeria",
    authors:
      "Nsa, I. Y., Kareem, K. T., Ajayi, E. T., Adesoji, A. O., & Markjohnathan, C. I.",
    journal: "Journal of Applied Sciences and Environmental Management",
    date: "2026",
    link: "https://dx.doi.org/10.4314/jasem.v30i8.14",
    highlight:
      "Reviewed kenaf fibre as a biodegradable substitute for expanded polystyrene and single-use plastics, and what adopting it would ask of Nigerian regulation.",
  },
  {
    title:
      "Genome Sequences of Streptomyces Cluster BE2 phages CeilingFan and Mugiwara",
    authors:
      "Nsa, I. Y., Ejiofor, E., Ajayi, E., Okoli, I., Uchegbu, C., Aworetan, O., Jebe-Abdullahi, F., Kamselem, H., Abidoye, S., Oleka, E., Okupa, O., Lawal, F., Immanuel, G., Tomi, E., Faith, O., Akpederi, G., Adisa, F., Modesola, O., Burodo, C., Madu, J., & Ilori, M.",
    journal: "microPublication Biology",
    date: "2026",
    link: "https://doi.org/10.17912/micropub.biology.001971",
    highlight:
      "Annotated and characterized mycobacteriophages CeilingFan and Mugiwara, identifying key genomic sequences.",
  },
  {
    title:
      "Bacterial Detection in Corrosive Media and Assessment of Corrosion Inhibition Efficiency of Novel Paints",
    authors:
      "Obidi, O. F., Raheem, I. A., Tijani, A. O., Adejare-Kuti, B. M., Sumaila, O. R., Ajayi, E., ... & Yekini, A. A.",
    journal: "Journal of Engineering Research (JER)",
    date: "2025",
    link: "https://jer.unilag.edu.ng/article/view/2921/2549",
    highlight:
      "Studied paint degradation, isolating microbial communities and analyzing EIS to track corrosion resistance.",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Python",
      "HTML5",
      "CSS3",
      "Markdown",
    ],
  },
  {
    category: "Frontend & Frameworks",
    items: [
      "React",
      "Next.js (App & Pages Router)",
      "React Native",
      "Angular",
      "jQuery",
      "Node.js",
    ],
  },
  {
    category: "Libraries & State",
    items: [
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "Framer Motion",
      "GSAP",
      "Tailwind CSS",
      "Shadcn",
      "Material UI",
    ],
  },
  {
    category: "Bioinformatics & Research Tools",
    items: [
      "DNA Master",
      "NCBI & PhagesDB",
      "Phamerator",
      "HHPred",
      "Aragorn",
      "KBase",
      "GeneMark",
      "Biopython",
    ],
  },
  {
    category: "Tools & Core Tech",
    items: [
      "Sanity.io",
      "Vercel",
      "Git & GitHub",
      "GitLab",
      "WebSockets",
      "Apollo GraphQL",
      "AWS",
      "Vite",
      "Retool",
      "Mixpanel",
    ],
  },
  {
    category: "Biological Techniques",
    items: [
      "Polymerase Chain Reaction (PCR)",
      "Enzyme Immunoassay (EIA)",
      "Centrifugation",
      "Microbial Testing",
    ],
  },
  {
    category: "Soft & Collaborative",
    items: [
      "Agile/Scrum",
      "Technical Mentorship",
      "Customer Relationship Management",
      "Public Speaking",
    ],
  },
];

export const devExperience: WorkExperience[] = [
  {
    role: "Lead Frontend Developer",
    company: "Raptures.io",
    location: "Lagos, Nigeria",
    date: "July 2025 - Present",
    type: "Full-Time",
    bullets: [
      "Spearheaded the strategic migration and refactor of the legacy web-based mobile application codebase, cutting deployment time by 70% (from 10 min to <3 min) and achieving 95%+ Lighthouse scores for speed and SEO within 1 month.",
      "Optimized server/client-side data-fetching architectures using TanStack Query, cutting redundant API calls by 40%.",
      "Led the end-to-end UI/UX overhaul of the internal admin panel, driving the migration from an outdated Bootstrap Django app to a modern React/Tailwind clean UI, which significantly improved administrators' ease of use.",
      "Established the core architectural standards for the frontend team, delivering a stable and scalable foundation that proactively reduced technical debt by almost 60%.",
      "Drove the end-to-end development and launch of 'Typemaster,' a high-traction children's typing game for Rapkids, validated by strong positive feedback from beta testers.",
      "Championed data-driven platform optimization by collaborating with Digital Marketing and Design, leveraging Mixpanel to identify and resolve key user flow bottlenecks, resulting in a 15% increase in the overall platform conversion rate.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Mixpanel",
    ],
  },
  {
    role: "Senior Frontend Developer (Contract)",
    company: "Momenttrack USA",
    location: "Remote",
    date: "July 2023 - April 2026",
    type: "Contract",
    bullets: [
      "Owned the development of a real-time, customizable dashboard solution, allowing users to generate tailored reports for their data and improving data accessibility and decision-making.",
      "Designed and built a fully custom marketing website for a partner from scratch using Next.js and Sanity.io, delivering a clean, scalable, and CMS-driven solution without pre-existing designs.",
      "Engineered IoT application-level solutions at MomentTrack, leading to a 25% boost in client inquiries and onboarding prominent manufacturing clients like Design Imaging and ATL Technologies to streamline inventory management.",
      "Refactored and modernized a ~25,000-line legacy codebase, improving code maintainability by 60%, reducing technical debt, and enabling 2× faster feature delivery.",
    ],
    tech: ["Next.js", "React", "Sanity.io", "IoT Solutions", "TypeScript"],
  },
  {
    role: "Lead Frontend Developer",
    company: "Nativebrands",
    location: "Lagos, Nigeria",
    date: "May 2022 - June 2023",
    type: "Full-Time",
    bullets: [
      "Initiated a cultural shift towards best coding practices and architecture, reducing code review time by 25% and post-deployment issues by 20%.",
      "Built and optimized key webpages for Access Bank Plc, including the mobile app webpage that significantly boosted downloads by 30% and enhanced the bank's user-friendly reputation.",
      "Led the front-end development of several MVPs using React, Redux Toolkit, and Material UI, ensuring timely and successful project delivery.",
      "Trained and mentored 2 frontend interns, providing structured feedback, leading to their promotion to junior-level engineers within six months.",
    ],
    tech: ["React", "Redux Toolkit", "Material UI", "Access Bank Campaign"],
  },
  {
    role: "Frontend Developer (Contract)",
    company: "Visaintel",
    location: "Lagos, Nigeria",
    date: "March 2022 - February 2023",
    type: "Contract",
    bullets: [
      "Owned the development of a scalable website with chat, escrow payments, and dashboards using React, Redux, and Material UI, supporting 10 core team members in efficient process management.",
      "Integrated new payment gateways, resulting in a 50% increase in seamless transactions.",
      "Streamlined deployment and testing in collaboration with QA and DevOps, reducing downtime by 25% and improving application performance.",
      "Enhanced SEO and optimized the search feature, increasing organic traffic by 40% and improving search accuracy by 30%.",
    ],
    tech: [
      "React",
      "Redux",
      "Material UI",
      "Payment Integration",
      "SEO Optimization",
    ],
  },
  {
    role: "Frontend Developer (Freelance)",
    company: "Self-Employed",
    location: "Lagos, Nigeria",
    date: "June 2021 - Present",
    type: "Freelance",
    bullets: [
      "Developed a multi-portal web application (Sales, Factory, Admin) for Glasstronics to orchestrate custom glass orders, production workflows, inventory, and dynamic pricing (Full custom POS system flow). Integrated live-camera QR code scanning and QR code PDF generation.",
      "Created a smoothly animated interior designer portfolio (TimTechVille) with parallax effects, focused on minimalist aesthetics and fluid transitions.",
      "Designed Adron Homes Admin Dashboard for property management and Maven (a cryptocurrency hedge fund).",
      "Taught frontend development for beginners at the Altschool summer camp.",
      "Collaborated closely with clients, backend engineers, and product managers to define problem specifications, leading to faster project delivery by an average of 2 weeks.",
    ],
    tech: [
      "React",
      "Zustand",
      "GSAP",
      "Framer Motion",
      "QR Code Scanning",
      "POS Architecture",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Dira Labs",
    location: "Lagos, Nigeria",
    date: "February 2020 - August 2021",
    type: "Full-Time",
    bullets: [
      "Transformed complex UI designs into pixel-perfect HTML templates, which were integrated with WordPress, resulting in a 20% increase in page loading speed.",
      "Resolved intricate technical issues and customized WordPress templates to meet unique client specifications, boosting client satisfaction by 30%.",
      "Led and delivered over 5 client projects, including a tentative ticketing platform for 'Oya Make We Groove', a travel agency's website, and an edtech platform, consistently meeting deadlines.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "WordPress", "Ticketing System"],
  },
];

export const academicExperience: WorkExperience[] = [
  {
    role: "Graduate Research Assistant (NYSC)",
    company: "SEAPHAGES Laboratory - Central Research Lab, UNILAG",
    location: "Lagos, Nigeria",
    date: "July 2025 - Present",
    type: "Research",
    bullets: [
      "Lead Facilitator for 'The Bioinformatics Bridge 1.0,' a 2-day faculty-wide training for Faculty of Life Sciences, University of Lagos, designing digital assets and coordinating logistics for over 40 participants.",
      "Delivered technical workshops on 'Creating Reproducible Genome Analysis Workflows with KBase' and 'Python as a Computational Skill,' introducing Biopython to enhance staff research efficiency.",
      "Assisted in teaching undergraduate students on genome annotation fundamentals, mastering tools including DNA Master, KBase, and GeneMark to process draft genomes during the summer.",
      "Optimizing laboratory research workflows by integrating computational skills and data collation methods for current research projects.",
    ],
    tech: [
      "Bioinformatics",
      "Genomics",
      "Biopython",
      "KBase",
      "Genome Annotation",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "Department of Microbiology, University of Lagos",
    location: "Lagos, Nigeria",
    date: "January 2024 - August 2024",
    type: "Research",
    bullets: [
      "Annotated and characterized a novel Mycobacteriophage (Ceilingfan) draft genome using DNA Master, NCBI, Phamerator, HHPred, and Aragorn.",
      "Coordinated data collation of the annotated files across the research group.",
      "Led a team to perform gene content comparison of 3 phages in subcluster F1, writing a Python-based gene content similarity script with a poster.",
    ],
    tech: [
      "Mycobacteriophages",
      "DNA Master",
      "Phamerator",
      "Python Scripting",
    ],
  },
  {
    role: "Undergraduate Thesis Researcher",
    company: "Department of Microbiology, University of Lagos",
    location: "Lagos, Nigeria",
    date: "September 2023 - July 2024",
    type: "Academic",
    bullets: [
      "Led the student research team, coordinating tasks, analyzing data with Google Sheets, and maintaining effective communication with the Principal Investigator (PI).",
      "Isolated and studied fungal communities on the viscosity and electrochemical properties of corrosion-inhibition paints to evaluate durability.",
      "Analyzed Electrochemical Impedance Spectroscopy (EIS) results to measure the charge transfer resistance (Rct) of paints and track their decline over time.",
    ],
    tech: ["Fungal Isolation", "Corrosion Inhibition", "EIS Data Analysis"],
  },
  {
    role: "Laboratory Assistant (Intern)",
    company:
      "Center For Tuberculosis Research - Nigerian Institute of Medical Research (NIMR)",
    location: "Lagos, Nigeria",
    date: "August 2023 - October 2023",
    type: "Internship",
    bullets: [
      "Assisted in processing and analysis of tuberculosis samples using GeneXpert, Acid-Fast Staining, SD Bioline Assay, Line Probe Assay (LPA), and Drug Sensitivity Testing (DST), contributing to patient diagnoses.",
      "Delivered a presentation on Line Probe Assays, educating colleagues on its methodology and practical application.",
      "Managed a database of patient results, utilizing Google Sheets and Apps Script to automate data analysis, reducing manual errors by 30% and accelerating reporting processes by 25%.",
      "Conducted inventory management of laboratory equipment, ensuring availability and proper maintenance.",
    ],
    tech: ["GeneXpert", "LPA", "Google Apps Script", "Database Automation"],
  },
  {
    role: "Laboratory Assistant (Intern)",
    company: "Lagos State University Teaching Hospital (LASUTH)",
    location: "Lagos, Nigeria",
    date: "September 2021 - November 2021",
    type: "Internship",
    bullets: [
      "Performed Microscopy, Culture, and Sensitivity (MCS) on urine and fecal samples.",
      "Performed a wet mount test for the detection of malaria parasites in the blood.",
      "Performed Serological tests using Rapid Diagnostic Test (RDT) kits such as Syphilis tests, HIV tests, and Hepatitis B and C tests.",
    ],
    tech: ["Microscopy", "MCS", "RDT Kits"],
  },
];

export interface CommunityEngagement {
  role: string;
  organisation: string;
  location?: string;
  /** Omitted where the date is not yet confirmed. */
  date?: string;
  summary: string;
  bullets: string[];
  /** Talks or sessions delivered as part of the engagement. */
  talks?: string[];
  link?: { label: string; href: string };
  images?: { src: string; alt: string }[];
}

export const community: CommunityEngagement[] = [
  {
    role: "Programs Lead",
    organisation: "The Health enLight Initiative",
    location: "Lagos, Nigeria",
    date: "August 2025 - Present",
    summary:
      "I run the programme calendar for a health-enlightenment NGO, and built the site it now lives on.",
    bullets: [
      "Organise and coordinate the monthly health webinars on X Spaces and Google Meet, drawing 10-80 live attendees per session.",
      "Design the flyers and assets, collaborating with media team, on improving social media engagement.",
      "Ran a health outreach curriculum for secondary schools and trained 20 student health ambassadors.",
      "Designed and built the initiative's website so the team can publish its own story.",
    ],
    link: {
      label: "Visit the site",
      href: "https://health-enlight-initiative.vercel.app/",
    },
    images: [
      {
        src: "/projects/health-enlight.webp",
        alt: "The Health enLight Initiative website homepage, showing a stack of upcoming event cards",
      },
    ],
  },
  {
    role: "Lead Facilitator",
    organisation: "The Bioinformatics Bridge (BioBridge) 1.0",
    location: "Faculty of Life Sciences, University of Lagos",
    summary:
      "A two-day, faculty-wide bioinformatics training. I coordinated the people and the logistics, and taught two of the sessions.",
    bullets: [
      "Coordinated the other facilitators and ran logistics for over 40 participants.",
      "Designed the digital assets used across the workshop.",
    ],
    talks: [
      "Creating Reproducible and Reusable Genome Analysis Workflows with KBase",
      "Python as a Computational Skill",
    ],
    images: [
      {
        src: "/images/biobridge.webp",
        alt: "Tomiwa presenting the KBase Narrative Navigator to participants at the BioBridge 1.0 workshop",
      },
      {
        src: "/images/biobridge-2.webp",
        alt: "Tomiwa pointing at a labelled KBase narrative dashboard during a BioBridge 1.0 session",
      },
    ],
  },
  {
    role: "Volunteer",
    organisation: "End TB Outreach",
    location: "Lagos, Nigeria",
    summary:
      "A schools outreach for World TB Day, run with the Lagos State TB and Leprosy Control Programme.",
    bullets: [
      "Joined the volunteer team taking tuberculosis awareness into Lagos secondary schools.",
      "The outreach pointed pupils and staff to free testing and treatment through the national TB hotline.",
    ],
    images: [
      {
        src: "/images/end-tb.webp",
        alt: "Tomiwa in a World TB Day volunteer vest beside a tuberculosis symptom-awareness poster at a Lagos school",
      },
      {
        src: "/images/end-tb-2.webp",
        alt: "Volunteers and pupils holding Zero TB materials outside a Lagos school on World TB Day",
      },
    ],
  },
  {
    role: "Student Mentor",
    organisation:
      "National Association of Microbiology Students (NAMS), UNILAG Chapter",
    location: "Lagos, Nigeria",
    date: "July 2022 - August 2024",
    summary:
      "Mentoring, tutorials and talks for microbiology undergraduates at the University of Lagos.",
    bullets: [
      "Mentored several students, three of whom reached a first-class GPA in a semester - one of them a perfect 5.00.",
      "Addressed 100+ first-year students at orientation with strategies for balancing academics with extracurriculars and putting technical skills to work in microbiology.",
      "Organised and ran tutorials on coursework and statistical reporting methods, improving participants' exam performance.",
      "Presented on environmental sustainability and the part microbiologists play in it.",
    ],
    images: [
      {
        src: "/images/nams-executives.webp",
        alt: "Tomiwa with fellow NAMS executives at a University of Lagos microbiology student event",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "MRL Nigeria",
    description:
      "Public site and learning platform for the Mycology Reference Laboratory Nigeria: a fungal strain catalog, publications archive, events, and a certificate-issuing course platform for healthcare professionals.",
    type: "Platform / Learning",
    url: "https://mycology-reference-lab-nigeria.vercel.app/",
    contribution:
      "I built the full platform — Next.js, Sanity and Supabase — that runs data and operations for the Mycology Reference Laboratory in Nigeria: a searchable strain catalogue clinicians order from, customisable courses that issue verifiable certificates to members, and a multi-site admin covering surveillance records, learner analytics and team management.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Sanity",
      "Supabase",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    image: "/projects/mrl-nigeria.webp",
  },
  {
    title: "The Health enLight Initiative",
    description:
      "Website for a Nigerian health-enlightenment NGO: programme archive, upcoming events, volunteer intake, and an editorial story told through the organisation's own photography.",
    type: "Nonprofit / CMS Site",
    url: "https://health-enlight-initiative.vercel.app/",
    contribution:
      "As programs lead, I designed and built the site for a Nigerian health NGO beautifully telling our story. It includes Programmes, events, gallery and posts which all live in Sanity for the content team to manage themselves, and a volunteer intake form that feeds straight into the team’s Brevo CRM.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Sanity",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/projects/health-enlight.webp",
  },
  {
    title: "Raptures.io",
    description:
      "Comic & Entertainment Platform focused on African-origin stories, featuring a full kids educational/interactive gaming suite.",
    type: "Frontend / Web App",
    url: "https://raptures.io/",
    contribution:
      "I led the migration and refactor of a legacy web-mobile codebase for an African comics and entertainment platform, cutting deploy time by 70% and lifting Lighthouse scores past 95. I rebuilt the admin backoffice from an ageing Bootstrap Django app into React and Tailwind, and shipped Typemaster, a children's typing game that came out of beta with strong tester feedback.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    title: "GlasstronicTech",
    description:
      "Multi-portal POS system, production order orchestrator, and catalog landing page for a custom glass manufacturing enterprise.",
    type: "Full-Stack System",
    url: "https://glasstronictech.org",
    contribution:
      "I built the website landing page and system a custom glass manufacturer now runs on: three connected POS portals — Sales, Factory and Admin — that carry an order from quote to delivery. It prices work from custom glass measurements through a dedicated logic engine",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "QR Scanner API",
      "PDF Generation",
    ],
  },
  {
    title: "Illumra Catalog",
    description:
      "Wireless Lighting Control & IoT catalog platform integrated with a localized Sanity CMS setup and rep/store locator.",
    type: "E-Commerce / CMS",
    url: "https://illumra.com/",
    contribution:
      "I built the product catalogue for a US wireless-lighting and IoT manufacturer on Next.js, with a locally configured Sanity CMS and Brevo CRM integration.",
    tech: [
      "Next.js",
      "React",
      "Sanity CMS",
      "LocationIQ API",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "TimTechVille",
    description:
      "Smooth, minimal creative studio and interior design portfolio website featuring fluid page transitions and parallax scrolling.",
    type: "Creative Portfolio",
    url: "https://teamtechville.vercel.app/",
    contribution:
      "I designed and built the studio site for an interior design and architecture practice.  It features custom parallax and scroll-driven animation modules in Framer Motion pace the reveal of each project, over a minimal, layout-first composition that stays fully responsive without giving up performance.",
    tech: ["React", "GSAP", "Framer Motion", "CSS Modules"],
    image:
      "https://res.cloudinary.com/tomiwadev/image/upload/v1761576339/portfolio/Untitled_design_uyo9vx.png",
  },
  {
    title: "Visaintel App",
    description:
      "Travel agent marketplace platform featuring escrow checkout flows and real-time support chat.",
    type: "Web App with Escrow",
    url: "https://app.visaintel.com/",
    contribution:
      "I built the marketplace where travel agents and their clients transact, pairing an escrow payment flow with real-time support chat so neither side has to extend trust up front — checkouts rose 50%. I also reworked the platform’s SEO, lifting organic traffic 40%, and streamlined agent onboarding with configurable dashboards.",
    tech: ["React", "Redux", "Material UI", "WebSockets", "Stripe API"],
    image:
      "https://res.cloudinary.com/tomiwadev/image/upload/v1713390352/portfolio/smartmockups_lv4c1rgz_eveeq1.jpg",
  },
  {
    title: "Access More Campaign",
    description:
      "High-performance promotional mobile app pages and loan calculation components built for Access Bank Plc.",
    type: "Landing Page / Widget",
    url: "https://www.linkedin.com/posts/ajayi-tomiwa_accessbank-accessmore-uiux-activity-7227728148220555264-9POO",
    contribution:
      "I built the promotional pages and financial widgets for Access Bank’s Access More app (among other pages for access bank), including a responsive loan calculator on the homepage that let visitors model repayments before downloading.",
    tech: ["React", "Material UI", "Redux Toolkit", "Vanilla JS"],
  },
  {
    title: "QuizQuest",
    description:
      "Responsive real-time trivia quiz application built within 7 hours as a technical interview test.",
    type: "Interactive Trivia",
    url: "https://quizquest.vercel.app/",
    github: "https://github.com/Iam-tomiwa/QuizQuest",
    contribution:
      "I built this real-time trivia app in seven hours as a technical interview exercise: Open Trivia DB questions with live grading, a countdown timer and an end-of-round score summary, wrapped in a responsive layout with transition micro-animations.",
    tech: ["React", "Tailwind CSS", "Trivia API"],
    image:
      "https://res.cloudinary.com/tomiwadev/image/upload/v1687247155/portfolio/127.0.0.1_5173_quiz_category_17_number_3_difficulty_easy_2_jtnrh3.png",
  },
];
