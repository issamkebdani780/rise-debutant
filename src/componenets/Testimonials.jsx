import React from 'react';
import { useTranslation } from 'react-i18next';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();
  
  const stats = [
    { value: '500+', label: t('testimonials_stat_1') },
    { value: '2M+', label: t('testimonials_stat_2') },
    { value: 'x3.5', label: t('testimonials_stat_3') },
    { value: '98%', label: t('testimonials_stat_4') },
  ];

  const testimonials = [
    { key: 't1', name: 'Sami B.', role: t('testimonials_role_1'), initials: 'SB', gradient: 'from-blue-500 to-cyan-400' },
    { key: 't2', name: 'Kenza L.', role: t('testimonials_role_2'), initials: 'KL', gradient: 'from-purple-500 to-pink-400' },
    { key: 't3', name: 'Omar T.', role: t('testimonials_role_3'), initials: 'OT', gradient: 'from-amber-400 to-orange-500' },
  ];

  return (
    <section id="testimonials" className="py-28 lg:py-40 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-amber-400/[0.03] dark:bg-amber-400/[0.05] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-6">
          <div className="flex justify-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/5 dark:bg-amber-500/10 rounded-full border border-amber-500/10 dark:border-amber-500/20">
              <Star size={14} className="text-amber-500" fill="currentColor" />
              <span className="text-[10px] font-extrabold text-amber-500 uppercase tracking-[0.2em] leading-none">{t('testimonials_badge')}</span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-heading dark:text-white leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('testimonials_title')}
          </h2>
        </div>

        {/* Stats Bar */}
        <div className="max-w-5xl mx-auto mb-20 lg:mb-24 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <div className="bg-white dark:bg-white/[0.03] rounded-[32px] border border-slate-100 dark:border-white/[0.06] shadow-sm px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center space-y-2 group">
                  <div className="text-4xl lg:text-5xl font-black text-heading dark:text-white group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block w-[1px] h-12 bg-slate-100 dark:bg-white/[0.06]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-white/[0.03] p-8 lg:p-10 rounded-[32px] border border-slate-100 dark:border-white/[0.06] shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${0.25 + index * 0.1}s` }}
            >
              {/* Quote watermark */}
              <div className="absolute top-6 end-8 text-primary/[0.06] group-hover:text-primary/[0.12] transition-colors duration-500">
                <Quote size={56} fill="currentColor" />
              </div>

              {/* Avatar + Info */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <span className="text-lg font-black text-white leading-none">{item.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-heading dark:text-white tracking-tight">{item.name}</h4>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.15em]">{item.role}</p>
                </div>
              </div>

              {/* Testimonial text */}
              <p className="text-base font-medium text-slate-600 dark:text-slate-300 italic leading-relaxed relative z-10">
                "{t(`testimonials.${item.key}`)}"
              </p>

              {/* Stars */}
              <div className="mt-7 flex gap-1 text-amber-400 relative z-10">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
