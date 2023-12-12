import { HiBuildingStorefront } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useState, useEffect } from "react";
import CheckOutSection from "./CheckOutSection";
import { cartList } from "./CartList";

const MainCart = () => {
  const [cart, setCart] = useState(cartList);
  const [total, setTotal] = useState(0);
  const [totalqty, setTotalqty] = useState(0);
  const [totalDiskon, setTotalDiskon] = useState(0);
  const [totalPerItem, setTotalPerItem] = useState<any>([]);

  const handleCheckboxChange = (event: any, item: any) => {
    if (event.target.checked) {
      const newTotal = {
        id: item.id,
        total: item.price * item.qty,
        qty: item.qty,
        diskon: item.sale * item.price * item.qty,
      };
      setTotalPerItem([...totalPerItem, newTotal]);
    } else {
      const filteredTotal = totalPerItem.filter((total: any) => {
        return total.id !== item.id;
      });
      setTotalPerItem(filteredTotal);
      if(filteredTotal.length === 0){
        setTotal(0);
        setTotalqty(0);
        setTotalDiskon(0);
      }
    }
  };

  useEffect(() => {
    console.log(totalPerItem);
    if (totalPerItem.length === 0) {
      return;
    } else {
      const handleTotalBelanja = () => {
        const totalBelanjaPerItem = totalPerItem.reduce(
          (acc: number, item: any) => {
            return acc + item.total;
          },
          0
        );
        setTotal(totalBelanjaPerItem);
      };

      const handleTotalQty = () => {
        const totalQtyPerItem = totalPerItem.reduce(
          (acc: number, item: any) => {
            return acc + item.qty;
          },
          0
        );
        setTotalqty(totalQtyPerItem);
      };
      const handleTotalDiskon = () => {
        const totalDiskonPerItem = totalPerItem.reduce(
          (acc: number, item: any) => {
            return acc + item.diskon;
          },
          0
        );
        setTotalDiskon(totalDiskonPerItem);
      };

      handleTotalBelanja();
      handleTotalQty();
      handleTotalDiskon();
    }
  });

  const handleMinusQty = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].qty > 1) {
      updatedCart[index].qty--;
      setCart(updatedCart);
    }

    if (totalPerItem.length !== 0) {
      const updatedQty = [...totalPerItem];
      if (updatedQty[index].qty > 1) {
        updatedQty[index].qty--;
        updatedQty[index].total = updatedCart[index].price * updatedQty[index].qty
        updatedQty[index].diskon = updatedCart[index].price * updatedQty[index].qty * updatedCart[index].sale
        setTotalPerItem(updatedQty);
        return;
      }
    }
  };

  const handlePlusQty = (index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].qty++;
    setCart(updatedCart);

    if (totalPerItem.length !== 0) {
      const updatedQty = [...totalPerItem];
      updatedQty[index].qty++;
      updatedQty[index].total = updatedCart[index].price * updatedQty[index].qty
      updatedQty[index].diskon = updatedCart[index].price * updatedQty[index].qty * updatedCart[index].sale
      
      setTotalPerItem(updatedQty);

      return;
    }
  };
  // useEffect(() => {
  //   const handleTotalBelanja = () => {
  //     const totalBelanja = cart.reduce((acc: number, item: any) => {
  //       return acc + item.price * item.qty;
  //     }, 0);
  //     setTotal(totalBelanja);
  //   };
  //   const handleTotalQty = () => {
  //     const totalQty = cart.reduce((acc: number, item: any) => {
  //       return acc + item.qty;
  //     }, 0);
  //     setTotalqty(totalQty);
  //   };

  //   const handleDiskon = () => {
  //     const diskon = cart.reduce((acc: number, item: any) => {
  //       return acc + item.sale * item.price * item.qty;
  //     }, 0);
  //     setTotalDiskon(diskon);
  //   };

  //   handleTotalBelanja();
  //   handleTotalQty();
  //   handleDiskon();
  // });

  return (
    <div className="ml-16 my-10 flex gap-3">
      <div className="w-[60%] px-10">
        <p className="text-xl font-bold ">Keranjang</p>
        <div className="flex items-center gap-2 pt-4 pb-5 border-b-[6px] border-slate-200">
          <input
            type="checkbox"
            className="checkbox checkbox-sm rounded border-black checked:border-green-600 [--chkbg:theme(colors.green.600)] [--chkfg:white]"
          />
          <p className="text-sm text-gray-500 ">Pilih Semua</p>
        </div>
        {cart.map((item: any, index: number) => {
          const diskon = item.price - item.sale * item.price;
          item.totalBelanja = diskon * item.qty;

          return (
            <div
              key={index}
              className="my-5 flex gap-3 border-b-[6px] border-slate-200 w-full"
            >
              <input
                value={item}
                onChange={(e) => handleCheckboxChange(e, item)}
                type="checkbox"
                className="checkbox checkbox-sm rounded border-black checked:border-green-600 [--chkbg:theme(colors.green.600)] [--chkfg:white]"
              />

              <div className="flex flex-col w-full ">
                <div className="flex items-center gap-1">
                  <HiBuildingStorefront className="text-green-600 text-lg" />
                  <p className="font-bold capitalize">{item.store}</p>
                </div>
                <div className="flex items-center gap-1">
                  <CiLocationOn className="text-green-600 text-lg" />
                  <p className="text-gray-500 text-sm capitalize">
                    {item.alamat}
                  </p>
                </div>
                <div className="flex my-3 items-center gap-2">
                  <img className="w-[70px]" src={item.img} />
                  <div>
                    <p className="capitalize">{item.namaProduk}</p>
                    <div className="flex items-center gap-1">
                      {item.sale === 0 ? null : (
                        <>
                          <p className="text-xs py-[2px] px-[4px] bg-pink-600 rounded text-white font-bold">
                            {item.sale * 100}%
                          </p>
                          <p className="text-sm text-gray-500 line-through">
                            {item.price.toLocaleString("id-ID", {
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
                    <IoTrashOutline className="text-gray-500 text-lg mr-10" />
                    {item.qty === 1 ? (
                      <FiMinusCircle className="text-gray-600 cursor-pointer text-xl" />
                    ) : (
                      <FiMinusCircle
                        onClick={() => handleMinusQty(index)}
                        className=" cursor-pointer text-green-600 text-xl"
                      />
                    )}
                    <span className="text-gray-500">{item.qty}</span>

                    <FiPlusCircle
                      onClick={() => handlePlusQty(index)}
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
    </div>
  );
};

export default MainCart;
