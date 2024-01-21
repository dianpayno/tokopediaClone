import { Link } from "react-router-dom";

type Props = {
  dataProduk: any;
};
const CartHover = (props: Props) => {
  const { dataProduk } = props;

  return (
    <div className="p-10">
      <div className="flex justify-between items-center border-b pb-3">
        <p className="text-sm font-bold text-gray-600">
          Keranjang ({dataProduk?.length})
        </p>
        <Link to={"/cart"}>
          <p className="text-sm font-bold text-green-600">Lihat Sekarang</p>
        </Link>
      </div>

      {/* list cart untuk dimap */}
      {dataProduk?.map((item: any, index: number) => {
        const sale = (Number(item.harga) * Number(item.sale)) / 100;
        const hargaDiskon =Math.ceil((Number(item.harga) - sale)/100)*100;
        return (
          <div
            key={index}
            className="my-3 flex items-center gap-1 justify-between"
          >
            <img
              className="w-12 h-12 object-cover rounded-sm"
              src={item.image[1]}
              alt={item.namaProduk}
            />
            <div>
              <p className="text-sm font-bold">
                {item.namaProduk.substring(0, 15) + "..."}
              </p>
              <p className="text-xs text-gray-600">{item.qty} Barang (500)gr</p>
            </div>
            <p className="text-sm font-bold text-orange-600">
              {hargaDiskon.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CartHover;
