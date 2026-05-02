import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './ui/Logo';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 pt-24 pb-12 overflow-hidden relative transition-colors duration-500">
            {/* Background Glows for subtle depth */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">

                {/* Upper Section: Trust & Branding */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 pb-20 border-b border-slate-100 dark:border-slate-800 mb-20">
                    <div className="lg:col-span-5 space-y-8">
                        <Link to="/">
                            <Logo
                                iconClassName="w-12 h-12"
                                textClassName="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight"
                            />
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                            {t("footer_desc")}
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all border border-slate-100 dark:border-slate-800 group shadow-sm transition-all hover:-translate-y-1">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-pink-600 dark:hover:bg-pink-600 hover:text-white transition-all border border-slate-100 dark:border-slate-800 group shadow-sm transition-all hover:-translate-y-1">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Plateforme Column */}
                        <div className="space-y-6">
                            <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{t("footer_platform")}</div>
                            <ul className="space-y-4">
                                {[
                                    { name: t('header.features'), to: '#features' },
                                    { name: t('header.pricing'), to: '#pricing' },
                                    { name: t('header.faq'), to: '#faq' },
                                ].map(link => (
                                    <li key={link.name}>
                                        <a href={link.to} className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-tight">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ecosystème Column */}
                        <div className="space-y-6">
                            <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{t("footer_ecosystem")}</div>
                            <ul className="space-y-4">
                                {['RiseCart', 'RiseConfirm', 'RiseAcademy', 'RisePay'].map(link => (
                                    <li key={link}>
                                        <Link to="#" className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 group">
                                            {link}
                                            <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Direct Column */}
                        <div className="space-y-6">
                            <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{t("footer_contact")}</div>
                            <div className="flex flex-col gap-4">
                                <a href="mailto:contact@risemanager.com" className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all group overflow-hidden">
                                    <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase leading-none mb-1">{t("footer_email")}</div>
                                        <div className="text-xs sm:text-sm font-bold text-slate-600 dark:text-white group-hover:text-primary transition-colors truncate">contact@risemanager.com</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Signals Integration */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 rounded-[32px] px-8 mb-12">
                    {[
                        { label: t("footer_signal_1"), icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                        { label: t("footer_signal_2"), icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                        { label: t("footer_signal_3"), icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
                        { label: t("footer_signal_4"), icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" }
                    ].map((signal, i) => (
                        <div key={i} className="flex flex-col items-center lg:items-start gap-2 group">
                            <div className="text-primary/70 group-hover:text-primary dark:text-primary-light/70 dark:group-hover:text-primary-light transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={signal.icon} />
                                </svg>
                            </div>
                            <div className="text-[11px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest text-center lg:text-left">{signal.label}</div>
                        </div>
                    ))}
                </div>

                {/* Footnotes */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500">
                        &copy; {new Date().getFullYear()} {t("footer_copyright")}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
