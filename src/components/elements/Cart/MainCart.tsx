import { HiBuildingStorefront } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useState, useEffect } from "react";
import CheckOutSection from "./CheckOutSection";
import { useCart } from "../../contex/CartContex";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useMutation } from "react-query";
import { BounceLoader } from "react-spinners";
import Toast from "../Toast/Toast";
import EmptyCart from "./EmptyCart";


const MainCart = () => {
  const [isAllChecked, setAllIsChecked] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalqty, setTotalqty] = useState(0);
  const [totalDiskon, setTotalDiskon] = useState(0);
  const [totalSelectedItem, setTotalSelectedItem] = useState<any>([]);
  const [cart, setCart] = useState<any>([]);
  const [toast, setToast] = useState(false);
  const { dataCart, isLoadingCart } = useCart();

  useEffect(() => {
    setCart(dataCart);
  }, [dataCart]);

  const { mutate: deleteCart } = useMutation(
    async (id: any) => {
      try {
        await deleteDoc(doc(db, "cart", `${id}`));
      } catch (err) {
        console.log(err);
      }
    },
    {
      onSuccess: async () => {
        setToast(true);
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

  // memasukan nilai context ke state biar bisa diolah dipage ini
  

  const handleSelectAllItem = (e: any) => {
    setAllIsChecked(e.target.checked);
  };

  const selectAllItem = () => {
    const totalBelanja = cart.reduce((acc: number, item: any) => {
      return acc + Number(item.harga) * Number(item.qty);
    }, 0);
    setTotal(totalBelanja);

    const totalQty = cart.reduce((acc: number, item: any) => {
      return acc + Number(item.qty);
    }, 0);
    setTotalqty(totalQty);

    const diskon = cart.reduce((acc: number, item: any) => {
      const sale = Number(item.harga) * (Number(item.sale) / 100);
      return acc + sale * Number(item.qty);
    }, 0);
    setTotalDiskon(diskon);
  };
  useEffect(() => {
    if (isAllChecked) {
      selectAllItem();
      setTotalSelectedItem([]);
    } else {
      setTotal(0);
      setTotalqty(0);
      setTotalDiskon(0);
    }
  });

  const handleSelectedItem = (e: any, item: any) => {
    if (e.target.checked) {
      setTotalSelectedItem([...totalSelectedItem, item]);
    } else {
      setTotalSelectedItem(
        totalSelectedItem.filter((i: any) => i.id !== item.id)
      );
    }
  };
  useEffect(() => {
    if (totalSelectedItem.length > 0) {
      const totalBelanja = totalSelectedItem.reduce(
        (acc: number, item: any) => {
          return acc + Number(item.harga) * Number(item.qty);
        },
        0
      );
      setTotal(totalBelanja);
      const totalQty = totalSelectedItem.reduce((acc: number, item: any) => {
        return acc + Number(item.qty);
      }, 0);
      setTotalqty(totalQty);
      const diskon = totalSelectedItem.reduce((acc: number, item: any) => {
        return (
          acc +
          Number(item.harga) * (Number(item.sale) / 100) * Number(item.qty)
        );
      }, 0);
      setTotalDiskon(diskon);
    }
  });

  const handlePlusQty = (item: any) => {
    if (totalSelectedItem.length > 0) {
      setTotalSelectedItem(
        totalSelectedItem.map((i: any) => {
          if (i.id === item) {
            return { ...i, qty: i.qty + 1 };
          }
          return i;
        })
      );
    }
    setCart(
      cart.map((i: any) => {
        if (i.id === item) {
          return { ...i, qty: i.qty + 1 };
        }
        return i;
      })
    );
  };
  const handleMinusQty = (item: any) => {
    if (totalSelectedItem.length > 0) {
      setTotalSelectedItem(
        totalSelectedItem.map((i: any) => {
          if (i.id === item) {
            return { ...i, qty: i.qty - 1 };
          }
          return i;
        })
      );
    }
    setCart(
      cart.map((i: any) => {
        if (i.id === item) {
          return { ...i, qty: i.qty - 1 };
        }
        return i;
      })
    );
  };

  return (
    <div className="ml-16 my-10 flex gap-3">
      <div className="w-[60%] px-10">
        <p className="text-xl font-bold ">Keranjang</p>
        <div className="flex items-center gap-2 pt-4 pb-5 border-b-[6px] border-slate-200">
          <input
            onChange={handleSelectAllItem}
            type="checkbox"
            className="checkbox checkbox-sm rounded border-black checked:border-green-600 [--chkbg:theme(colors.green.600)] [--chkfg:white]"
          />
          <p className="text-sm text-gray-500 ">Pilih Semua</p>
        </div>
        {cart?.map((item: any, index: number) => {
          const sale = (Number(item.harga) * Number(item.sale)) / 100;
          const totalsale = Math.ceil(sale / 100) * 100;
          const diskon = Math.ceil((Number(item.harga) - totalsale)/100)*100;
          item.totalBelanja = diskon * item.qty;

          return (
            
            <div
              key={index}
              className="my-5 flex gap-3 border-b-[6px] border-slate-200 w-full"
            >
              
              <input
                checked={isAllChecked ? true : item.isChecked}
                onChange={(e) => handleSelectedItem(e, item)}
                type="checkbox"
                className="checkbox checkbox-sm rounded border-black checked:border-green-600 [--chkbg:theme(colors.green.600)] [--chkfg:white]"
              />

              <div className="flex flex-col w-full ">
                <div className="flex items-center gap-1">
                  <HiBuildingStorefront className="text-green-600 text-lg" />
                  <p className="font-bold capitalize">{item.namaToko}</p>
                </div>
                <div className="flex items-center gap-1">
                  <CiLocationOn className="text-green-600 text-lg" />
                  <p className="text-gray-500 text-sm capitalize">
                    {item.alamatToko}
                  </p>
                </div>
                <div className="flex my-3 items-center gap-2">
                <Link to={`/details-product/${item.id}`}>
                  <img className="w-[70px]" src={item.image[1]} />
                  </Link>
                  <div>
                    <p className="capitalize">{item.namaProduk}</p>
                    <div className="flex items-center gap-1">
                      {Number(item.sale) === 0 ? null : (
                        <>
                          <p className="text-xs py-[2px] px-[4px] bg-pink-600 rounded text-white font-bold">
                            {item.sale}%
                          </p>
                          <p className="text-sm text-gray-500 line-through">
                            {Number(item.harga).toLocaleString("id-ID", {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 0,
                            })}
                          </p>
                        </>
                      )}
                      <p className="font-bold">
                        {diskon.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between py-3">
                  <div>
                    <button className=" text-green-600 text-sm capitalize">
                      tulis catatan
                    </button>
                  </div>

                  <div className="flex items-center gap-5 px-10">
                    <button className="text-sm capitalize text-gray-500">
                      pindahkan ke Wishlist
                    </button>
                    <button onClick={() => deleteCart(item.id)}>
                      <IoTrashOutline className="text-gray-500 cursor-pointer hover:text-red-600 text-lg mr-10" />
                    </button>
                    {item.qty === 1 ? (
                      <FiMinusCircle className="text-gray-600 cursor-pointer text-xl" />
                    ) : (
                      <FiMinusCircle
                        onClick={() => handleMinusQty(item.id)}
                        className=" cursor-pointer text-green-600 text-xl"
                      />
                    )}
                    <span className="text-gray-500">{item.qty}</span>

                    <FiPlusCircle
                      onClick={() => handlePlusQty(item.id)}
                      className="text-green-600 text-xl cursor-pointer "
                    />
                  </div>
                </div>
              </div>
           
            </div>
          );
        })}
      </div>

      <div className="w-[27%] fixed z-10 right-32 top-40 flex flex-col items-center">
        <CheckOutSection
          totalBelanja={total}
          totalQty={totalqty}
          diskon={totalDiskon}
        />
      </div>
      {toast ? <Toast title="berhasil dihapus" /> : null}
      {isLoadingCart ? (
        <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-white z-10 bg-opacity-70">
          <BounceLoader color="#3CB371" />
        </div>
      ) : null}
     {
      cart.length === 0 &&(
        <EmptyCart/>
      )
     }
    </div>
  );
};

export default MainCart;
