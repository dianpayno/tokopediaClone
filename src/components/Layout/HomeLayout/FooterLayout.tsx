import Footer from "../../elements/Footer/Footer";

const FooterLayout = () => {
  return (
    <>
      <div className="m-7 pb-4 flex justify-between items-center border-b-2 border-gray-300 border-dotted">
        <div>
          <p className="text-2xl font-bold capitalize ">
            Cari semua di tokopedia!
          </p>
          <p className="text-lg font-bold capitalize text-yellow-600 mt-3">
            Punya Toko Online? Buka cabangnya di Tokopedia
          </p>
          <p className="text-xs text-gray-500">
            Mudah, nyaman dan bebas Biaya Layanan Transaksi.{" "}
            <span className="font-bold">GRATIS!</span>
          </p>
          <button className="bg-green-600 text-white text-xs py-2 px-3 mt-3 rounded-lg capitalize font-bold">
            buka toko GRATIS
          </button>
          <span className="text-xs font-semibold text-green-700 ms-2">
            Pelajari lebih lanjut
          </span>
        </div>
        <img
          className="w-[35%]"
          src="https://images.tokopedia.net/seocontent/SEOcontent1.jpg?ect=4g"
          alt=""
        />
      </div>

      <div className="mb-7 px-14 pt-7 pb-10 flex items-center gap-8 justify-center border-b border-gray-300 ">
        <div className="flex items-center gap-3">
          <img
          className="w-24 h-24"
            src="https://images.tokopedia.net/seocontent/SEOcontent2.jpg?ect=4g"
            alt=""
          />
          <div>
            <p className="text-lg font-bold text-green-600">Transparan</p>
            <p className="text-sm text-gray-500 capitalize">pembayaran anda baru diteruskan kepenjual setelah barang diterima</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img
          className="w-24 h-24"
            src="https://images.tokopedia.net/seocontent/SEOcontent3.jpg?ect=4g"
            alt=""
          />
          <div>
            <p className="text-lg font-bold text-green-600">Aman</p>
            <p className="text-sm text-gray-500 capitalize">bandingkan review untuk berbagai online shop terpercaya se-indonesia</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img
          className="w-24 h-24"
            src="https://images.tokopedia.net/seocontent/SEOcontent4.jpg?ect=4g"
            alt=""
          />
          <div>
            <p className="text-lg font-bold text-green-600 capitalize">fasilitas escrow gratis</p>
            <p className="text-sm text-gray-500 capitalize">fasilitas escrow (rekening bersama) tokopedia tidak dikenakan biaya tambahan</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default FooterLayout;
