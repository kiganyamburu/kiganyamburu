"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/portfolio-data";

const iconMap = {
  Github,
  Linkedin,
  Mail,
  Twitter,
};

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Let&rsquo;s Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Have a project in mind? I&rsquo;d love to hear about it and discuss
            how we can bring your ideas to life.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 group" asChild>
            <a href={`mailto:${PERSONAL_INFO.email}`}>
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Start a Conversation
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          {SOCIAL_LINKS.map(({ name, href, iconName }) => {
            const Icon = iconMap[iconName];
            const isExternal = href.startsWith("http");
            return (
              <a
                key={name}
                href={href}
                className="p-4 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 group"
                aria-label={name}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground/80">
            Designed &amp; built by Peter Mburu with Next.js, Three.js &amp; Tailwind CSS
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © {new Date().getFullYear()} Peter Kiganya Mburu. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
