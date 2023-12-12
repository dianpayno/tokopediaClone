import Home from "./pages/Home"
import { Route, Routes,} from "react-router-dom"
import { DisplayProvider } from "./components/contex/display"
import Test from "./pages/Test"
import DetailProduct from "./pages/DetailProduct"
import Cart from "./pages/Cart"
import { CartProvider } from "./components/contex/CartContex"





const App = () => {
  return (
<DisplayProvider>
  <CartProvider>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/details-product" element={<DetailProduct />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/test" element={<Test />} />
</Routes>
</CartProvider>
</DisplayProvider>
  )
}

export default App