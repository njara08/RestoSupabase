import { motion } from "framer-motion";

export default function Commitments() {
  const tags = [
    "Qualité constante",
    "Fraîcheur garantie",
    "Pratiques responsables",
    "Satisfaction totale",
  ];

  return (
    <section className="py-24 bg-[linear-gradient(45deg,#190027,#410160)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {tags.map((text, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary/50">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
              <h5 className="font-bold tracking-widest text-xs uppercase">
                {text}
              </h5>
            </div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 text-3xl font-light italic text-gray-300"
        >
          "Notre restaurant est plus qu’un lieu de restauration : c’est un
          espace de partage, de découverte et d’émotion."
        </motion.p>
      </div>
    </section>
  );
}
