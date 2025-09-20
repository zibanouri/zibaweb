const Home = () => {
    return (
        <div className="p-12 bg-white py-16 px-6 mt-16">
            <div className="max-w-md mx-auto text-center space-y-8">
                <img
                    src="public/home.png"
                    alt="زیبا نوری"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto  ring-2 ring-slate-400"
                />
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 ">
                        زیبا نوری
                    </h1>
                    <p className="text-slate-600 text-base md:text-lg">
                        طراح و توسعه‌دهنده وب — عاشق سادگی و زیبایی
                    </p>
                </div>
                <div className="pt-4">
                    <a
                        href="#contact"
                        className="inline-block px-8 py-3 bg-slate-600 text-white text-sm font-medium rounded-full hover:bg-slate-700 transition -mb-4"
                    >
                        هرچه می خواهد دل تنگت بگو
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
