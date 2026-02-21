import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, Rss, Share2, Bookmark } from 'lucide-react';

const news = [
  {
    title: "Camp des évaluateurs émergents francophones 2025 - 8è édition",
    category: "Formation",
    date: "02 - 08 Novembre 2025",
    desc: "Un creuset annuel itinérant propice à la création de viviers d'expertises. Thème : Développer les compétences clés pour le marché de l'évaluation.",
    image: "https://picsum.photos/seed/camp/800/600",
  },
  {
    title: "Atelier de vacances des évaluateurs en herbe - 4e édition",
    category: "Atelier",
    date: "Juillet 2025",
    desc: "Une activité enrichissante et ludique pour initier les plus jeunes à la culture de l'évaluation et de la donnée.",
    image: "https://picsum.photos/seed/kids/800/600",
  },
  {
    title: "Webinaire : Exploiter Power BI pour l'analyse et l'interprétation des données",
    category: "Webinaire",
    date: "15 Mai 2025",
    desc: "Démonstration pratique et apprentissage actif sur l'utilisation de Power BI dans le suivi-évaluation.",
    image: "https://picsum.photos/seed/powerbi/800/600",
  },
  {
    title: "Semaine mondiale de l'évaluation gLocal 2025",
    category: "Événement",
    date: "03 - 06 Juin 2025",
    desc: "Le Baromètre vous invite à participer à cette semaine mondiale dédiée au partage de connaissances en évaluation.",
    image: "https://picsum.photos/seed/glocal/800/600",
  }
];

export default function News() {
  return (
    <div className="flex flex-col">
      <section className="bg-white dark:bg-slate-950 pt-12 lg:pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="hidden sm:flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <a href="/" className="hover:text-blue-600">Accueil</a>
            <ArrowRight className="w-3 h-3" />
            <span className="text-slate-900 dark:text-white">Actualités & Événements</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16">
            <div className="max-w-3xl text-center md:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-8 tracking-tight">
                Actualités, Webinaires et <span className="text-blue-600">Publications</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Suivez l'impact et le suivi des politiques de développement en Afrique à travers nos rapports et événements exclusifs.
              </p>
            </div>
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-black text-xs uppercase tracking-widest">
              <Rss className="w-4 h-4" /> S'abonner
            </button>
          </div>

          {/* Featured */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-950 aspect-video lg:aspect-[21/9] flex items-end mb-16 lg:mb-24 shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-60" style={{ backgroundImage: "url('https://picsum.photos/seed/featured/1600/900')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="relative p-6 lg:p-12 w-full max-w-4xl">
              <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black tracking-[0.3em] uppercase rounded-lg mb-4 lg:mb-6 shadow-lg shadow-blue-600/20">
                À la une • Publication
              </span>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-4 lg:mb-6 leading-tight tracking-tight">Évaluation de l'impact des politiques de développement en Afrique de l'Ouest 2024</h3>
              <p className="text-slate-200 text-sm lg:text-xl mb-6 lg:mb-8 line-clamp-2 max-w-2xl font-medium">Découvrez les conclusions majeures de notre dernier rapport institutionnel sur l'efficacité des interventions publiques et privées.</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-8">
                <button className="w-full sm:w-auto bg-white text-slate-950 px-8 py-4 rounded-xl font-black text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-3 active:scale-95">
                  Lire le rapport <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 text-slate-400 text-xs lg:text-sm font-bold italic">
                  <Clock className="w-4 h-4" />
                  15 Octobre 2023 • 12 min
                </div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
            {news.map((item, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col"
              >
                <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[4/3] shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-xl">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-base mb-8 line-clamp-2 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                    <button className="text-blue-600 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-4 text-slate-400">
                      <Share2 className="w-4 h-4 cursor-pointer hover:text-blue-600 transition-colors" />
                      <Bookmark className="w-4 h-4 cursor-pointer hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
