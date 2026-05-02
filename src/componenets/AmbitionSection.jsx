import React from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, Award, Crown, ArrowRight, Sparkles } from 'lucide-react';

const AmbitionSection = () => {
  const { t } = useTranslation();

  const timeline = [
    { icon: <TrendingUp size={28} />, key: 'small', num: '01', gradient: 'from-blue-500 to-cyan-400', glow: 'bg-blue-500/10 dark:bg-blue-500/15', text: 'text-blue-500', border: 'group-hover:border-blue-500/30', label: t('ambition_timeline_small') },
    { icon: <Award size={28} />, key: 'medium', num: '02', gradient: 'from-purple-500 to-violet-400', glow: 'bg-purple-500/10 dark:bg-purple-500/15', text: 'text-purple-500', border: 'group-hover:border-purple-500/30', label: t('ambition_timeline_medium') },
    { icon: <Crown size={28} />, key: 'large', num: '03', gradient: 'from-amber-400 to-yellow-300', glow: 'bg-amber-500/10 dark:bg-amber-500/15', text: 'text-amber-500', border: 'group-hover:border-amber-500/30', label: t('ambition_timeline_large') },
  ];

  return (
    <section className="py-28 lg:py-40 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.04] dark:bg-primary/[0.07] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/[0.03] dark:bg-purple-500/[0.06] rounded-full blur-[150px]" />
      </div>
      <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#a855f7 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20 lg:mb-28 space-y-6 max-w-3xl mx-auto">
          <div className="flex justify-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 dark:bg-primary/10 rounded-full border border-primary/10 dark:border-primary/20">
              <Sparkles size={14} className="text-primary" />
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] leading-none">{t('ambition_badge')}</span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-heading dark:text-white leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('ambition.title')}
          </h2>
          <p className="text-lg text-body dark:text-slate-400 leading-relaxed font-medium animate-slide-up" style={{ animationDelay: '0.15s' }}>
            {t('ambition_subtitle')}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2">
            <div className="w-full h-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-amber-400/20 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 relative">
            {timeline.map((item, index) => (
              <div key={index} className="group relative animate-slide-up" style={{ animationDelay: `${0.2 + index * 0.12}s` }}>
                <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>

                <div className={`relative lg:mt-8 p-8 lg:p-10 bg-white dark:bg-white/[0.03] backdrop-blur-sm rounded-[32px] border border-slate-100 dark:border-white/[0.06] ${item.border} shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-500`}>
                  <div className="absolute top-5 end-6 text-[64px] font-black text-slate-100 dark:text-white/[0.03] leading-none select-none">{item.num}</div>

                  <div className={`inline-flex items-center gap-1.5 text-[10px] font-black ${item.text} uppercase tracking-[0.15em] mb-5`}>
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${item.gradient}`} />
                    {item.label}
                  </div>

                  <div className={`w-14 h-14 ${item.glow} ${item.text} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                  </div>

                  <p className="text-xl font-black text-heading dark:text-white mb-3">{t(`ambition.timeline.${item.key}`)}</p>

                  <div className={`mt-5 h-1 w-10 rounded-full bg-gradient-to-r ${item.gradient} opacity-40 group-hover:w-16 group-hover:opacity-80 transition-all duration-500`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-3 px-8 py-5 bg-slate-50 dark:bg-white/[0.03] rounded-[24px] border border-slate-100 dark:border-white/[0.06]">
            <p className="text-lg font-bold text-body dark:text-slate-400">{t('ambition.timeline.footer')}</p>
            <ArrowRight size={18} className="text-primary animate-bounce-subtle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbitionSection;
