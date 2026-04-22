import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Erreur: " + error.message);
    } else {
      navigate("/panier");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-deep border border-accent/30 p-10 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-linear-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-white font-black text-3xl">L</span>
          </div>
        </div>

        <h2 className="text-3xl font-black text-center text-white mb-8 uppercase tracking-tighter">
          Connexion
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-dark-bg border border-accent/50 rounded-xl p-4 text-white focus:border-primary outline-none transition-all"
              placeholder="votre@email.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">
              Mot de passe
            </label>
            <input
              type="password"
              className="w-full bg-dark-bg border border-accent/50 rounded-xl p-4 text-white focus:border-primary outline-none transition-all"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-[linear-gradient(45deg,#7505A5,#410160)] py-4 rounded-xl font-bold text-white shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform mt-6"
          >
            {loading ? "VÉRIFICATION..." : "SE CONNECTER"}
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Nouveau chez L'Éveil ?{" "}
          <Link
            to="/signup"
            className="text-primary font-bold hover:underline ml-1"
          >
            Créer un profil
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
