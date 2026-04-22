import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroHome() {
  return (
    <section className="relative h-screen flex items-center justify-center px-6">
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
  );
}
