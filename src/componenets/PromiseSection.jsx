import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Package, 
  UserSquare2, 
  Warehouse, 
  Zap, 
  LayoutDashboard, 
  Rocket,
  CheckCircle2
} from 'lucide-react';

const PromiseSection = () => {
  const { t } = useTranslation();

  const cards = [
    { icon: <Package size={26} />, key: 'orders', color: 'blue', gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-500/10 dark:bg-blue-500/15', text: 'text-blue-500', border: 'hover:border-blue-500/30' },
    { icon: <UserSquare2 size={26} />, key: 'customers', color: 'purple', gradient: 'from-purple-500 to-purple-600', bg: 'bg-purple-500/10 dark:bg-purple-500/15', text: 'text-purple-500', border: 'hover:border-purple-500/30' },
    { icon: <Warehouse size={26} />, key: 'stock', color: 'orange', gradient: 'from-orange-500 to-orange-600', bg: 'bg-orange-500/10 dark:bg-orange-500/15', text: 'text-orange-500', border: 'hover:border-orange-500/30' },
    { icon: <Zap size={26} />, key: 'status', color: 'yellow', gradient: 'from-amber-400 to-amber-500', bg: 'bg-amber-500/10 dark:bg-amber-500/15', text: 'text-amber-500', border: 'hover:border-amber-500/30' },
    { icon: <LayoutDashboard size={26} />, key: 'dashboard', color: 'green', gradient: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-500/10 dark:bg-emerald-500/15', text: 'text-emerald-500', border: 'hover:border-emerald-500/30' },
    { icon: <Rocket size={26} />, key: 'growth', color: 'primary', gradient: 'from-primary to-blue-600', bg: 'bg-primary/10 dark:bg-primary/15', text: 'text-primary', border: 'hover:border-primary/30' },
  ];

  return (
    <section id="features" className="py-28 lg:py-40 bg-white dark:bg-slate-950 overflow-hidden relative transition-colors duration-500">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/[0.04] dark:bg-primary/[0.06] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/[0.03] dark:bg-purple-500/[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-28 space-y-6">
          <div className="flex justify-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 dark:bg-primary/10 rounded-full border border-primary/10 dark:border-primary/20">
              <CheckCircle2 size={14} className="text-primary" />
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] leading-none">LA SOLUTION</span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-heading dark:text-white leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('promise.title')}
          </h2>
          <p className="text-lg text-body dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Tout ce dont vous avez besoin pour gérer, suivre et développer votre business e-commerce.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`group relative bg-white dark:bg-white/[0.03] p-8 lg:p-10 rounded-[32px] border border-slate-100 dark:border-white/[0.06] ${card.border} shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-500 animate-slide-up`}
              style={{ animationDelay: `${0.2 + index * 0.08}s` }}
            >
              {/* Step number */}
              <div className="absolute top-6 end-7 text-[10px] font-black text-slate-200 dark:text-white/[0.06] uppercase tracking-widest">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 ${card.bg} ${card.text} rounded-2xl flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500 relative`}>
                {card.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-heading dark:text-white mb-2 group-hover:text-primary transition-colors">
                {t(`promise.items.${card.key}`)}
              </h3>

              {/* Accent bar */}
              <div className={`mt-5 h-1 w-10 rounded-full bg-gradient-to-r ${card.gradient} opacity-40 group-hover:w-16 group-hover:opacity-80 transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
