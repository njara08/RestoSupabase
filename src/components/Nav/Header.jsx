import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "À Propos", path: "/apropos" },
  ];

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-bg/90 backdrop-blur-md py-4 border-b border-accent/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="group z-50">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <span className="text-white font-black text-xl">L</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">
              L'Éveil<span className="text-primary">.</span>
            </span>
          </div>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors tracking-widest uppercase"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ACTIONS & BURGER */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  Dashboard
                </Link>
                <Link
                  to="/panier"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  Panier
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Connexion
              </Link>
            )}
            <Link to="/reservation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full font-bold text-sm text-white shadow-xl shadow-primary/20 bg-[linear-gradient(45deg,#7505A5,#410160)]"
              >
                RÉSERVER UNE TABLE
              </motion.button>
            </Link>
          </div>

          {/* ICON BURGER MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* MENU MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background semi-transparent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[75%] bg-deep border-l border-accent/30 p-10 flex flex-col md:hidden shadow-2xl"
            >
              <div className="mt-20 flex flex-col gap-8">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-white hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="h-px bg-accent/20 my-4" />
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="text-xl text-gray-400"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/panier"
                      onClick={() => setIsOpen(false)}
                      className="text-xl text-gray-400"
                    >
                      Panier
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="text-xl text-gray-400 text-left"
                    >
                      Déconnexion
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="text-xl text-gray-400"
                  >
                    Connexion
                  </Link>
                )}
                <button className="mt-4 px-6 py-4 rounded-xl font-bold text-white bg-[linear-gradient(45deg,#7505A5,#410160)] shadow-lg shadow-primary/20">
                  RÉSERVER UNE TABLE
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
