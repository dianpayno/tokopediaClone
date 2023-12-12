import { TiStarFullOutline } from "react-icons/ti";
import { MdErrorOutline } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

const ReviewCostumer = () => {
  const rating = [
    {
      id: 1,
      star: 5,
      count: "36.5rb",
      percent: "97%",
    },
    {
      id: 2,
      star: 4,
      count: "680",
      percent: "30%",
    },
    {
      id: 3,
      star: 3,
      count: "52",
      percent: "20%",
    },
    {
      id: 4,
      star: 2,
      count: "12",
      percent: "2%",
    },
    {
      id: 5,
      star: 1,
      count: 28,
      percent: "10%",
    },
  ];

  const filterbytopik =[
    {
        id:1,
        topik:"Kualitas Barang"
    },
    {
        id:2,
        topik:"Pengiriman"
    },
    {
        id:3,
        topik:"Kemasan Barang"
    },
    {
        id:4,
        topik:"Pelayanan Penjual"
    },
    {
        id:5,
        topik:"Sesuai Deskripsi"
    },
    {
        id:6,
        topik:"harga barang"
    },



  ]
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="text-md uppercase font-bold">Ulasan pembeli</p>
        <div className="flex items-center gap-0 my-2">
          <TiStarFullOutline className="text-yellow-500 w-10 h-10" />
          <p className="text-6xl font-base">
            5.0
            <span className="text-sm text-gray-500 ml-1 font-thin">/5.0</span>
          </p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-xs font-bold">99% pembeli merasa puas</p>
          <MdErrorOutline />
        </div>
        <div>
          <p className="text-xs text-gray-500">36,6rb rating • 7.271 ulasan</p>
        </div>
        {rating.map((item: any) => {
          return (
            <div key={item.id} className="flex items-center gap-1 w-full pb-2">
              <TiStarFullOutline className="text-yellow-500 w-4 h-4" />
              <p className="text-xs font-bold text-gray-500">{item.star}</p>
              <div className=" w-36">
                <div className="h-[6px] bg-slate-300 bg-opacity-50 w-[100%] rounded-full">
                  <div
                    style={{ width: `${item.percent}` }}
                    className={`h-[6px] bg-green-600 rounded-full`}
                  ></div>
                </div>
              </div>
              <p className="text-xs font-thin text-gray-500">{item.count}</p>
            </div>
          );
        })}
      </div>
      {/* checkbox filter */}

      <div className="w-full border rounded-lg mt-7 shadow">
        <div className="flex justify-between items-center border-b px-5 py-3">
          <p className="uppercase font-bold">filter ulasan</p>
          <button className="text-sm font-bold text-green-600 capitalize">
            reset
          </button>
        </div>

        <div className="px-5 py-3 border-b mb-3">
          <div className="flex justify-between items-center">
            <p className="text-md font-bold ">Media</p>
            <IoIosArrowUp />
          </div>
          <div className="flex items-center gap-2 mt-1">
            <input
              type="checkbox"
              className="checkbox checkbox-xs  border-black rounded checked:border-green-600  [--chkbg:theme(colors.green.600)] [--chkfg:white]"
            />
            <p className="text-sm text-gray-500 capitalize">
              dengan foto & video
            </p>
          </div>
        </div>

        <div className="px-5 pb-3 border-b mb-3">
          <div className="flex justify-between items-center">
            <p className="text-md font-bold ">Rating</p>
            <IoIosArrowUp />
          </div>

          {[5, 4, 3, 2, 1].map((item: any, index: number) => {
            return (
              <div key={index} className="flex items-center gap-2 m-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs  border-black rounded checked:border-green-600  [--chkbg:theme(colors.green.600)] [--chkfg:white]"
                />
                <TiStarFullOutline className="text-yellow-500 w-6 h-6" />
                <p className="text-sm capitalize">{item}</p>
              </div>
            );
          })}
        </div>
        {/* filter by topik ulasan */}
        <div className="px-5 py-3">
          <div className="flex justify-between items-center">
            <p className="text-md font-bold ">Topik Ulasan</p>
            <IoIosArrowUp />
          </div>
          {filterbytopik.map((item: any, index: number) => {
            return (
              <div key={index} className="flex items-center gap-2 m-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs  border-black rounded checked:border-green-600  [--chkbg:theme(colors.green.600)] [--chkfg:white]"
                />
                <p className="text-sm text-gray-500 capitalize">{item.topik}</p>
              </div>
            );
          })}
          </div>
      </div>
    </>
  );
};

export default ReviewCostumer;
