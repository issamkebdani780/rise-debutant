import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, User, Phone, Globe, Briefcase, CheckCircle2, Sparkles, Rocket } from 'lucide-react';

const LeadForm = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 bg-[length:32px_32px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        <div className="container mx-auto px-4 max-w-xl text-center relative z-10">
          <div className="bg-white dark:bg-slate-900 p-12 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(37,99,235,0.4)] dark:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">Félicitations !</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">Votre demande a été envoyée avec succès. Notre équipe vous contactera très bientôt.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden" id="contact">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-50 animate-blob pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-50 animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 bg-[length:32px_32px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:grid lg:grid-cols-5 gap-6 lg:gap-0 lg:bg-white/80 lg:dark:bg-slate-900/80 lg:backdrop-blur-2xl lg:rounded-[40px] lg:overflow-hidden lg:shadow-2xl lg:border lg:border-white lg:dark:border-slate-800">
          
          {/* Premium Info Side */}
          <div className="lg:col-span-2 relative p-10 lg:p-12 text-white flex flex-col justify-between overflow-hidden rounded-[40px] lg:rounded-none shadow-2xl lg:shadow-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-indigo-700" />
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-sm">
                <Sparkles size={16} className="text-yellow-300" />
                <span className="text-sm font-bold tracking-wide uppercase">Accès VIP</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                Prêt à lancer <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">ton empire ?</span>
              </h2>
              <p className="text-white/90 text-lg mb-10 leading-relaxed font-medium">
                Rejoins les centaines d'entrepreneurs qui ont transformé leur vision en réalité. Remplis ce formulaire pour un accompagnement sur-mesure.
              </p>
            </div>
            
            <div className="relative z-10 space-y-6 mt-auto">
              {[
                { icon: Rocket, text: "Lancement accéléré en 48h" },
                { icon: CheckCircle2, text: "Accompagnement 100% gratuit" },
                { icon: CheckCircle2, text: "Configuration assistée" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <span className="font-bold text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-10 lg:p-14 bg-white dark:bg-slate-900 rounded-[40px] lg:rounded-none shadow-2xl lg:shadow-none border border-slate-100 dark:border-slate-800 lg:border-none">
            <div className="mb-10">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Parle-nous de ton projet</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">Tes informations sont sécurisées et resteront confidentielles.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                  <input 
                    type="text" 
                    placeholder={t('form.name')}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:border-primary dark:focus:border-primary outline-none transition-all font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-4 focus:ring-primary/10 hover:border-slate-200 dark:hover:border-slate-700 shadow-sm"
                  />
                </div>

                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                  <input 
                    type="tel" 
                    placeholder={t('form.phone')}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:border-primary dark:focus:border-primary outline-none transition-all font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-4 focus:ring-primary/10 hover:border-slate-200 dark:hover:border-slate-700 shadow-sm"
                  />
                </div>
              </div>

              <div className="relative group">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder={t('form.country')}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:border-primary dark:focus:border-primary outline-none transition-all font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-4 focus:ring-primary/10 hover:border-slate-200 dark:hover:border-slate-700 shadow-sm"
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{t('form.beginnerQ')}</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="cursor-pointer group">
                    <input type="radio" name="beginner" className="hidden peer" defaultChecked />
                    <div className="p-4 border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-center font-bold text-slate-600 dark:text-slate-300 peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:border-primary dark:peer-checked:bg-primary/20 dark:peer-checked:text-white transition-all hover:border-primary/30 shadow-sm">
                      {t('form.yes')}
                    </div>
                  </label>
                  <label className="cursor-pointer group">
                    <input type="radio" name="beginner" className="hidden peer" />
                    <div className="p-4 border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-center font-bold text-slate-600 dark:text-slate-300 peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:border-primary dark:peer-checked:bg-primary/20 dark:peer-checked:text-white transition-all hover:border-primary/30 shadow-sm">
                      {t('form.started')}
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{t('form.project')}</label>
                <div className="relative group">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors z-10" size={20} />
                  <select className="w-full pl-12 pr-12 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:border-primary dark:focus:border-primary outline-none appearance-none transition-all font-semibold text-slate-900 dark:text-white cursor-pointer hover:border-slate-200 dark:hover:border-slate-700 focus:ring-4 focus:ring-primary/10 shadow-sm relative">
                    <option>{t('form.clothing')}</option>
                    <option>{t('form.cosmetic')}</option>
                    <option>{t('form.accessories')}</option>
                    <option>{t('form.other')}</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <button className="w-full group bg-gradient-to-r from-primary to-blue-600 text-white py-5 rounded-2xl font-black text-xl shadow-[0_8px_30px_rgba(37,99,235,0.3)] dark:shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 mt-8">
                <span>Envoyer le projet</span>
                <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
