import { Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Layout from "./common/Layout";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* Routes하위에 경로에 따라 의 Route에 element전달한 구성요소 */}
      <Routes>
        <Route element={<Layout />}>
          {/* 특정한 경로(path)와 일치할 때 해당 라우터가 렌더링된다. */}
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          {/* URL Parameter 작성방법 --> : <아무 이름> */}
          <Route path="/products/:id" element={<Product />} />
          {/* "*"기호는 모든 경로와 일치하므로, 어떤 경로에서도 해당 라우터가 렌더링된다. */}
          {/* 주로 404 에러 페이지나 기본 경로(default path)로 사용된다. */}
          <Route
            path="*"
            element={
              <>
                <div>없는 페이지 입니다.</div>
                <Link to="/">홈으로</Link>
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
