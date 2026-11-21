"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/portfolio-data";

export default function Projects() {
  const featuredProjects = PROJECTS.filter((project) => project.featured);

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
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative lg:grid lg:grid-cols-2 lg:gap-8 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative overflow-hidden min-h-[260px] lg:min-h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {project.year}
                </Badge>
              </div>

              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {project.category}
                    </Badge>
                  </div>

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
                </div>

                <div className="flex gap-4 pt-4 border-t border-border/50">
                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <Button size="sm" className="group/btn" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="secondary"
                      disabled
                      className="opacity-60 cursor-not-allowed"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo Soon
                    </Button>
                  )}

                  {project.githubUrl && project.githubUrl !== "#" ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="group/btn"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="ghost"
                      disabled
                      className="opacity-50 cursor-not-allowed"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Private
                    </Button>
                  )}
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
              View All Projects ({PROJECTS.length})
              <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
