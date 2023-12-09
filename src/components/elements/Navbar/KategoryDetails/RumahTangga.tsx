import { dekorasi } from "../../../utils/ListCategory";

const RumahTangga = () => {
  return (
    <div>
      
              <div className="flex items-center gap-3">
                <img
                  className="w-8 h-8"
                  src="https://images.tokopedia.net/img/WgKiGm/2021/6/23/d649437b-eb2a-4f9b-899a-9190af0729cb.png"
                  alt=""
                />
                <p className="text-xl font-bold capitalize">rumah tangga</p>
              </div>
              <div className="flex items-center flex-wrap gap-8">
                <div className="py-3">
                  <p className="text-sm font-bold mb-2 capitalize">dekorasi</p>
                  {dekorasi.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-sm font-base mt-1 hover:text-green-600 cursor-pointer capitalize"
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
                <div className="py-3">
                  <p className="text-sm font-bold mb-2 capitalize">dekorasi</p>
                  {dekorasi.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-sm font-base mt-1 hover:text-green-600 cursor-pointer capitalize"
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
                <div className="py-3">
                  <p className="text-sm font-bold mb-2 capitalize">dekorasi</p>
                  {dekorasi.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-sm font-base mt-1 hover:text-green-600 cursor-pointer capitalize"
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
                <div className="py-3">
                  <p className="text-sm font-bold mb-2 capitalize">dekorasi</p>
                  {dekorasi.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-sm font-base mt-1 hover:text-green-600 cursor-pointer capitalize"
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
                <div className="py-3">
                  <p className="text-sm font-bold mb-2 capitalize">dekorasi</p>
                  {dekorasi.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-sm font-base mt-1 hover:text-green-600 cursor-pointer capitalize"
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
                <div className="py-3">
                  <p className="text-sm font-bold mb-2 capitalize">dekorasi</p>
                  {dekorasi.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-sm font-base mt-1 hover:text-green-600 cursor-pointer capitalize"
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
                <div className="py-3">
                  <p className="text-sm font-bold mb-2 capitalize">dekorasi</p>
                  {dekorasi.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-sm font-base mt-1 hover:text-green-600 cursor-pointer capitalize"
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            
    </div>
  )
}

export default RumahTangga