import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    fetchProfile();
  }, [user, navigate]);

  const fetchProfile = async () => {
    if (!user) return;
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();
    setProfile(data);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await supabase.from("profiles").update(profile).eq("id", profile.id);
    setIsEditing(false);
    alert("Profil mis à jour !");
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  const deleteAccount = async () => {
    if (window.confirm("Êtes-vous sûr ? Cette action est irréversible.")) {
      // Logique de suppression (souvent gérée via une Edge Function pour auth.users)
      alert("Demande de suppression envoyée au service client.");
    }
  };

  if (!profile)
    return (
      <div className="pt-32 text-center text-primary">
        Chargement du dashboard...
      </div>
    );

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-28 px-6 pb-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Sidebar Sidebar */}
        <div className="bg-deep border border-accent/20 p-8 rounded-[2.5rem] h-fit">
          <div className="w-24 h-24 bg-primary rounded-3xl mx-auto mb-6 flex items-center justify-center text-4xl font-black shadow-2xl">
            {profile.full_name[0]}
          </div>
          <h2 className="text-center font-bold text-xl mb-1">
            {profile.full_name}
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            {profile.email}
          </p>

          <div className="space-y-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary transition-all text-sm font-bold"
            >
              MODIFIER PROFIL
            </button>
            <button
              onClick={handleLogout}
              className="w-full py-3 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all text-sm font-bold uppercase tracking-widest"
            >
              Déconnexion
            </button>
          </div>
        </div>

        {/* Main Content Dashboard */}
        <div className="md:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-deep border border-accent/20 p-10 rounded-[2.5rem]"
          >
            <h3 className="text-2xl font-black mb-8 italic uppercase tracking-tighter text-primary">
              Informations personnelles
            </h3>

            <form onSubmit={handleUpdate} className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gray-500 tracking-[0.2em] ml-1">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    disabled={!isEditing}
                    className="w-full bg-dark-bg/50 border border-accent/30 rounded-2xl p-4 outline-none focus:border-primary disabled:opacity-50"
                    value={profile.full_name}
                    onChange={(e) =>
                      setProfile({ ...profile, full_name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gray-500 tracking-[0.2em] ml-1">
                    Téléphone
                  </label>
                  <input
                    type="text"
                    disabled={!isEditing}
                    className="w-full bg-dark-bg/50 border border-accent/30 rounded-2xl p-4 outline-none focus:border-primary disabled:opacity-50"
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              {isEditing && (
                <button
                  type="submit"
                  className="bg-primary py-4 rounded-2xl font-black shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform"
                >
                  ENREGISTRER LES MODIFICATIONS
                </button>
              )}
            </form>
          </motion.div>

          <div className="p-8 border border-red-500/20 rounded-[2.5rem] bg-red-500/5">
            <h4 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">
              Zone de danger
            </h4>
            <p className="text-gray-500 text-xs mb-4">
              La suppression de votre compte effacera toutes vos données de
              réservation et de panier.
            </p>
            <button
              onClick={deleteAccount}
              className="text-red-500 text-xs font-black underline underline-offset-4 hover:text-red-400"
            >
              SUPPRIMER MON COMPTE DÉFINITIVEMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
