import { LuDot } from "react-icons/lu";
import { TiStarFullOutline } from "react-icons/ti";
import { HiBuildingStorefront } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoPhonePortraitOutline } from "react-icons/io5";


const MiddleSection = () => {
  
  return (
    <div className="">
      <div className="border-b border-gray-200 pb-5">
        <p className="text-xl font-semibold capitalize">
          Daia Deterjen Bubuk Violet 4 kg
        </p>
        <div className="flex gap-1 items-center capitalize">
          <p className="text-sm">
            <span> terjual</span>
            <span className="text-gray-400 ms-1">50 rb+</span>
          </p>
          <LuDot />
          <TiStarFullOutline className="text-yellow-500" />
          <p className="text-sm">
            <span>5</span>
            <span className="text-gray-400 ms-1">(36,5rb rating)</span>
          </p>
          <LuDot />
          <p className="text-sm">
            diskusi<span className="text-gray-400 ms-1">(62)</span>
          </p>
        </div>
        <div>
          <p className="text-3xl mt-5 font-semibold">Rp55.000</p>
          <span className="text-xs font-semibold rounded-md text-red-500 bg-red-200 p-1 me-1">
            20%
          </span>
          <span className="text-md text-gray-400 line-through">Rp65.000</span>
        </div>
      </div>

      {/* detail produk */}
      <div className="flex justify-start items-center border-b ">
        <div>
          <p className="text-md font-bold text-green-600 capitalize px-7 py-2">
            detail
          </p>
          <div className="bg-green-600 h-[2px] rounded-full "></div>
        </div>
      </div>
      <div className="border-b py-3">
        <p className="capitalize text-sm text-gray-500 my-1">
          Kondisi :
          <span className="text-sm capitalize ms-1 text-black">baru</span>{" "}
        </p>
        <p className="capitalize text-sm text-gray-500 my-1">
          min pemesanan :
          <span className="text-sm capitalize ms-1 text-black">1 buah</span>{" "}
        </p>
        <p className="capitalize text-sm text-gray-500 my-1">
          etalase :
          <span className="text-sm uppercase ms-1 text-green-500 font-bold">
            daia
          </span>{" "}
        </p>
        <p className="capitalize text-sm  my-2">
          Daia Deterjen, Deterjen Bubuk No 1 di Indonesia (2019, Nielsen) Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corporis
          sequi dolorem quaerat consequatur deserunt est maiores ea porro
          tenetur nemo, nobis debitis? Nemo quo voluptatem iste nobis!
          Reiciendis sint id fugit! Culpa reiciendis quae repellat, soluta
          accusantium fuga qui! Veniam libero dolor sit reiciendis voluptates
          sequi voluptatibus quis beatae. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Praesentium est facere error dolor
          perferendis eos ut, quasi quo excepturi placeat adipisci? Error,
          dignissimos laudantium. Ullam cupiditate excepturi cumque quis velit
          sequi animi consequatur, quod molestias unde quas illo ipsa magni. Vel
          impedit ducimus tenetur quidem quasi tempora dignissimos cupiditate
          molestiae, officiis nisi nulla, nostrum earum autem adipisci! Hic,
          maxime optio? Sapiente veritatis saepe aliquid aspernatur minus!
          Officia provident similique possimus vitae et id earum nulla
          voluptate, ducimus minima repellat sequi dolorem harum! Excepturi
          dolore eaque nulla aut, corporis suscipit modi nobis expedita
          cupiditate, sunt cum ab, harum ea optio adipisci.
        </p>
      </div>
      {/* Nama Toko */}
      <div className="flex w-full items-start gap-3 border-b py-3">
        <div>
          <img
            className="w-[70px]"
            src="https://images.tokopedia.net/img/cache/215-square/shops-1/2020/3/21/7179543/7179543_aa20fca2-3a8a-4fdd-957e-49807ad5b5a9.jpg"
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <HiBuildingStorefront className="text-green-600 me-1" />
            <span className="text-md font-bold capitalize">
              wings official store
            </span>
          </div>
          <div className="flex items-center">
            <LuDot className="text-green-600" />
            <span className="text-md font-bold text-green-600">Online</span>
          </div>
          <div>
            <button className="py-1 mb-3 text-sm w-full text-center font-semibold border border-green-600 text-green-600 rounded-lg">
              Follow
            </button>
          </div>
        </div>
      </div>
      {/* pengiriman */}
      <div className="border-b py-3">
        <p className="text-md font-bold capitalize m-2">Pengiriman</p>
        <div className="flex items-center gap-3 my-2">
          <CiLocationOn />
          <p className="text-sm ">
            Dikirim dari
            <span className="ms-1 font-bold capitalize">Jakarta Barat</span>
          </p>
        </div>
        <div className="flex gap-3">
          <LiaShippingFastSolid />

          <div className="text-sm flex flex-col">
            <p className="capitalize">Ongkir Reguler 12,2 rb</p>
            <p className="text-gray-400">Estimasi pengiriman 1 - 2 hari</p>
            <div className="flex items-center gap-1 mb-3">
              <p className="capitalize">kurir lainnya :</p>
              <div
                className="tooltip tooltip-bottom text-xs"
                data-tip="Bisa terima barang di hari yang sama (khusus kurir tertentu)"
              >
                <button className="capitalize text-grey-700 text-xs font-bold bg-gray-300 rounded px-1 py-[2px]">
                  instan
                </button>
              </div>
              <div
                className="tooltip tooltip-bottom "
                data-tip="Bisa bayar saat barang diterima (khusus kurir tertentu)"
              >
                <button className="capitalize text-grey-700 text-xs font-bold bg-gray-300 rounded px-1 py-[2px]">
                  COD
                </button>
              </div>

              <div>
                <button className="capitalize font-bold text-xs ml-10 text-green-600">
                  lihat pilihan kurir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Download Aplikasi */}
      <div className="border-b py-3">
        <p className="text-md font-bold capitalize m-2">
          Beli di aplikasi, makin banyak promo!
        </p>
        <div className="flex justify-start w-full gap-2">
          <IoPhonePortraitOutline className="text-green-600 w-6 h-6" />
          <div>
            <p className="text-sm ">
              Scan QR-nya untuk lihat barang ini di aplikasi Tokopedia. Bebas
              ongkir, lho~
            </p>
            <button className="py-1 px-2 mb-3 text-xs capitalize font-semibold border  rounded-lg">
              scan qr
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center m-4">
        <p className="capitalize text-xs text-gray-500  ">ada masalah dengan produk ini?</p>
        <button className="capitalize text-xs text-gray-500  font-bold">Laporkan</button>
      </div>
    </div>
  );
};

export default MiddleSection;
