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
                <svg className="w-8 h-8" viewBox="0 0 256 290" fill="none">
                    <path d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197V78.242c-4.68 0-9.348-.489-13.916-1.463v37.27c-24.711 0-47.59-7.852-66.272-21.197v97.058c0 48.543-39.37 87.897-87.928 87.897-18.142 0-35.026-5.502-49.046-14.926 16.009 16.34 38.376 26.474 63.03 26.474 48.56 0 87.93-39.354 87.93-87.9v-97.058h.001Zm17.17-47.776c-9.546-10.423-15.814-23.893-17.17-38.785V12.196h-13.18c3.317 18.927 14.63 35.127 30.35 44.449ZM75.95 235.363c-5.087-6.643-7.85-14.771-7.85-23.13 0-21.273 17.245-38.52 38.53-38.52 3.967 0 7.895.601 11.672 1.788v-49.074c-4.62-.627-9.29-.87-13.942-.728v38.254c-3.78-1.187-7.708-1.789-11.676-1.789-21.283 0-38.528 17.248-38.528 38.523 0 15.118 8.698 28.218 21.363 34.561l.43.115Z" fill="#FF004F"/>
                    <path d="M175.803 92.873c18.682 13.345 41.561 21.197 66.273 21.197V76.8c-13.793-2.937-26.005-10.263-35.102-20.155-15.72-9.322-27.033-25.522-30.35-44.449H163.88v194.607c-.086 21.2-17.3 38.36-38.517 38.36-12.514 0-23.618-5.994-30.618-15.268-12.665-6.343-21.363-19.443-21.363-34.56 0-21.276 17.245-38.524 38.528-38.524 4.079 0 8.012.637 11.676 1.789v-38.254c-47.78.985-86.238 40.034-86.238 87.934 0 23.972 9.597 45.711 25.155 61.557 14.02 9.424 30.904 14.926 49.046 14.926 48.558 0 87.929-39.354 87.929-87.897V92.873h.325Z" fill="currentColor"/>
                    <path d="M242.076 76.8v-10.321c-12.469.017-24.69-3.587-35.102-10.37 9.373 10.17 21.592 17.263 35.102 20.691Zm-65.452-64.604c-.324-1.853-.575-3.72-.753-5.597V.935h-52.11v194.608c-.083 21.196-17.3 38.36-38.514 38.36-6.236 0-12.145-1.486-17.361-4.12 7 9.274 18.104 15.268 30.618 15.268 21.217 0 38.43-17.16 38.517-38.36V12.083h39.604v.113Zm-88.86 75.595v-11c-3.926-.535-7.894-.806-11.864-.806C27.348 76.055-12 115.339-12 163.882c0 30.517 15.584 57.38 39.233 73.131-15.558-15.846-25.155-37.585-25.155-61.557 0-47.9 38.459-86.95 86.238-87.934l-.552.069Z" fill="#00F2EA"/>
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
