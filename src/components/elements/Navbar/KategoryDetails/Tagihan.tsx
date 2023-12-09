import { tagihan } from "../../../utils/faturedList";

const Tagihan = () => {
  return (
    <div className="p-5">
      <p className="text-xl font-bold capitalize">kebutuhan harian</p>
      <div className="flex items-center cursor-pointer flex-wrap gap-16">
        {tagihan.map((item: any, index: number) => {
          return (
            <div key={index} className="flex mt-3 items-center gap-2">
              <img className="w-8 h-8" src={item.img} alt={item.name} />
              <p className="capitalize text-sm font-bold">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tagihan;
