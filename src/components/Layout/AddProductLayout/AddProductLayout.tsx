import { FcIdea } from "react-icons/fc";
import { useState, useEffect, useRef } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useMutation } from "react-query";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Toast from "../../elements/Toast/Toast";
import { useNavigate } from "react-router-dom";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const AddProductLayout = () => {
  const [images, setImages] = useState<any>([]);
  const [uplodProgres, setUplodProgres] = useState(0);
  const [deskripsi, setDeskripsi] = useState("");
  const [toastImage, setToastImage] = useState(false);
  const [titleToastImage, setTitleToastImage] = useState(
    "berhasil menambahkan image"
  );
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);
  const imageref = useRef<any>(null);
  const [active, setActive] = useState(false);

  const [dataProduk, setDataProduk] = useState({
    namaProduk: "",
    namaToko: "Tokopedia Official",
    alamatToko: "Jakarta Pusat",
    kategori: "",
    etalase: "",
    harga: 0,
    stok: 0,
    minpesanan: 1,
    sale: 0,
    video: "www.youtube.com",
    image: [],
  });
  const [isFocused, setIsFocused] = useState(false);
  const imageSlice = dataProduk?.image.slice(0, 4);

 
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDataProduk({
      ...dataProduk,
      [name]: value,
    });
  };

  useEffect(() => {
    const url: any = [];
    const uploadFile = () => {
      for (let i = 0; i < images.length; i++) {
        const name = new Date().getTime() + images[i].name;
        const storageRef = ref(storage, `productTopedClone/${name}`);
        const uploadTask = uploadBytesResumable(storageRef, images[i]);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setToastImage(true);
            setUplodProgres(progress);
            switch (snapshot.state) {
              case "paused":
                setTitleToastImage("Upload is paused");
                setToastImage(true);
                break;
              case "running":
                console.log("Upload is running");

                break;
            }
          },
          (error) => {
            setTitleToastImage("Gagal menambahkan gambar produk");
            setToastImage(true);
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              url.push(downloadURL);
              setDataProduk({
                ...dataProduk,
                image: url,
              });
            });
          }
        );
      }
    };
    images && uploadFile();
  }, [images]);

  const { mutate: handleSubmit } = useMutation(
    async (e: any) => {
      e.preventDefault();
      try {
        await addDoc(collection(db, "products"), {
          ...dataProduk,
          deskripsi,
          timeStamp: serverTimestamp(),
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    {
      onSuccess: () => {
        setToast(true);
        navigate("/");
        setImages([]);
        setDeskripsi("");
        setDataProduk({
          namaProduk: "",
          namaToko: "",
          alamatToko: "",
          kategori: "",
          etalase: "",
          harga: 0,
          stok: 0,
          minpesanan: 0,
          sale: 0,
          video: "test",
          image: [],
        });
      },
    }
  );
  useEffect(() => {
    if (toast || toastImage) {
      setTimeout(() => {
        setToast(false);
        setToastImage(false);
      }, 2000);
    }
  });

  return (
    <div className="m-7 px-10">
      {toast && <Toast title="berhasil menambahkan produk" />}
      {toastImage && <Toast title={titleToastImage} />}
      <p className="text-xl font-bold">Tambah Produk</p>
      <div className="shadow rounded-md bg-white w-full mt-3 p-5">
        <p className="text-lg font-bold capitalize">informasi produk</p>
        <div className="flex items-center gap-2">
          <FcIdea />
          <span className="text-gray-500 text-xs">
            Pastikan produk tidak melanggar Hak Kekayaan Intelektual supaya
            produkmu tidak diturunkan.
          </span>
          <span className="font-bold text-green-600 text-xs">Pelajari S&K</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full grid grid-cols-3 my-5">
            <div className="col-span-1">
              <div>
                <span className="text-sm font-bold capitalize">
                  nama produk
                </span>
                <span className="text-gray-500 px-1 py-[2px] bg-slate-300 rounded-sm font-semibold text-xs ms-2">
                  Wajib
                </span>
                <p className="text-xs text-gray-500 mt-3">
                  Nama produk min. 40 karakter dengan memasukkan merek, jenis
                  produk, warna, bahan, atau tipe.
                </p>
                <p className="text-xs my-3 text-gray-500">
                  Disarankan untuk tidak menggunakan huruf kapital berlebih,
                  memasukkan lebih dari 1 merek, dan kata-kata promosi.
                </p>
                <p className="text-xs my-3 text-gray-500">
                  Nama <span className="font-bold">tidak bisa diubah</span>{" "}
                  setelah produk terjual, ya.
                </p>
              </div>
            </div>
            <div className="col-span-2 bg-white">
              <div>
                <input
                  value={dataProduk?.namaProduk}
                  name="namaProduk"
                  onChange={(e) => handleChange(e)}
                  placeholder="contoh: sepatu pria + ( jenis / kategori produk) + toko store (merek) + kanvas hitam (keterangan)"
                  className="w-full border border-gray-300 rounded-md placeholder:capitalize placeholder:font-thin text-sm focus:border-white focus:outline focus:outline-green-600 py-2 px-3"
                  type="text"
                />
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    Tips: Jenis Produk + Merek Produk + Keterangan Tambahan{" "}
                  </p>
                  <p className="text-xs text-gray-500">0/70</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-7">
              <div>
                <span className="text-sm font-bold capitalize">kategori</span>
                <span className="text-gray-500 px-1 py-[2px] bg-slate-300 rounded-sm font-semibold text-xs ms-2">
                  Wajib
                </span>
                <p className="text-xs text-gray-500 mt-3">
                  Pilih kategori yang sesuai karena biaya layanan akan
                  tergantung pada kategori. Jika pemilihan kategori kurang
                  sesuai, maka kategori akan diubah oleh Tokopedia. Pelajari
                  Selengkapnya
                </p>
              </div>
            </div>
            <div className="col-span-2 bg-white mt-7">
              <div>
                <input
                  value={dataProduk?.kategori}
                  name="kategori"
                  onChange={(e) => handleChange(e)}
                  placeholder="masukan kategori"
                  className="w-full border border-gray-300 rounded-md placeholder:capitalize placeholder:font-thin text-sm focus:border-white focus:outline focus:outline-green-600 py-2 px-3"
                  type="text"
                />
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    Bebas biaya layanan untuk 100 transaksi pertama
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 mt-7">
              <div>
                <span className="text-sm font-bold capitalize">Etalase</span>
                <p className="text-xs text-gray-500 mt-3">
                  Kamu dapat menambah etalase baru atau memilih dari daftar
                  etalase yang ada
                </p>
              </div>
            </div>
            <div className="col-span-2 bg-white mt-7">
              <div>
                <input
                  value={dataProduk?.etalase}
                  name="etalase"
                  onChange={(e) => handleChange(e)}
                  placeholder="masukan harga"
                  className="w-[50%] border border-gray-300 rounded-md placeholder:capitalize placeholder:font-thin text-sm focus:border-white focus:outline focus:outline-green-600 py-2 px-3"
                  type="text"
                />
              </div>
            </div>

            {/* section 2 */}
          </div>
          <p className="text-lg font-bold">Detail Produk</p>
          <div className="w-full grid grid-cols-3 my-5">
            <div className="col-span-1">
              <span className="text-sm font-bold capitalize">foto produk</span>
              <span className="text-gray-500 px-1 py-[2px] bg-slate-300 rounded-sm font-semibold text-xs ms-2">
                Wajib
              </span>
              <div>
                <p className="text-xs text-gray-500 mt-3">
                  Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px
                  (Untuk gambar optimal gunakan ukuran minimum 700 x 700 px).
                </p>

                <p className="text-xs text-gray-500 mt-3">
                  Pilih foto produk atau tarik dan letakkan hingga 5 foto
                  sekaligus di sini. Upload min. 3 foto yang menarik dan berbeda
                  satu sama lain untuk menarik perhatian pembeli.
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <input
                ref={imageref}
                multiple
                hidden
                onChange={(e) => setImages(e.target.files)}
                type="file"
                className="w-full border border-gray-300 rounded-md placeholder:capitalize placeholder:font-thin text-sm focus:border-white focus:outline focus:outline-green-600 py-2 px-3"
              />

              <div className="flex gap-2">
                <div
                  onClick={() => imageref.current?.click()}
                  className="group border-2 border-dashed h-[150px] w-[150px] flex justify-center items-center cursor-pointer rounded-md hover:border-green-600 border-gray-300"
                >
                  <MdOutlineAddPhotoAlternate className="text-3xl text-gray-300 group-hover:text-green-600" />
                </div>
                {imageSlice.map((item: any, index: number) => {
                  return (
                    <div key={index}>
                      <img
                        className="h-[150px] w-[150px] object-cover rounded-md"
                        src={item}
                      />
                    </div>
                  );
                })}
              </div>
              <p className="text-xs my-3">Masukan beberapa photo</p>
            </div>

            <div className="col-span-1">
              <span className="text-sm font-bold capitalize">
                Kondisi Produk
              </span>
            </div>

            <div className="col-span-2">
              <label className="label cursor-pointer w-[20%]">
                <input
                  onChange={(e) => handleChange(e)}
                  type="radio"
                  name="kondisi"
                  value={"Baru"}
                  className="radio radio-sm checked:bg-green-600"
                />
                <span className="label-text">Baru</span>
                <input
                  onChange={(e) => handleChange(e)}
                  type="radio"
                  name="kondisi"
                  value={"Bekas"}
                  className="radio radio-sm checked:bg-green-600"
                />
                <span className="label-text">Bekas</span>
              </label>
            </div>

            <div className="col-span-1">
              <span className="text-sm font-bold capitalize">
                Deskripsi Produk
              </span>
              <div>
                <p className="text-xs text-gray-500 mt-3">
                  Pastikan deskripsi produk memuat penjelasan detail terkait
                  produkmu agar pembeli mudah mengerti dan menemukan produkmu.
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  Disarankan untuk tidak memasukkan info nomor HP, e-mail, dsb.
                  ke dalam deskripsi produk untuk melindungi data pribadimu.
                </p>
              </div>
            </div>

            <div className="col-span-2">
              <div
                style={{
                  border: isFocused ? "1px solid green" : "1px solid gray",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <ReactQuill
                  modules={{
                    toolbar: false,
                  }}
                  theme="snow"
                  value={deskripsi}
                  onChange={setDeskripsi}
                  placeholder="Sepatu Sneakers Pria Tokostore Kanvas Hitam Seri C28B

                  - Model simple
                  - Nyaman Digunakan
                  - Tersedia warna hitam
                  - Sole PVC (injection shoes) yang nyaman dan awet untuk digunakan sehari - hari
                  
                  Bahan:
                  Upper: Semi Leather (kulit tidak pecah-pecah)
                  Sole: Premium Rubber Sole
                  
                  Ukuran
                  39 : 25,5 cm
                  40 : 26 cm
                  41 : 26.5 cm
                  42 : 27 cm
                  43 : 27.5 - 28 cm
                  
                  Edisi terbatas dari Tokostore dengan model baru dan trendy untukmu. Didesain untuk bisa dipakai dalam berbagai acara. Sangat nyaman saat dipakai sehingga dapat menunjang penampilan dan kepercayaan dirimu. Beli sekarang sebelum kehabisan!"
                  className="w-full h-[200px] "
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </div>
            </div>
            {/* 
            <label>video produk</label>
            <input
              name="video"
              value={dataProduk?.video}
              onChange={(e) => handleChange(e)}
              type="text"
              className="w-full border border-gray-300 rounded-md placeholder:capitalize placeholder:font-thin text-sm focus:border-white focus:outline focus:outline-green-600 py-2 px-3"
            />

            <label>minimun pemesanan</label>
            <input
              name="minpesanan"
              value={dataProduk?.minpesanan}
              onChange={(e) => handleChange(e)}
              type="number"
              className="w-full border border-gray-300 rounded-md placeholder:capitalize placeholder:font-thin text-sm focus:border-white focus:outline focus:outline-green-600 py-2 px-3"
            />
            <label>harga</label>
            <input
              name="harga"
              value={dataProduk?.harga}
              onChange={(e) => handleChange(e)}
              type="number"
              className="w-full border border-gray-300 rounded-md placeholder:capitalize placeholder:font-thin text-sm focus:border-white focus:outline focus:outline-green-600 py-2 px-3"
            />
            <label>stok produk</label>
            <input
              name="stok"
              value={dataProduk?.stok}
              onChange={(e) => handleChange(e)}
              type="number"
              className="w-full border border-gray-300 rounded-md placeholder:capitalize placeholder:font-thin text-sm focus:border-white focus:outline focus:outline-green-600 py-2 px-3"
            />
            <label>nama toko</label>
            <input
              name="namaToko"
              value={dataProduk?.namaToko}
              onChange={(e) => handleChange(e)}
              type="text"
              className="w-full border border-gray-300 rounded-md placeholder:capitalize placeholder:font-thin text-sm focus:border-white focus:outline focus:outline-green-600 py-2 px-3"
            />
            <label>alamat toko</label>
            <input
              name="alamatToko"
              value={dataProduk?.alamatToko}
              onChange={(e) => handleChange(e)}
              type="text"
              className="w-full border border-gray-300 rounded-md placeholder:capitalize placeholder:font-thin text-sm focus:border-white focus:outline focus:outline-green-600 py-2 px-3"
            />
            <label>sale in percent</label>
            <input
              name="sale"
              value={dataProduk?.sale}
              onChange={(e) => handleChange(e)}
              type="number"
              placeholder="contoh ketik 20 untuk 20%"
              className="w-full border border-gray-300 rounded-md placeholder:capitalize placeholder:font-thin text-sm focus:border-white focus:outline focus:outline-green-600 py-2 px-3"
            />
            <label>deskripsi produk</label>
           
            */}
          </div>
          {/* section 3 */}
          <p className="text-lg font-bold mt-5">Harga Produk</p>
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-1 mt-2">
              <span className="text-sm font-bold capitalize">
                Minimum Pemesanan
              </span>
              <p className="text-xs text-gray-500">
                Atur jumlah minimum yang harus dibeli untuk produk ini.
              </p>
            </div>
            <div className="col-span-2">
              <div>
                <input
                  value={dataProduk?.minpesanan}
                  name="minpesanan"
                  onChange={(e) => handleChange(e)}
                  placeholder="1"
                  className="w-full border border-gray-300 rounded-md placeholder:capitalize placeholder:font-thin text-sm focus:border-white focus:outline focus:outline-green-600 py-2 px-3"
                  type="number"
                />
                {dataProduk.minpesanan < 1 && (
                  <p className="text-xs text-red-600">Jml.pesanan min 1</p>
                )}
              </div>
            </div>

            <div className="col-span-1 mt-2">
              <div>
                <span className="text-sm font-bold capitalize">
                  Harga Satuan
                </span>
                <span className="text-gray-500 px-1 py-[2px] bg-slate-300 rounded-sm font-semibold text-xs ms-2">
                  Wajib
                </span>
              </div>
            </div>
            <div className="col-span-2">
              <div
               className={`w-full border ps-3 overflow-hidden ${active ? "border-green-600" : "border-gray-300"} bg-gray-300 rounded-md flex gap-3 justify-center items-center`}
              >
                <span className="font-bold">Rp.</span>
                <input
                onFocus={()=>setActive(true)}
                  value={dataProduk?.harga}
                  name="harga"
                  onChange={(e) => handleChange(e)}
                  placeholder=""
                  className="w-full border-none outline-none  placeholder:capitalize placeholder:font-thin text-sm  py-2 px-3"
                  type="number"
                />
                
              </div>
            </div>

            <div className="col-span-1 mt-2">
              <div>
                <span className="text-sm font-bold capitalize">
                  Potongan harga
                </span>
                
              </div>
            </div>
            <div className="col-span-2">
              <div
              
              >
                 <input
                  value={dataProduk?.sale}
                  name="sale"
                  onChange={(e) => handleChange(e)}
                  placeholder="ketik 20 untuk misal potongan 20%" 
                  className="w-full border border-gray-300 rounded-md placeholder:capitalize placeholder:font-thin text-sm focus:border-white focus:outline focus:outline-green-600 py-2 px-3"
                  type="number"
                />
                <p className="text-xs text-gray-600 ">Ketik 20 untuk misal potongan 20%</p>
                
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-7">
          <button
            disabled={uplodProgres < 100 && uplodProgres > 0}
            type="submit"
            className="btn btn-success mt-4 w-[30%]"
          >
            Tambahkan Produk
          </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductLayout;
