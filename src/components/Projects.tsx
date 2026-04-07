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
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Зогсоолын систем</h3>
              <p className="text-slate-400 text-sm mb-6 text-justify">
                Зогсоолд ороод ирсэн машин гарад үед төлбөр хийх хүртэлх бүх процессыг автоматжуулсан систем. Гарах үед киоск дээр машины дугаар оруулаад төлбөрийг  QR код уншуулж төлбөр хийх боломжтой. </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-2">
                  <span className="w-8 h-8 px-6 rounded-lg  bg-slate-700 flex items-center justify-center text-xs font-bold " title="React">React</span>
                  <span className="w-8 h-8 px-8 rounded-lg  bg-slate-700 flex items-center justify-center text-xs font-bold" title="Node.js">Node.js</span>
                  <span className="w-8 h-8 px-6 rounded-lg  bg-slate-700 flex items-center justify-center text-xs font-bold" title="Java">Java</span>
                  <span className="w-8 h-8 px-6 rounded-lg bg-slate-700 flex items-center justify-center text-xs font-bold" title="Mysql">Mysql</span>



                </div>
                {/* <a href="#" className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300">
                  Дэлгэрэнгүй <ExternalLink className="w-4 h-4" />
                </a> */}
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-colors flex flex-col">
            <div className="aspect-video overflow-hidden bg-slate-700 relative">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Project 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Элэгний төв</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-3">
               Эрүүл мэндийн шинжилгээний байгуулгад шинжилгээний мэдээллийг хадгалах формуудыг бэлдэж өгсөн
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-2">
                  <span className="w-8 h-8 px-6 rounded-lg bg-slate-700 flex items-center justify-center text-xs font-bold" title="React">React</span>
                  <span className="w-8 h-8 px-6 rounded-lg bg-slate-700 flex items-center justify-center text-xs font-bold" title="GrapQL">GrapQL</span>
                  <span className="w-8 h-8  px-10 rounded-lg bg-slate-700 flex items-center justify-center text-xs font-bold" title="PostgreySQL">PostgreySQL</span>
             
             
                </div>
                {/* <a href="#" className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300">
                  Дэлгэрэнгүй <ExternalLink className="w-4 h-4" />
                </a> */}
              </div>
            </div>
          </div>
          {/* Project 3 */}
        
        </div>
      </div>
    </section>
  );
}
