import CardProduct from "../../elements/Card/CardProduct";
import { Link } from "react-router-dom";
import { useDataProduk } from "../../contex/ProdukContex";
import { BounceLoader } from "react-spinners";

const ProductList = () => {
const { dataProduk, isLoadingProduk } = useDataProduk();

  return (
    <>
      <div className="p-7 grid grid-cols-6 gap-5">
        {dataProduk?.map((data: any, index: any) => {
          return (
            <Link key={index} to={`/details-product/${data.id}`}>
              <CardProduct data={data} />
            </Link>
          );
        })}
      </div>
      {isLoadingProduk && (
        <div
          className="
    fixed z-40 top-0 bottom-0 right-0 left-0 bg-white bg-opacity-70
    flex justify-center items-center"
        >
          <BounceLoader color="#3CB371" loading />
        </div>
      )}
    </>
  );
};

export default ProductList;
