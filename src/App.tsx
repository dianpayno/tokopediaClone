import Home from "./pages/Home"
import { Route, Routes,} from "react-router-dom"
import { DisplayProvider } from "./components/contex/display"
import Test from "./pages/Test"





const App = () => {
  return (
<DisplayProvider>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/test" element={<Test />} />
</Routes>
</DisplayProvider>
  )
}

export default App