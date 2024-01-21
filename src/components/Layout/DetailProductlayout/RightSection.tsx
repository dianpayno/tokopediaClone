import { LuMinus, LuPlus } from "react-icons/lu";
import { FaPen } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { useCart } from "../../contex/CartContex";
import { useMutation } from "react-query";
import { db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import Toast from "../../elements/Toast/Toast";


type Props = {
  data: any;
  produkId: any;
};
const RightSection = (props: Props) => {
  const { data, produkId } = props;
  const sale = (Number(data.harga) * Number(data.sale)) / 100;

  const totalSale = Math.ceil(sale / 100) * 100;
  const diskon = Math.ceil((Number(data.harga) - totalSale) / 100) * 100;
    ;
  const [addCatatan, setAddCatatan] = useState(false);
  const [qtyCart, setQtyCart] = useState(1);
  const { dataCart, hours, minutes, seconds } = useCart();
  const [toast, setToast] = useState(false);
  const [catatan, setCatatan] = useState("");

  const sameDataCart = dataCart.filter((item: any) => item.id === produkId);
  const dataQty = sameDataCart.reduce((acc: number, item: any) => {
    return acc + item.qty;
  }, 0);

  const newDataCart = {
    namaProduk: data?.namaProduk,
    namaToko: data?.namaToko,
    alamatToko: data?.alamatToko,
    harga: data?.harga,
    sale: data?.sale,
    stok: data?.stok,
    image: data?.image,
    qty: qtyCart + dataQty,
    catatan,
  };

  const { mutate: addToCart, isLoading } = useMutation(
    async () => {
      try {
        await setDoc(doc(db, "cart", `${produkId}`), newDataCart);
      } catch (err) {
        console.log(err);
      }
    },
    {
      onSuccess: () => {
        setToast(true);
        setAddCatatan(false);
      },
    }
  );

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast(false);
      }, 2000);
    }
  }, [toast]);

  return (
    <div className="mx-16 w-full">
      {toast && (
        <Toast title={`berhasil memasukan ke keranjang sebanyak ${qtyCart} buah`} />
      )}

      {
        sale === 0 ? null:
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
            <p className="text-xs font-bold text-red-600">0{hours} : {minutes< 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}</p>
          </div>
        </div>
      </div>
      }

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
              {qtyCart === data.minpesanan ? (
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
            stock total : <span className="font-bold text-sm">{data.stok}</span>
          </p>
        </div>
        <p className="text-xs capitalize text-gray-500 mb-2">
          max. pembelian {data.minpesanan} pcs
        </p>

        {addCatatan ? (
          <div>
            <input
              onChange={(e) => setCatatan(e.target.value)}
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
            {Number(data.sale) === 0 ? null : (
              <p className="capitalize text-xs text-gray-500 line-through">
                {Number(data.harga).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                })}
              </p>
            )}
          </div>
          <div className="flex justify-between">
            <p className="text-md font-bold">Subtotal</p>
            <p className="text-xl font-bold capitalize">
              {(qtyCart * diskon).toLocaleString("id-ID", {
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
              disabled={isLoading}
              onClick={() => addToCart()}
              className="flex items-center disabled:bg-slate-400 w-1/2 px-5 py-2 bg-green-600 text-white font-bold rounded-xl"
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
