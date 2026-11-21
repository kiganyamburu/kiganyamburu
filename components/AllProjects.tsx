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
import { PROJECTS } from "@/lib/portfolio-data";

export default function AllProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  }, []);

  const years = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(PROJECTS.map((p) => p.year))).sort().reverse(),
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchLower)
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
              <Button variant="ghost" size="sm" asChild className="mb-8">
                <Link
                  href="/"
                  className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>

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
                  placeholder="Search projects or tech..."
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
              Showing {filteredProjects.length} of {PROJECTS.length} projects
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
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or reset filters.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setSelectedYear("All");
                  }}
                >
                  Reset Filters
                </Button>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={220}
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

                        <p className="text-muted-foreground mb-4 leading-relaxed flex-1 text-sm">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
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

                        <div className="flex gap-3 pt-3 border-t border-border/50">
                          {project.liveUrl && project.liveUrl !== "#" ? (
                            <Button
                              size="sm"
                              className="group/btn flex-1"
                              asChild
                            >
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
                              className="opacity-60 cursor-not-allowed flex-1"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo Soon
                            </Button>
                          )}

                          {project.githubUrl && project.githubUrl !== "#" ? (
                            <Button
                              size="sm"
                              variant="outline"
                              className="group/btn flex-1"
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
                              className="opacity-50 cursor-not-allowed flex-1"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Private
                            </Button>
                          )}
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
