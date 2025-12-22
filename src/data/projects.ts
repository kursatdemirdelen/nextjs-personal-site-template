import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing online stores. Features real-time analytics, inventory management, and order processing. Built with server-side rendering for optimal performance.",
    url: "https://github.com/yourusername/ecommerce-dashboard",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    slug: "ecommerce-dashboard",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features. Supports multiple workspaces and custom workflows.",
    url: "https://github.com/yourusername/task-manager",
    tags: ["React", "Node.js", "WebSocket", "MongoDB"],
    slug: "task-management-app",
  },
  {
    title: "Weather Forecast PWA",
    description: "Progressive web app that provides detailed weather forecasts with beautiful visualizations. Works offline and includes location-based recommendations. Integrates with multiple weather APIs for accuracy.",
    tags: ["React", "PWA", "Chart.js", "REST API"],
    slug: "weather-forecast-pwa",
  },
  {
    title: "Developer Portfolio Template",
    description: "A modern, responsive portfolio template for developers. Features dark mode, MDX blog support, and optimized SEO. Easy to customize and deploy.",
    url: "https://github.com/yourusername/portfolio-template",
    tags: ["Next.js", "TypeScript", "MDX", "Vercel"],
    slug: "developer-portfolio-template",
  },
];