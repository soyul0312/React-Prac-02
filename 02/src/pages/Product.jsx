import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Product({ items }) {
  // useParams를 이용해 url의 id를 가져온다. 이때 id는 문자열임.
  const { id } = useParams();
  // items의 id값 === 현재 URL id값이 일치하는 상품을 찾아낸다.
  const product = items.find((item) => item.id === id);
  // product 객체에서 각각의 정보들을 추출해서 변수로 할당한다 --> 구조분해할당
  const { name, price, options, likes } = product;
  // 선택된 옵션 화면에 렌더링하기 위해 useState 사용한다.
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            {name}
          </div>
          <div>
            <h3>가격: {price}</h3>
            <h3>좋아요: {likes}</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
            >
              <option value={""}>선택하세용!</option>
              {options.map((option) => {
                return (
                  <option key={option.key} value={option.name}>
                    {option.name}
                  </option>
                );
              })}
            </select>
            <div>{selectedOption}</div>
          </div>
        </div>
      </div>
    </>
  );
}
