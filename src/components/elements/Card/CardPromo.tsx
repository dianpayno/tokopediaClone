import { useDataProduk } from "../../contex/ProdukContex";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState, } from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "../Kategory&TopUp/carousel.css";

const CardPromo = () => {
  const { dataProduk } = useDataProduk();
  const [arrowShow, setArrowShow] = useState(false);
  const startIndex = 0;
  const itemPerPage = 6;
  const endIndex = startIndex + itemPerPage;
  const visibleItem = dataProduk?.slice(startIndex, endIndex);

  const Responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <motion.div 
    onMouseEnter={() => setArrowShow(true)}
    onMouseLeave={() => setArrowShow(false)}
    className="absolute top-1/2 -translate-y-1/2 right-0 left-28 cursor-pointer">
      <Carousel
        className="z-10"
        infinite={true}
        responsive={Responsive}
        customLeftArrow={
          <IoIosArrowBack
            size={35}
            className={`${
              arrowShow ? "block" : "hidden"
            } absolute top-1/2 -translate-y-1/2 left-0  hover:shadow-md cursor-pointer rounded-full p-2 text-gray-500 bg-white`}
          />
        }
        customRightArrow={
          <IoIosArrowForward
            size={35}
            className={`${
              arrowShow ? "block" : "hidden"
            } absolute z-30 top-1/2 -translate-y-1/2 right-0 hover:shadow-xl cursor-pointer rounded-full p-2 text-gray-500 bg-white`}
          />
        }
      >
        {visibleItem?.map((item: any, index: any) => {
          const sale =
            Math.ceil((Number(item.harga) * Number(item.sale)) / 100 / 100) *
            100;

          return (
            <motion.div
              onClick={() => console.log(item)}
              key={index}
              className="w-[200px] h-[280px] bg-white ms-2 shadow-md rounded-md cursor-none overflow-hidden flex flex-col justify-start"
            >
              <Link to={`/details-product/${item.id}`}>
                <img
                  className="w-full h-48 object-cover pointer-events-none"
                  src={item.image[0]}
                  alt=""
                />
                <div className="p-2">
                  <p className="text-sm text-red-500">
                    Hemat s.d
                    <span className="font-semibold ms-1 text-black">
                      {" "}
                      {sale.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      })}
                    </span>
                  </p>
                  <span className="text-xs text-gray-400 line-through me-1">
                    {Number(item.harga).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                  </span>
                  <span className="text-xs text-red-500 font-semibold">
                    {item.sale}%
                  </span>
                  <div className="w-full bg-gray-200 rounded-full mt-1">
                    <div
                      style={{ width: `${item.sale}%` }}
                      className={` bg-red-500 text-xs  h-1 text-center text-white rounded-full`}
                    />
                  </div>
                  <p className="text-xs text-gray-500 capitalize font-semibold">
                    segera habis
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </Carousel>
    </motion.div>
  );
};

export default CardPromo;
