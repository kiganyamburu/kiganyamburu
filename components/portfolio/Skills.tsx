'use client';

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const skills = [
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
  },
];

export default function Skills() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;


  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skillGroup.color} flex items-center justify-center`}
                  >
                    <div className="w-6 h-6 bg-white rounded-md"></div>
                  </div>
                  <h3 className="text-2xl font-semibold">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + techIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-1 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
