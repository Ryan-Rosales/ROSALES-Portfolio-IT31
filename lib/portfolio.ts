export type ProjectType = "know" | "learned" | "aspiring";

export type PortfolioProject = {
  type: ProjectType;
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  href?: string;
  repo?: string;
};

export type PortfolioLink = {
  label: string;
  href: string;
};

export type Portfolio = {
  name: string;
  role: string;
  heroStatement: string;
  location?: string;
  links: PortfolioLink[];
  bigThree: PortfolioProject[];
  currentlyLearning: string[];
};

export const portfolio: Portfolio = {
  name: "Ryan S. Rosales",
  role: "Frontend Developer",
  heroStatement:
    "I develop clean, accessible web experiences with a strong focus on user experience.",
  location: "Your City, IT",
  links: [
    { label: "Email", href: "mailto:you@example.com" },
    { label: "GitHub", href: "https://github.com/your-handle" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
  ],
  bigThree: [
    {
      type: "know",
      title: "Project 1: What I Know",
      description:
        "A polished project that shows your current strengths (UI, state, APIs, testing, etc.).",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      highlights: [
        "Clear problem → solution narrative",
        "Responsive + accessible UI",
        "Deployed with a real URL",
      ],
      href: "https://example.com",
      repo: "https://github.com/your-handle/project-1",
    },
    {
      type: "learned",
      title: "Project 2: What I Learned",
      description:
        "A project where you struggled, iterated, and can explain what changed in your approach.",
      tech: ["React", "APIs", "CSS"],
      highlights: [
        "What broke (and how you fixed it)",
        "What you’d do differently next time",
        "Key takeaway you can teach",
      ],
      repo: "https://github.com/your-handle/project-2",
    },
    {
      type: "aspiring",
      title: "Project 3: What I’m Aspiring To",
      description:
        "A stretch project that points toward the role you want (full-stack, mobile, AI, etc.).",
      tech: ["Next.js", "Auth", "Database"],
      highlights: [
        "Bigger scope, broken into milestones",
        "One impressive feature done well",
        "Roadmap for next steps",
      ],
      repo: "https://github.com/your-handle/project-3",
    },
  ],
  currentlyLearning: [
    "TypeScript best practices",
    "Accessibility (ARIA, keyboard UX)",
    "Testing (Playwright / React Testing Library)",
  ],
};
