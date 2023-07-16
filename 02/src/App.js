import { Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Layout from "./common/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import { nanoid } from "nanoid";
import { useState } from "react";
// import { useState } from "react";

function App() {
  // 최상단에서 상품 정보 셋팅 --> 필요한 컴포넌트에 props 전달하기
  const itemsData = [
    {
      id: nanoid(),
      name: "멋진 바지",
      price: 20000,
      options: ["28", "30", "32"],
      likes: 100,
    },
    {
      id: nanoid(),
      name: "멋진 셔츠",
      price: 10000,
      options: ["small", "medium", "large"],
      likes: 200,
    },
    {
      id: nanoid(),
      name: "멋진 신발",
      price: 30000,
      options: ["230", "240", "250", "260", "270"],
      likes: 300,
    },
  ];

  // useState를 이용해 데이터를 변경할 수 있도록 함
  const [items, setItems] = useState(itemsData);
  console.log(items);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main items={items} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products items={items} />} />
          <Route path="/products/:id" element={<Product items={items} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
