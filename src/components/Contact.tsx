import React, { useState } from 'react';
import { Phone, Mail, MapPin, Github, Linkedin, FacebookIcon, InstagramIcon } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const sendToTelegram = async () => {
    const text = `
📩 New Contact
👤 Name: ${form.name}
📧 Email: ${form.email}
📝 Subject: ${form.subject}
💬 Message: ${form.message}
  `;



    try {
      await fetch(`https://api.telegram.org/bot8620009553:AAHvtoHyvmNQ3zRcWLvYf08EAOqFOMs6_OQ/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: "5512173604",
          text: text
        })
      });

      alert("Амжилттай илгээгдлээ ✅");

      // form clear хийх
      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (err) {
      console.error(err);
      alert("Алдаа гарлаа ❌");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-xl dark:shadow-none border border-transparent dark:border-slate-800 overflow-hidden flex flex-col md:flex-row">
        <div className="bg-blue-600 dark:bg-blue-900 text-white p-10 md:w-2/5 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Холбоо барих</h2>
            <p className="text-blue-100 dark:text-blue-200 mb-8">
              Надтай хамтран ажиллах эсвэл асууж тодруулах зүйл байвал доорх мэдээллээр холбогдоорой.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 dark:bg-blue-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 dark:text-blue-300">Утас</p>
                  <p className="font-medium">+976 8523 7117 </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 dark:bg-blue-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 dark:text-blue-300">И-мэйл</p>
                  <p className="font-medium">umirbyek0731@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 dark:bg-blue-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 dark:text-blue-300">Хаяг</p>
                  <p className="font-medium">Улаанбаатар хот, Монгол улс</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-12">
            <a href="https://github.com/umirbyek" className="w-10 h-10 rounded-full bg-blue-500 dark:bg-blue-800 flex items-center justify-center hover:bg-blue-400 dark:hover:bg-blue-700 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/umirbyek-sauletbay-3a7299297/" className="w-10 h-10 rounded-full bg-blue-500 dark:bg-blue-800 flex items-center justify-center hover:bg-blue-400 dark:hover:bg-blue-700 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/umirbyeksaulyetbai" className="w-10 h-10 rounded-full bg-blue-500 dark:bg-blue-800 flex items-center justify-center hover:bg-blue-400 dark:hover:bg-blue-700 transition-colors">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/umirbyek_saulyet/?hl=en" className="w-10 h-10 rounded-full bg-blue-500 dark:bg-blue-800 flex items-center justify-center hover:bg-blue-400 dark:hover:bg-blue-700 transition-colors">
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="p-10 md:w-3/5">
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            sendToTelegram();
}}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Таны нэр</label>
                <input type="text" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 dark:focus:border-blue-500 transition-all text-slate-900 dark:text-white" placeholder="Нэрээ оруулна уу" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">И-мэйл хаяг</label>
                <input type="email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 dark:focus:border-blue-500 transition-all text-slate-900 dark:text-white" placeholder="И-мэйл хаягаа оруулна уу" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Гарчиг</label>
              <input type="text" value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 dark:focus:border-blue-500 transition-all text-slate-900 dark:text-white" placeholder="Юуны талаар холбогдож байна вэ?" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Зурвас</label>
              <textarea rows={4} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 dark:focus:border-blue-500 transition-all resize-none text-slate-900 dark:text-white" placeholder="Зурвасаа энд бичнэ үү..."></textarea>
            </div>
            <button type='submit' className="hover:scale-[1.02]
cursor-pointer
    active:scale-[0.97] 
    active:bg-blue-800 w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-none">
              Илгээх
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
