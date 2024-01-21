const EmptyCartHover = () => {
  return (
    <div className="flex flex-col items-center p-10">
      <img
        className="w-[50%]"
        src="https://ecs7.tokopedia.net/assets-unify/il-header-cart-empty.jpg"
        alt="kosong"
      />
      <p className="capitalize font-bold text-md">
        wah, keranjangmu kosong nih
      </p>
      <p className="text-gray-500 text-xs text-center">
        Daripada dianggurin, isi saja dengan barang-barang menarik Lihat-lihat
        dulu, siapa tahu ada yang kamu suka!
      </p>
    </div>
  );
};

export default EmptyCartHover;
