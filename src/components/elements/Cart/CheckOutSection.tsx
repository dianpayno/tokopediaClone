import { LuBadgePercent } from "react-icons/lu";
import { MdArrowForwardIos } from "react-icons/md";

type Props = {
  totalBelanja: number;
  totalQty: number;
  diskon: number;
};
const CheckOutSection = (props: Props) => {
  const { totalBelanja, totalQty, diskon } = props;
  const totalSetelahDiskon = totalBelanja - diskon;

  return (
    <div className="w-full flex flex-col  border border-gray-300 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 p-2 border rounded-xl m-5">
        <LuBadgePercent className="text-green-600 text-xl" />
        <div>
          <p className="capitalize font-semibold text-gray-600 text-sm">
            makin hemat pakai promo
          </p>
          <p className="text-sm capitalize">
            pilih barang dulu sebelum pakai promo
          </p>
        </div>
        <MdArrowForwardIos className="text-gray-500" />
      </div>

      <div className="border-t-[6px] p-5 ">
        <p className="text-lg font-bold capitalize mb-3">Ringkasan Belanja</p>
        <div className="flex justify-between">
          <p className="text-gray-500">Total Harga ({totalQty} barang)</p>
          <p className="text-gray-500">
            {totalBelanja.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
        <div className="flex justify-between border-b-2 pb-4">
          {diskon <= 0 ? null : (
            <>
              <p className="text-gray-500">Total Diskon</p>
              <p className="text-gray-500">
                -
                {diskon.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                })}
              </p>
            </>
          )}
        </div>
        <div className="flex justify-between my-3">
          <p className="text-lg font-bold capitalize">Total Harga</p>
          <p className="text-lg font-bold capitalize">
            {totalSetelahDiskon.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
        <button
        disabled={totalBelanja <= 0}
        className="w-full disabled:bg-slate-300 p-2 text-lg rounded-lg bg-green-600 text-white font-bold">
          Beli ({totalQty})
        </button>
      </div>
    </div>
  );
};

export default CheckOutSection;
