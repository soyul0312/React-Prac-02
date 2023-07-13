import React from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Products({ items }) {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log({ searchParams: searchParams.get("sort") });

  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* 버튼 클릭 시, URL 바뀐 것 확인 */}
          <button
            onClick={() => {
              setSearchParams({ sort: "price" });
            }}
          >
            가격순 정렬
          </button>
          {items.map((item) => (
            <Link to={`/products/${items.id}`}>
              <div
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                <div key={item.id}>
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
