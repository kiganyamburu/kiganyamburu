'use client';

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            Have a project in mind? I&rsquo;d love to hear about it and discuss how we
            can bring your ideas to life.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 group">
            <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Start a Conversation
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/kiganyamburu", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/kiganya-mburu-53a7b5231/", label: "LinkedIn" },
            { icon: Mail, href: "", label: "Email" },
            { icon: Twitter, href: "https://x.com/kiganyamburu", label: "twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-4 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 group"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-border"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            {/* Made with{" "} */}
            {/* <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />{"love "} */}
            {/* using React, Three.js & TailwindCSS */}
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            © {new Date().getFullYear()} Peter mburu. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
