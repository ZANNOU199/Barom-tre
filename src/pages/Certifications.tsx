import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, BookOpen, GraduationCap, Calendar, MapPin, CheckCircle2, Download, Headphones, Mail, Users, ArrowRight } from 'lucide-react';

const modules = [
  {
    title: "Fondamentaux en collecte et gestion des données",
    desc: "Principes de base de la structuration des données et des protocoles de collecte en économie de développement.",
    duration: "15 HEURES • THÉORIE",
  },
  {
    title: "Conception d'une collecte de données digitalisée",
    desc: "Maîtrise des outils numériques pour la digitalisation des questionnaires et la sécurisation des flux de données.",
    duration: "25 HEURES • TECHNIQUE",
  },
  {
    title: "Conduite d'une mission de collecte sur le terrain",
    desc: "Gestion opérationnelle des équipes d'enquêteurs et contrôle qualité en temps réel.",
    duration: "30 HEURES • OPÉRATIONNEL",
  },
  {
    title: "Gestion de base de données et analyses préliminaires",
    desc: "Nettoyage, structuration et premières analyses statistiques des données collectées.",
    duration: "20 HEURES • ANALYSE",
  },
  {
    title: "Immersion en milieu réel : travaux de terrain",
    desc: "Mise en pratique directe des acquis sur des projets de développement concrets.",
    duration: "30 HEURES • IMMERSION",
  }
];

const sessions = [
  {
    location: "Dakar, Sénégal",
    venue: "Institut des Sciences",
    dates: "15 Sept - 30 Nov 2024",
    status: "Inscriptions ouvertes",
    statusColor: "text-green-600 bg-green-100",
  },
  {
    location: "E-Learning (Hybride)",
    venue: "Plateforme Baromètre",
    dates: "01 Oct - 15 Déc 2024",
    status: "Dernières places",
    statusColor: "text-red-600 bg-red-100",
  },
  {
    location: "Abidjan, Côte d'Ivoire",
    venue: "Hôtel Tiama",
    dates: "Janvier 2025",
    status: "Pré-inscription",
    statusColor: "text-slate-600 bg-slate-100",
  }
];

export default function Certifications() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 to-blue-900 py-12 lg:py-24 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-amber-500/30">
                <Award className="w-4 h-4" />
                Standard d'Excellence Africain
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tight">
                Certificat de Qualification Professionnelle (CQP)
              </h1>
              <p className="text-lg lg:text-xl text-blue-100/90 max-w-2xl mb-10 leading-relaxed font-medium mx-auto lg:mx-0">
                Le programme de référence pour les experts en suivi-évaluation des politiques de développement en Afrique. Validé par les instances académiques internationales.
              </p>
              <div className="flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-bold">Diplôme d'État reconnu</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 border-l border-white/20 pl-6">
                  <GraduationCap className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-bold">+500 experts certifiés</span>
                </div>
              </div>
            </div>
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex items-center justify-center bg-white/5 rounded-full border-4 border-amber-500/50 backdrop-blur-sm relative">
              <Award className="w-24 h-24 sm:w-40 sm:h-40 text-amber-500 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]" />
              <div className="absolute -bottom-4 bg-amber-500 text-blue-950 font-black px-4 lg:px-6 py-2 rounded-lg text-xs lg:text-sm whitespace-nowrap shadow-xl">
                CQP 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="flex-1 space-y-24">
            {/* Objectifs */}
            <section>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-10 w-2 bg-amber-500 rounded-full" />
                <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Objectifs du programme</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Maîtrise de l'Impact", icon: Target, desc: "Concevoir des systèmes de suivi-évaluation rigoureux alignés sur les ODD." },
                  { title: "Data Governance", icon: BookOpen, desc: "Gérer et analyser les flux de données complexes pour la décision publique." },
                  { title: "Leadership Technique", icon: Users, desc: "Piloter des équipes multidisciplinaires dans des contextes de développement." }
                ].map((obj, i) => (
                  <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                      <obj.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-black text-xl mb-4 text-slate-900 dark:text-white">{obj.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{obj.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Modules */}
            <section>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-2 bg-amber-500 rounded-full" />
                  <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Modules de formation</h2>
                </div>
                <span className="inline-block w-fit text-[10px] font-black text-slate-500 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full uppercase tracking-widest">120 Heures de formation</span>
              </div>
              <div className="space-y-6">
                {modules.map((mod, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-start gap-6 lg:gap-8 p-6 lg:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-600/30 transition-all">
                    <div className="bg-blue-600/10 p-4 rounded-xl text-blue-600">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-2 text-slate-900 dark:text-white">{mod.title}</h4>
                      <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed font-medium">{mod.desc}</p>
                      <span className="text-xs font-black text-amber-600 uppercase tracking-[0.2em]">{mod.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Calendrier */}
            <section>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-10 w-2 bg-amber-500 rounded-full" />
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Prochaines sessions</h2>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                <div className="min-w-[800px]">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-950">
                      <tr>
                        <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Lieu</th>
                        <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Dates</th>
                        <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Statut</th>
                        <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {sessions.map((session, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                          <td className="p-6">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-600">
                                <MapPin className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="font-black text-slate-900 dark:text-white">{session.location}</div>
                                <div className="text-xs text-slate-500 font-medium">{session.venue}</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-6">
                            <div className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-slate-400" />
                              {session.dates}
                            </div>
                          </td>
                          <td className="p-6">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${session.statusColor}`}>
                              {session.status}
                            </span>
                          </td>
                          <td className="p-6 text-right">
                            <Link to="/contact" className="text-blue-600 font-black text-xs uppercase tracking-widest hover:underline">S'inscrire</Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-96">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 dark:text-white leading-tight">Session Septembre 2024</h3>
                    <p className="text-xs text-red-600 font-black uppercase tracking-widest mt-1">8 places restantes</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link to="/contact" className="w-full bg-blue-600 text-white font-black py-5 rounded-xl hover:bg-blue-700 hover:shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95">
                    S'inscrire maintenant
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button className="w-full border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-black py-5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3 active:scale-95">
                    <Download className="w-5 h-5" />
                    Brochure PDF (5.2 Mo)
                  </button>
                </div>
                <div className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-800">
                  <div className="mb-8">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Investissement</h4>
                    <div className="text-3xl font-black text-blue-600">300 000 FCFA</div>
                    <p className="text-xs text-slate-500 mt-1 font-medium">Frais de scolarité complets. Bourses disponibles.</p>
                  </div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Besoin d'aide ?</h4>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-600">
                        <Headphones className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Conseiller pédagogique</p>
                        <p className="text-sm font-black text-slate-900 dark:text-white">+229 01 69 49 40 72</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-600">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email direct</p>
                        <p className="text-sm font-black text-slate-900 dark:text-white">certibaro@piebarometre.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Target(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
