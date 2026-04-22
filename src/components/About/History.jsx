import { motion } from "framer-motion";

export default function History() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary mb-6 font-bold">
            L'Origine
          </h2>
          <h3 className="text-4xl font-bold mb-8 leading-tight">
            Notre histoire : <br /> Une passion pour l'accueil.
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Notre restaurant est né d’une passion profonde pour la cuisine et le
            plaisir de recevoir.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Ce projet a vu le jour grâce à une équipe de passionnés, animés par
            l’envie de partager leur savoir-faire.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 border border-primary/30 rounded-3xl -rotate-3" />
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800"
            className="rounded-2xl relative z-10 shadow-2xl"
            alt="Cuisine"
          />
        </motion.div>
      </div>
    </section>
  );
}
