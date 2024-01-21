import { HiLocationMarker } from "react-icons/hi";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import {motion} from 'framer-motion'
type Props = {
  data: any;
};
const CardProduct = (props: Props) => {
  const [showStore, setShowStore] = useState(false);
  useEffect(() => {
   const handleShow = 
     setInterval(() => {
       setShowStore(true)
     setTimeout(() => {
       setShowStore(false)
     },5000)
   },5000)
   return () => {
     clearInterval(handleShow)
   }

  }, [showStore])


  const { data } = props;
  const sale = Number(data.harga)* Number(data.sale) / 100;
  const totalSale = Math.ceil(sale/100)*100;
  const diskon = Math.ceil((Number(data.harga) - totalSale)/100)*100;
  const formatCashback = (num: any) => {
    if (num >= 1000){
      return (num /1000).toFixed(1) + 'rb'
    }
    return num
  }

  return (
    <div
      className="w-48 h-96  bg-white shadow cursor-pointer rounded-lg overflow-hidden"
    >
      <img className="w-full h-1/2 object-cover" src={data.image[1]} alt="" />
      {
        sale === 0 ? <div className="mt-6"></div> : (
      <div className="bg-yellow-600 text-white p-[3px] w-[30%] text-xs capitalize font-semibold text-center mt-1 rounded-e-full">
        terlaris
      </div>
          
        )
      }

      <div className="px-2 py-1 flex flex-col justify-start ">
        <p className="text-sm capitalize">
          {data.namaProduk.substring(0, 40) + ".."}
        </p>

        <p className="text-md font-bold">
          {Number(diskon).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          })}
        </p>{
          sale === 0 ? null : (
        <p className="flex items-center">
          <span className="text-xs text-gray-500 line-through capitalize">
            {Number(data.harga).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            })}
          </span>
          <span className="text-xs ms-1 text-red-500 font-semibold">
            {data.sale}%
          </span>
        </p>
            
          )
        }
        {
          sale === 0 ? null : (
        <p className="text-xs mt-1 capitalize text-center font-semibold w-[80%]  text-green-600 bg-green-100 py-1 rounded-md">
          cashback {formatCashback(sale)}
        </p>
            
          )
        }
        
          {showStore ? (
            <motion.p
            initial={{y:-20,opacity: 0}}
            animate={{y:0,opacity: 1}}
            transition={{duration: 0.5}}
            className="mt-1 flex items-center">
              <HiBuildingStorefront className="text-green-700 me-1" />
              <p className="text-xs text-gray-600 capitalize">
                {data.namaToko}
              </p>
            </motion.p>
          ) : (
            <motion.p
            initial={{y:-20,opacity: 0}}
            animate={{y:0,opacity: 1}}
            transition={{duration: 0.5}}
            className="mt-1 flex items-center">
              <HiLocationMarker className="text-green-700 me-1" />
              <p className="text-xs text-gray-600 capitalize">{data.alamatToko}</p>
            </motion.p>
          )}
    
        <p className="mt-1 flex items-center">
          <FaStar className="text-yellow-400" />
          <span className="text-xs ms-1 text-gray-600">
            4.9 | 1.3rb terjual
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardProduct;
