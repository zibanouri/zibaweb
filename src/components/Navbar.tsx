const Navbar = () => {
    return (
        <nav className="fixed top-4 inset-x-0 mx-auto max-w-7xl z-50 bg-black/20 backdrop-blur-lg rounded-lg shadow-xl border border-white/20">
            <div className="px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="text-slate-950 font-bold text-lg tracking-wide">
                        زیبا نوری
                    </div>
                    <div className="hidden md:flex space-x-6">
                        {['خانه', 'درباره من', 'مهارتها', 'تماس با من'].map(
                            (item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="relative text-slate-600 hover:text-slate-950 transition font-light text-sm group"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


