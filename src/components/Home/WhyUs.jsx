import { motion } from "framer-motion";
import { Link } from "react-router-dom";



export default function WhyUs() {
  const features = [
    { t: "Cuisine Créative", d: "Des saveurs authentiques revisitées." },
    {
      t: "Service Attentionné",
      d: "Une équipe professionnelle à votre écoute.",
    },
    { t: "Cadre Élégant", d: "Une décoration pensée pour le confort." },
    { t: "Qualité Garantie", d: "Des produits frais de producteurs locaux." },
  ];

  return (
    <>
      {" "}
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
              {features.map((f, i) => (
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
      <section className="py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase">
            Prêt pour l'inoubliable ?
          </h2>
          <Link
            to="/login"
            className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:bg-primary hover:text-white transition-all shadow-2xl"
          >
            RÉSERVER MAINTENANT
          </Link>
        </motion.div>
      </section>{" "}
    </>
  );
}
