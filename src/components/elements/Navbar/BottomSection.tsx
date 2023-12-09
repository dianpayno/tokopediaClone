import { Link } from "react-router-dom";
import { ListNavbarPromo } from "../../utils/listNavbar";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const BottomSection = () => {
   const alamat = "Jl. Andara Raya, Cinere, Jakarta Selatan, DKI Jakarta 12450 Jakarta Selatan (IDJK03).";

  return (
    <div className="flex justify-end gap-7 py-1 items-center">
    <div className="flex gap-5 items-center">
      {ListNavbarPromo.map((item) => {
        return (
          <Link key={item.id} to={item.link}>
            <p className="text-[13px] font-normal hover:text-green-600 text-gray-500 capitalize">
              {item.title}
            </p>
          </Link>
        );
      })}
    </div>
    <div className="flex items-center gap-2 pe-10">
      <CiLocationOn className="w-4 h-4 " />
      <span className="text-[13px] text-gray-500 ">Dikirim ke</span>
      <span className="text-[13px] flex items-center font-semibold">{alamat.substring(0, 45)+".."}
      <MdKeyboardArrowDown className="w-4 h-4" /></span>
    </div>
  </div>
  )
}

export default BottomSection