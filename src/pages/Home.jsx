import BentoFeatures from "@/components/Home/BentoFeatures";
import CulinaryPassion from "@/components/Home/CulinaryPassion";
import HeroHome from "@/components/Home/HeroHome";
import { Occasions } from "@/components/Home/Occasions";
import WhyUs from "@/components/Home/WhyUs";
import Layout from "@/layouts/Layout";

export default function Home(){
    return (
        <Layout>
            <HeroHome/>
            <BentoFeatures/>
            <CulinaryPassion/>
            <Occasions/>
            <WhyUs/>
        </Layout>
    )
}