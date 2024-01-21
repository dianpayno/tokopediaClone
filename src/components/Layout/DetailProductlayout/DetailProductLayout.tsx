import Breadcrumb from "../../elements/Breadcrumb/Breadcrumb";
import NavbarDetailProduct from "../../elements/Navbar/NavbarDetailProduct";
import LeftSection from "./LeftSection";
import { useState, useEffect } from "react";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";
import ReviewCostumer from "./ReviewCostumer";
import ReviewCostMiddleSec from "./ReviewCostMiddleSec";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useQuery } from "react-query";
import { BounceLoader } from "react-spinners";
import { motion } from "framer-motion";
import ModalImage from "../../Modal";
import { useCart } from "../../contex/CartContex";
const DetailProductLayout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledImg, setScrolledImg] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const { id } = useParams();
  const [dataProduk, setDataProduk] = useState<any>([]);
  const { openModal} = useCart();

  useEffect(() => {
    console.log("idnya",openModal);
  }, [openModal]);

  const { isLoading: isLoadingProduk } = useQuery("dataProduk", async () => {
    try {
      const docRef = doc(db, "products", `${id}`);
      const data: any = [];
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        data.push(docSnap.data());
        setDataProduk({
          ...data[0],
        });
      } else {
        console.log("data tidak ada");
      }
    } catch (err) {
      console.log("ini errornya", err);
    }
  });

  useEffect(() => {
    const handleScrollImg = () => {
      const position = window.scrollY;
      if (position === 0) {
        setIsActive(0);
        setScrolledImg(false);
      } else if (position > 0) {
        setScrolledImg(true);
        setIsActive(1);
      }
    };
    window.addEventListener("scroll", handleScrollImg);

    return () => {
      window.removeEventListener("scroll", handleScrollImg);
    };
  }, [scrolledImg]);
  return (
    <div className="">
      <motion.div
        initial={{ y: -20, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        className={`${
          scrolled
            ? "fixed top-[120px] left-0 right-0 z-[10] py-5"
            : "sticky top-[120px] left-0 right-0 z-[10]"
        } bg-white`}
      >
        {scrolled ? (
          <NavbarDetailProduct
            isActive={isActive}
            setIsActive={setIsActive}
            title={dataProduk?.namaProduk?.slice(0, 40) + "..."}
          />
        ) : (
          <Breadcrumb
            category={dataProduk?.kategori}
            title={dataProduk?.namaProduk?.slice(0, 40) + "..."}
          />
        )}
      </motion.div>

      <div className="flex justify-start w-full  mt-6 relative">
        <div className="w-[60%] grid grid-cols-2 border-b ml-16  gap-1">
          <div className="col-span-1 ">
            <LeftSection image={dataProduk?.image} scrolledImg={scrolledImg} />
          </div>
          <div className="col-span-1">
            <MiddleSection dataProduk={dataProduk} scrolled={scrolled} />
          </div>
        </div>

        <div
          className={`flex w-[32%] justify-center fixed top-48 z-10 right-[37px] bottom-0`}
        >
          <RightSection produkId={id} data={dataProduk} />
        </div>
      </div>
      {scrolledImg && (
        <div className="relative my-20 ml-32 gap-2  flex">
          <div className="w-[20%] flex flex-col items-center">
            <ReviewCostumer />
          </div>

          <div className=" w-[43%] px-10">
            <ReviewCostMiddleSec />
          </div>
        </div>
      )}

      {isLoadingProduk && (
        <div className="fixed flex justify-center items-center bottom-0 top-0 right-0 left-0 bg-black bg-opacity-70 z-30">
          <BounceLoader color="#3CB371" loading />
        </div>
      )}
      {openModal && (
        <div className="fixed z-[999] top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex justify-center items-center">
          <ModalImage
            image={dataProduk?.image}
            namaProduk={dataProduk?.namaProduk}
          />
        </div>
      )}
    </div>
  );
};

export default DetailProductLayout;
