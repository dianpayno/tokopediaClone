import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { listjenisToken } from "./isiUlangpulsa";
import { nominaltoken } from "./isiUlangpulsa";

const PlnListrik = () => {
  const [active, setActive] = useState(false);
  const [activeNomor, setActiveNomor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [jenisToken, setJenisToken] = useState<string>(listjenisToken[0].name);
  const [nominal, setNominal] = useState<string>(nominaltoken[0].name);
  const [isNominalOpen, setIsNominalOpen] = useState(false);
  const [activeNominal, setActiveNominal] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setActive(true);
    setActiveNomor(false);
    setActiveNominal(false);
  };

  const toggleNominal = () => {
    setIsNominalOpen(!isNominalOpen);
    setActiveNominal(true);
    setActiveNomor(false);
    setActive(false);
  }

  const toggleActiveNomor = () => {
    setActiveNomor(true);
    setActive(false);
    setIsOpen(false);
    setActiveNominal(false);
  };

  return (
    <div className="p-4 flex gap-2 items-center justify-center">
      <div className="flex flex-col">
        <label className="text-xs capitalize text-gray-500 font-semibold">
          jenis token listrik
        </label>
        <div className="flex items-center gap-3 ">
          <div
            onClick={toggleDropdown}
            className={`${
              active ? "border-green-400 " : "border-gray-300 "
            } flex items-center h-10 rounded-lg justify-between border w-32  py-1 px-2 capitalize relative`}
          >
            <p className="capitalize text-gray-500 text-xs ">{jenisToken}</p>
            {isOpen ? (
              <MdKeyboardArrowUp className="text-gray-500" />
            ) : (
              <MdKeyboardArrowDown className="text-gray-500" />
            )}

            {isOpen && (
              <div className="bg-white border border-gray-300 rounded-md absolute top-10 left-0 w-full h-32 shadow overflow-y-scroll">
                <div className="flex flex-col items-center justify-start p-2">
                  {listjenisToken.map((item: any, index: number) => {
                    return (
                      <p
                        key={item.id}
                        onClick={() => setJenisToken(item.name)}
                        className="hover:bg-gray-100 text-xs px-1 py-1 mb-3 rounded-md w-full cursor-pointer"
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <label className="text-xs capitalize text-gray-500 font-semibold">
        No. Meter/ID Pel
        </label>
        <div
          onClick={toggleActiveNomor}
          className={`${
            activeNomor ? "border-green-400 " : "border-gray-300 "
          }border h-10 w-32 rounded-lg overflow-hidden flex items-center justify-between `}
        >
          <input
            className={`placeholder-gray-300 w-full text-sm border-0 focus:outline-none  px-2 placeholder:capitalize placeholder:text-xs h-full`}
            type="text"
            placeholder="masukan nomor"
          />
          
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-xs capitalize text-gray-500 font-semibold">
          nominal
        </label>
        <div className="flex items-center gap-3 ">
          <div
            onClick={toggleNominal}
            className={`${
                activeNominal ? "border-green-400 " : "border-gray-300 "
            } border flex items-center h-10 w-32 rounded-lg justify-between borderpy-1 px-2 capitalize relative`}
          >
            <p className="capitalize text-gray-500 text-sm ">{nominal}</p>
            {isNominalOpen ? (
              <MdKeyboardArrowUp className="text-gray-500" />
            ) : (
              <MdKeyboardArrowDown className="text-gray-500" />
            )}

            {isNominalOpen && (
              <div className="bg-white border border-gray-300 rounded-md absolute top-10 left-0 w-full h-32 shadow overflow-y-scroll">
                <div className="flex flex-col items-center justify-start p-2">
                  {nominaltoken.map((item: any, index: number) => {
                    return (
                      <p
                        key={item.id}
                        onClick={() => setNominal(item.name)}
                        className="hover:bg-gray-100 px-1 text-xs mb-3 py-1 rounded-md w-full cursor-pointer"
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button className="px-6 h-10 text-xs bg-green-600 text-white font-semibold rounded-lg">
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlnListrik;
