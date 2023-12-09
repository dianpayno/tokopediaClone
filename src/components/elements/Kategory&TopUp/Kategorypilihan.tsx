import { kategorypilihanCarousel } from "../../utils/carouselJumbo";
import Carousel from "react-multi-carousel";
import "./carousel.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Kategorypilihan = () => {
  const [arrowShow, setArrowShow] = useState(false);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div 
    onMouseEnter={() => setArrowShow(true)}
    onMouseLeave={() => setArrowShow(false)}
    className="w-full py-3 px-5 mt-4">
      <Carousel
        className="z-10 relative"
        autoPlay={false}
        infinite={true}
        responsive={responsive}
        customLeftArrow={
          <IoIosArrowBack
            size={35}
            className={`${
              arrowShow ? "block" : "hidden"
            } absolute top-10 left-0 hover:shadow-md cursor-pointer rounded-full p-2 text-gray-500 bg-white`}
          />
        }
        customRightArrow={
          <IoIosArrowForward
            size={35}
            className={`${
              arrowShow ? "block" : "hidden"
            } absolute z-10 top-10 right-0 hover:shadow-xl cursor-pointer rounded-full p-2 text-gray-500 bg-white`}
          />
        }
      >
        {kategorypilihanCarousel.map((item) => {
          return (
            <div className="flex justify-center items-center gap-14">
              <Link to={"/test"}>
                <div
                  key={item.id}
                  className="bg-white h-32 w-32 rounded-xl overflow-hidden border"
                >
                  <img src={item.img} alt="" />
                </div>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Kategorypilihan;
