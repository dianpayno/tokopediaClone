import Kategorypilihan from "../../elements/Kategory&TopUp/Kategorypilihan";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import Pulsa from "../../elements/Kategory&TopUp/pulsa";
import PlnListrik from "../../elements/Kategory&TopUp/pln";
import ListCategory from "../../elements/Kategory&TopUp/ListCategory";

const KategoryTopUpLayout = () => {
  const [Active, setActive] = useState<number>(0);
  const topUp = [
    {
      id: 1,
      title: "pulsa",
    },
    {
      id: 2,
      title: "paket data",
    },
    {
      id: 3,
      title: "flight",
    },
    {
      id: 4,
      title: "PLN",
    },
  ];
  return (
    <div className="p-8">
      <div className="w-full flex flex-wrap bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-2 w-[53%] ">
          <p className="text-xl font-semibold capitalize">Kategori pilihan</p>
          <Kategorypilihan />
        </div>
        <div className="p-2 w-[47%] ">
          <p className="text-xl font-semibold capitalize">
            Top Up & tagihan
            <span className="text-sm ml-1 capitalize text-green-600 font-semibold">
              {" "}
              lihat semua
            </span>
          </p>
          <div className="w-full bg-white shadow-lg rounded border my-6 pb-3">
            <div className="border-b border-gray-300 flex items-center justify-between pt-3">
              {topUp.map((item: any, index: number) => {
                const isActive = index === Active;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActive(index)}
                    className={`${
                      isActive
                        ? "border-b-2 border-green-500 text-green-600 "
                        : null
                    } cursor-pointer px-7 text-gray-500   flex justify-center items-start`}
                  >
                    <p className="text-md font-semibold capitalize ">
                      {item.title}
                    </p>
                  </div>
                );
              })}
              <div className="pe-3 text-gray-500">
                <BsThreeDotsVertical />
              </div>
              
            </div>
            {
            Active === 0 && (
                <Pulsa/>
            )
              }
               {
            Active === 1 && (
                <Pulsa/>
            )
              }
               {
            Active === 3 && (
                <PlnListrik/>
            )
              }
          </div>
        </div>
        <div className="w-full">
          <ListCategory />
        </div>
      </div>
    </div>
  );
};

export default KategoryTopUpLayout;
