

const CardPromo = () => {
  return (
    <div className="w-[200px] h-[280px] bg-white shadow-md rounded-md overflow-hidden flex flex-col justify-start">
    <img
      className="w-full h-48 object-cover"
      src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/11/20/ef88f25c-8556-481e-8404-b2d433d36029.jpg"
      alt=""
    />
    <div className="p-2">
      <p className="font-bold">Rp1.000</p>
      <span className="text-xs text-gray-400 line-through me-1">Rp49.000</span>
      <span className="text-xs text-red-500 font-semibold">90%</span>
      <div className="w-full bg-gray-200 rounded-full mt-1">
        <div className="w-[90%] bg-red-500 text-xs  h-1 text-center text-white rounded-full" />
      </div>
      <p className="text-xs text-gray-500 capitalize font-semibold">segera habis</p>
     
    </div>
  </div>
  )
}

export default CardPromo