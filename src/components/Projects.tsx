import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tech: string[];
    githubUrl: string;
    demoUrl?: string;
    imageUrl: string;
}

const projects: Project[] = [
    {
        title: 'Zibaweb',
        description:
            'A modern personal portfolio built with React, Tailwind CSS and shadcn',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        githubUrl: 'https://github.com/zibanouri/zibaweb  ',
        imageUrl: '/zibaweb/images/zibaweb.webp',
    },
    {
        title: 'Zarnika',
        description: 'Modern admin panel',
        tech: ['typescript', 'react', 'tailwindcss ,shadcn'],
        githubUrl: 'https://github.com/zibanouri/zarnika  ',
        imageUrl: '/zibaweb/images/zarnika.webp',
    },
    {
        title: 'Portfolio',
        description:
            'Modern, responsive portfolio template built with React, TypeScript and Tailwindcss',
        tech: ['React', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/zibanouri/portfolio  ',
        imageUrl: '/zibaweb/images/portfolio.webp',
    },
    {
        title: 'ArikA',
        description: 'A frontend project styled with SCSS (Sassy CSS)',
        tech: ['scss'],
        githubUrl: 'https://github.com/zibanouri/ArikA  ',
        imageUrl: '/zibaweb/images/Arika.webp',
    },
];
const Projects = () => {
    return (
        <section
            id="Projects"
            className="py-16 px-4 bg-gradient-to-b from-slate-50 to-slate-100 leading-none"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
                    Projects
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
                        >
                            <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-200">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            'https://placehold.co/600x400?text=No+Preview';
                                    }}
                                />
                            </div>

                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg font-medium text-slate-800 leading-none">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-3">
                                <p className="text-slate-600 text-sm leading-none">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter className="flex gap-3 pt-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex-1 gap-2 border-slate-300 text-slate-700 hover:bg-slate-50"
                                    onClick={() =>
                                        window.open(project.githubUrl, '_blank')
                                    }
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </Button>
                                {project.demoUrl && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex-1 gap-2 border-slate-300 text-slate-700 hover:bg-slate-50"
                                        onClick={() =>
                                            window.open(
                                                project.demoUrl,
                                                '_blank'
                                            )
                                        }
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
