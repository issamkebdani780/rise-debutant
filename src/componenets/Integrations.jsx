import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  MessageCircle, 
  FileSpreadsheet,
  Zap,
  ArrowRightLeft
} from 'lucide-react';

const Integrations = () => {
    const { t } = useTranslation();
    
    const integrations = [
        { 
            name: "WhatsApp", 
            desc: "Notifications automatiques", 
            icon: <MessageCircle size={32} />, 
            color: "bg-green-500" 
        },
        { 
            name: "Meta Ads", 
            desc: "Tracking Pixel & API", 
            icon: (
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
            ), 
            color: "bg-blue-600" 
        },
        { 
            name: "TikTok", 
            desc: "TikTok Events API", 
            icon: (
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.81-.6-4.03-1.37-.01 2.31 0 4.62-.01 6.93 0 2.31-.01 4.62-.01 6.93-.01 1.44-.5 2.89-1.44 3.97-1.12 1.11-2.7 1.62-4.24 1.79-1.44.17-2.81.6-4.03 1.37-1.12-1.11-1.62-2.7-1.79-4.24-.17-1.44-.6-2.81-1.37-4.03 1.11-1.12 2.7-1.62 4.24-1.79.08-1.53.63-3.09 1.75-4.17 1.12-1.11 2.7-1.62 4.24-1.79V.02z" />
                </svg>
            ), 
            color: "bg-black" 
        },
        { 
            name: "RiseCart", 
            desc: "Le CMS E-commerce n°1", 
            icon: <img src="/ecosystem/risecart.jpg" className="w-full h-full object-cover" />, 
            color: "bg-primary" 
        },
        { 
            name: "RiseConfirm", 
            desc: "Confirmation automatique", 
            icon: <img src="/ecosystem/riseconfirem.jpg" className="w-full h-full object-cover" />, 
            color: "bg-orange-500" 
        },
        { 
            name: "Google Sheets", 
            desc: "Export auto 1-clic", 
            icon: <FileSpreadsheet size={32} />, 
            color: "bg-green-600" 
        },
    ];

    return (
        <section id="features" className="py-24 lg:py-40 bg-white dark:bg-slate-950 overflow-hidden relative transition-colors duration-500">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32 space-y-8">
                    <div className="flex justify-center animate-slide-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">INTÉGRATIONS</span>
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-extrabold text-heading dark:text-white leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Un système qui <span className="text-primary">parle</span> <br />
                        à tous vos outils
                    </h2>
                    <p className="text-xl text-body dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        RiseManager s'intègre nativement avec les meilleures plateformes pour automatiser votre workflow de A à Z.
                    </p>
                </div>

                {/* Ecosystem Visualized */}
                <div className="relative max-w-5xl mx-auto py-10 px-4 sm:px-0">
                    {/* Connecting lines (Desktop) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent hidden lg:block" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-slate-200 dark:via-slate-800 to-transparent hidden lg:block" />

                    {/* Connecting line (Mobile) */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-slate-200 dark:via-slate-800 to-transparent lg:hidden" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-12 relative">
                        {integrations.map((item, i) => (
                            <div key={i} className="relative">
                                {/* Connection Node (Mobile) */}
                                {i > 0 && (
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-slate-200 dark:border-slate-800  dark:bg-slate-900 z-10 lg:hidden shadow-sm" />
                                )}

                                <div
                                    className="group relative p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-50 dark:border-slate-800 shadow-xl shadow-slate-100/50 dark:shadow-none hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-2xl transition-all duration-500 animate-slide-up"
                                    style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                                >
                                    <div className="flex flex-col items-center sm:items-start">
                                        <div className={`w-14 h-14 ${item.color} text-white rounded-[20px] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500 overflow-hidden`}>
                                            {item.icon}
                                        </div>
                                        <div className="space-y-2 text-center sm:text-start w-full">
                                            <div className="text-xl font-bold text-heading dark:text-white group-hover:text-primary transition-colors">{item.name}</div>
                                            <div className="text-sm font-medium text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors uppercase tracking-widest text-[10px]">{item.desc}</div>
                                        </div>
                                    </div>

                                    <div className="absolute top-6 end-8">
                                        <div className="flex items-center gap-1 text-[10px] font-bold text-primary uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span>Connecté</span>
                                            <ArrowRightLeft size={10} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
