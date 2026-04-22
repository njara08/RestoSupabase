import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
      <section className="relative h-screen flex items-center justify-center px-6">
        {/* Effet de lumière en arrière-plan */}
        <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-primary/20 rounded-full blur-[120px]" />

        <div className="text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
          >
            L'ÉLÉGANCE <br />{" "}
            <span className="text-primary">DANS L'ASSIETTE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 font-light"
          >
            Une expérience culinaire immersive où la tradition rencontre
            l'innovation nocturne.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Link
              to="/login"
              className="bg-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(117,5,165,0.5)] transition-all"
            >
              Réserver une table
            </Link>
            <button className="border border-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-accent transition-all">
              Voir le Menu
            </button>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-deep">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 grid-rows-2 gap-4 h-150">
          <div className="md:col-span-2 md:row-span-2 bg-accent rounded-3xl overflow-hidden relative group">
            <img
              src="URL_TABLE_CHIC"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="relative z-10 p-10 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-bold">Dîner aux chandelles</h3>
              <p className="text-gray-300">
                Un cadre intimiste sous des lumières néon violettes.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 bg-primary/20 rounded-3xl border border-primary/30 flex items-center justify-center p-10 text-center">
            <p className="text-2xl italic font-serif text-white">
              "La gastronomie est l'art d'utiliser de la nourriture pour créer
              du bonheur."
            </p>
          </div>
          <div className="bg-deep rounded-3xl border border-accent p-6 flex flex-col justify-center items-center">
            <span className="text-4xl font-bold text-primary">DJ Set</span>
            <p className="text-sm text-gray-400">Tous les vendredis</p>
          </div>
          <div className="bg-deep rounded-3xl border border-accent p-6 flex flex-col justify-center items-center">
            <span className="text-4xl font-bold text-primary">VIP</span>
            <p className="text-sm text-gray-400">Salons privés</p>
          </div>
        </div>
      </section>
      {/* --- SECTION CUISINE : Passion & Créativité --- */}
      <section className="py-24 px-6 bg-deep/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="relative group">
            <div className="absolute -inset-2 bg-linear-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800"
              className="rounded-3xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              alt="Cuisine Raffinée"
            />
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Une cuisine qui <span className="text-primary">évolue</span> avec
              les saisons.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Chaque plat est élaboré avec passion par notre chef et son équipe,
              alliant techniques modernes et inspirations traditionnelles. Le
              résultat : des assiettes savoureuses, équilibrées et visuellement
              élégantes.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 text-sm font-bold uppercase tracking-widest text-primary">
              <div className="flex items-center gap-3">
                {" "}
                <span className="w-2 h-2 bg-primary rounded-full"></span>{" "}
                Fraîcheur
              </div>
              <div className="flex items-center gap-3">
                {" "}
                <span className="w-2 h-2 bg-primary rounded-full"></span>{" "}
                Créativité
              </div>
              <div className="flex items-center gap-3">
                {" "}
                <span className="w-2 h-2 bg-primary rounded-full"></span>{" "}
                Authenticité
              </div>
              <div className="flex items-center gap-3">
                {" "}
                <span className="w-2 h-2 bg-primary rounded-full"></span>{" "}
                Élégance
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION OCCASIONS : Adapté à vos envies --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pour chaque moment de vie</h2>
          <p className="text-gray-500 italic">
            Notre établissement s'adapte à toutes vos envies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { t: "Déjeuners Pro", desc: "Efficacité et discrétion." },
            { t: "Dîners Romantiques", desc: "Intimité et lumière tamisée." },
            { t: "Repas en Famille", desc: "Convivialité et partage." },
            { t: "Événements Privés", desc: "Sur mesure et exclusif." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all"
            >
              <h4 className="text-xl font-bold mb-3">{item.t}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION "POURQUOI NOUS ?" --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-right"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <h2 className="text-5xl font-black uppercase tracking-tighter md:w-1/3">
              Prenez le temps <br />{" "}
              <span className="text-primary italic font-serif">
                de savourer.
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3">
              {[
                {
                  t: "Cuisine Créative",
                  d: "Des saveurs authentiques revisitées.",
                },
                {
                  t: "Service Attentionné",
                  d: "Une équipe professionnelle à votre écoute.",
                },
                {
                  t: "Cadre Élégant",
                  d: "Une décoration pensée pour le confort.",
                },
                {
                  t: "Qualité Garantie",
                  d: "Des produits frais de producteurs locaux.",
                },
              ].map((f, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-primary text-2xl">✨</span>
                  <div>
                    <h5 className="font-bold mb-1">{f.t}</h5>
                    <p className="text-gray-400 text-sm">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-32 px-6 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            PRÊT POUR L'INOUBLIABLE ?
          </h2>
          <Link
            to="/login"
            className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:bg-primary hover:text-white transition-all shadow-2xl"
          >
            RÉSERVER MAINTENANT
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
