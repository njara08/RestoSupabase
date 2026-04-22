import { motion } from "framer-motion";

export default function Team() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2 order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400"
              className="rounded-2xl h-64 w-full object-cover mt-8"
              alt="Chef"
            />
            <img
              src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400"
              className="rounded-2xl h-64 w-full object-cover"
              alt="Service"
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 order-1 md:order-2"
        >
          <h2 className="text-4xl font-bold mb-6">
            Derrière chaque plat se cache une{" "}
            <span className="text-primary italic">équipe engagée</span>.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Notre chef et son équipe mettent tout leur talent au service de
            votre assiette pour un service irréprochable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
