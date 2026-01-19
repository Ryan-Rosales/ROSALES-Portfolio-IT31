import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./site.css";
import { portfolio } from "@/lib/portfolio";

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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} site-body`}>
        <a
          href="#content"
          className="skip-link"
        >
          Skip to content
        </a>

        <div className="layout">
          <aside className="sidebar">
            <p className="brand">{portfolio.name}</p>
            <p className="subtitle">
              {portfolio.role}
              {portfolio.location ? ` • ${portfolio.location}` : ""}
            </p>

            <nav className="nav">
              <a className="nav-link" href="#projects">
                Projects
              </a>
              <a className="nav-link" href="#learning">
                Currently Learning
              </a>
              <a className="nav-link" href="#links">
                Links
              </a>
            </nav>

            <p className="sidebar-tip">
              Tip: edit your content in <strong>lib/portfolio.ts</strong>
            </p>
          </aside>

          <div className="content-wrap">
            <main id="content" className="content">
              {children}
            </main>
            <footer className="footer">Built with Next.js. Deployed on Vercel.</footer>
          </div>
        </div>
      </body>
    </html>
  );
}
