import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  ArrowRight,
  Bell,
  Package,
  ArrowUpRight
} from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [orders, setOrders] = useState([
    { id: 1, customer: "Sarah K.", status: "Delivered", amount: "450 DA" },
    { id: 2, customer: "Ahmed M.", status: "Pending", amount: "1,200 DA" },
  ]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  const addOrder = () => {
    const newOrder = {
      id: Date.now(),
      customer: "New Client",
      status: "Just now",
      amount: Math.floor(Math.random() * 1000) + 100 + " DA"
    };
    setOrders([newOrder, ...orders.slice(0, 3)]);
  };

  const removeOrder = (id) => {
    setOrders(orders.filter(o => o.id !== id));
  };

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden dark:bg-slate-950 transition-colors duration-500"
      onMouseMove={handleMouseMove}
    >
      {/* Background Glows like in risemanager */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left rtl:lg:text-right animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
            <TrendingUp size={16} />
            <span>{t('Conçu pour le marché africain')}</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-heading dark:text-white leading-[1.1] mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-body dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              {t('hero.ctaStart')}
              <ArrowRight size={20} className="rtl:rotate-180" />
            </button>
            <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-heading dark:text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              {t('hero.ctaHow')}
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
            <div className="flex -space-x-3 rtl:space-x-reverse">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-yellow-400">
                <CheckCircle2 size={14} fill="currentColor" className="text-white bg-green-500 rounded-full" />
                <span className="font-bold text-heading dark:text-white">4.9/5</span>
              </div>
              <p className="text-body dark:text-slate-400">+2,000 beginners started today</p>
            </div>
          </div>
        </div>

        {/* Visual Hero - Dashboard Simulation */}
        <div 
          className="relative transition-transform duration-300 ease-out animate-reveal"
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
        >
          <div className="glass dark:bg-slate-900/80 rounded-[40px] p-8 shadow-premium border border-white/50 dark:border-slate-800/50 backdrop-blur-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-bold text-heading dark:text-white">Ma Boutique</h3>
                <p className="text-xs text-body dark:text-slate-400">Aujourd'hui</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={addOrder}
                  className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <Plus size={18} />
                </button>
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <Bell size={18} className="text-body dark:text-slate-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <ShoppingBag size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Ventes</span>
                </div>
                <div className="text-2xl font-black text-heading dark:text-white">12,450 DA</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-green-500 mb-1">
                  <Users size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Clients</span>
                </div>
                <div className="text-2xl font-black text-heading dark:text-white">18</div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-sm text-heading dark:text-white uppercase tracking-widest opacity-50">Dernières Commandes</h4>
                <TrendingUp size={14} className="text-primary" />
              </div>
              <div className="space-y-3">
                {orders.map((order) => (
                  <div 
                    key={order.id}
                    className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/30 rounded-xl hover:shadow-lg transition-all border border-transparent hover:border-primary/20 group animate-slide-up"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Package size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-heading dark:text-white">{order.customer}</p>
                        <p className="text-[10px] text-body dark:text-slate-400">{order.status}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-black text-sm text-primary">{order.amount}</span>
                      <button 
                        onClick={() => removeOrder(order.id)}
                        className="p-1.5 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Indicators */}
          <div className="absolute -top-6 -right-6 glass dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-white/50 z-10 animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <ArrowUpRight size={24} />
              </div>
              <div>
                <p className="text-[10px] text-body dark:text-slate-400 font-bold uppercase">Croissance</p>
                <p className="text-xl font-black text-heading dark:text-white">+125%</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -left-10 glass dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-white/50 z-10 animate-bounce-subtle">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-white dark:border-slate-800">IK</div>
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-white dark:border-slate-800">AH</div>
              </div>
              <p className="text-xs font-bold text-heading dark:text-white">Nouveaux clients !</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
