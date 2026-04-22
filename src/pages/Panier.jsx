import Cart from "@/components/panier/Cart";
import Profile from "@/components/panier/Profil";
import Layout from "@/layouts/Layout";

export default function Panier(){
    return(
        <Layout>
            <Cart/>
            <Profile/>
        </Layout>
    )
}