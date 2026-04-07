import React from 'react';


export default function About() {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
     
          <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm">Сайн байна уу, намайг</h2>
          <h1 className="text-5xl md:text-7xl font-bold mt-2 mb-4 tracking-tight text-slate-900 dark:text-white">
          Саулетбай Өмирбек <br/> <span className="text-slate-400 dark:text-slate-500">гэдэг.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Би бол шинийг эрэлхийлэгч, бүтээлч сэтгэлгээтэй програм хангамжийн инженер. 
            Орчин үеийн вэб технологиудыг ашиглан хэрэглэгчдэд ээлтэй, өндөр бүтээмжтэй систем хөгжүүлэх сонирхолтой.
          </p>
     
          <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-900/20">
            Холбогдох
          </a>
          <a href="#projects" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            Төслүүд харах
          </a>
      
      </div>
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <img src="/profile.jpg" className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl" />
        </div>

    </section>
  );
}
