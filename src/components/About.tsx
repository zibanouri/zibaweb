// src/components/About.tsx
const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-slate-100 to-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
       <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          درباره من
        </h2>    
        <div className="w-24 h-1 bg-slate-300 mx-auto rounded-full"></div>
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-400 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-slate-700">
   با تمام چالش‌هایی که دارم تو کشوری که کشیدن نفس راحت الان یه محاله.
با تمام تعهدی که به فرزندانم دارم تو این راه سخت،
به خودم قول دادم کم نیارم و ادامه بدم،
تا روزی که ویزای کاریم رو بگیرم و پرواز کنم به سمت زندگی که بیست سال رویام بود
</p>
        </div>

      </div>
    </section>
  );
};

export default About;