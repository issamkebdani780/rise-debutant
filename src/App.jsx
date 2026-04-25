import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './componenets/Header';
import Hero from './componenets/Hero';
import FearSection from './componenets/FearSection';
import PromiseSection from './componenets/PromiseSection';
import StepsSection from './componenets/StepsSection';
import SupportSection from './componenets/SupportSection';
import AmbitionSection from './componenets/AmbitionSection';
import Integrations from './componenets/Integrations';
import Testimonials from './componenets/Testimonials';
import Pricing from './componenets/Pricing';
import FAQ from './componenets/FAQ';
import LeadForm from './componenets/LeadForm';
import Footer from './componenets/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set direction and language on root element
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <FearSection />
        <PromiseSection />
        <StepsSection />
        <SupportSection />
        <AmbitionSection />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
