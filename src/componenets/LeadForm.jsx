import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, User, Phone, Globe, Briefcase, CheckCircle2 } from 'lucide-react';

const LeadForm = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <div className="bg-primary/10 p-12 rounded-[60px] border-4 border-primary/20 animate-reveal">
            <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-3xl font-black text-heading mb-4">Merci !</h2>
            <p className="text-body text-xl">Nous vous contacterons très bientôt pour votre projet.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-[60px] overflow-hidden shadow-2xl flex flex-col lg:grid lg:grid-cols-2">
          {/* Info Side */}
          <div className="bg-primary p-12 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-black mb-6 leading-tight">Prêt à lancer ton empire ?</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">Remplissez ce formulaire et notre équipe vous accompagnera personnellement dans vos premiers pas.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold">Accompagnement gratuit</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold">Configuration assistée</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 lg:p-14">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder={t('form.name')}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-primary outline-none transition-all font-medium text-heading"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="tel" 
                  placeholder={t('form.phone')}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-primary outline-none transition-all font-medium text-heading"
                />
              </div>

              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder={t('form.country')}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-primary outline-none transition-all font-medium text-heading"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest px-1">{t('form.beginnerQ')}</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="cursor-pointer group">
                    <input type="radio" name="beginner" className="hidden peer" defaultChecked />
                    <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-2xl text-center font-bold text-heading peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all">
                      {t('form.yes')}
                    </div>
                  </label>
                  <label className="cursor-pointer group">
                    <input type="radio" name="beginner" className="hidden peer" />
                    <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-2xl text-center font-bold text-heading peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all">
                      {t('form.started')}
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest px-1">{t('form.project')}</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <select className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-primary outline-none appearance-none transition-all font-medium text-heading">
                    <option>{t('form.clothing')}</option>
                    <option>{t('form.cosmetic')}</option>
                    <option>{t('form.accessories')}</option>
                    <option>{t('form.other')}</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/25 hover:bg-primary-hover hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mt-4">
                Envoyer le projet
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
