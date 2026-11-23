import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Peter Mburu - Full Stack Developer",
  description:
    "Welcome to my portfolio website. I'm Peter Mburu, a passionate software developer specializing in building web applications. Explore my projects, skills, and experience in the world of technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
