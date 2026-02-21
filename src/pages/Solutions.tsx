import { motion } from 'framer-motion';
import { HeartPulse, Globe2, Sprout, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    title: "Baromètre Nutrition",
    icon: HeartPulse,
    status: "ACTIF",
    desc: "Conçu pour la collecte, le suivi et l’analyse des données présentant l’état nutritionnel en temps réel. Monitoring des indices de malnutrition par zone géographique.",
    stats: [
      { label: "Indicateurs", val: "150+" },
      { label: "Mise à jour", val: "Temps Réel" }
    ],
    image: "https://picsum.photos/seed/nutri-baro/800/600"
  },
  {
    title: "Baromètre ODD",
    icon: Globe2,
    status: "PRIORITÉ ONU",
    desc: "Plateforme dédiée au suivi de la dynamique des Objectifs de Développement Durable (ODD) au niveau national et local, facilitant la prise de décision stratégique.",
    stats: [
      { label: "Objectifs", val: "17 Cibles" },
      { label: "Couverture", val: "Nationale" }
    ],
    image: "https://picsum.photos/seed/odd-baro/800/600"
  },
  {
    title: "Baromètre Agro-Climato",
    icon: Sprout,
    status: "DONNÉES SATELLITE",
    desc: "Mesure en temps réel de l'humidité, température, vitesse du vent et gaz à effet de serre. Aide les agriculteurs à optimiser leurs pratiques et accroître leur productivité.",
    stats: [
      { label: "Sources", val: "Spatiales" },
      { label: "Précision", val: "92%" }
    ],
    image: "https://picsum.photos/seed/agro-baro/800/600"
  },
  {
    title: "Baromètre des Communes (IBDC)",
    icon: Building2,
    status: "INNOVATION LOCALE",
    desc: "Suivi-évaluation des Objectifs de Développement Durable (ODD) et du Plan de Développement Communal (PDC) pour les collectivités territoriales décentralisées.",
    stats: [
      { label: "Périmètre", val: "Communes" },
      { label: "Impact", val: "Localisé" }
    ],
    image: "https://picsum.photos/seed/city-baro/800/600"
  }
];

export default function Solutions() {
  return (
    <div className="flex flex-col">
      <section className="bg-white dark:bg-slate-950 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-8 tracking-tight">
              Nos Baromètres : <span className="text-blue-600">Outils de Décision Stratégique</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Plateformes analytiques de haute précision pour le suivi et l'évaluation d'impact des politiques de développement en Afrique.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {solutions.map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group"
              >
                <div className="h-72 relative overflow-hidden">
                  <img 
                    src={sol.image} 
                    alt={sol.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <sol.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-black tracking-tight">{sol.title}</h3>
                    </div>
                  </div>
                  <div className="absolute top-6 right-8">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-black text-blue-600 tracking-widest uppercase">
                      {sol.status}
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed font-medium">
                    {sol.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    {sol.stats.map((stat, i) => (
                      <div key={i} className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-xl font-black text-blue-600 tracking-tight">{stat.val}</p>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-black transition-all text-lg shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 active:scale-95"
                  >
                    Accéder au tableau de bord
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-8 tracking-tight">Besoin d'une analyse sectorielle spécifique ?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
            Nos experts peuvent concevoir des baromètres sur-mesure adaptés à vos besoins de monitoring institutionnel.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-black text-lg hover:bg-blue-50 transition-all shadow-2xl">
              Contacter un expert
            </Link>
            <Link to="/expertise" className="border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-xl font-black text-lg transition-all">
              Explorer la méthodologie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
