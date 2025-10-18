import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About Me', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Contact Me', id: 'contact' },
        { name: 'Projects', id: 'projects' },
    ];

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
            <div className="hidden md:block">
                <div className="bg-slate-900/30 dark:bg-black/40 backdrop-blur-sm rounded-lg shadow-xl border border-slate-700/20 dark:border-black/30 px-6 py-3">
                    <div className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-md rounded-lg flex items-center justify-between px-4 py-2">
                        <div className="text-slate-900 dark:text-white font-bold text-lg tracking-wide">
                            Ziba Nouri
                        </div>
                        <div className="flex items-center gap-6 space-x-6 space-x-reverse">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                    className="text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-medium text-sm transition cursor-pointer px-3 py-1"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex items-center">
                                <div className="relative"></div>
                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={toggleDarkMode}
                                aria-label={
                                    darkMode
                                        ? 'Switch to light mode'
                                        : 'Switch to dark mode'
                                }
                            >
                                {darkMode ? (
                                    <Sun className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                                ) : (
                                    <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <div className="bg-slate-900/30 dark:bg-black/40 backdrop-blur-sm rounded-full shadow-xl border border-slate-700/20 dark:border-black/30 px-4 py-3 flex items-center justify-between">
                    <div className="text-slate-900 dark:text-white font-bold text-lg tracking-wide">
                        Ziba Nouri
                    </div>
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleDarkMode}
                            aria-label={
                                darkMode
                                    ? 'Switch to light mode'
                                    : 'Switch to dark mode'
                            }
                        >
                            {darkMode ? (
                                <Sun className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                            ) : (
                                <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                            )}
                        </Button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-700 dark:text-slate-300 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="mt-3 bg-slate-900/30 dark:bg-black/40 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/20 dark:border-black/30 overflow-hidden">
                        <div className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-md py-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                    className="block text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-medium text-center py-3 px-4 transition"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
