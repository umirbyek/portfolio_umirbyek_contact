import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-500" />
        <h2 className="text-3xl font-bold">Ажлын туршлага</h2>
      </div>
      <div className="space-y-6">
        {/* Job 1 */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ахлах хөгжүүлэгч</h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Tech Solutions ХХК</p>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium whitespace-nowrap">
              2022 - Одоог хүртэл
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Байгууллагын үндсэн бүтээгдэхүүн болох ERP системийн хөгжүүлэлтийг ахалж, багийн гишүүдийг чиглүүлэн ажиллаж байна. Системийн хурдыг 40% сайжруулсан.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'PostgreSQL', 'AWS'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 rounded-md text-sm font-medium">{tech}</span>
            ))}
          </div>
        </div>
        {/* Job 2 */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Вэб хөгжүүлэгч</h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Digital Agency</p>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium whitespace-nowrap">
              2020 - 2022
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Харилцагч байгууллагуудын танилцуулга болон и-коммерс вэбсайтуудыг хөгжүүлэх ажилд оролцсон. Нийт 10+ амжилттай төсөл хүлээлгэн өгсөн.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Vue.js', 'PHP', 'MySQL', 'Tailwind CSS'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 rounded-md text-sm font-medium">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
