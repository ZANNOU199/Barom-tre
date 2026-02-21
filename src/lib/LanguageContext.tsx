import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'FR' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  FR: {
    'nav.expertise': 'Expertise',
    'nav.solutions': 'Solutions',
    'nav.formations': 'Formations',
    'nav.news': 'Actualités',
    'nav.about': 'À Propos',
    'nav.contact': 'Consultation',
    'hero.badge': 'Institut Africain de Suivi et Évaluation',
    'hero.title': 'L’Excellence en Suivi et Évaluation d’Impact pour le Développement',
    'hero.desc': 'Concevoir, mesurer et optimiser l’impact des politiques et projets à travers l’Afrique pour un futur durable et transparent.',
    'hero.cta.consult': 'Demander une consultation',
    'hero.cta.solutions': 'Découvrir nos solutions',
    'footer.contact': 'Contact',
    'footer.address': 'Fidjrossè - Centre, Cotonou, Bénin',
  },
  EN: {
    'nav.expertise': 'Expertise',
    'nav.solutions': 'Solutions',
    'nav.formations': 'Training',
    'nav.news': 'News',
    'nav.about': 'About Us',
    'nav.contact': 'Consultation',
    'hero.badge': 'African Institute for Monitoring and Evaluation',
    'hero.title': 'Excellence in Monitoring and Impact Evaluation for Development',
    'hero.desc': 'Designing, measuring and optimizing the impact of policies and projects across Africa for a sustainable and transparent future.',
    'hero.cta.consult': 'Request a consultation',
    'hero.cta.solutions': 'Discover our solutions',
    'footer.contact': 'Contact',
    'footer.address': 'Fidjrossè - Centre, Cotonou, Benin',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('FR');

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
