import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, School, Brain, BarChart3, CheckCircle2 } from 'lucide-react';

const expertises = [
  {
    title: "Conception de systèmes digitalisés",
    icon: Terminal,
    desc: "Nous accompagnons la transformation numérique du suivi-évaluation par le développement de solutions technologiques sur mesure.",
    items: [
      "Logiciels de Monitoring & Évaluation (M&E) personnalisés.",
      "Tableaux de bord de visualisation de données en temps réel.",
      "Systèmes d'information géographique (SIG) pour le pilotage territorial.",
      "Plateformes de collecte de données mobiles (ODK, KoboToolbox)."
    ],
    image: "https://picsum.photos/seed/digital/800/600"
  },
  {
    title: "Renforcement de capacités institutionnelles",
    icon: School,
    desc: "Nous renforçons le capital humain des organisations publiques et privées par des programmes de formation certifiants.",
    items: [
      "Ateliers de formation sur les méthodes d'évaluation d'impact.",
      "Coaching technique pour les unités de suivi-évaluation.",
      "Certifications professionnelles en gestion de projet axée sur les résultats.",
      "Masterclass sur l'analyse de données avancée (Stata, R, Python)."
    ],
    image: "https://picsum.photos/seed/school/800/600"
  },
  {
    title: "Appuis techniques et Conseils stratégiques",
    icon: Brain,
    desc: "Expertise conseil pour l'élaboration, la revue et l'optimisation des politiques publiques.",
    items: [
      "Assistance technique aux ministères et agences de développement.",
      "Élaboration de cadres logiques et de théories du changement.",
      "Audits de performance et revues institutionnelles.",
      "Plaidoyer basé sur les preuves pour les décideurs politiques."
    ],
    image: "https://picsum.photos/seed/consulting/800/600"
  },
  {
    title: "Suivi & Évaluation d’impact en Afrique",
    icon: BarChart3,
    desc: "Une approche rigoureuse pour mesurer les changements réels induits par les interventions de développement.",
    items: [
      "Évaluations d'impact randomisées (RCT) et quasi-expérimentales.",
      "Évaluations de mi-parcours et finales de programmes complexes.",
      "Études de base (Baseline) et enquêtes de satisfaction.",
      "Analyse coût-efficacité et mesure de la rentabilité sociale."
    ],
    image: "https://picsum.photos/seed/impact/800/600"
  }
];

export default function Expertise() {
  return (
    <div className="flex flex-col">
      <section className="bg-white dark:bg-slate-950 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-8 tracking-tight">
              Nos Expertises et Services <span className="text-blue-600">Professionnels</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Le Baromètre : Institut Africain de Suivi et d'Évaluation des Politiques de Développement au service de l'impact durable.
            </p>
          </div>
        </div>
      </section>

      {expertises.map((exp, idx) => (
        <section key={idx} className={idx % 2 === 0 ? "py-32 bg-slate-50 dark:bg-slate-900/50" : "py-32 bg-white dark:bg-slate-950"}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`flex flex-col lg:flex-row items-center gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600">
                    <exp.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">{exp.title}</h2>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                  {exp.desc}
                </p>
                <ul className="space-y-4 mb-12">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 text-center"
                >
                  Demander une expertise
                </Link>
              </div>
              <div className="w-full lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl transform rotate-2" />
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={exp.image} 
                      alt={exp.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
