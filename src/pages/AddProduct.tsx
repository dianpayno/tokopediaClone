import { useEffect, useState } from "react";
import AddProductLayout from "../components/Layout/AddProductLayout/AddProductLayout";
import NavbarLayout from "../components/Layout/HomeLayout/NavbarLayout";



const AddProduct = () => {
  const [value, setValue] = useState("");
  console.log(value);
  
  useEffect(() => {
    document.title = "Tambah Produk | Tokopedia";
  });

  return (
    <div>
      <NavbarLayout />
      <AddProductLayout />
    
    </div>
  );
};

export default AddProduct;
