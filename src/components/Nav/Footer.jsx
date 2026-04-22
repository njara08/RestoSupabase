export default function Footer() {
  return (
    <footer className="bg-accent border-t border-accent/50 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Slogan */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black tracking-tighter text-white mb-4">
              L'ÉVEIL <span className="text-primary text-3xl">.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Une immersion sensorielle au cœur de la gastronomie moderne.
              Ouvert tous les soirs pour vos moments d'exception.
            </p>
          </div>

          {/* Navigation Rapide */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Navigation
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="/" className="hover:text-primary transition">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:text-primary transition">
                  Le Menu
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition">
                  À Propos
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-primary transition">
                  Réservations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Horaires */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Contact
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>📍 123 Avenue des Saveurs, Antananarivo</li>
              <li>📞 +261 34 00 000 00</li>
              <li>✉️ contact@leveil-restaurant.mg</li>
              <li className="pt-2 text-primary">Mar - Dim : 18:00 - 23:30</li>
            </ul>
          </div>

          {/* Newsletter / Socials */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Suivez-nous
            </h4>
            <div className="flex gap-4 mb-6">
              {["FB", "IG", "TW"].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-xs font-bold hover:bg-primary hover:border-primary transition-all cursor-pointer"
                >
                  {social}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 italic">
              Inscrivez-vous pour nos soirées privées.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2026 L'ÉVEIL Restaurant. Développé avec passion.</p>
          <div className="flex gap-6">
            <span>Mentions Légales</span>
            <span>Politique de Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
