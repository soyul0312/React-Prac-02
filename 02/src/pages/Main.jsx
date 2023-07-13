import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";
import { styled } from "styled-components";

export default function Main() {
  const [items, setItems] = useState([
    {
      id: nanoid(),
      name: "멋진 바지",
      price: 20000,
      option: [
        { value: 1, name: "28" },
        { value: 2, name: "30" },
        { value: 3, name: "32" },
      ],
      like: 100,
    },
    {
      id: nanoid(),
      name: "멋진 셔츠",
      price: 10000,
      option: [
        { value: 1, name: "small" },
        { value: 2, name: "medium" },
        { value: 3, name: "large" },
      ],
      like: 200,
    },
    {
      id: nanoid(),
      name: "멋진 신발",
      price: 30000,
      option: [
        { value: 1, name: "230" },
        { value: 2, name: "240" },
        { value: 3, name: "250" },
        { value: 4, name: "260" },
        { value: 5, name: "270" },
      ],
      like: 300,
    },
  ]);
  return (
    <>
      {/* main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 여름 추천템 🔥</h2>
          {/* react-router-dom의 a태그 = Link */}
          <Link to="/products">더보기</Link>
          {/* map함수를 이용해 각 카드 렌더링 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {items.map((item) => (
              <StCard key={item.id}>
                <div>{item.name}</div>
                <div>{item.price}</div>
              </StCard>
            ))}
          </div>
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <StSaleCard>상품1</StSaleCard>
            <StSaleCard>상품2</StSaleCard>
            <StSaleCard>상품3</StSaleCard>
          </div>
        </section>
      </main>
    </>
  );
}

const StCard = styled.div`
  width: 200px;
  height: 240px;
  background-color: #068fff;
`;

const StSaleCard = styled.div`
  width: 200px;
  height: 240px;
  background-color: white;
`;
