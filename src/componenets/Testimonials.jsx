import React from 'react';
import { useTranslation } from 'react-i18next';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();
  
  const stats = [
    { value: '500+', label: 'UTILISATEURS ACTIFS' },
    { value: '2M+', label: 'COMMANDES GÉRÉES' },
    { value: 'x3.5x', label: 'ROI MOYEN CLIENT' },
    { value: '98%', label: 'TAUX DE SATISFACTION' },
  ];

  const testimonials = [
    { key: 't1', img: '/confiance/conf1.webp', name: 'Sami B.', role: 'E-COMMERÇANT' },
    { key: 't2', img: '/confiance/conf2.webp', name: 'Kenza L.', role: 'VENDEUSE INSTAGRAM' },
    { key: 't3', img: '/confiance/conf3.webp', name: 'Omar T.', role: 'DROPSHIPPER' },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-4">
        
        {/* Stats Bar */}
        

        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Star size={14} fill="currentColor" />
            Ils nous font confiance
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-heading dark:text-white">
            {t('testimonials.title') || "Ce que nos débutants disent"}
          </h2>
        </div>
        <div className="max-w-5xl mx-auto mb-24">
            <div className="bg-white dark:bg-slate-900 rounded-[40px] shadow-premium border border-slate-50 dark:border-slate-800 px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative overflow-hidden">
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
                            <div className="hidden md:block w-[1px] h-12 bg-slate-100 dark:bg-slate-800" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-[40px] shadow-premium border border-slate-100 dark:border-slate-800 relative group hover:-translate-y-2 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary/10 absolute top-8 right-8 group-hover:scale-110 transition-transform">
                <Quote size={64} fill="currentColor" />
              </div>

              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-[24px] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 p-2 flex items-center justify-center">
                  <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-black text-xl text-heading dark:text-white tracking-tight">{item.name}</h4>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">{item.role}</p>
                </div>
              </div>

              <p className="text-lg font-bold text-slate-600 dark:text-slate-300 italic leading-relaxed relative z-10">
                "{t(`testimonials.${item.key}`)}"
              </p>

              <div className="mt-8 flex gap-1 text-amber-500 relative z-10">
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
