import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, ShieldCheck, ClipboardCheck, Award, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';

const services = [
  {
    title: "Conception de Systèmes",
    desc: "Design et déploiement de cadres de Suivi-Évaluation robustes et digitalisés.",
    icon: BarChart3,
  },
  {
    title: "Renforcement de Capacités",
    desc: "Formations certifiantes et transferts de compétences pour les cadres dirigeants.",
    icon: Users,
  },
  {
    title: "Appuis Techniques",
    desc: "Accompagnement ponctuel ou permanent sur des thématiques spécifiques de terrain.",
    icon: ShieldCheck,
  },
  {
    title: "Suivi & Évaluation",
    desc: "Audit d'impact et enquêtes de terrain rigoureuses avec analyse de données avancée.",
    icon: ClipboardCheck,
  }
];

const barometers = [
  {
    title: "Baromètre Nutrition",
    category: "NUTRITION",
    desc: "Observation des indicateurs de sécurité alimentaire et nutritionnelle en temps réel.",
    image: "https://picsum.photos/seed/nutrition/800/600",
  },
  {
    title: "Baromètre ODD",
    category: "GOUVERNANCE",
    desc: "Suivi de l'avancement des Objectifs de Développement Durable au niveau national.",
    image: "https://picsum.photos/seed/governance/800/600",
  },
  {
    title: "Baromètre Agro-Climat",
    category: "AGRO-CLIMAT",
    desc: "Impact du changement climatique sur les rendements et les zones rurales.",
    image: "https://picsum.photos/seed/agro/800/600",
  }
];

const partners = [
  "AfREA", "CLEAR", "CESAG", "3ie", "ACED", "LUMSA Università", "ar-mel", "ODD TV", "Mairie de Glazoué"
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/d07ttzZJ/Gemini-Generated-Image-btsmu2btsmu2btsm.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 bg-blue-600/20 backdrop-blur-md rounded border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              {t('hero.badge')}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-medium">
              {t('hero.desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-base font-bold transition-all flex items-center gap-2 shadow-xl shadow-red-600/20 active:scale-95"
              >
                {t('hero.cta.consult')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/solutions"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg text-base font-bold transition-all active:scale-95"
              >
                {t('hero.cta.solutions')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qui Sommes-Nous */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://picsum.photos/seed/team/800/1000" 
                  alt="Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-blue-600 font-black tracking-[0.2em] uppercase text-xs mb-4">À Propos de l'Institut</h3>
              <h2 className="text-4xl font-black mb-8 leading-tight tracking-tight text-slate-900 dark:text-white">Bâtir un écosystème de décision basé sur la donnée probante</h2>
              <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  Le Baromètre est un institut panafricain leader, dédié au renforcement de la culture de l'évaluation. Nous accompagnons les gouvernements, les ONG et les institutions internationales dans la mesure de leur performance.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border-l-4 border-blue-600">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Notre Mission</h4>
                    <p className="text-sm">Transformer les politiques publiques par l'excellence technique et l'innovation méthodologique.</p>
                  </div>
                  <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border-l-4 border-red-600">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Notre Vision</h4>
                    <p className="text-sm">Devenir le référent africain incontournable en matière d'évaluation d'impact d'ici 2030.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-xs mb-4">Expertises Techniques</h2>
            <h3 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Des services à 360° pour vos projets</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-950 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all group border border-slate-100 dark:border-slate-800"
              >
                <div className="w-14 h-14 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{service.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/expertise" className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Baromètres */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-xs mb-4">Nos Outils de Pilotage</h2>
              <h3 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Les Baromètres Thématiques</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {barometers.map((baro, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden group border border-slate-100 dark:border-slate-800"
              >
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={baro.image} 
                    alt={baro.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-black text-blue-600 tracking-widest">
                    {baro.category}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{baro.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                    {baro.desc}
                  </p>
                  <Link 
                    to="/solutions"
                    className="w-full py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-lg transition-all text-center block text-sm"
                  >
                    Consulter l'outil
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Ils nous font confiance</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner, i) => (
              <span key={i} className="text-xl font-black text-slate-400 hover:text-blue-600 transition-colors cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CQP Certification */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-12 lg:p-20 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3 relative z-10">
              <div className="inline-flex items-center gap-2 py-1 px-4 bg-white/20 backdrop-blur rounded-full text-[10px] font-black tracking-widest mb-6">
                <Award className="w-4 h-4" />
                PROGRAMME DE CERTIFICATION
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">Certificat de Qualification Professionnelle (CQP)</h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-2xl font-medium">
                Un programme académique d'excellence conçu pour former les futurs leaders de l'évaluation d'impact en Afrique. Obtenez une certification reconnue internationalement.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-red-500" />
                  <span className="font-bold text-sm">Validation Académique</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-red-500" />
                  <span className="font-bold text-sm">Standards Internationaux</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-red-500" />
                  <span className="font-bold text-sm">Réseau d'Experts</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full flex justify-center lg:justify-end relative z-10">
              <div className="bg-white p-8 rounded-2xl shadow-2xl text-slate-900 text-center w-full max-w-sm border-t-8 border-red-600">
                <h4 className="text-2xl font-black mb-2 tracking-tight">Prochaine Session</h4>
                <div className="text-red-600 font-black text-4xl mb-4 tracking-tighter">15 SEPT 2024</div>
                <p className="text-sm text-slate-500 mb-6 font-medium">Inscriptions ouvertes - Places limitées par cohorte.</p>
                <Link 
                  to="/certifications"
                  className="w-full bg-slate-950 text-white py-4 rounded-lg font-bold hover:bg-slate-800 transition-all block"
                >
                  Postuler au CQP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">Prêt à mesurer votre impact ?</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 leading-relaxed">
                Nos experts sont à votre disposition pour analyser vos besoins et vous proposer une solution sur mesure.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white dark:bg-slate-950 rounded-lg shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Email Direct</h4>
                    <p className="text-slate-500 text-sm">info@piebarometre.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white dark:bg-slate-950 rounded-lg shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Support Technique</h4>
                    <p className="text-slate-500 text-sm">+229 01 69 49 40 72</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white dark:bg-slate-950 rounded-lg shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Siège Social</h4>
                    <p className="text-slate-500 text-sm">Fidjrossè - Centre, Cotonou, Bénin</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-950 p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Nom Complet</label>
                    <input className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 focus:ring-blue-600 focus:border-blue-600 p-3" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Organisation</label>
                    <input className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 focus:ring-blue-600 focus:border-blue-600 p-3" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Email Professionnel</label>
                  <input className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 focus:ring-blue-600 focus:border-blue-600 p-3" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Message</label>
                  <textarea className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 focus:ring-blue-600 focus:border-blue-600 p-3" rows={4}></textarea>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-black transition-all text-lg shadow-lg shadow-red-600/20 active:scale-95">
                  Envoyer la demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
