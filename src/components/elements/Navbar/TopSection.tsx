import { IoPhonePortraitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ListNavbar } from "../../utils/listNavbar";
import qr from "../../../assets/qr.png";
import { useState } from "react";

const TopSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <div 
    className="w-full bg-gray-100 z-[2000] flex justify-between items-center px-7 relative">
      <div className=" text-gray-500 flex items-center py-2">
        <IoPhonePortraitOutline className="w-4 h-4" />
        <p
          onMouseEnter={() => setOpen(true)}
          className="text-xs
       hover:text-green-600"
        >
          Download Tokopedia App
        </p>
      </div>

      <div>
        <div className="flex gap-5 text-xs  capitalize text-gray-500">
          {ListNavbar.map((item) => {
            return (
              <Link key={item.id} to={item.link}>
                <p className=" hover:text-green-600">{item.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
      {open && (
        <div
          onMouseLeave={() => setOpen(false)} 
          className="bg-white absolute flex justify-center items-center z-10 top-7 left-7 p-7 w-[400px] rounded-lg border shadow"
        >
          <div className="flex gap-3 items-center">
            <div className="w-[150px] h-[150px] border border-green-600 p-1 rounded-lg">
              <img className="w-full h-full object-cover" src={qr} alt="qr" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-sm text-center">
                Scan this QR or download app from:
              </p>
              <Link to={"/"}>
                <img
                  className="w-[115px]"
                  src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/e25ec508.svg"
                />
              </Link>
              <Link to={"/"}>
                <img
                  className="w-[115px]"
                  src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/4cc56a99.svg"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopSection;
