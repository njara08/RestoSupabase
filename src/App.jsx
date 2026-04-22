import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Menu from "@/pages/Menu";
import Login from "@/pages/Auth/Login";
import SignUp from "@/pages/Auth/SignUp";
import Panier from "./pages/Panier";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Reservation from "./pages/Reservation";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apropos" element={<About />} />

          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
