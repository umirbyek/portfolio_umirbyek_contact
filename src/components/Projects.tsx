import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Code className="w-8 h-8 text-blue-400" />
          <h2 className="text-3xl font-bold">Онцлох төслүүд</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-colors flex flex-col">
            <div className="aspect-video overflow-hidden bg-slate-700 relative">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Project 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">И-Коммерс Платформ</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                Онлайн худалдааны бүрэн шийдэл бүхий платформ. Хэрэглэгчийн сагс, төлбөр тооцоо, хүргэлтийн систем зэргийг багтаасан.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-2">
                  <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold" title="React">Re</span>
                  <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold" title="Node.js">No</span>
                </div>
                <a href="#" className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300">
                  Дэлгэрэнгүй <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-colors flex flex-col">
            <div className="aspect-video overflow-hidden bg-slate-700 relative">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Project 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Санхүүгийн Дашбоард</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                Байгууллагын санхүүгийн үзүүлэлтүүдийг бодит хугацаанд хянаж, тайлан гаргах зориулалттай аналитик дашбоард.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-2">
                  <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold" title="Vue">Vu</span>
                  <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold" title="Python">Py</span>
                </div>
                <a href="#" className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300">
                  Дэлгэрэнгүй <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-colors flex flex-col">
            <div className="aspect-video overflow-hidden bg-slate-700 relative">
              <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=800&auto=format&fit=crop" alt="Project 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Блог Платформ</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                Нийтлэл бичих, унших, сэтгэгдэл үлдээх боломжтой орчин үеийн блог платформ. SEO оновчлол сайтай.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-2">
                  <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold" title="Next.js">Nx</span>
                  <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold" title="Tailwind">Tw</span>
                </div>
                <a href="#" className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300">
                  Дэлгэрэнгүй <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
