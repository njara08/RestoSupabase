import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data } = await supabase
      .from("cart")
      .select("*, menu(*)")
      .eq("user_id", user.id);
    setCartItems(data || []);
    setLoading(false);
  };

  const updateQuantity = async (id, newQty) => {
    if (newQty < 1) return;
    await supabase.from("cart").update({ quantity: newQty }).eq("id", id);
    fetchCart();
  };

  const removeItem = async (id) => {
    await supabase.from("cart").delete().eq("id", id);
    fetchCart();
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.menu.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-28 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-10 uppercase tracking-tighter">
          Votre <span className="text-primary italic">Sélection</span>
        </h1>

        <div className="grid gap-6">
          <AnimatePresence>
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-deep/50 border border-accent/20 p-4 rounded-3xl flex items-center gap-6"
              >
                <img
                  src={item.menu.image_url}
                  className="w-24 h-24 rounded-2xl object-cover"
                  alt=""
                />
                <div className="flex-grow">
                  <h3 className="font-bold text-lg">{item.menu.name}</h3>
                  <p className="text-primary font-black">{item.menu.price} €</p>
                </div>
                <div className="flex items-center gap-4 bg-dark-bg rounded-xl p-2 border border-white/5">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 hover:text-primary"
                  >
                    -
                  </button>
                  <span className="font-bold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 hover:text-primary"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-500 hover:text-red-500 transition-colors mr-4"
                >
                  ✕
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {cartItems.length > 0 ? (
          <div className="mt-10 p-8 bg-[linear-gradient(45deg,#1E012F,#190027)] rounded-[2.5rem] border border-primary/30 flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest">
                Total de la commande
              </p>
              <p className="text-4xl font-black">{total.toFixed(2)} €</p>
            </div>
            <button className="bg-primary px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform shadow-lg shadow-primary/20">
              COMMANDER
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500 py-20 italic text-xl">
            Votre panier est vide... 🍽️
          </p>
        )}
      </div>
    </div>
  );
}
