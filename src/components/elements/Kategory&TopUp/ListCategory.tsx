import { categoryglobal } from "./isiUlangpulsa";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "./carousel.css";

const ListCategory = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
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
    <div className="flex items-center gap-1 p-5 w-full lg:flex-wrap md:flex-wrap sm:flex-wrap xs:flex-wrap ">
      {/* <Carousel
        className="z-10 relative"
        autoPlay={false}
        responsive={responsive}
      >
         {categoryglobal.map((item: any, index: number) => {
          return (
            <div key={index} className="flex items-center gap-1 border border-gray-400 px-2 py-2 rounded-xl">
              <img
                className="w-5 h-5"
                src={item.img}
                alt=""
              />
              <p className="capitalize text-sm">{item.name}</p>
            </div>
          );
        })}
      </Carousel> */}
      {categoryglobal.map((item: any, index: number) => {
          return (
            <Link to={"/test"}>
            <div key={index} className="flex items-center gap-1 border border-gray-400 px-2 py-2 rounded-xl">
              <img
                className="w-5 h-5"
                src={item.img}
                alt=""
              />
              <p className="capitalize text-sm">{item.name}</p>
            </div>
            </Link>
          );
        })}
    </div>
  );
};

export default ListCategory;
