import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { DisplayProvider } from "./components/contex/display";
import Test from "./pages/Test";
import DetailProduct from "./pages/DetailProduct";
import Cart from "./pages/Cart";
import { CartProvider } from "./components/contex/CartContex";
import AddProduct from "./pages/AddProduct";
import ProdukProvider from "./components/contex/ProdukContex";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <DisplayProvider>
      <ProdukProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details-product/:id" element={<DetailProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </CartProvider>
      </ProdukProvider>
    </DisplayProvider>
  );
};

export default App;
