import { Link } from "react-router-dom"
import { motion } from "framer-motion";

const EmptyCart = () => {
  return (
    <motion.div
    initial={{ y: 0, opacity: 0.3 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed bottom-0 right-0 left-0 top-32 z-20 bg-white flex justify-center items-center">
        <div className="flex flex-col items-center">
          <img
            className="w-[50%]"
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/60adc47d.jpg"
            alt="keranhjagkosong"
          />
          <p className="capitalize font-bold text-xl">
            wah, keranjangmu kosong nih
          </p>
          <p className="text-gray-500 text-sm">
            Daripada dianggurin, isi saja dengan barang-barang menarik
          </p>
          <p className="text-gray-500 text-sm">
            {" "}
            Lihat-lihat dulu, siapa tahu ada yang kamu suka!
          </p>
          <Link to={"/"}>
          <button className="bg-green-600 text-white px-10 mt-4 py-2 font-bold rounded-lg">Mulai Belanja</button>
          </Link>
        </div>
      </motion.div>
  )
}

export default EmptyCart