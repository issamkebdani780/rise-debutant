import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    { key: 'starter', price: '0', icon: '' },
    { key: 'growth', price: '299', icon: '', popular: true },
    { key: 'empire', price: '999', icon: '' },
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-heading mb-4 animate-slide-up">
            {t('header.pricing')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white dark:bg-slate-900 rounded-[48px] p-10 border transition-all animate-slide-up ${
                plan.popular 
                ? 'shadow-2xl border-primary scale-105 z-10' 
                : 'shadow-premium border-slate-100 dark:border-slate-800'
              } hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <Sparkles size={16} /> POPULAIRE
                </div>
              )}
              
              <div className="text-center mb-10">
                <span className="text-4xl mb-4 block">{plan.icon}</span>
                <h3 className="text-2xl font-black text-heading mb-2">{t(`pricing.${plan.key}`)}</h3>
                <p className="text-body text-sm font-medium mb-6">{t(`pricing.${plan.key}Sub`)}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-black text-heading">{plan.price}</span>
                  <span className="text-xl font-bold text-body mb-2">DA/mois</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-heading font-medium text-sm">Avantage boutique {i}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-bold transition-all ${
                plan.popular 
                ? 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-hover' 
                : 'bg-slate-100 dark:bg-slate-800 text-heading hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}>
                Choisir ce plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
