import { motion } from "framer-motion";

export default function Philosophy() {
  const items = [
    {
      title: "Ingrédients Frais",
      icon: "🌱",
      desc: "Produits de saison rigoureusement sélectionnés.",
    },
    {
      title: "Producteurs Locaux",
      icon: "🤝",
      desc: "Des partenariats basés sur la confiance et la proximité.",
    },
    {
      title: "Respect des Saveurs",
      icon: "✨",
      desc: "Une cuisine authentique, entre tradition et innovation.",
    },
  ];

  return (
    <section className="py-24 bg-deep/50 border-y border-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Notre Philosophie</h2>
          <p className="text-gray-400">
            La bonne cuisine commence par de bons produits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-dark-bg p-10 rounded-3xl border border-accent/30 text-center group transition-all hover:border-primary/50"
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h4 className="text-xl font-bold mb-4 text-primary">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
