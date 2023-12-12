
type Props = {
  title: string;
  isActive: number
  setIsActive: any
};
const NavbarDetailProduct = (props: Props) => {
  const { setIsActive, title, isActive } = props;
  const menuList = [
    {
      id: 1,
      menu: "Detail Produk",
    },
    {
      id: 2,
      menu: "Ulasan",
    },
    {
      id: 3,
      menu: "Diskusi",
    },
    {
      id: 4,
      menu: "Rekomendasi",
    },
  ];
  return (
    <div className="grid grid-cols-3 border-b pl-20 pt-2  border-gray-200 ">
      <div className="col-span-1 items-center">
        <span className="font-bold ">{title}</span>
      </div>
      <div className="col-span-2 flex items-center">
        {menuList.map((item: any, index: number) => {
          const active = index === isActive;
          return (
            <div onClick={() => setIsActive(index)} key={item.id}>
              <span className="text-green-600 px-5 m-2 font-bold capitalize cursor-pointer">
                {item.menu}
              </span>
              {active ? (
                <div className="h-[2px] bg-green-600 rounded-full w-full"></div>
              ) : (
                <div className="h-[2px] bg-transparent"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarDetailProduct;
