import NavbarLayout from "../components/Layout/HomeLayout/NavbarLayout";
import { useEffect } from "react";
import JumboCarousel from "../components/elements/Carousel/JumboCarousel";
import KategoryTopUpLayout from "../components/Layout/HomeLayout/KategoryTopUpLayout";
import CardPromoLayout from "../components/Layout/HomeLayout/CardPromoLayout";
import ForYouLayout from "../components/Layout/HomeLayout/ForYouLayout";
import ProductList from "../components/Layout/HomeLayout/ProductList";
import FooterLayout from "../components/Layout/HomeLayout/FooterLayout";

const Home = () => {
  useEffect(() => {
    document.title =
      "Situs Jual Beli Online Terlengkap, Mudah & Aman | Tokopedia";
  });
  return (
    <div>
      <NavbarLayout />
      <JumboCarousel /> 
       <KategoryTopUpLayout /> 
      <CardPromoLayout />
      <ForYouLayout/> 
      <ProductList/>
      <FooterLayout/>

    </div>
  );
};

export default Home;
