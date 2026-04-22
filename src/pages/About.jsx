import HeroAbout from "@/components/About/HeroAbout";
import History from "@/components/About/History";
import Philosophy from "@/components/About/Philosophy";
import Team from "@/components/About/Team";
import Layout from "@/layouts/Layout";

export default function About() {
  return (
    <Layout>
      <HeroAbout />
      <History/>
      <Team/>
      <Philosophy/>
    </Layout>
  );
}
