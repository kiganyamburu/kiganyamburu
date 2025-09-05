'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    liveUrl: "#",
    githubUrl: "https://github.com/kiganyamburu/commerce-vista-spark",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "Prisma", "WebSockets"],
    liveUrl: "#",
    githubUrl: "https://github.com/kiganyamburu/zest-team-tasks",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "AI Chat Interface",
    description:
      "Modern chat application with AI integration, real-time messaging, and beautiful UI components.",
    technologies: ["React", "OpenAI API", "Socket.io", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "3D interactive portfolio built with Three.js and React, featuring smooth animations and modern design.",
    technologies: ["React", "Three.js", "Framer Motion", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative ${
                project.featured
                  ? "lg:grid lg:grid-cols-2 lg:gap-8"
                  : "max-w-md mx-auto lg:max-w-none lg:mx-0"
              }`}
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={64}
                    height={64}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8">
                  {project.featured && (
                    <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                      Featured Project
                    </Badge>
                  )}

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      className="group/btn"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="group/btn"
                      onClick={() => window.open(project.githubUrl, "_blank")}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline" className="group" asChild>
            <Link href="/projects">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
