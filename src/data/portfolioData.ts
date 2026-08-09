export interface PersonalInfo {
  name: string;
  professionalTitle: string;
  experienceYears: string;
  location: string;
  email: string;
  phone: string;
  portfolioUrl: string;
  linkedInUrl: string;
  githubUrl: string;
  availabilityBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroSummary: string;
  resumePdfPath: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
  techUsed: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  type: 'Featured Personal Project' | 'Professional Project' | 'Full-Stack MERN Project' | 'Collaborative Project' | 'Utility Web App' | 'React State Project';isFeatured?: boolean;
  isSecondary?: boolean;
  badgeText?: string;
  description: string;
  tech: string[];
  features: string[];
  role?: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  specialMention?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Satheesh Baabu M",
  professionalTitle: "Full Stack Developer",
  experienceYears: "1+ Year Experience",
  location: "Sivakasi, Tamil Nadu, India",
  email: "satheeshbaabum@gmail.com",
  phone: "+91 9360301475",
  portfolioUrl: "https://satheeshbaabum-portfolio.netlify.app",
  linkedInUrl: "https://www.linkedin.com/in/satheeshbaabum",
  githubUrl: "https://github.com/Satheesh-Baabu",
  availabilityBadge: "Available for Frontend / Full Stack Opportunities",
  heroHeadline: "Hi, I'm Satheesh Baabu.",
  heroSubheadline:    "Full Stack Developer building modern web applications with Next.js & Express.js.",
  heroSummary:    "Full Stack Developer with 1+ year of industry experience building scalable web applications using Next.js, TypeScript, React, Node.js, and MongoDB. Experienced in developing CMS-driven websites, REST APIs, e-commerce applications, and production-ready web solutions.",
  resumePdfPath: "/Satheesh-Baabu-Resume.pdf",
};

export const quickStats: StatItem[] = [
  { value: "1+", label: "Years Experience" },
  { value: "4", label: "Featured Projects" },
  { value: "10+", label: "Technologies" },
  { value: "3", label: "Industry Domains" },
];

export const aboutMeContent = {
  intro:    "I'm a Full Stack Developer focused on building scalable and user-friendly web applications. I work primarily with Next.js, React, TypeScript, Node.js, Express.js, and MongoDB, with experience integrating REST APIs, CMS platforms, authentication, payment gateways, and production deployments.",
  domains: ["Logistics", "Healthcare", "E-commerce"],
  focusAreas: [
    "Clean code",
    "Reusable components",
    "Responsive interfaces",
    "API integration",
    "Performance",
    "Production deployment",
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Next.js API Routes", "Laravel"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Postman",
      "Vercel",
      "AWS EC2",
      "cPanel",
    ],
  },
  {
    title: "Other",
    skills: [
      "REST APIs",
      "JWT Authentication",
      "Razorpay",
      "Redux",
      "Headless WordPress",
      "CMS Integration",
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    company: "AIIMTECH Software System",
    role: "Full Stack Developer",
    location: "Sivakasi, Tamil Nadu",
    duration: "Jun 2025 - Present",
    responsibilities: [
      "Designed and developed production-ready web applications using Next.js, TypeScript, Node.js, Express.js, Laravel, and MongoDB.",
      "Built responsive and reusable UI components using Next.js and Tailwind CSS.",
      "Developed and integrated RESTful APIs.",
      "Worked with MongoDB and MySQL.",
      "Built CMS-driven websites using Headless WordPress with Next.js.",
      "Developed e-commerce functionality including product management, shopping cart, order management, and Razorpay payment integration.",
      "Managed production deployments using AWS EC2 and Vercel.",
      "Collaborated with teams using Git and Agile methodologies.",
    ],
    techUsed: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Laravel",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
      "AWS EC2",
      "Vercel",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "sigma-transport",
    title: "Sigma Transport - Logistics & Driver Recruitment Platform",
    type: "Professional Project",
    badgeText: "Professional Project",
    description:
      "Production logistics and driver recruitment platform built with Next.js and Headless WordPress. Includes dynamic CMS-driven content and a multi-step driver application workflow.",
    tech: [
      "Next.js",
      "TypeScript",
      "Headless WordPress",
      "MongoDB",
      "Tailwind CSS",
      "AWS EC2",
    ],
    features: [
      "Headless WordPress integration",
      "REST API integration",
      "7-step driver application",
      "Form validation",
      "MongoDB storage",
      "Responsive UI",
      "AWS EC2 deployment",
    ],
    liveUrl: "https://www.sigmatransport.com",
    image: "/projects/sigma.png",
  },
  {
    id: "amirthan-oil-mills",
    title: "Amirthan Oil Mills - E-commerce Platform",
    type: "Professional Project",
    badgeText: "Professional Project",
    description:
      "Next.js e-commerce platform featuring product catalog, shopping cart, secure checkout, Razorpay payment integration, and an admin dashboard for product and order management.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Razorpay",
    ],
    features: [
      "Product catalog",
      "Shopping cart",
      "Secure checkout",
      "Razorpay integration",
      "Product management",
      "Order management",
      "Inventory management",
      "Admin dashboard",
      "Responsive UI",
    ],
    liveUrl: "https://amirthanoilmills.com",
    image: "/projects/amirthan.png",
  },
  {
    id: "cinqcare",
    title: "Cinqcare - Healthcare Web Portals",
    type: "Professional Project",
    badgeText: "Professional Project",
    role: "Frontend Developer",
    description:
      "CMS-driven healthcare web portals developed using Next.js and Headless WordPress with responsive Tailwind CSS components and Vercel deployment.",
    tech: ["Next.js", "Tailwind CSS", "Headless WordPress", "Vercel"],
    features: [
      "CMS-driven healthcare portals",
      "Headless WordPress API integration",
      "Patient health resource modules",
      "Responsive Tailwind CSS UI components",
      "Optimized Vercel deployment",
    ],
    liveUrl: "https://cinq.care",
    image: "/projects/cinqcare.png",
  },
  {
    id: "neststay",
    title: "NestStay - Property Rental Platform",
    type: "Professional Project",
    badgeText: "Personal Project",
    description:
      "Full-stack property rental management platform built with Next.js, TypeScript, MongoDB, and Mongoose. Includes property discovery, advanced filtering, authentication, favorites, booking workflows, and an admin management dashboard.",
    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Zod",
      "React Hook Form",
      "Recharts",
      "JWT",
    ],
    features: [
      "Property search and filtering",
      "Dynamic property pages",
      "User authentication",
      "Role-based authorization",
      "Favorites management",
      "Booking requests",
      "Admin management dashboard",
      "Property CRUD operations",
      "Analytics & insights",
      "Responsive UI",
    ],
    liveUrl: "https://nest-stay-teal.vercel.app/",
    image: "/projects/neststay.png",
  },
  {
    id: "vprint-tech",
    title: "V Print Tech Website",
    type: "Collaborative Project",
    badgeText: "Collaborative Project",
    description: "\"V Print Tech\" is a printing offset website developed using the MERN stack in collaboration with Sudhakar.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "MERN stack architecture",
      "Printing offset services catalog",
      "Quote request form workflow",
      "Collaborative project build",
      "Responsive Tailwind UI"
    ],
    liveUrl: "https://vprinttech.netlify.app/",
    githubUrl: "https://github.com/Satheesh-Baabu/InternshipFrontend/",
    image: "/projects/vprint.png"
  },
  {
    id: "smart-restaurant",
    title: "Smart Restaurant Management and Ordering System",
    type: "Full-Stack MERN Project",
    badgeText: "Full-Stack Project",
    description: "A full-stack MERN web app for restaurant ordering. Features real-time order tracking, cart management, payment integration (Razorpay) and a user-friendly UI.",
    tech: ["MERN Stack", "Tailwind CSS", "Socket.io", "Razorpay integration"],
    features: [
      "Real-time order tracking with Socket.io",
      "Shopping cart management",
      "Razorpay payment gateway integration",
      "Interactive restaurant menu",
      "User-friendly UI & Dashboard"
    ],
    liveUrl: "https://msvrestaurant.vercel.app/",
    githubUrl: "https://github.com/Satheesh-Baabu/ProjectRestaurantFrontend",
    image: "/projects/msvrestaurant.png"
  },
  {
    id: "simple-calculator",
    title: "Simple Calculator",
    type: "Utility Web App",
    isSecondary: true,
    badgeText: "JavaScript App",
    description: "Simple Calculator using Javascript.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Clean keypad layout",
      "Arithmetic operations",
      "Lightweight Vanilla JS logic"
    ],
    liveUrl: "https://satheeshbaabucalc.netlify.app/",
    githubUrl: "https://github.com/Satheesh-Baabu/Simple-Calculator",
    image: "/projects/calculator.png"
  },
  {
    id: "todo-list",
    title: "TO-DO List",
    type: "React State Project",
    isSecondary: true,
    badgeText: "React Project",
    description: "Building a basic To-DO List at the time of learning React.js without responsive layout.",
    tech: ["React.js", "CSS", "Redux"],
    features: [
      "Task creation & deletion",
      "Redux state management",
      "Filtered views"
    ],
    liveUrl: "https://todolistsatheesh.netlify.app/",
    githubUrl: "https://github.com/Satheesh-Baabu/TodoList",
    image: "/projects/todolist.png"
  }
];

export const whatIBuildHighlights: HighlightItem[] = [
  {
    title: "Modern Frontends",
    description:
      "Responsive and reusable interfaces using Next.js, React, TypeScript and Tailwind CSS.",
    icon: "Layout",
  },
  {
    title: "Backend & APIs",
    description:
      "REST APIs, authentication, database integration and server-side functionality.",
    icon: "Server",
  },
  {
    title: "E-commerce",
    description:
      "Product management, carts, orders, checkout and Razorpay payment integration.",
    icon: "ShoppingCart",
  },
  {
    title: "CMS & Production",
    description:
      "Headless WordPress integration and deployment using AWS EC2 and Vercel.",
    icon: "Globe",
  },
];

export const whyWorkWithMePoints: ValueItem[] = [
  {
    title: "Clean & Maintainable Code",
    description:
      "I focus on reusable components, clear architecture and maintainable code.",
  },
  {
    title: "Full Stack Understanding",
    description: "I can work across frontend, APIs, databases and deployment.",
  },
  {
    title: "Real Production Experience",
    description:
      "I have worked on real applications across logistics, healthcare and e-commerce.",
  },
  {
    title: "Continuous Learning",
    description: "I actively improve my skills with modern web technologies.",
  },
];

export const educationInfo: EducationItem = {
  degree: "Bachelor of Science - Computer Science",
  institution: "Ayya Nadar Janaki Ammal College",
  location: "Sivakasi, Tamil Nadu",
  period: "2022 - 2025",
  grade: "CGPA: 8/10",
  specialMention:
    "Volunteered to serve as the class representative for a full year",
};
