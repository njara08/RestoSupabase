import { motion } from "framer-motion";

export default function HeroAbout() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden min-h-screen bg-dark-bg text-white pt-24">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600"
          className="w-full h-full object-cover opacity-40 grayscale"
          alt="Ambiance"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-transparent to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4">
          Notre{" "}
          <span className="text-primary italic font-serif lowercase">
            essence
          </span>
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>
    </section>
  );
}
