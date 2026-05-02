import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle, Users, ClipboardX, HelpCircle, XCircle, AlertTriangle } from 'lucide-react';

const FearSection = () => {
  const { t } = useTranslation();
  
  const items = [
    { icon: <ClipboardX size={28} />, key: 'items.0', num: '01' },
    { icon: <Users size={28} />, key: 'items.1', num: '02' },
    { icon: <XCircle size={28} />, key: 'items.2', num: '03' },
    { icon: <HelpCircle size={28} />, key: 'items.3', num: '04' },
  ];

  return (
    <section className="py-28 lg:py-40 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Dramatic red glow background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/[0.03] dark:bg-red-500/[0.07] rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/[0.02] dark:bg-red-600/[0.05] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/[0.02] dark:bg-orange-500/[0.04] rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28 space-y-6">
          <div className="flex justify-center animate-slide-up">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-red-500/10 rounded-full border border-red-500/20">
              <AlertTriangle size={14} className="text-red-500 dark:text-red-400" />
              <span className="text-[10px] font-extrabold text-red-500 dark:text-red-400 uppercase tracking-[0.2em] leading-none">{t('fear_badge')}</span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-heading dark:text-white leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('fear.title')}
          </h2>
          <p className="text-lg text-body dark:text-slate-400 leading-relaxed max-w-xl mx-auto font-medium animate-slide-up" style={{ animationDelay: '0.15s' }}>
            {t('fear_subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative h-full p-8 lg:p-9 bg-white dark:bg-white/[0.04] backdrop-blur-sm rounded-[32px] border border-slate-100 dark:border-white/[0.06] hover:border-red-500/30 hover:bg-red-50 dark:hover:bg-red-500/[0.06] shadow-sm hover:shadow-xl hover:shadow-red-500/10 dark:shadow-none dark:hover:shadow-none transition-all duration-500">
                {/* Number watermark */}
                <div className="absolute top-5 end-6 text-[72px] font-black text-slate-50 dark:text-white/[0.03] leading-none select-none group-hover:text-red-500/5 dark:group-hover:text-red-500/[0.08] transition-colors duration-500">
                  {item.num}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-red-50 dark:bg-red-500/10 text-red-500 dark:text-red-400 rounded-2xl flex items-center justify-center mb-7 group-hover:bg-red-100 dark:group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-500 relative">
                  {item.icon}
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-2xl border border-red-500/20 opacity-0 group-hover:opacity-100 scale-125 transition-all duration-500" />
                </div>

                {/* Text */}
                <p className="text-lg font-bold text-heading dark:text-white/90 leading-snug group-hover:text-red-600 dark:group-hover:text-white transition-colors relative z-10">
                  {t(`fear.${item.key}`)}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 h-0.5 w-8 bg-red-500/30 rounded-full group-hover:w-16 group-hover:bg-red-500/60 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FearSection;
