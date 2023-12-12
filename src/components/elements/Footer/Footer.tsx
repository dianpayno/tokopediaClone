import { menu, menuBantuan, menuBeli, menuJual } from "./Footermenu";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 p-7 m-7">
      <div>
        <p className="text-lg font-bold">Tokopedia</p>
        {menu.map((item: any) => {
          return (
            <Link key={item.id} to={item.link}>
              <p className="text-sm text-gray-400 mt-2  hover:text-green-500 capitalize">
                {item.menu}
              </p>
            </Link>
          );
        })}
      </div>
      <div>
      <p className="text-lg font-bold">Beli</p>
      {menuBeli.map((item: any) => {
          return (
            <Link key={item.id} to={item.link}>
              <p className="text-sm text-gray-400 mt-2  hover:text-green-500 capitalize">
                {item.menu}
              </p>
            </Link>
          );
        })}
      <p className="text-lg font-bold mt-3">Jual</p>
      {menuJual.map((item: any) => {
          return (
            <Link key={item.id} to={item.link}>
              <p className="text-sm text-gray-400 mt-2  hover:text-green-500 capitalize">
                {item.menu}
              </p>
            </Link>
          );
        })}
      <p className="text-lg font-bold mt-3">Bantuan & Panduan</p>
      {menuBantuan.map((item: any) => {
          return (
            <Link key={item.id} to={item.link}>
              <p className="text-sm text-gray-400 mt-2  hover:text-green-500 capitalize">
                {item.menu}
              </p>
            </Link>
          );
        })}
      
      </div>
      <div>
      <p className="text-lg font-bold capitalize ">ikuti kami</p>
      <div className="flex items-center gap-2">
        <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/90f8d7cf.svg" alt="" />
        <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/bb6967ee.svg" alt="" />
        <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/c6c3a108.svg" alt="" />
        <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/6bbf7298.svg" alt="" />
      </div>
      </div>
      <div className="flex flex-col items-center">
        <img src="https://images.tokopedia.net/img/unify/il_footer_hd_v2.png" alt="" />
        <div className="flex items-center gap-2 mt-3">
            <img src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-android.svg" alt="" />
            <img src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-ios.svg" alt="" />
        </div>
        <p className="text-sm text-gray-400 mt-3 font-bold">© 2009 - 2023, PT. Tokopedia.</p>
      </div>
    </div>
  );
};

export default Footer;
