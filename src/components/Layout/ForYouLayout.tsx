import { useState } from "react";

const ForYouLayout = () => {
    const [active, setActive] = useState(0);
  const label = [
    {
      id: 1,
      label: "for you",
    },
    {
      id: 2,
      label: "celana panjang wanita",
    },
    {
      id: 3,
      label: "perawatan wajah",
    },
    {
      id: 4,
      label: "aksesoris handphone",
    },
  ];
  return (
    <div className="mt-3 bg-white p-7 ">
      <div className="flex gap-2">
        {label.map((item: any, index: number) => {
            const isActive = active === index 
          return (
            <div 
            onClick={() => setActive(index)}
            key={item.id} className={`
            ${index === 1 ? "bg-gradient-to-r from-yellow-600 to-yellow-500": index === 2 ?"bg-gradient-to-r from-green-700 to-green-600":"bg-gradient-to-r from-pink-700 to-pink-600"}
            cursor-pointer rounded-lg h-16 pt-3 px-2 w-52 items-top`}>
             { 
             isActive?
             <div className="w-10 h-[2px] bg-white rounded-full"></div>:<div className="w-10 h-[2px] bg-transparent"></div>}
              <p className="capitalize font-bold text-sm text-white">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForYouLayout;
