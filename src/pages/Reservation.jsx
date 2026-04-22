import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

export default function Reservation() {
  // --- ÉTATS POUR LE FORMULAIRE ---
  const [formData, setFormData] = useState({
    full_name: "",
    guest_count: "",
    reservation_date: "",
    preference: "Intérieur",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // --- FONCTION D'ENVOI ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("reservation").insert([
      {
        full_name: formData.full_name,
        guest_count: parseInt(formData.guest_count),
        reservation_date: formData.reservation_date,
        preference: formData.preference,
        message: formData.message,
      },
    ]);

    if (error) {
      alert("Erreur lors de la réservation : " + error.message);
    } else {
      alert("Votre table a été réservée avec succès !");
      setFormData({
        full_name: "",
        guest_count: "",
        reservation_date: "",
        preference: "Intérieur",
        message: "",
      });
    }
    setLoading(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-28 pb-20 px-6">
      {/* --- HEADER DE SECTION --- */}
      <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
          Réserver{" "}
          <span className="text-primary italic font-serif lowercase">
            votre table
          </span>
        </h1>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          Nous vous invitons à réserver à l’avance afin de garantir votre place
          et de vous offrir le meilleur accueil possible. Que ce soit pour un
          dîner romantique ou une célébration spéciale.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* --- COLONNE 1 : INFOS & HORAIRES --- */}
        <motion.div {...fadeInUp} className="space-y-8">
          <div className="bg-deep border border-accent/30 p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="text-primary text-2xl">🕒</span> Horaires
              d'ouverture
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Lundi – Vendredi</span>
                <span className="text-white font-medium">11h30 – 22h00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Samedi</span>
                <span className="text-white font-medium">12h00 – 23h00</span>
              </li>
              <li className="flex justify-between text-gray-500 italic">
                <span>Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-4">📞 Modes de réservation</h3>
            <p className="text-sm text-gray-400 mb-6">
              Choisissez la méthode qui vous convient :
            </p>
            <div className="space-y-3">
              <div className="bg-dark-bg p-4 rounded-xl border border-accent/20 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  📱
                </div>
                <span className="text-sm">+261 34 00 000 00</span>
              </div>
              <div className="bg-dark-bg p-4 rounded-xl border border-accent/20 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  📍
                </div>
                <span className="text-sm">Directement sur place</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- COLONNE 2 : LE FORMULAIRE --- */}
        <motion.div
          {...fadeInUp}
          className="lg:col-span-2 bg-[linear-gradient(145deg,#1E012F,#190027)] border border-primary/20 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />

          <h3 className="text-2xl font-bold mb-8 italic">
            Formulaire en ligne
          </h3>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">
                Nom complet
              </label>
              <input
                required
                type="text"
                className="w-full bg-dark-bg/50 border border-accent/50 rounded-xl p-4 outline-none focus:border-primary transition-all text-white"
                placeholder="Votre nom"
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({ ...formData, full_name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">
                Nombre de personnes
              </label>
              <input
                required
                type="number"
                className="w-full bg-dark-bg/50 border border-accent/50 rounded-xl p-4 outline-none focus:border-primary transition-all text-white"
                placeholder="Ex: 4"
                value={formData.guest_count}
                onChange={(e) =>
                  setFormData({ ...formData, guest_count: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">
                Date souhaitée
              </label>
              <input
                required
                type="date"
                className="w-full bg-dark-bg/50 border border-accent/50 rounded-xl p-4 outline-none focus:border-primary transition-all text-gray-400"
                value={formData.reservation_date}
                onChange={(e) =>
                  setFormData({ ...formData, reservation_date: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">
                Préférences
              </label>
              <select
                className="w-full bg-dark-bg/50 border border-accent/50 rounded-xl p-4 outline-none focus:border-primary transition-all text-gray-400"
                value={formData.preference}
                onChange={(e) =>
                  setFormData({ ...formData, preference: e.target.value })
                }
              >
                <option value="Intérieur">Intérieur</option>
                <option value="Extérieur / Terrasse">
                  Extérieur / Terrasse
                </option>
                <option value="Occasion spéciale">Occasion spéciale</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">
                Message ou demande particulière
              </label>
              <textarea
                rows="3"
                className="w-full bg-dark-bg/50 border border-accent/50 rounded-xl p-4 outline-none focus:border-primary transition-all text-white"
                placeholder="Précisez ici vos envies..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              disabled={loading}
              className="md:col-span-2 bg-[linear-gradient(45deg,#7505A5,#410160)] py-5 rounded-2xl font-black text-lg tracking-widest hover:scale-[1.01] transition-transform shadow-xl shadow-primary/20 disabled:opacity-50"
            >
              {loading ? "ENVOI..." : "CONFIRMER LA RÉSERVATION"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* --- SECTION INFOS BAS DE PAGE --- */}
      <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
        <motion.div
          {...fadeInUp}
          className="bg-primary/5 border border-primary/20 p-8 rounded-3xl"
        >
          <h4 className="text-xl font-bold mb-4 text-primary uppercase tracking-tighter">
            🎉 Événements & Groupes
          </h4>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Anniversaires, repas d’entreprise ou événements privés : nous
            proposons des formules adaptées et un accompagnement personnalisé.
          </p>
          <div className="flex gap-4 text-xs font-bold text-white/70">
            <span className="bg-accent/40 px-3 py-1 rounded-full border border-accent/50">
              Sur-mesure
            </span>
            <span className="bg-accent/40 px-3 py-1 rounded-full border border-accent/50">
              Accompagnement
            </span>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="bg-white/5 border border-white/10 p-8 rounded-3xl"
        >
          <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">
            ⚠️ Politique de réservation
          </h4>
          <ul className="text-sm text-gray-400 space-y-2 italic">
            <li>• Merci de respecter l’heure prévue de votre venue.</li>
            <li>• Prévenez-nous au moins 2h à l'avance en cas d'annulation.</li>
            <li>
              • Une confirmation peut être demandée pour les groupes de plus de
              8 personnes.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
