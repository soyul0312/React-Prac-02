import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Main() {
  const items = useSelector((state) => state.products);

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
              <Card key={item.id}>
                <div>
                  {item.name}
                  {console.log(item.id)}
                </div>
                <div>{item.price}</div>
              </Card>
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
            <SaleCard>상품1</SaleCard>
            <SaleCard>상품2</SaleCard>
            <SaleCard>상품3</SaleCard>
          </div>
        </section>
      </main>
    </>
  );
}

const Card = styled.div`
  width: 200px;
  height: 240px;
  background-color: #068fff;
`;

const SaleCard = styled.div`
  width: 200px;
  height: 240px;
  background-color: white;
`;
