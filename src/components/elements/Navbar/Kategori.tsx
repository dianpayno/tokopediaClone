import { ListCategory } from "../../utils/ListCategory";
import { categoryLeft } from "../../utils/ListCategory";
import { useState } from "react";
import itemempty from "../../../assets/itemempty.png";
import RumahTangga from "./KategoryDetails/RumahTangga";
import AudioCamera from "./KategoryDetails/AudioCamera";
import Featured from "./KategoryDetails/Featured";
import Kebutuhanharian from "./KategoryDetails/Kebutuhanharian";
import Tagihan from "./KategoryDetails/Tagihan";
import { useCategory } from "../../contex/display";

import { motion } from "framer-motion";

const Kategori = () => {

  const [active, setActive] = useState(0);
  const [activeLeft, setActiveLeft] = useState(0);
  const { setKategory } = useCategory();
  return (
    <motion.div
     initial={{y: -20, opacity: 0 }}
     animate={{ y: 0, opacity: 1 }}
     transition={{ duration: 0.2 }}
     
     onMouseLeave={() => setKategory(false)}
      className="w-full fixed z-[999] bg-white top-32 left-0 right-0 bottom-0  py-3"
    >
      <div className="flex bg-white items-center z-[999] gap-10 px-7">
        {ListCategory.map((item, index) => {
          const isActive = index === active;
          return (
            <p
              key={index}
              onClick={() => setActive(index)}
              className={`text-sm ${
                isActive ? "text-green-600" : "text-gray-600"
              } hover:text-green-600 cursor-pointer capitalize`}
            >
              {item.title}
            </p>
          );
        })}
      </div>
      {active === 0 && (
        <div className="flex overflow-auto ">
          <div className="flex w-44 flex-col z-30 overflow-y-scroll gap-5 py-5 px-3  h-[500px] bg-gray-red-500">
            {categoryLeft.map((item, index) => {
              const isActive = index === activeLeft;
              return (
                <p
                  key={index}
                  onMouseEnter={() => setActiveLeft(index)}
                  className={`${
                    isActive ? "bg-gray-300" : null
                  } cursor-pointer text-xs capitalize font-semibold text-gray-700  px-3 py-1 rounded`}
                >
                  {item.title}
                </p>
              );
            })}
          </div>
          <div className=" flex-1 py-7 px- z-30 h-[500px] bg-gray-200 overflow-x-scroll">
            {activeLeft === 0 && <RumahTangga />}
            {activeLeft === 1 && <AudioCamera />}
            {activeLeft !== 0 && (
              <div className="w-full flex flex-col justify-center items-center">
                <img src={itemempty} alt="" />
                <p className="capitalize font-bold text-lg">
                  {" "}
                  maaf item tidak tersedia!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      {
        active === 1 && (
          <div className="flex w-full z-50 flex-col overflow-y-scroll gap-5 py-5 px-3  h-[500px]">
              <Featured/>
          </div>
        )
      }
      {
        active === 2 && (
          <div className="flex w-full flex-col overflow-y-scroll gap-5 py-5 px-3  h-[500px] bg-gray-200">
              <Kebutuhanharian/>
          </div>
        )
      }
      {
        active === 3 && (
          <div className="flex w-full flex-col overflow-y-scroll gap-5 py-5 px-3  h-[500px] bg-gray-200">
              <Tagihan/>
          </div>
        )
      }
    </motion.div>
  );
};

export default Kategori;
