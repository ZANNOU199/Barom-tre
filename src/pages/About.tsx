import { motion } from 'framer-motion';
import { Target, Eye, History, Award, Users, Globe, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: "Dr. Amadou Diop",
    role: "Directeur Général",
    bio: "Expert en Économie du Développement avec 20 ans d'expérience.",
    image: "https://picsum.photos/seed/amadou/400/500",
  },
  {
    name: "Fatou Sow",
    role: "Directrice de l'Évaluation",
    bio: "Spécialiste des méthodes quasi-expérimentales.",
    image: "https://picsum.photos/seed/fatou/400/500",
  },
  {
    name: "Dr. Koffi Mensah",
    role: "Statisticien Senior",
    bio: "Expert en analyse de données complexes et Big Data.",
    image: "https://picsum.photos/seed/koffi/400/500",
  },
  {
    name: "Amina Yusuf",
    role: "Analyste de Données",
    bio: "Spécialiste SIG et visualisation d'impact.",
    image: "https://picsum.photos/seed/amina/400/500",
  }
];

const history = [
  {
    year: "2012",
    title: "Genèse au sein de FIDEXI-Conseil",
    desc: "Le Baromètre est conçu en tant que département des services d'évaluation indépendant du cabinet FIDEXI-Conseil. Premières opérations de collecte pour le Gender Innovation Lab (GIL) de la Banque Mondiale."
  },
  {
    year: "2018",
    title: "Reconnaissance Internationale",
    desc: "Sélection par le cabinet américain Mathematica Policy Research pour une opération majeure de collecte de données dans le cadre du Millennium Challenge Account (MCA) au Bénin."
  },
  {
    year: "Aujourd'hui",
    title: "Institut Indépendant",
    desc: "Un pôle d'excellence panafricain fournissant un appui technique de haut niveau aux décideurs et autorités politiques."
  }
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-white dark:bg-slate-950 pt-12 lg:pt-20 pb-16 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-8 tracking-tight">
                L'Institut Africain de <span className="text-blue-600">Suivi-Évaluation d'Impact</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
                Un pool d'Experts nationaux et internationaux fournissant un appui technique adapté aux décideurs en matière de données probantes.
              </p>
            </motion.div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/about/1200/800" 
                  alt="About" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-blue-600 p-4 lg:p-8 rounded-xl text-white shadow-2xl">
                <p className="text-2xl lg:text-4xl font-black">12+</p>
                <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest opacity-80">Années d'impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Leimotiv */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-blue-500 font-black tracking-[0.2em] uppercase text-xs mb-4">Notre ADN</h2>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight">Intelligence collective, Innovation, Respect et Confiance</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-blue-400">MISSION</h4>
              <p className="text-slate-300 leading-relaxed">Faciliter l’accès et l’utilisation des données probantes produites pour optimiser les politiques de développement.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-blue-400">VISION</h4>
              <p className="text-slate-300 leading-relaxed">Être la référence en matière de conception et de gestion des plateformes digitalisées des systèmes de suivi et évaluation.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-blue-400">VALEURS</h4>
              <p className="text-slate-300 leading-relaxed">Rigueur scientifique, transparence institutionnelle et engagement pour le développement durable de l'Afrique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 lg:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 lg:mb-16">
            <div className="h-10 w-2 bg-blue-600 rounded-full" />
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Notre Historique</h2>
          </div>
          <div className="space-y-12">
            {history.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-l-2 border-slate-100 dark:border-slate-800 pl-8 relative"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 shadow-lg shadow-blue-600/50" />
                <div className="sm:w-32 flex-shrink-0">
                  <span className="text-xl lg:text-2xl font-black text-blue-600">{item.year}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-xs mb-4">Expertise Panafricaine</h2>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Notre Équipe d'Experts</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h4>
                <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Mail className="w-5 h-5" /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
