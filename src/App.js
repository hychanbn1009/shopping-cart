import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Products from "./components/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;