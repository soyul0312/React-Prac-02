import { Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Layout from "./common/Layout";

function App() {
  return (
    <>
      {/* Routes하위에 경로에 따라 의 Route에 element전달한 구성요소 */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          {/* URL Parameter 작성방법 --> : <아무 이름> */}
          <Route path="/products/:id" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
