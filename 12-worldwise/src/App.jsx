import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Products";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFount from "./pages/PageNotFount";
function App() {
  return (
    <div>
      <h1>Hello Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
