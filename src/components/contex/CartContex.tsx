import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useQuery } from "react-query";

export const CartContext = createContext<any>([]);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: any) => {
  const [dataCart, setDataCart] = useState<any>([]);
  const [openModal, setOpenModal] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const duration = 2 * 60 * 60 * 1000;
  const { isLoading: isLoadingCart, refetch } = useQuery("cart", async () => {
    try {
      await onSnapshot(collection(db, "cart"), (snapshot) => {
        const data: any = [];
        snapshot.docs.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setDataCart(data);
      });
    } catch (err) {
      console.log(err);
    }
  });

  const [time, setTime] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);
  const getFormatedTime = (time: number) => {
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    setHours(hours);
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    setMinutes(minutes);
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    setSeconds(seconds);
  };

  useEffect(() => {
    getFormatedTime(time);
  }, [time]);

  return (
    <CartContext.Provider
      value={{
        dataCart,
        hours,
        minutes,
        seconds,
        setHours,
        setMinutes,
        setSeconds,
        isLoadingCart,
        refetch,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
