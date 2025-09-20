const Navbar = () => {
  return (
    <nav className="fixed top-4 inset-x-0 mx-auto max-w-7xl z-50 bg-black/20 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20">
      <div className="px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-slate-950 font-bold text-lg tracking-wide">
            زیبا نوری
          </div>
          <div className="hidden md:flex space-x-6">
            {["خانه", "درباره من", "مهارتها", "تماس با من"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-slate-800 hover:text-slate-900 transition font-light text-sm group"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-slate-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;