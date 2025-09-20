// src/components/Skills.tsx
const Skills = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">مهارت‌های من</h2>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow border border-slate-200">
          <h3 className="font-bold text-lg mb-4 text-center text-slate-800">فرانت‌اند</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-slate-200 text-center text-slate-700 hover:bg-slate-300">CSS</div>
            <div className="bg-slate-200 text-center text-slate-700 hover:bg-slate-300">SCSS</div>
            <div className="bg-slate-200 text-center text-slate-700 hover:bg-slate-300">Bootstrap</div>
            <div className="bg-slate-200 text-center text-slate-700 hover:bg-slate-300">HTML</div>
            <div className="bg-slate-200 text-center text-slate-700 hover:bg-slate-300">Tailwindcss</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border border-slate-200">
          <h3 className="font-bold text-lg mb-4 text-center text-slate-800">جاوااسکریپت</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-slate-200 text-center text-slate-700 hover:bg-slate-300">JavaScript</div>
            <div className="bg-slate-200 text-center text-slate-700 hover:bg-slate-300">TypeScript</div>
            <div className="bg-slate-200 text-center text-slate-700 hover:bg-slate-300">React</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;