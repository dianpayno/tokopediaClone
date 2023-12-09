import { kebutuhan } from "../../../utils/faturedList";

const Kebutuhanharian = () => {
  return (
    <div className="p-5">
      <p className="text-xl font-bold capitalize">kebutuhan harian</p>
      <div className="flex items-center cursor-pointer">
        {kebutuhan.map((item: any, index: number) => {
          return (
            <div key={index} className="flex mt-3 items-center gap-2 me-16">
              <img className="w-8 h-8" src={item.img} alt={item.name} />
              <p className="capitalize text-sm font-bold">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Kebutuhanharian