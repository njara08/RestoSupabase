import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // États pour la recherche et les filtres
  const [searchTerm, setSearchTerm] = useState("");
  const [onlyVegan, setOnlyVegan] = useState(false);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    setLoading(true);
    const { data: cats } = await supabase.from("categories").select("*");
    setCategories(cats || []);

    const { data: items } = await supabase
      .from("menu")
      .select("*, menu_details(*)");

    setMenuItems(items || []);
    setLoading(false);
  };

  // Logique de filtrage combinée (Recherche + Catégorie + Vegan)
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || item.category_id === activeCategory;
    const matchesVegan = !onlyVegan || item.menu_details?.[0]?.is_vegan;

    return matchesSearch && matchesCategory && matchesVegan;
  });

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-28 pb-20 px-6 font-sans">
      {/* HEADER & BARRE DE RECHERCHE */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8">
          La <span className="text-primary italic font-serif">Carte</span>
        </h1>

        {/* Barre de recherche Pro */}
        <div className="max-w-2xl mx-auto relative group">
          <input
            type="text"
            placeholder="Rechercher un plat, un ingrédient..."
            className="w-full bg-deep/50 border border-accent/30 rounded-2xl py-4 px-12 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">
            🔍
          </span>
        </div>
      </div>

      {/* FILTRES RAPIDES */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-white/5 pb-8">
        {/* Onglets Catégories */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-xl text-xs font-bold tracking-widest transition-all ${activeCategory === "all" ? "bg-primary text-white" : "bg-white/5 text-gray-400 border border-white/10 hover:border-primary/50"}`}
          >
            TOUT
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-xl text-xs font-bold tracking-widest transition-all ${activeCategory === cat.id ? "bg-primary text-white" : "bg-white/5 text-gray-400 border border-white/10 hover:border-primary/50"}`}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Toggle Filtre Spécifique */}
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              className="hidden"
              checked={onlyVegan}
              onChange={() => setOnlyVegan(!onlyVegan)}
            />
            <div
              className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${onlyVegan ? "bg-green-500 border-green-500" : "border-gray-600 group-hover:border-primary"}`}
            >
              {onlyVegan && <span className="text-[10px]">✔</span>}
            </div>
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors uppercase tracking-tighter">
              Option Vegan
            </span>
          </label>
        </div>
      </div>

      {/* RÉSULTATS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="group bg-deep/40 border border-accent/20 rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image_url}
                  className="w-full h-full object-cover group-hover:scale-110 transition-duration-700"
                  alt={item.name}
                />
                <div className="absolute top-4 right-4 bg-dark-bg/90 backdrop-blur-md px-4 py-1 rounded-full border border-primary/30 text-primary font-black">
                  {item.price} €
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 italic font-light leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-auto flex justify-between items-center">
                  <div className="flex gap-2">
                    {item.menu_details?.[0]?.is_vegan && (
                      <span className="text-[10px] text-green-500 font-bold border border-green-500/30 px-2 py-0.5 rounded">
                        VEGAN
                      </span>
                    )}
                    {item.menu_details?.[0]?.is_gluten_free && (
                      <span className="text-[10px] text-blue-400 font-bold border border-blue-400/30 px-2 py-0.5 rounded">
                        GF
                      </span>
                    )}
                  </div>
                  <button className="bg-[linear-gradient(45deg,#7505A5,#410160)] text-white px-5 py-2 rounded-xl text-xs font-black hover:shadow-lg hover:shadow-primary/30 transition-all">
                    AJOUTER
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredItems.length === 0 && !loading && (
        <div className="text-center py-20">
          <p className="text-gray-500 italic text-xl">
            Aucun plat ne correspond à votre recherche... 🍽️
          </p>
        </div>
      )}
    </div>
  );
}
