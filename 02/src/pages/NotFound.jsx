import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div>없는 페이지 입니다.</div>
      <Link to="/">홈으로</Link>
    </>
  );
}
