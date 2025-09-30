import React from 'react';
import { Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
}
const projects: Project[] = [
  {
    title: "Zibaweb",
    description: "A modern personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/zibanouri/zibaweb",
    demoUrl: "https://zibaweb.vercel.app"
  },
  {
    title: "Zarnika",
    description: "A real-time project management app using Next.js and Firebase.",
    tech: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/zibanouri/zarnika"
  },
  {
    title: "Portfolio (Legacy)",
    description: "An earlier version of my developer portfolio.",
    tech: ["React", "CSS", "JavaScript"],
    githubUrl: "https://github.com/zibanouri/portfolio"
  },
  {
    title: "ArikA",
    description: "A Telegram bot for interactive language learning with Python.",
    tech: ["Python", "aiogram", "Telegram Bot API"],
    githubUrl: "https://github.com/zibanouri/ArikA"
  }
];

const Projects = () => {
    return (
        <div>

        </div>
    )
};

export default Projects;