import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About Me', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Contact Me', id: 'contact' },
        { name: 'Projects', id: 'projects' },
    ];

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
            <div className="hidden md:block">
                <div className="bg-black/20 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 px-6 py-3">
                    <div className="bg-white/80 backdrop-blur-md rounded-lg flex items-center justify-between px-4 py-2">
                        <div className="text-slate-900 font-bold text-lg tracking-wide">
                            Ziba Nouri
                        </div>
                        <div className="flex space-x-6 space-x-reverse">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                    className="text-slate-700 hover:text-slate-950 font-medium text-sm transition cursor-pointer px-3 py-1"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <div className="bg-black/20 backdrop-blur-sm rounded-full shadow-xl border border-white/10 px-4 py-3 flex items-center justify-between">
                    <div className="text-white font-bold text-lg tracking-wide">
                        Ziba Nouri
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="mt-3 bg-black/20 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 overflow-hidden">
                        <div className="bg-white/80 backdrop-blur-md py-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                    className="block text-slate-700 hover:text-slate-950 font-medium text-center py-3 px-4 transition"
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