// import React from 'react';

const Navbar = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About Me', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Contact Me', id: 'contact' },
    ];

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-black/20 backdrop-blur-sm rounded-full shadow-xl border border-white/10 px-6 py-3">
                <div className="bg-white/80 backdrop-blur-md rounded-full flex items-center space-x-6 space-x-reverse px-4 py-2">

                    <div className="text-slate-900 font-bold text-lg tracking-wide">
                        Ziba Nouri
                    </div>
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
        </nav>
    );
};

export default Navbar;