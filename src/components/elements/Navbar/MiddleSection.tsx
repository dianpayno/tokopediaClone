import { LiaShoppingCartSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Kategori from "./Kategori";
import { useCategory } from "../../contex/display";
import { useCart } from "../../contex/CartContex";
import CartHover from "../../elements/Cart/CartHover";
import { motion } from "framer-motion"

const MiddleSection = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [isCartHover, setIsCartHover] = useState(false);

  const { kategory, setKategory } = useCategory();
  const { cart } = useCart();
  return (
    <div className="py-3 px-7 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <div>
          <img
            className="w-32"
            src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
          />
        </div>
        <div
          onMouseEnter={() => setKategory(true)}
          className={`${
            kategory ? "bg-slate-100" : null
          } cursor-pointer px-2 py-1 rounded-md`}
        >
          <span className="text-md">Kategori</span>
        </div>
        <div className="z-50">{kategory && <Kategori />}</div>
      </div>
      <div
       onMouseEnter={() => setIsCartHover(false)}
        className={`w-1/2 border relative ${
          searchActive ? "border-green-600" : "border-gray-300"
        }  flex items-center  rounded-lg px-1`}
      >
        <CiSearch className="w-6 h-6 text-gray-500" />
        <input
          onFocus={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
          className="w-full px-3 py-2 capitalize  outline:none focus:outline-none placeholder:opacity-60 placeholder-gray-400"
          type="text"
          placeholder="Cari di Tokopedia"
        ></input>
        {searchActive && (
          <div className="absolute w-full top-11 left-0 right-0 z-[1000] bg-white rounded-md p-5 shadow">
            <div>{/* <p>result</p> */}</div>
            <div>
              <p className="text-xl font-bold capitalize">Paling populer</p>
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center gap-2 mt-2 hover:bg-slate-100 rounded-md px-2 py-1 cursor-pointer">
                  <img
                    className="w-12 h-12 rounded-lg"
                    src="https://images.tokopedia.net/img/pYncxN/2023/11/30/11f6f416-7510-44e8-8a67-2b37038d6d83.png"
                    alt=""
                  />
                  <div>
                    <p className="text-md capitalize font-bold">
                      wulling end year sale
                    </p>
                    <p className="text-sm capitalize text-gray-500">
                      diskon hingga 10 jt + Emas*
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2 hover:bg-slate-100 rounded-md px-2 py-1 cursor-pointer">
                  <img
                    className="w-12 h-12 rounded-lg"
                    src="https://images.tokopedia.net/img/pYncxN/2023/11/23/bad3dae1-8afe-4134-a280-526dce2e6ae7.jpg"
                    alt=""
                  />
                  <div>
                    <p className="text-md capitalize font-bold">
                      promo samsung authorize
                    </p>
                    <p className="text-sm capitalize text-gray-500">
                      diskon hingga 1jt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-between px-3 py-3 mt-5 border border-gray-300 rounded-md bg-slate-100">
              <div className="flex items-center gap-2">
                <img
                  className="w-5 h-5"
                  src="https://images.tokopedia.net/img/jbZAUJ/2022/7/18/cc8a16cf-3b71-4d30-994a-dbe1d5ea6c95.png"
                  alt=""
                />
                <p className="capitalize">tips & trik pencarian</p>
              </div>
              <div>
                <p className="text-green-600 font-semibold">Pelajari</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div 
     
      className="flex items-center relative">
        <div 
        onMouseEnter={() => setIsCartHover(true)}
        className="pe-10 relative cursor-pointer">
          {cart === 0 ? null : (
            <div
              className={`w-[22px] h-[22px] rounded-full bg-red-600 border border-white flex items-center justify-center  absolute right-8 -top-1`}
            >
              <p className="text-white text-xs  font-bold">
                {cart >= 10 ? "10+" : cart}
              </p>
            </div>
          )}
          <LiaShoppingCartSolid className="w-8 h-8" />
        </div>
        {isCartHover && (
          <motion.div 
          initial={{y:-20, opacity:0.5}}
          animate={{y:0, opacity:1}}
          transition={{duration: 0.3, type:"keyframes"}}
          onMouseLeave={() => setIsCartHover(false)}
          className="
          absolute top-12 bg-white shadow-lg -left-52 rounded-b-lg right-24 z-[100]">
            <CartHover />
          </motion.div>
        )}
        <div 
         onMouseEnter={() => setIsCartHover(false)}
        className="flex gap-3 ps-10 border-l-2 border-gray-200 ">
          <button className="bg-white-600 text-green-600 font-bold text-xs capitalize border border-green-600 px-4 py-[7px] rounded-lg">
            masuk
          </button>
          <button className="text-white bg-green-600 font-bold text-xs capitalize border border-green-600 px-4 py-[7px] rounded-lg">
            daftar
          </button>
        </div>
        {isCartHover && <div 
        onMouseEnter={() => setIsCartHover(false)}
        className="overlay"></div>}
      </div>
    </div>
  );
};

export default MiddleSection;
