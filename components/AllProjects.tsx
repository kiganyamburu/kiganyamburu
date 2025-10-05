"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ExternalLink, Github, ArrowLeft, Search, Filter } from "lucide-react";
import { useState, useMemo } from "react";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import Link from "next/link";
import Image from "next/image";

const allProjects = [
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
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "https://github.com/kiganyamburu/commerce-vista-spark",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
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
    title: "Portfolio Website",
    description:
      "3D interactive portfolio built with Three.js and React, featuring smooth animations and modern design.",
    technologies: ["React", "Three.js", "Framer Motion", "Vite"],
    category: "Web Design",
    liveUrl: "#",
    githubUrl: "https://github.com/kiganyamburu/builder-stellar-hub",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
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
    title: "Marsabit Event Platform",
    description:
      "A modern event management platform for Marsabit County, featuring event listings, ticketing, and real-time updates for attendees.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    category: "Web App",
    liveUrl: "https://marsabit-event-sandy.vercel.app/",
    githubUrl: "https://github.com/kiganyamburu/marsabit-event",
    image: "/marsabit.png",
    featured: false,
    year: "2025",
  },
];

const categories = [
  "All",
  "Full Stack",
  "Web App",
  "AI/ML",
  "Web Design",
  "Fintech",
  "Mobile App",
  "CMS",
  "Healthcare",
];
const years = ["All", "2024", "2023"];

export default function AllProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesYear =
        selectedYear === "All" || project.year === selectedYear;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchTerm, selectedCategory, selectedYear]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-20">
        {/* Header */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/"
                className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                All Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Explore my complete collection of projects spanning web
                development, mobile apps, AI integration, and more. Each project
                represents a unique challenge and learning experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filter by:</span>
                </div>

                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-sm text-muted-foreground"
            >
              Showing {filteredProjects.length} of {allProjects.length} projects
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or browse all projects.
                </p>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={300}
                          height={150}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {project.featured && (
                          <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                            Featured
                          </Badge>
                        )}

                        <Badge
                          variant="secondary"
                          className="absolute top-4 right-4 bg-background/90"
                        >
                          {project.year}
                        </Badge>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <Badge className="mb-3 w-fit bg-primary/10 text-primary hover:bg-primary/20">
                          {project.category}
                        </Badge>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            className="group/btn flex-1"
                            onClick={() =>
                              window.open(project.liveUrl, "_blank")
                            }
                          >
                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Live Demo
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="group/btn flex-1"
                            onClick={() =>
                              window.open(project.githubUrl, "_blank")
                            }
                          >
                            <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
