import { useState } from "react";

type Props = {
  scrolledImg: boolean;
}
const LeftSection = (props: Props) => {
  const [isActive, setIsActive] = useState(1);
  const img = [
    {
      id: 1,
      img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/3/21/9f359fa6-1237-462a-b6a2-2aa6173a0756.jpg",
    },
    {
      id: 2,
      img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/7/d7e3f4b0-55ed-4c40-9643-704c661d863a.png",
    },
    {
      id: 3,
      img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/21/3408264c-001a-43af-972d-f996b4a152a1.jpg",
    },
    {
      id: 4,
      img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/21/bb7e5702-716d-403c-be66-56e5e2d12300.jpg",
    },
  ];

  const filteredImg = img.filter((item: any, index: number) => {
    return index === isActive;
  });

  return (
    <div className={`${props.scrolledImg ? "sticky top-52" : "fixed top-48 left-36"}`}>
        <div className="flex flex-col items-center">
      {filteredImg.map((item: any, index: number) => {
        return (
          <img
            key={index}
            className="w-[250px] h-[250px] object-contain rounded-lg mb-5"
            src={item.img}
            alt=""
          />
        );
      })}
      <div className="flex justify-center items-center gap-3">
        {img.map((item: any, index: number) => {
          const active = index === isActive;
          return (
            <img
              key={index}
              onClick={() => setIsActive(index)}
              className={`w-11 h-11 object-cover rounded-lg overflow-hidden  ${
                active ? "border-2 border-green-500 " : null
              } `}
              src={item.img}
              alt=""
            />
          );
        })}
      </div>
        </div>
    
    </div>
  );
};

export default LeftSection;
