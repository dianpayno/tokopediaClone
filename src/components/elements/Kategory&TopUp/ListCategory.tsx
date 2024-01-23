import { categoryglobal } from "./isiUlangpulsa";

import { Link } from "react-router-dom";
import "./carousel.css";

const ListCategory = () => {

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
