import React from 'react';
import { useTranslation } from 'react-i18next';
import { Headphones, PlayCircle, HelpCircle, ShieldCheck } from 'lucide-react';

const SupportSection = () => {
  const { t } = useTranslation();

  const items = [
    { icon: <PlayCircle size={24} />, key: 'tutorials', color: 'text-red-500', bg: 'bg-red-500/10' },
    { icon: <Headphones size={24} />, key: 'support', color: 'text-primary', bg: 'bg-primary/10' },
    { icon: <HelpCircle size={24} />, key: 'onboarding', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { icon: <ShieldCheck size={24} />, key: 'scalable', color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  ];

  return (
    <section id="support" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider">
               {t('support_badge')}
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-heading dark:text-white leading-[1.1]">
              {t('support.title')}
            </h2>
            <p className="text-xl text-body dark:text-slate-400 leading-relaxed font-medium">
              {t('support_desc')}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
               <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all">
                  {t('support_btn_contact')}
               </button>
               <button className="px-8 py-4 bg-white dark:bg-slate-800 text-heading dark:text-white border border-slate-100 dark:border-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                  {t('support_btn_help')}
               </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div 
                key={index}
                className="p-8 bg-white dark:bg-slate-800 rounded-[32px] shadow-premium border border-white dark:border-slate-700 group hover:-translate-y-2 transition-all duration-500 animate-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-black text-heading dark:text-white mb-2">{t(`support.${item.key}`)}</h4>
                <p className="text-sm text-body dark:text-slate-500 font-medium leading-relaxed">
                   {t(`support.${item.key}_desc`) || t('support_fallback_desc')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
