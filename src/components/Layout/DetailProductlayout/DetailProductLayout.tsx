import Breadcrumb from "../../elements/Breadcrumb/Breadcrumb";
import NavbarDetailProduct from "../../elements/Navbar/NavbarDetailProduct";
import LeftSection from "./LeftSection";
import { useState, useEffect } from "react";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";
import ReviewCostumer from "./ReviewCostumer";
import ReviewCostMiddleSec from "./ReviewCostMiddleSec";
const DetailProductLayout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledImg, setScrolledImg] = useState(false);
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  useEffect(() => {
    const handleScrollImg = () => {
      const position = window.scrollY;
      if(position < 700) {
        setIsActive(0);
      }
      if (position > 700) { 
        setScrolledImg(true);
        setIsActive(1);
      } else {
        setScrolledImg(false);
      }
    }
    window.addEventListener("scroll", handleScrollImg);

    return () => {
      window.removeEventListener("scroll", handleScrollImg);
    }
  })
  return (
    <div className="">
      <div
        className={`${
          scrolled
            ? "fixed top-[120px] left-0 right-0 z-[999]"
            : "sticky top-[120px] left-0 right-0 z-[10]"
        } bg-white`}
      >
        {scrolled ? (
          <NavbarDetailProduct
          isActive={isActive}
          setIsActive={setIsActive}
          title="Daia Deterjen Bubuk Violet 4 kg" />
        ) : (
          <Breadcrumb
            category="perlengkapan kebersihan"
            title="Daia Deterjen Bubuk Violet 4 kg"
          />
        )}
      </div>

      <div className="flex justify-start w-full  mt-6 relative">

        <div className="w-[60%] grid grid-cols-2 border-b ml-16  gap-1">
          <div className="col-span-1 ml-8 py-10">
            <LeftSection scrolledImg={scrolledImg} />
          </div>
          <div className="col-span-1">
          <MiddleSection />
          </div>
        </div>

        <div className="flex w-[32%] justify-center fixed top-48 z-10 right-16 bottom-0">
          <RightSection/>
        </div>
      </div>

      <div className="relative my-20 ml-32 gap-2  flex">
        <div className="w-[20%] flex flex-col items-center">
        <ReviewCostumer/>
        </div>

        <div className=" w-[43%]">
          <ReviewCostMiddleSec/>
        </div>
      </div>
    </div>
  );
};

export default DetailProductLayout;
