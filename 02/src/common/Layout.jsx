import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

export default function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <Link to="/">
          <TextColor>로고</TextColor>
        </Link>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <Link to="/login">
            <TextColor>로그인</TextColor>
          </Link>
          <Link to="/signup">
            <TextColor>회원가입</TextColor>
          </Link>
        </div>
      </header>
      {/* 중첩된 컴포넌트들을 렌더링할 수 있도록 하는 라우터 컴포넌트 = Outlet */}
      {/* Outlet은 중첩된 최상단 컴포넌트 내부에 위치해야 한다. */}
      {/* 라우트 구조에서 최상단 컴포넌트는 해당 경로에 대한 레이아웃이나 공통된 UI를 담당하는 컴포넌트다. */}
      <Outlet />
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          // 아래 css 추가
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  );
}

const TextColor = styled.div`
  color: white;
`;
