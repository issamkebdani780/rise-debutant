import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Package, 
  UserSquare2, 
  Warehouse, 
  Zap, 
  LayoutDashboard, 
  Rocket 
} from 'lucide-react';

const PromiseSection = () => {
  const { t } = useTranslation();

  const cards = [
    { icon: <Package size={28} />, key: 'orders', color: 'blue' },
    { icon: <UserSquare2 size={28} />, key: 'customers', color: 'purple' },
    { icon: <Warehouse size={28} />, key: 'stock', color: 'orange' },
    { icon: <Zap size={28} />, key: 'status', color: 'yellow' },
    { icon: <LayoutDashboard size={28} />, key: 'dashboard', color: 'green' },
    { icon: <Rocket size={28} />, key: 'growth', color: 'primary' },
  ];

  const getColorClass = (color) => {
    const classes = {
      blue: 'bg-blue-50 text-blue-500 dark:bg-blue-900/20',
      purple: 'bg-purple-50 text-purple-500 dark:bg-purple-900/20',
      orange: 'bg-orange-50 text-orange-500 dark:bg-orange-900/20',
      yellow: 'bg-yellow-50 text-yellow-500 dark:bg-yellow-900/20',
      green: 'bg-green-50 text-green-500 dark:bg-green-900/20',
      primary: 'bg-primary/10 text-primary dark:bg-primary/20',
    };
    return classes[color] || classes.primary;
  };

  return (
    <section id="features" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-heading animate-slide-up">
            {t('promise.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-900 p-8 rounded-[40px] shadow-premium border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group transition-all hover:-translate-y-2 animate-slide-up"
            >
              <div className={`w-20 h-20 ${getColorClass(card.color)} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-heading">
                {t(`promise.items.${card.key}`)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
