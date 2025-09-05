"use client";
// disable eslint here to allow any
/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code, Lightbulb, Rocket, Users, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { downloadFile } from "@/lib/download";

// Type for gtag if using Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Creative solutions to complex technical challenges",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimized applications with exceptional user experience",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams and stakeholders",
  },
];

export default function About() {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownloadCV = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsDownloading(true);

    // Track download event
    try {
      // You can replace this with your analytics tracking
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "download", {
          event_category: "engagement",
          event_label: "CV Download",
        });
      }
    } catch (analyticsError) {
      // Analytics shouldn't break the download
      console.log("Analytics tracking failed:", analyticsError);
    }

    try {
      const success = await downloadFile("/cv.pdf", "Portfolio_CV.pdf");
      if (success) {
        toast({
          title: "Download Started",
          description: "Your CV download has begun successfully.",
        });
      } else {
        throw new Error("Direct download failed");
      }
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download Failed",
        description: "There was an error downloading the CV. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  // Optional: Add keyboard shortcut for CV download (Ctrl+D)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "d" && !isDownloading) {
        event.preventDefault();
        handleDownloadCV();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDownloading]);

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
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I&rsquo;m a passionate full-stack developer with{" "}
            <Badge variant="secondary" className="mx-1">
              3+ years
            </Badge>{" "}
            of experience creating digital solutions that make a difference. I
            love turning complex problems into simple, beautiful, and intuitive
            designs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development started with curiosity about
              how things work under the hood. This curiosity has grown into a
              passion for crafting exceptional digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&rsquo;m not coding, you&rsquo;ll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React Expert",
                "Node.js",
                "TypeScript",
                "Cloud Architecture",
                "Team Lead",
              ].map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <highlight.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-card border border-border rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">
            Let&rsquo;s Build Something Amazing
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you&rsquo;re a startup looking to build your MVP or an established
            company seeking to modernize your tech stack, I&rsquo;m here to help bring
            your vision to life.
          </p>
          <Button
            onClick={handleDownloadCV}
            disabled={isDownloading}
            className="mb-8 inline-flex items-center gap-2"
            aria-label={
              isDownloading
                ? "Downloading CV, please wait"
                : "Download CV PDF file (Ctrl+D)"
            }
            title="Download CV (Ctrl+D)"
          >
            <Download
              className={`w-4 h-4 ${isDownloading ? "animate-spin" : ""}`}
            />
            {isDownloading ? "Downloading..." : "Download CV"}
          </Button>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
