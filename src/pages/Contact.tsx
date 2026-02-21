import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Building2, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="bg-white dark:bg-slate-950 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-8 tracking-tight">
              Contact et Demande de <span className="text-blue-600">Consultation</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Institut Africain de Suivi et d'Évaluation des Politiques de Développement. Partenaire stratégique pour l'analyse d'impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-20">
            {/* Info */}
            <div className="lg:col-span-5 space-y-16">
              <section>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-10 w-2 bg-blue-600 rounded-full" />
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Nos Coordonnées</h3>
                </div>
                <div className="space-y-8">
                  {[
                    { title: "Siège Social", icon: MapPin, val: "Fidjrossè - Centre\nCotonou, Bénin" },
                    { title: "Téléphone", icon: Phone, val: "+229 01 69 49 40 72" },
                    { title: "Email", icon: Mail, val: "info@piebarometre.com\ncontact@lebarometre.africa" }
                  ].map((info, i) => (
                    <div key={i} className="flex items-start gap-6 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-800 group">
                      <div className="w-14 h-14 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 dark:text-white mb-2">{info.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed whitespace-pre-line font-medium">
                          {info.val}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Map Placeholder */}
              <div className="h-80 w-full rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm relative group">
                <img 
                  src="https://picsum.photos/seed/map/800/600?grayscale" 
                  alt="Map" 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-800">
                    <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping" />
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Lomé Headquarters</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 md:p-16 shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10">
                  <div className="mb-12">
                    <h3 className="text-3xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">Demander une consultation</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Veuillez remplir le formulaire ci-dessous pour qualifier votre projet d'évaluation.</p>
                  </div>
                  <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Nom Complet</label>
                        <input className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 dark:bg-slate-950 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all outline-none font-medium" placeholder="Jean Dupont" type="text" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Email Professionnel</label>
                        <input className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 dark:bg-slate-950 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all outline-none font-medium" placeholder="nom@organisation.org" type="email" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Type d'Organisation</label>
                        <div className="relative">
                          <select className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 dark:bg-slate-950 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all outline-none font-medium appearance-none">
                            <option value="">Sélectionner...</option>
                            <option>Institution Gouvernementale</option>
                            <option>Organisme International</option>
                            <option>ONG / Société Civile</option>
                            <option>Secteur Privé</option>
                          </select>
                          <Building2 className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Domaine d'Intérêt</label>
                        <div className="relative">
                          <select className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 dark:bg-slate-950 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all outline-none font-medium appearance-none">
                            <option value="">Choisir un domaine...</option>
                            <option>Évaluation d'Impact</option>
                            <option>Suivi de Performance</option>
                            <option>Analyse de Politiques</option>
                            <option>Renforcement de Capacités</option>
                          </select>
                          <Globe className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Description du Projet</label>
                      <textarea className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 dark:bg-slate-950 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all outline-none font-medium resize-none" placeholder="Décrivez brièvement vos besoins..." rows={5}></textarea>
                    </div>
                    <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-8">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed max-w-[300px]">
                        En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
                      </p>
                      <button className="w-full md:w-auto min-w-[240px] bg-red-600 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/30 transition-all flex items-center justify-center gap-3 active:scale-95" type="submit">
                        Envoyer ma demande
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
