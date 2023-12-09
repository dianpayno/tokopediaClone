import Carousel from "react-multi-carousel";
import "./jumbo.css";
import testSatu from "../../../assets/carousel/1.webp";
import testDua from "../../../assets/carousel/2.webp";
import testTiga from "../../../assets/carousel/3.webp";
import testEmpat from "../../../assets/carousel/4.webp";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useCategory } from "../../contex/display";
import { useState } from "react";
const JumboCarousel = () => {
  const [arrowShow, setArrowShow] = useState(false);
  const {kategory} = useCategory();
  

  const JumboImage = [
    {
      id: 1,
      image: testSatu,
    },
    {
      id: 2,
      image: testDua,
    },
    {
      id: 3,
      image: testTiga,
    },
    {
      id: 4,
      image: testEmpat,
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="pt-36">
    <div
       onMouseEnter={() => setArrowShow(true)}
       onMouseLeave={() => setArrowShow(false)}
      className="w-full px-5"
    >
      <Carousel 
      className={`${kategory ? "-z-10" :null}`}
        renderButtonGroupOutside
        customLeftArrow={
          <IoIosArrowBack
            size={45}
            className={`${
              arrowShow ? "block" : "hidden"
            } absolute z-10 top-32 left-0 hover:shadow-md cursor-pointer rounded-full p-3 text-gray-500 bg-white`}
          />
        }
        customRightArrow={
          <IoIosArrowForward
            size={45}
            className={`${
              arrowShow ? "block" : "hidden"
            } absolute z-10 top-32 right-0 hover:shadow-md cursor-pointer rounded-full p-3 text-gray-500 bg-white`}
          />
        }
       
        showDots={true}
        infinite={true}
        responsive={responsive}
      >
        {JumboImage.map((item, index) => {
          return (
            <div
        
            key={index} className="flex justify-center ">
              <img
             
                className="rounded-lg cursor-pointer"
                src={item.image}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </div>
    </div>
  );
};

export default JumboCarousel;
