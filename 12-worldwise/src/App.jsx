import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Products";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />}></Route>
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
