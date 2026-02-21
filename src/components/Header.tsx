import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '../lib/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('nav.expertise'), path: '/expertise' },
    { name: t('nav.solutions'), path: '/solutions' },
    { name: t('nav.formations'), path: '/certifications' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.about'), path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center group">
              <img 
                src="https://i.ibb.co/kgMnGbzB/logo-2.png" 
                alt="Le Baromètre - Institut Africain de Suivi et d'Évaluation d'Impact" 
                className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-blue-600",
                    location.pathname === item.path ? "text-blue-600" : "text-slate-600 dark:text-slate-400"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
              <span 
                onClick={() => setLanguage('FR')}
                className={cn(
                  "text-xs font-bold cursor-pointer transition-colors",
                  language === 'FR' ? "text-blue-600" : "text-slate-400 hover:text-blue-600"
                )}
              >
                FR
              </span>
              <span className="text-xs font-bold text-slate-400">|</span>
              <span 
                onClick={() => setLanguage('EN')}
                className={cn(
                  "text-xs font-bold cursor-pointer transition-colors",
                  language === 'EN' ? "text-blue-600" : "text-slate-400 hover:text-blue-600"
                )}
              >
                EN
              </span>
            </div>
            
            <Link 
              to="/contact"
              className="hidden md:flex bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-red-500/20 active:scale-95"
            >
              {t('nav.contact')}
            </Link>

            <button 
              className="lg:hidden p-2 text-slate-600 dark:text-slate-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-base font-semibold text-slate-600 dark:text-slate-400 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 py-2 border-t border-slate-100 dark:border-slate-800 pt-4">
            <span 
              onClick={() => setLanguage('FR')}
              className={cn(
                "text-sm font-bold cursor-pointer",
                language === 'FR' ? "text-blue-600" : "text-slate-400"
              )}
            >
              Français
            </span>
            <span className="text-slate-300">|</span>
            <span 
              onClick={() => setLanguage('EN')}
              className={cn(
                "text-sm font-bold cursor-pointer",
                language === 'EN' ? "text-blue-600" : "text-slate-400"
              )}
            >
              English
            </span>
          </div>
          <Link
            to="/contact"
            className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-bold"
            onClick={() => setIsOpen(false)}
          >
            {t('hero.cta.consult')}
          </Link>
        </div>
      )}
    </header>
  );
}
