import { createContext, useContext } from "react";
import { db } from "../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useState} from "react";
import { useQuery } from "react-query";

export const ProdukContex = createContext<any>(null);

export const useDataProduk = () => {
  return useContext(ProdukContex);
};

const ProdukProvider = ({ children }: any) => {
  const [dataProduk, setDataProduk] = useState<any>([]);

  const { isLoading: isLoadingProduk } = useQuery("products", async () => {
    try {
      await onSnapshot(collection(db, "products"), (snapshot) => {
        const data: any = [];
        snapshot.docs.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setDataProduk(data);
      });
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <ProdukContex.Provider value={{ dataProduk, isLoadingProduk }}>
      {children}
    </ProdukContex.Provider>
  );
};

export default ProdukProvider;
