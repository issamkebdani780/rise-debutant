import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserPlus, PackagePlus, BarChart3 } from 'lucide-react';

const StepsSection = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: <UserPlus size={32} />, key: 'step1', color: 'bg-blue-500' },
    { icon: <PackagePlus size={32} />, key: 'step2', color: 'bg-primary' },
    { icon: <BarChart3 size={32} />, key: 'step3', color: 'bg-indigo-600' },
  ];

  return (
    <section id="steps" className="py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800">
             <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{t('steps.title')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-heading dark:text-white">
            Prêt à décoller en <span className="text-primary">3 étapes</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
          {/* Connecting line (Desktop) */}
          <div className="absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-slate-100 dark:bg-slate-800 hidden lg:block" />
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group text-center flex flex-col items-center space-y-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <div className={`w-20 h-20 ${step.color} text-white rounded-[28px] flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500 z-10 relative`}>
                  {step.icon}
                </div>
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-white dark:bg-slate-900 border-2 border-primary text-primary rounded-full flex items-center justify-center font-black text-[10px] z-20 shadow-sm">
                  {index + 1}
                </div>
              </div>

              <div className="space-y-2 max-w-[280px]">
                <h3 className="text-xl font-black text-heading dark:text-white">
                  {t(`steps.${step.key}`)}
                </h3>
                <p className="text-sm text-body dark:text-slate-400 font-medium leading-relaxed">
                  {t(`steps.${step.key}_desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
