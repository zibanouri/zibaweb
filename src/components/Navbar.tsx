const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 mx-auto max-w-7xl z-50 bg-black/20 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20">
        <div className="px-6 py-3">
            <div className="flex justify-between items-center">
                <div className="text-slate-950 font-bold text-lg tracking-wide">
                    Ziba Nouri
                </div>
               <div className="hidden md:flex space-x-6">
    <a href="#" className="relative text-slate-800 hover:text-slate-900 transition-colors duration-300 font-light text-sm group">
        Home
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
    </a>
    <a href="#" className="relative text-slate-800 hover:text-slate-900 transition-colors duration-300 font-light text-sm group">
        About
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
    </a>
    <a href="#" className="relative text-slate-800 hover:text-slate-900 transition-colors duration-300 font-light text-sm group">
        Skills 
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
    </a>
    <a href="#" className="relative text-slate-800 hover:text-slate-900 transition-colors duration-300 font-light text-sm group">
        Contact
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
    </a>
</div>
            </div>
        </div>
    </nav>
);
};

export default Navbar;