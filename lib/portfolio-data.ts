export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
  year: string;
}

export interface SkillCategory {
  category: string;
  technologies: string[];
  color: string;
  iconName: "Code2" | "Server" | "Cloud" | "Wrench";
}

export interface Highlight {
  iconName: "Code" | "Lightbulb" | "Rocket" | "Users";
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface SocialLink {
  name: string;
  href: string;
  iconName: "Github" | "Linkedin" | "Mail" | "Twitter";
}

export const PERSONAL_INFO = {
  name: "Peter Kiganya Mburu",
  title: "Full Stack Developer",
  email: "mburukiganya@gmail.com",
  cvFileName: "Peter_Mburu_CV.pdf",
  cvPath: "/cv.pdf",
  bio: "I'm a passionate full-stack developer with 3+ years of experience creating digital solutions that make a difference. I love turning complex problems into simple, beautiful, and intuitive designs.",
  tagline: "I craft exceptional digital experiences through code, combining modern technologies with creative problem-solving to build scalable applications.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/kiganyamburu",
    iconName: "Github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kiganya-mburu-53a7b5231/",
    iconName: "Linkedin",
  },
  {
    name: "Email",
    href: `mailto:${PERSONAL_INFO.email}`,
    iconName: "Mail",
  },
  {
    name: "Twitter",
    href: "https://x.com/kiganyamburu",
    iconName: "Twitter",
  },
];

export const HIGHLIGHTS: Highlight[] = [
  {
    iconName: "Code",
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    iconName: "Lightbulb",
    title: "Problem Solving",
    description: "Creative solutions to complex technical challenges",
  },
  {
    iconName: "Rocket",
    title: "Performance",
    description: "Optimized applications with exceptional user experience",
  },
  {
    iconName: "Users",
    title: "Collaboration",
    description: "Working effectively with teams and stakeholders",
  },
];

export const STATS: Stat[] = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Vue.js",
      "Svelte",
      "TailwindCSS",
      "Framer Motion",
      "Three.js",
      "HTML5",
      "CSS3",
    ],
    color: "from-blue-500 to-cyan-500",
    iconName: "Code2",
  },
  {
    category: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "Flask",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "REST APIs",
      "Microservices",
    ],
    color: "from-green-500 to-emerald-500",
    iconName: "Server",
  },
  {
    category: "DevOps & Cloud",
    technologies: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Vercel",
      "GitHub Actions",
      "CI/CD",
      "Terraform",
      "Linux",
      "Nginx",
      "Monitoring",
    ],
    color: "from-purple-500 to-violet-500",
    iconName: "Cloud",
  },
  {
    category: "Tools & Others",
    technologies: [
      "Git",
      "VS Code",
      "Figma",
      "Notion",
      "Linear",
      "Testing",
      "Agile",
      "System Design",
      "Performance",
      "Security",
    ],
    color: "from-orange-500 to-red-500",
    iconName: "Wrench",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Pichsafe",
    description:
      "Secure image hosting platform with private sharing, expiring links, and simple management tools.",
    technologies: ["Next.js", "TypeScript", "Vercel", "Cloudinary"],
    category: "Web App",
    liveUrl: "https://pichsafe.com/",
    githubUrl: "#",
    image: "/pichsafe.png",
    featured: true,
    year: "2025",
  },
  {
    title: "Marsabit Event Platform",
    description:
      "A modern event management platform for Marsabit County, featuring event listings, ticketing, and real-time updates for attendees.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    category: "Web App",
    liveUrl: "https://marsabit-event-sandy.vercel.app/",
    githubUrl: "https://github.com/kiganyamburu/marsabit-event",
    image: "/marsabit.png",
    featured: true,
    year: "2025",
  },
  {
    title: "Serene Trails Counseling Center",
    description:
      "Professional therapy practice website with appointment booking, client portal and secure messaging.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
    category: "Healthcare",
    liveUrl: "https://compassionate-wellbeing-site.vercel.app/",
    githubUrl: "https://github.com/kiganyamburu/compassionate-wellbeing-site",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    featured: true,
    year: "2024",
  },
  {
    title: "VerseFinder",
    description:
      "VerseFinder is a Bible application that allows users to search for Bible verses and find rhymes for those verses.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    category: "Full Stack",
    liveUrl: "https://verse-whisper-finder.vercel.app/",
    githubUrl: "https://github.com/kiganyamburu/verse-whisper-finder",
    image:
      "https://images.unsplash.com/photo-1787154474650-677e13dd4028?w=600&h=400&fit=crop",
    featured: true,
    year: "2024",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "Prisma", "WebSockets"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "https://github.com/kiganyamburu/zest-team-tasks",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    featured: true,
    year: "2024",
  },
  {
    title: "Portfolio Website",
    description:
      "3D interactive portfolio built with Three.js and React, featuring smooth animations and modern design.",
    technologies: ["React", "Three.js", "Framer Motion", "Next.js"],
    category: "Web Design",
    liveUrl: "https://kiganyamburu.vercel.app/",
    githubUrl: "https://github.com/kiganyamburu/kiganyamburu",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    featured: false,
    year: "2024",
  },
  {
    title: "AI Chat Interface",
    description:
      "Modern chat application with AI integration, real-time messaging, and beautiful UI components.",
    technologies: ["React", "OpenAI API", "Socket.io", "TailwindCSS"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "https://github.com/kiganyamburu/chatter-ai-wave",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    featured: false,
    year: "2024",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather application with interactive maps, forecasts, and location-based services.",
    technologies: ["Vue.js", "Weather API", "Mapbox", "Chart.js"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    featured: false,
    year: "2023",
  },
  {
    title: "Cryptocurrency Tracker",
    description:
      "Real-time crypto portfolio tracker with price alerts, news integration, and market analysis tools.",
    technologies: ["React", "CoinGecko API", "Chart.js", "Firebase"],
    category: "Fintech",
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop",
    featured: false,
    year: "2023",
  },
  {
    title: "Recipe Finder App",
    description:
      "Mobile-first recipe application with ingredient-based search, meal planning, and nutritional information.",
    technologies: ["React Native", "Expo", "Spoonacular API", "SQLite"],
    category: "Mobile App",
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    featured: false,
    year: "2023",
  },
  {
    title: "Blog CMS Platform",
    description:
      "Content management system with markdown support, SEO optimization, and multi-author capabilities.",
    technologies: ["Next.js", "Sanity", "Vercel", "TailwindCSS"],
    category: "CMS",
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    featured: false,
    year: "2023",
  },
];
