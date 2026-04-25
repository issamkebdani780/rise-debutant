import React from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, Award, Crown } from 'lucide-react';

const AmbitionSection = () => {
  const { t } = useTranslation();

  const timeline = [
    { icon: <TrendingUp size={24} />, key: 'small', color: 'blue' },
    { icon: <Award size={24} />, key: 'medium', color: 'purple' },
    { icon: <Crown size={24} />, key: 'large', color: 'yellow' },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 text-heading dark:text-white transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full -z-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-400 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider">
             Évolution du projet
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 animate-slide-up">
            {t('ambition.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {timeline.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-50 dark:bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-slate-100 dark:border-white/10 hover:border-primary/50 transition-all group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-2xl font-black mb-2 text-heading dark:text-white">{t(`ambition.timeline.${item.key}`)}</p>
              <div className="h-1 w-12 bg-primary rounded-full" />
            </div>
          ))}
        </div>

        <div className="text-center animate-slide-up">
          <p className="text-xl font-bold text-body dark:text-slate-400">
            {t('ambition.timeline.footer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmbitionSection;
