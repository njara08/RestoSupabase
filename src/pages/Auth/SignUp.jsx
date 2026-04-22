import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SignUp() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Inscription dans Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (authError) {
      alert(authError.message);
    } else if (authData.user) {
      // 2. Insertion dans ta table 'profiles' selon ta structure exacte
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: authData.user.id,
          full_name: formData.full_name,
          phone: formData.phone,
          email: formData.email,
          password: formData.password, // Ton champ spécifique
        },
      ]);

      if (profileError) {
        alert("Erreur profil: " + profileError.message);
      } else {
        alert("Compte créé avec succès !");
        navigate("/login");
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-deep border border-accent/30 p-8 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-black text-center text-white mb-2 uppercase tracking-tighter">
          Rejoindre <span className="text-primary">L'Éveil</span>
        </h2>
        <p className="text-gray-400 text-center text-sm mb-8 font-light">
          Créez votre profil gastronomique
        </p>

        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="text"
            placeholder="Nom complet"
            required
            className="w-full bg-dark-bg/50 border border-accent/50 rounded-xl p-4 text-white focus:border-primary outline-none transition-all"
            onChange={(e) =>
              setFormData({ ...formData, full_name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Téléphone"
            required
            className="w-full bg-dark-bg/50 border border-accent/50 rounded-xl p-4 text-white focus:border-primary outline-none transition-all"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Adresse Email"
            required
            className="w-full bg-dark-bg/50 border border-accent/50 rounded-xl p-4 text-white focus:border-primary outline-none transition-all"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            className="w-full bg-dark-bg/50 border border-accent/50 rounded-xl p-4 text-white focus:border-primary outline-none transition-all"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button
            disabled={loading}
            className="w-full bg-[linear-gradient(45deg,#7505A5,#410160)] py-4 rounded-xl font-bold text-white shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform mt-4"
          >
            {loading ? "CRÉATION..." : "S'INSCRIRE"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Déjà membre ?{" "}
          <Link
            to="/login"
            className="text-primary font-bold hover:underline ml-1"
          >
            Se connecter
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
