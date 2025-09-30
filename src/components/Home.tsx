const Home = () => {
    return (
        <div id="home" className="p-6 md:p-12 bg-white py-16 mt-16">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="text-center md:text-left space-y-6 flex-1 order-2 md:order-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Ziba Nouri
                    </h1>
                    <p className="text-slate-600 text-base md:text-lg">
                        Web Designer & Developer — Passionate about simplicity and beauty
                    </p>
                    <div>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-3 bg-slate-500 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition"
                        >
                        Let’s Talk
                        </a>
                    </div>
                </div>
                <img
                    src="/zibaweb/image.webp"
                    alt="Ziba Nouri"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full ring-2 ring-slate-400 object-cover order-1 md:order-2"
                />
            </div>
        </div>
    );
};

export default Home;