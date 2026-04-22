import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/layouts/Layout";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    fetchProfile();
    fetchCart();
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

  const fetchCart = async () => {
    if (!user) return;
    const { data } = await supabase
      .from("cart")
      .select("*, menu(*)")
      .eq("user_id", user.id);
    setCartItems(data || []);
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
      // Delete profile
      await supabase.from("profiles").delete().eq("id", user.id);
      // Delete cart items
      await supabase.from("cart").delete().eq("user_id", user.id);
      // Sign out
      await signOut();
      navigate("/");
    }
  };

  if (!profile) {
    return (
      <Layout>
        <div className="pt-32 text-center text-primary">
          Chargement du dashboard...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-dark-bg text-white pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-black mb-10 uppercase tracking-tighter">
            Mon <span className="text-primary italic">Dashboard</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PROFIL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-deep/50 border border-accent/20 p-8 rounded-[2.5rem]"
            >
              <h2 className="text-2xl font-bold mb-6">Mon Profil</h2>

              {isEditing ? (
                <form onSubmit={handleUpdate} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      value={profile.full_name}
                      onChange={(e) =>
                        setProfile({ ...profile, full_name: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="text"
                      value={profile.phone}
                      onChange={(e) =>
                        setProfile({ ...profile, phone: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-primary px-6 py-2 rounded-xl font-bold"
                    >
                      Sauvegarder
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="bg-gray-600 px-6 py-2 rounded-xl font-bold"
                    >
                      Annuler
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <p>
                    <strong>Nom:</strong> {profile.full_name}
                  </p>
                  <p>
                    <strong>Email:</strong> {profile.email}
                  </p>
                  <p>
                    <strong>Téléphone:</strong> {profile.phone}
                  </p>
                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={() => setIsEditing(true)}
                      className="bg-primary px-6 py-2 rounded-xl font-bold"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={handleLogout}
                      className="bg-red-600 px-6 py-2 rounded-xl font-bold"
                    >
                      Déconnexion
                    </button>
                  </div>
                </div>
              )}
            </motion.div>

            {/* PANIER RAPIDE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-deep/50 border border-accent/20 p-8 rounded-[2.5rem]"
            >
              <h2 className="text-2xl font-bold mb-6">
                Mon Panier ({cartItems.length})
              </h2>

              {cartItems.length > 0 ? (
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 bg-white/5 p-4 rounded-xl"
                    >
                      <img
                        src={item.menu.image_url}
                        className="w-12 h-12 rounded-lg object-cover"
                        alt=""
                      />
                      <div className="flex-grow">
                        <h3 className="font-bold text-sm">{item.menu.name}</h3>
                        <p className="text-primary font-black">
                          {item.menu.price} € x {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-lg font-bold">
                      Total:{" "}
                      {cartItems
                        .reduce(
                          (acc, item) => acc + item.menu.price * item.quantity,
                          0,
                        )
                        .toFixed(2)}{" "}
                      €
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">Votre panier est vide</p>
              )}

              <button
                onClick={() => navigate("/panier")}
                className="w-full mt-6 bg-[linear-gradient(45deg,#7505A5,#410160)] text-white py-3 rounded-xl font-bold"
              >
                Voir le Panier Complet
              </button>
            </motion.div>
          </div>

          {/* SUPPRESSION COMPTE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 bg-red-900/20 border border-red-500/30 p-6 rounded-[2.5rem]"
          >
            <h3 className="text-xl font-bold text-red-400 mb-4">
              Zone Dangereuse
            </h3>
            <p className="text-gray-400 mb-4">
              Supprimer votre compte entraînera la perte de toutes vos données.
              Cette action est irréversible.
            </p>
            <button
              onClick={deleteAccount}
              className="bg-red-600 px-6 py-2 rounded-xl font-bold hover:bg-red-700"
            >
              Supprimer mon compte
            </button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
