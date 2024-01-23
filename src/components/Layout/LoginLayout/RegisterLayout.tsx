import Input from "../../elements/Element/Input/Input";
import SelectBox from "../../elements/Element/SelectBox/SelectBox";
import Button from "../../elements/Element/button/Button";
import FooterAutentikasi from "../../elements/Element/footer/FooterAutentikasi";

import { BsFillBagCheckFill } from "react-icons/bs";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RegisterLayout = () => {
  const [show, setShow] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState<string>("");
  const [alamat, setAlamat] = useState<string>("");

  useEffect(() => {
    document.title = "Tokopedia | Daftar";
  }, []);
  const getShow = () => {
    setShow(false);
  };
  const getUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const getPhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };
  const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const getKonfirmasiPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setKonfirmasiPassword(event.target.value);
  };
  const getAlamat = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlamat(event.target.value);
    console.log(alamat);
  };

  return (
    <div>
      <div className="mt-2 text-green-500 justify-center flex items-center">
        <BannerDaftarlayout text="Tokopedia" />
      </div>
      <div className="flex flex-row justify-center gap-10 w-full items-center min-h-screen relative">
        <div className=" flex flex-col justify-center items-center">
          <img
            src="https://images.tokopedia.net/img/content/register_new.png"
            alt=""
            className="w-[350px]"
          />
          <p className="font-bold text-2xl mt-7">
            Jual Beli Mudah Hanya di BeliBeli
          </p>
          <p className="font-base text-gray-700 text-sm flex items-center ">
            Gabung yuk dan rasakan kemudahan bertransaksinya
            <BsFillBagCheckFill className="ml-1" />
          </p>
        </div>

        <div className="flex flex-col w-[380px] py-5 px-6  bg-white rounded-xl shadow z-10">
          <form method="" action={"/register"}>
            {show ? (
              <div>
                <BannerDaftarlayout text="daftar sekarang" />
                <Input
                  name="nama"
                  id="namauser"
                  placeholder="masukan nama"
                  textLabel="nama"
                  type="text"
                  textTransform="capitalize"
                  getValue={getUserName}
                  value={userName}
                />
                <Input
                  name="email"
                  id="emailuser"
                  placeholder="contoh@mail.com"
                  textLabel="email"
                  type="email"
                  textTransform="lowecase"
                  getValue={getEmail}
                  value={email}
                />

                <Input
                  name="nohp"
                  id="nohpuser"
                  placeholder="0821xxxxxxx"
                  textLabel="no handphone"
                  type="text"
                  textTransform="capitalize"
                  getValue={getPhoneNumber}
                  value={phoneNumber}
                />

                <Input
                  name="password"
                  id="passworduser"
                  textLabel="pasword"
                  type="password"
                  getValue={getPassword}
                  value={password}
                />

                <Input
                  name="konfirmasipassword"
                  id="konfirmasipassworduser"
                  textLabel="konfirmasi password"
                  type="password"
                  getValue={getKonfirmasiPassword}
                  value={konfirmasiPassword}
                />
                <Button type="button" text="selanjutnya" getClick={getShow} />
                <MasukLayoutTyphography
                  text1="Sudah punya akun BeliBeli?"
                  text2="masuk"
                />
              </div>
            ) : (
              <div>
                <BannerDaftarlayout text="detail alamat pengguna" />
                <Input
                  name="alamat"
                  id="alamatuser"
                  placeholder="masukan nama jalan, nomor dan patokan rumah "
                  textLabel="alamat"
                  type="text"
                  textTransform="capitalize"
                  getValue={getAlamat}
                  value={alamat}
                />

                <SelectBox />

                <Button type="submit" text="daftar" />
                <DaftarlayoutTyphography />
              </div>
            )}
          </form>
        </div>
      </div>
      <div>
        <FooterAutentikasi />
      </div>
    </div>
  );
};

export default RegisterLayout;

const DaftarlayoutTyphography = () => {
  return (
    <div className="text-center px-10">
      <p className="text-xs font-thin text-gray-700">
        Dengan mendaftar saya menyetujui dengan
        <span className="m-1 font-base text-green-600 capitalize">
          {" "}
          syarat dan ketentuan
        </span>
        serta
        <span className="m-1 font-base text-green-600 capitalize">
          {" "}
          kebijakan privasi
        </span>
      </p>
    </div>
  );
};

const MasukLayoutTyphography = (props: { text1: string; text2: string }) => {
  return (
    <div className="text-center px-10">
      <span className="text-xs font-thin text-gray-700 text-center">
        {props.text1}
        <span className="ms-1 font-base text-green-600 capitalize">
          <Link to={"/login"}> {props.text2}</Link>
        </span>
      </span>
    </div>
  );
};

const BannerDaftarlayout = (props: { text: string }) => {
  return (
    <div>
      <p className="font-bold text-xl text-center capitalize">{props.text}</p>
    </div>
  );
};
