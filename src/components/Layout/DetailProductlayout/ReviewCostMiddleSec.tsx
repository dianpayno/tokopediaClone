import { sampleFoto } from "./sampleFotorewview";
import { TiStarFullOutline } from "react-icons/ti";
import { FaThumbsUp } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

const ReviewCostMiddleSec = () => {
  const [ThumbOk, setThumbOk] = useState(false);
  const [lihatBalasan, setLihatBalasan] = useState(false);
  const sampleFotoSlice = sampleFoto.slice(0, 3);
  return (
    <div>
      <p className="uppercase font-bold">foto & video pembeli</p>
      <div className="flex justify-center items-center p-5 gap-3">
        {sampleFoto.map((item: any, index: number) => {
          return (
            <div key={index} className="relative">
              <img
                className="w-[50px] h-[50px] rounded object-cover "
                src={item.img}
                alt="reviewIMg"
              />
              {sampleFoto.length > 6 && index === sampleFoto.length - 1 ? (
                <div
                  className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60
                    text-white font-bold flex justify-center items-center"
                >
                  <p>+{sampleFoto.length - 6}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div>
        <p className="text-sm font-semibold uppercase">ulasan pilihan</p>
        <p className="text-sm capitalize">menampilkan 10 dari 62 ulasan</p>
      </div>

      <div className="flex justify-start items-center my-5">
        {[1, 2, 3, 4, 5].map((item: number) => {
          return (
            <TiStarFullOutline key={item} className="text-yellow-500 text-xl" />
          );
        })}
        <p className="ml-2 text-gray-400 text-sm">1 hari lalu</p>
      </div>
      <div className="flex justify-start items-center">
        <img
          className="w-[40px] h-[40px] rounded-full object-cover "
          src="https://img.freepik.com/free-photo/striped-man-stood-with-his-arms-folded-shocked_1150-27594.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=ais"
          alt=""
        />
        <p className="ml-2 text-sm font-bold capitalize">mathew gilbert</p>
      </div>
      <div className="mt-2">
        <p className="text-sm">
          Bagus! Barang baru segel semua, cc baru 1 , Garansi baru jalan .
          Overall puas dan termurah setokped!
        </p>
      </div>
      <div className="flex justify-start items-center my-5 gap-3">
        {sampleFotoSlice.map((item: any, index: number) => {
          return (
            <img
              key={index}
              className="w-[50px] h-[50px] rounded object-cover "
              src={item.img}
              alt="reviewIMg"
            />
          );
        })}
      </div>
      <div className="flex justify-between items-center">
      <div 
      onClick={() => setThumbOk(true)}
      className="flex justify-start items-center my-5 cursor-pointer">
        <FaThumbsUp className={`${ThumbOk ? "text-green-600" : "text-gray-500"} text-xl`} />
        {
          ThumbOk?  <span className="ml-2 text-green-600 text-sm capitalize">1 orang terbantu</span>:
        <span className="ml-2 text-gray-600 tetx-sm">Membantu</span>
        }
      </div>
      {
        lihatBalasan?
      <div 
      onClick={()=> setLihatBalasan(false)}
      className="flex items-center gap-1 cursor-pointer">
        <p className="text-sm">Tutup Balasan</p>
        <MdKeyboardArrowUp className="text-lg" />
      </div>
      :<div 
      onClick={()=> setLihatBalasan(true)}
      className="flex items-center gap-1 cursor-pointer">
        <p className="text-sm">Lihat Balasan</p>
        <MdKeyboardArrowDown className="text-lg" />
      </div>
      }



      </div>
      {/* balasan review costumer */}
      {
        lihatBalasan?
      <div className="px-5 py-3 bg-slate-200 rounded-md">
      <div className="flex justify-start items-center gap-1">
          <img
          className="w-[40px] h-[40px] object-cover rounded-full"
          src="https://img.freepik.com/free-vector/shop-with-sign-open-design_23-2148544029.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=sph" alt="image" />
      <p className="ml-2 text-sm font-bold capitalize">scorpio electro</p>
      <p className="text-green-700 font-bold text-xs px-2 py-1 bg-green-200 rounded-md">Penjual</p>
      <p className="ml-2 text-gray-500 text-sm">1 hari lalu</p>
      

      </div>
      <div>
        <p className="text-sm p-3">Alhamdulillah barang sudah sampai.. terima kasih bos atas ulasannya.. ditunggu orderan berikutnya ya..</p>
      </div>
      </div>:null

      }
    </div>
  );
};

export default ReviewCostMiddleSec;
