import CardPromo from "../../elements/Card/CardPromo";
import CountDownSale from "../../elements/Card/CountDownSale";

const CardPromoLayout = () => {
  return (
    <div className=" py-7 px-1 mx-7 border-b">
      <div className="flex items-center gap-2">
        <p className="text-xl font-bold capitalize">traktiran pengguna baru</p>
        <p className="text-sm capitalize text-gray-500">berakhir dalam</p>
        <CountDownSale />
        <p className="text-sm font-bold capitalize text-green-600">
          lihat semuanya
        </p>
      </div>

      <div className="mt-3 flex items-center relative w-full">
        <div className=" w-[23%] py-5 px-3 flex justify-start items-start bg-purple-300 rounded-lg">
          <img
            className="w-24 h-[300px] object-cover"
            src="https://images.tokopedia.net/img/cache/240/PYbRbC/2023/12/1/84d1c051-0a4f-49d1-a07f-ee49f0eccf06.png.webp?ect=4g"
            alt=""
          />
        </div>

       
          <CardPromo />
         
        
      </div>
    </div>
  );
};

export default CardPromoLayout;
