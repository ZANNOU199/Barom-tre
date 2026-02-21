import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, School, Brain, BarChart3, CheckCircle2 } from 'lucide-react';

const expertises = [
  {
    title: "Conception de systèmes digitalisés",
    icon: Terminal,
    desc: "L'institut Le Baromètre offre une expertise unique en matière de suivi-évaluation et digitalisation pour des systèmes intégrés et dynamiques.",
    items: [
      "Conception d'applications mobiles de collecte de données (ODK, KoboToolbox).",
      "Gestion et analyse de bases de données intégrées et dynamiques.",
      "Visualisation en temps réel via Dashboards et Géoportails.",
      "Maintenance et support technique des systèmes digitalisés.",
      "Fourniture de terminaux (tablettes/téléphones) configurés.",
      "Hébergement et gestion sécurisée des espaces serveurs."
    ],
    image: "https://picsum.photos/seed/digital/800/600"
  },
  {
    title: "Renforcement de capacités",
    icon: School,
    desc: "Promotion des compétences institutionnelles et individuelles dans le domaine du suivi, de l'évaluation et de la digitalisation.",
    items: [
      "Diagnostic approfondi des besoins en renforcement.",
      "Modules sur les fondamentaux en suivi-évaluation.",
      "Formation aux méthodes d'évaluation d'impact des projets.",
      "Élaboration et reconstitution de théorie de changement.",
      "Certificat d'Assistant de recherche à la collecte des données.",
      "Camp annuel des Évaluateurs Émergents francophones."
    ],
    image: "https://picsum.photos/seed/school/800/600"
  },
  {
    title: "Appuis et conseils techniques",
    icon: Brain,
    desc: "Mise à disposition d'un pool de compétences techniques pour un accompagnement stratégique des acteurs de développement.",
    items: [
      "Études d'évaluation de projets et de systèmes de S&E.",
      "Conception d'échantillonnage et outils numériques de collecte.",
      "Collecte de données par voie numérique sur le terrain.",
      "Analyse avancée de données d'évaluation et d'impact.",
      "Évaluation des organisations en matière de suivi-évaluation.",
      "Conseils stratégiques en formulation de politiques publiques."
    ],
    image: "https://picsum.photos/seed/consulting/800/600"
  },
  {
    title: "Centre des Innovations",
    icon: BarChart3,
    desc: "Spécialisé dans la conception de solutions sur mesure pour répondre aux besoins spécifiques et complexes de chaque organisation.",
    items: [
      "Recherche et développement de nouvelles méthodologies.",
      "Incubation de solutions digitales pour le développement.",
      "Veille technologique sur les outils de data science.",
      "Laboratoire d'innovation pour les politiques publiques.",
      "Partenariats avec des centres de recherche internationaux.",
      "Publication de baromètres sectoriels innovants."
    ],
    image: "https://picsum.photos/seed/innovation/800/600"
  }
];

export default function Expertise() {
  return (
    <div className="flex flex-col">
      <section className="bg-white dark:bg-slate-950 pt-12 lg:pt-20 pb-16 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-8 tracking-tight">
              Nos Expertises et Services <span className="text-blue-600">Professionnels</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Le Baromètre : Institut Africain de Suivi et d'Évaluation des Politiques de Développement au service de l'impact durable.
            </p>
          </div>
        </div>
      </section>

      {expertises.map((exp, idx) => (
        <section key={idx} className={idx % 2 === 0 ? "py-16 lg:py-32 bg-slate-50 dark:bg-slate-900/50" : "py-16 lg:py-32 bg-white dark:bg-slate-950"}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600">
                    <exp.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">{exp.title}</h2>
                </div>
                <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                  {exp.desc}
                </p>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-12">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-sm lg:text-base text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="w-full sm:w-auto inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 text-center"
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
