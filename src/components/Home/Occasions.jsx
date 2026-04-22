import { motion } from "framer-motion";

export function Occasions() {
  const items = [
    { t: "Déjeuners Pro", desc: "Efficacité et discrétion." },
    { t: "Dîners Romantiques", desc: "Intimité et lumière tamisée." },
    { t: "Repas en Famille", desc: "Convivialité et partage." },
    { t: "Événements Privés", desc: "Sur mesure et exclusif." },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Pour chaque moment de vie</h2>
        <p className="text-gray-500 italic">
          Notre établissement s'adapte à toutes vos envies.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all"
          >
            <h4 className="text-xl font-bold mb-3">{item.t}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
