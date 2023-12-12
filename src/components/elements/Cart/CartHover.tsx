import { Link } from "react-router-dom";

const CartHover = () => {
  const name = "TROPICANA SLIM GULA JAWA BEBAS GULA (SUGAR FREE) 350ML";
  const price = 25000;
  return (
    <div className="p-3">
      <div className="flex justify-between items-center border-b pb-3">
        <p className="text-sm font-bold text-gray-600">Keranjang (31)</p>
        <Link to={"/cart"}>
        <p className="text-sm font-bold text-green-600">Lihat Sekarang</p>
        </Link>
      </div>

      {/* list cart untuk dimap */}
      {
        [1,2,4,5,6].map((item: number) => {
            return(
                <div key={item} className="my-3 flex items-center gap-1 justify-between">
                <img
                  className="w-12 h-12 object-cover rounded-sm"
                  src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2022/3/24/71079858-2d46-4a93-bf1e-8c9d5c3eeadb.jpg.webp?ect=4g"
                  alt=""
                />
                <div>
                  <p className="text-sm font-bold">{name.substring(0, 26) + "..."}</p>
                  <p className="text-xs text-gray-600">29 Barang (500)gr</p>
                </div>
                <p className="text-sm font-bold text-orange-600">
                  {price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  })}
                </p>
              </div>
            )
        })
      }
     
      
    </div>
  );
};

export default CartHover;
