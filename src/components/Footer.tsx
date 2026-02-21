import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.ibb.co/kgMnGbzB/logo-2.png" 
                alt="Le Baromètre Logo" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed">
              L'institut africain de référence pour le suivi-évaluation et l'analyse d'impact des politiques publiques de développement.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">{t('nav.expertise')}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/expertise" className="hover:text-blue-600 transition-colors">{t('nav.expertise')}</Link></li>
              <li><Link to="/solutions" className="hover:text-blue-600 transition-colors">{t('nav.solutions')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">{t('nav.about')}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-600" />
                info@piebarometre.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-600" />
                +229 01 69 49 40 72
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-600 mt-1" />
                {t('footer.address')}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© 2024 Le Baromètre Institut. Tous droits réservés.</p>
          <div className="flex gap-8">
            <span className="text-slate-600">Certifié ISO 9001:2015</span>
            <span className="text-slate-600">Membre de l'AFREA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
