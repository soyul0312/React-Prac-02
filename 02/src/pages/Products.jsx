import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import { resetPrice, sortByPrice } from "../redux/items";

export default function Products() {
  const items = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button
          onClick={() => {
            dispatch(sortByPrice());
          }}
        >
          가격순 정렬
        </button>
        <button
          onClick={() => {
            dispatch(resetPrice());
          }}
        >
          정렬 리셋
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {items.map((item) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              {console.log(item.id)}
              <div
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                <div>
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
