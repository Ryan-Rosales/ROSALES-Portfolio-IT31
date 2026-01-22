import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./site.css";
import { portfolio } from "@/lib/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.role}`,
  description: portfolio.heroStatement,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} site-body`}>
        <a
          href="#content"
          className="skip-link"
        >
          Skip to content
        </a>

        <header className="topbar">
          <div className="topbar-brand">
            <p className="brand">{portfolio.name}</p>
            <p className="subtitle">
              {portfolio.role}
              {portfolio.location ? ` • ${portfolio.location}` : ""}
            </p>
          </div>
          <nav className="nav">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#learning">Currently Learning</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </header>
        <div className="content-wrap">
          <main id="content" className="content">
            {children}
          </main>
          <footer className="footer">Built with Next.js. Deployed on Vercel.</footer>
        </div>
      </body>
    </html>
  );
}
