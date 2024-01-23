

import { useCart } from "../../contex/CartContex";

const CountDownSale = () => {
  
  const { hours,minutes,seconds} = useCart();
 
 
  return (
    <div className="flex items-center gap-1">
      <p className="text-md font-bold text-white bg-red-600 py-1 px-2 rounded">
        0{hours}
      </p>
      <p className="text-md font-bold text-red-600">:</p>
      <p className="text-md font-bold text-white bg-red-600 py-1 px-2 rounded">
        {minutes < 10 ? `0${minutes}` : minutes}
      </p>
      <p className="text-md font-bold text-red-600">:</p>
      <p className="text-md font-bold text-white bg-red-600 py-1 px-2 rounded">
        {seconds< 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
};

export default CountDownSale;
