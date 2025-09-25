const Navbar = () => {
    const scrollToSection = (id :string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { name: 'خانه', id: 'home' },
        { name: 'درباره من', id: 'about' },
        { name: 'مهارتها', id: 'skills' },
        { name: 'تماس با من', id: 'contact' },
    ];

    return (
        <nav className="fixed top-4 inset-x-0 mx-auto max-w-7xl z-50 bg-black/20 backdrop-blur-lg rounded-full shadow-xl border border-white/20">
            <div className="px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="text-slate-950 font-bold text-lg tracking-wide">
                        زیبا نوری
                    </div>
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.id);
                                }}
                                className="relative text-slate-600 hover:text-slate-950 transition font-light text-sm group cursor-pointer"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;