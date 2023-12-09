import NavbarLayout from "../components/Layout/NavbarLayout";
import { useEffect } from "react";
import JumboCarousel from "../components/elements/Carousel/JumboCarousel";
import KategoryTopUpLayout from "../components/Layout/KategoryTopUpLayout";
import CardPromoLayout from "../components/Layout/CardPromoLayout";
import ForYouLayout from "../components/Layout/ForYouLayout";
import ProductList from "../components/Layout/ProductList";

const Home = () => {
  useEffect(() => {
    document.title =
      "Situs Jual Beli Online Terlengkap, Mudah & Aman | Tokopedia";
  });
  return (
    <div className="overflow-hidden">
      <NavbarLayout />
      <JumboCarousel />
      <KategoryTopUpLayout /> 
      <CardPromoLayout />
      <ForYouLayout/> 
      <ProductList/>

    </div>
  );
};

export default Home;
