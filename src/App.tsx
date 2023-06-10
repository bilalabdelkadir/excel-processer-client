import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import { Route, Routes } from "react-router-dom"
function App() {

  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </div>
      
  )
}

export default App
