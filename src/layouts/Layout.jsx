import Footer from "@/components/Nav/Footer";
import Header from "@/components/Nav/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
