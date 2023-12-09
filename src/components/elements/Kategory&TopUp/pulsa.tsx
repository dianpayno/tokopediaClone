import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { isiUlangPulsa } from "./isiUlangpulsa";

const Pulsa = () => {
  const [active, setActive] = useState(false);
  const [activeNomor, setActiveNomor] = useState(false);
  const [pulsa, setPulsa] = useState("pilih");
  const [isOpen, setIsOpen] = useState(false);
  const [nomorHp, setNomorHp] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setActive(!active);
    setActiveNomor(false);
  };

  const toggleActiveNomor = () => {
    setActiveNomor(!activeNomor);
    setActive(false);
    setIsOpen(false);
  };

  return (
    <div className="p-4 flex gap-2 items-center justify-center">
      <div className="flex flex-col ">
        <label className="text-sm capitalize text-gray-500 font-semibold">
          nomor telpon
        </label>
        <div
          onClick={toggleActiveNomor}
          className={`${
            activeNomor ? "border-green-400 " : "border-gray-300 "
          }border h-10 rounded-lg overflow-hidden flex items-center justify-between w-52`}
        >
          <input
            className={`${
              nomorHp === "" ? "w-[80%]" : null
            }placeholder-gray-300 w-full text-sm border-0 focus:outline-none  px-2 placeholder:capitalize placeholder:text-xs h-full`}
            type="text"
            onChange={(e) => setNomorHp(e.target.value)}
            placeholder="masukan nomor telpon"
          />
          {nomorHp !== "" ? (
            <div className="w-[20%] px-1">
              <img
                className="h-full w-full"
                src="https://images.tokopedia.net/img/elTgOa/2022/11/1/8dbc10f3-1c29-42f1-b541-a6cb875ef3e4.png"
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm capitalize text-gray-500 font-semibold">
          nominal
        </label>
        <div className="flex items-center gap-3 ">
          <div
            onClick={toggleDropdown}
            className={`${
              active ? "border-green-400 " : "border-gray-300 "
            } flex items-center h-10 rounded-lg justify-between border w-52 py-1 px-2 capitalize relative`}
          >
            <p className="capitalize text-gray-500 ">{pulsa}</p>
            {isOpen ? (
              <MdKeyboardArrowUp className="text-gray-500" />
            ) : (
              <MdKeyboardArrowDown className="text-gray-500" />
            )}

            {isOpen && (
              <div className="bg-white border border-gray-300 rounded-md absolute top-10 left-0 w-full h-32 shadow overflow-y-scroll">
                <div className="flex flex-col items-center justify-start p-2">
                  {isiUlangPulsa.map((item: any, index: number) => {
                    return (
                      <p
                        key={item.id}
                        onClick={() => setPulsa(item.name)}
                        className="hover:bg-gray-100 px-1 py-1 rounded-md w-full cursor-pointer"
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button className="px-6 h-10 bg-green-600 text-white font-semibold rounded-lg">
            Beli
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pulsa;
