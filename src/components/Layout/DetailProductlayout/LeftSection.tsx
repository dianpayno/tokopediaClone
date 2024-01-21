import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCart } from "../../contex/CartContex";

type Props = {
  scrolledImg: boolean;
  image: any;
 
};
const LeftSection = ({scrolledImg, image}: Props) => {
  const {setOpenModal} = useCart();
  const [isActive, setIsActive] = useState(0);
  const [arrowShow, setArrowShow] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [imageLength, setImageLength] = useState(0);
  const itemPerPage = 4;
  const endIndex = Math.min(startIndex + itemPerPage);
  const visibleImage = image?.slice(startIndex, endIndex);
  const filteredImg = image?.filter((item: any, index: number) => {
    if (index === isActive) {
      return item;
    }
    item;
  });

  useEffect(() => {
    setImageLength(image?.length);
  }, [image?.length]);

  const handleNext = () => {
    if (endIndex < image.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (endIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  const handleActive = (index: number) => {
    if (startIndex !== 0) {
      setIsActive(index + 1);
    } else {
      setIsActive(index);
    }
  };

  return (
    <div
      className={`${
        scrolledImg ? "sticky top-48 left-32" : "fixed top-48 left-32"
      } pb-10`}
    >
      <div className="flex flex-col items-center">

        
        

        {filteredImg?.map((item: any, index: number) => {
          return (
            <img
              key={index}
              onClick={() =>setOpenModal(true)}
              className="w-[250px] h-[250px] object-contain cursor-pointer rounded-lg mb-5"
              src={item}
              alt=""
            />
          );
        })}
        <div
          onMouseEnter={() => setArrowShow(true)}
          onMouseLeave={() => setArrowShow(false)}
          className="p-1 relative flex justify-center items-center gap-2"
        >
          {startIndex === 0 ? null : (
            <button onClick={handlePrev}>
              <IoIosArrowBack
                size={25}
                className={`${
                  arrowShow ? "block" : "hidden"
                } absolute top-1/2 -translate-y-1/2 left-0  hover:shadow-md cursor-pointer rounded-full p-1 text-gray-500 bg-white`}
              />
            </button>
          )}
          {endIndex === imageLength || imageLength < 4 ? null : (
            <button onClick={handleNext}>
              <IoIosArrowForward
                size={25}
                className={`${
                  arrowShow ? "block" : "hidden"
                } absolute top-1/2 -translate-y-1/2 -right-3  hover:shadow-md cursor-pointer rounded-full p-1 text-gray-500 bg-white`}
              />
            </button>
          )}
          {visibleImage?.map((item: any, index: number) => {
            const active =
              startIndex !== 0 ? index + 1 === isActive : index === isActive;

            return (
              <img
                key={index}
                onMouseEnter={() => handleActive(index)}
                className={`w-11 h-11 object-cover rounded-lg overflow-hidden cursor-pointer  ${
                  active ? "border-2 border-green-500 " : null
                } `}
                src={item}
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
