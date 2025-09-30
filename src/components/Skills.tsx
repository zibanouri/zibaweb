const Skills = () => {
    const skillGroups = [
        [
            { name: 'HTML', level: 100 },
            { name: 'CSS', level: 90 },
            { name: 'SCSS', level: 65 },
            { name: 'Bootstrap', level: 80 },
        ],
        [
            { name: 'Tailwind CSS', level: 95 },
            { name: 'JavaScript', level: 75 },
            { name: 'TypeScript', level: 85 },
            { name: 'React', level: 90 },
        ],
    ];

    return (
        <section
            id="skills"
            className="py-16 px-6 bg-gradient-to-b from-slate-50 to-slate-100"
        >
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
                My Skills
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillGroups.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
                    >
                        <div className="space-y-5">
                            {group.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="group cursor-default"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-slate-700 font-medium text-sm group-hover:text-slate-900 transition-colors duration-200">
                                            {skill.name}
                                        </span>
                                        <span className="text-slate-500 text-sm font-medium group-hover:text-slate-700 transition-colors duration-200">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                                        <div
                                            className="h-2.5 rounded-full bg-slate-600 group-hover:bg-slate-700 transition-all duration-300 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
