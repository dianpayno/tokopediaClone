import { HiLocationMarker } from "react-icons/hi";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const CardProduct = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="w-48 h-96  bg-white shadow cursor-pointer rounded-lg overflow-hidden"
    >
      <img
        className="w-full h-1/2 object-cover"
        src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/11/12/b43cc1b5-f2f9-4308-bfbd-72e162336170.jpg"
        alt=""
      />
      <div className="bg-yellow-600 text-white p-[3px] w-[30%] text-xs capitalize font-semibold text-center mt-1 rounded-e-full">
        terlaris
      </div>
      {/* <div className="bg-gradient-to-r from-green-900 to-green-500 text-white p-[3px] w-full text-xs capitalize font-semibold text-start ">
        super gadget day
      </div> */}
      {/* <div className="bg-gradient-to-r from-sky-600 to-sky-300 text-white p-[3px] w-full text-xs capitalize font-semibold text-start ">
        gopay later 0%      </div> */}

      <div className="px-2 py-1 flex flex-col justify-start">
        <p className="text-sm capitalize">{`${
          "Garland Daun Kawat 270cm Hiasan Dekorasi Natal Daun Lilit Kawat Murah".substring(
            0,
            50
          ) + ".."
        }`}</p>

        <p className="text-md font-bold">Rp69.900</p>
        <p className="flex items-center">
        <span className="text-xs text-gray-500 line-through capitalize">rp109.800</span>
        <span className="text-xs ms-1 text-red-500 font-semibold">80%</span>
        </p>
        <p className="text-xs mt-1 capitalize text-center font-semibold w-[60%] text-green-600 bg-green-100 p-1 rounded-md">
          cashback 1,3rb
        </p>
        <p className="mt-1 flex items-center">
          {open ? (
            <>
              <HiBuildingStorefront className="text-green-700 me-1" />
              <p className="text-xs text-gray-600 capitalize">
                Reaw Store Jakarta
              </p>
            </>
          ) : (
            <>
              <HiLocationMarker className="text-green-700 me-1" />
              <p className="text-xs text-gray-600 capitalize">Jakarta Barat</p>
            </>
          )}
        </p>
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
