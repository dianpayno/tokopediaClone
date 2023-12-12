import { LuMinus, LuPlus } from "react-icons/lu";
import { FaPen } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { useCart } from "../../contex/CartContex";
import { FaCircleCheck } from "react-icons/fa6";

const RightSection = () => {
  const [addCatatan, setAddCatatan] = useState(false);
  const [qtyCart, setQtyCart] = useState(1);
  const {cart, setCart } = useCart();
  const [toast, setToast] = useState(false);
  const handleCart = () => {
    setCart(cart + qtyCart);
    setToast(true);
  };
  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast(false);
      }, 2000);
    }
   
  },[toast])
  const maxPurchase: number = 9;
  const harga: number = 55000;

  return (
    <div className="mx-16 w-full">
      {
        toast &&
      <div className="absolute -top-12 flex items-center justify-center right-5 left-5 bg-gradient-to-r from-red-500 to-red-300 h-10 rounded-lg">
        <p className="text-center text-xs text-white font-semibold capitalize flex items-center gap-1">
          <FaCircleCheck />
          berhasil memasukan ke keranjang sebanyak {qtyCart} buah
        </p>
      </div>
      }
      <div className="flex justify-between w-full bg-gradient-to-r from-red-500 to-red-300 rounded px-5 py-2">
        <div className="flex flex-col w-1/2">
          <p className=" text-white font-bold capitalize text-sm mb-1">
            harga spesial
          </p>
          <div className="flex items-center">
            <div className="h-[4px] w-full rounded-full bg-white bg-opacity-50">
              <div className="h-[4px] rounded-full w-[80%] bg-white"></div>
            </div>
            <span className="text-white ms-2 text-xs capitalize">tersedia</span>
          </div>
        </div>

        <div>
          <p className="text-xs text-white capitalize">berakhir dalam</p>
          <div className="px-4 py-1 bg-white rounded-xl mt-1 w-full">
            <p className="text-xs font-bold text-red-600">07 : 00 : 00</p>
          </div>
        </div>
      </div>

      {/* keranjang */}

      <div className="w-full border border-gray-300 mt-3 rounded-lg p-3 ">
        <p className="text-md font-bold capitalize">atur jumlah dan catatan</p>
        <div className="flex items-center my-3 gap-2">
          <div className="flex  items-center gap-4 border rounded-lg py-1 px-2 border-gray-300">
            <button>
              {qtyCart === 1 ? (
                <LuMinus className=" text-gray-500" />
              ) : (
                <LuMinus
                  onClick={() => setQtyCart(qtyCart - 1)}
                  className=" text-green-500"
                />
              )}
            </button>
            <p>{qtyCart}</p>
            <button>
              {qtyCart === maxPurchase ? (
                <LuPlus className=" text-gray-500" />
              ) : (
                <LuPlus
                  onClick={() => setQtyCart(qtyCart + 1)}
                  className=" text-green-500"
                />
              )}
            </button>
          </div>
          <p className="text-sm capitalize">
            stock total : <span className="font-bold text-sm">182</span>
          </p>
        </div>
        <p className="text-xs capitalize text-gray-500 mb-2">
          max. pembelian {maxPurchase} pcs
        </p>

        {addCatatan ? (
          <div>
            <input
              placeholder="contoh size:M warna:merah"
              className="w-full border border-green-600 focus:border-none focus:outline focus:outline-green-600 
                  text-sm placeholder:capitalize
                  rounded-lg py-2 px-3"
              type="text"
            />
            <button
              onClick={() => setAddCatatan(false)}
              className="text-xs cursor-pointer font-bold capitalize text-green-600 my-2 px-2"
            >
              batalkan catatan
            </button>
          </div>
        ) : (
          <div
            onClick={() => setAddCatatan(true)}
            className="flex items-center gap-1 mt-2 cursor-pointer"
          >
            <FaPen className="text-green-600 text-xs" />
            <p className="text-xs font-bold capitalize text-green-600">
              tambah catatan
            </p>
          </div>
        )}
        <div>
          <div className="flex justify-end">
            <p className="capitalize text-xs text-gray-500 line-through">
              rp68.500
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-md font-bold">Subtotal</p>
            <p className="text-xl font-bold capitalize">
              {(qtyCart * harga).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              })}
            </p>
          </div>
          <div className="flex text-sm justify-between gap-2 mt-2">
            <button className="px-5 w-1/2 py-2 border border-green-600 font-bold text-green-600 rounded-lg">
              Beli
            </button>
            <button
              onClick={handleCart}
              className="flex items-center w-1/2 px-5 py-2 bg-green-600 text-white font-bold rounded-xl"
            >
              <LuPlus />
              Keranjang
            </button>
          </div>

          {/* cart footer */}
          <div className="flex justify-around mb-4 mt-7">
            <div className="flex items-center gap-2 border-r pr-3">
              <BsChatLeftText className="text-sm" />
              <p className="text-sm font-bold">Chat</p>
            </div>
            <div className="flex items-center gap-2 border-r pr-3">
              <IoMdHeartEmpty BsChatLeftText className="text-lg" />
              <p className="text-sm font-bold">Wishlist</p>
            </div>
            <div className="flex items-center gap-2">
              <IoShareSocialOutline className="text-lg" />
              <p className="text-sm font-bold">Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
