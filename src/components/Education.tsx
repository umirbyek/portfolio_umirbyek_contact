import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-500" />
          <h2 className="text-3xl font-bold">Боловсрол</h2>
        </div>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          {/* Item 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2 gap-1">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white w-60 text-center">Монгол Улсын Шинжлэх Ухааны Технологийн Их Сургууль</h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md w-fit">2019 - 2023</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">Мэдээллийн технологийн инженер, Бакалавр</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Програм хангамжийн архитектур, өгөгдлийн сангийн зохиомж, алгоритмын үндэс зэрэг чиглэлээр суралцаж төгссөн.</p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2 gap-1">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">1-р дунд сургууль</h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md w-fit">2008 - 2019</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">Бүрэн дунд боловсрол</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Математик, Физик хичээлүүдээр улсын төрөлжсөн олимпиад амжиллттай оролцсон.  2019 онд Улсын физик төрөлжсөн олимпиад 2 даваа 2-р байр.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
