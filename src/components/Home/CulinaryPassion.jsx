import { motion } from "framer-motion";

export default function CulinaryPassion() {
  return (
    <section className="py-24 px-6 bg-deep/30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-linear-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800"
            className="rounded-3xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            alt="Cuisine Raffinée"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Une cuisine qui <span className="text-primary">évolue</span> avec
            les saisons.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Chaque plat est élaboré avec passion par notre chef, alliant
            techniques modernes et inspirations traditionnelles.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4 text-sm font-bold uppercase tracking-widest text-primary">
            {["Fraîcheur", "Créativité", "Authenticité", "Élégance"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>{" "}
                  {item}
                </div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
