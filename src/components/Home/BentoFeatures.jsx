export default function BentoFeatures() {
  return (
    <section className="py-24 bg-deep">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 grid-rows-2 gap-4 h-150">
        <div className="md:col-span-2 md:row-span-2 bg-accent rounded-3xl overflow-hidden relative group">
          <img
            src="https://images.unsplash.com/photo-1550966842-28c460144983?w=800"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            alt="Table"
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
            "La gastronomie est l'art d'utiliser de la nourriture pour créer du
            bonheur."
          </p>
        </div>
        <div className="bg-deep rounded-3xl border border-accent p-6 flex flex-col justify-center items-center text-center">
          <span className="text-4xl font-bold text-primary">DJ Set</span>
          <p className="text-sm text-gray-400">Tous les vendredis</p>
        </div>
        <div className="bg-deep rounded-3xl border border-accent p-6 flex flex-col justify-center items-center text-center">
          <span className="text-4xl font-bold text-primary">VIP</span>
          <p className="text-sm text-gray-400">Salons privés</p>
        </div>
      </div>
    </section>
  );
}
