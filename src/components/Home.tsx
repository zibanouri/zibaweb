const Home = () => {
    return (
        <>
            <div className="h-28"></div>{' '}
            {/* فضای خالی برای جلوگیری از پنهان شدن زیر نوار */}
            <div
                id="home"
                className="p-6 md:p-12 bg-white dark:bg-slate-900 py-16 scroll-mt-28"
            >
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="text-center md:text-left space-y-6 flex-1 order-2 md:order-1">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                            Ziba Nouri
                        </h1>
                        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
                            Web Designer & Developer — Passionate about
                            simplicity and beauty
                        </p>
                        <div>
                            <a
                                href="#contact"
                                className="inline-block px-8 py-3 bg-slate-600 text-white text-sm font-medium rounded-lg hover:bg-slate-700 dark:bg-slate-600 dark:hover:bg-slate-500 transition"
                            >
                                Let’s Talk
                            </a>
                        </div>
                    </div>
                    <img
                        src="/zibaweb/ziba2.jpg"
                        alt="Ziba Nouri"
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full ring-2 ring-slate-400 dark:ring-slate-500 object-cover order-1 md:order-2"
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
