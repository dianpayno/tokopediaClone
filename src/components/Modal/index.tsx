import { GrClose } from "react-icons/gr";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useCart } from "../contex/CartContex";


type modalProps = {
  image: any;
  namaProduk: string;
};
const ModalImage = ({ image, namaProduk }: modalProps) => {

  const [active, setActive] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const { setOpenModal} = useCart();
  const itemPerPage = 1;
  const endIndex = Math.min(startIndex + itemPerPage);
  const visibleImage = image?.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < image.length) {
      setStartIndex(startIndex + 1);
      setActive(active + 1);
    }
  };

  const handlePrev = () => {
    if (endIndex > 0) {
      setStartIndex(startIndex - 1);
      setActive(active - 1);
    }
  };

  const handleActive = (index: number) => {
      setActive(index);
      setStartIndex(index);
  }

  return (
    <div className="w-[75%] h-[500px] bg-white rounded-lg relative p-5 flex flex-col ">
      <h4 className="text-xl font-bold capitalize">{namaProduk}</h4>
      <GrClose
      onClick={() =>setOpenModal(false)}
        size={20}
        className="absolute top-5 right-5 cursor-pointer"
      />
      <div className="w-full flex">
        <div className="w-[80%] flex justify-center py-5 items-center relative">
            {
                startIndex === image.length ? null :
          <div 
         onClick={handleNext}
          className="cursor-pointer p-2 rounded-full bg-white shadow-xl absolute top-1/2 -translate-y-1/2 right-0">
            <IoIosArrowForward size={30} />
          </div>
            }
          {
            startIndex === 0 ? null :
          <div 
          onClick={handlePrev}
          className="cursor-pointer absolute p-2 rounded-full bg-white shadow-xl top-1/2 -translate-y-1/2 left-0">
            <IoIosArrowBack size={30} />
          </div>
          }
          {visibleImage?.map((item: any, index: number) => {
            return (
              <img
                key={index}
                src={item}
                alt=""
                className="w-[500px] h-[350px] rounded-lg object-cover"
              />
            );
          })}
        </div>

        <div className="w-[30%] flex flex-col py-5 mt-5 ">
          <p className="font-bold text-md">Gambar Barang</p>
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {image?.map((item: any, index: number) => {
              const isactive = index === active;
              return (
                <div 
                onClick={() => handleActive(index)}
                key={index} className={`cursor-pointer rounded-lg ${isactive ? "border-2 border-green-500" : null}  `}>
                  <img
                    src={item}
                    alt=""
                    className="w-[50px] h-[50px] rounded-lg  object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalImage;
