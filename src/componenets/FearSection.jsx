import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle, Users, ClipboardX, HelpCircle, XCircle } from 'lucide-react';

const FearSection = () => {
  const { t } = useTranslation();
  
  const items = [
    { icon: <ClipboardX size={32} />, key: 'items.0' },
    { icon: <Users size={32} />, key: 'items.1' },
    { icon: <XCircle size={32} />, key: 'items.2' },
    { icon: <HelpCircle size={32} />, key: 'items.3' },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
            <AlertCircle size={32} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-heading mb-4 animate-slide-up">
            {t('fear.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group animate-slide-up"
            >
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-700 text-slate-400 group-hover:bg-red-50 dark:group-hover:bg-red-900/20 group-hover:text-red-500 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                {item.icon}
              </div>
              <p className="text-xl font-bold text-heading leading-tight">
                {t(`fear.${item.key}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FearSection;
