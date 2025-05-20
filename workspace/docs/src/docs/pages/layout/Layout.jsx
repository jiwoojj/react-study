import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// Outlet 자식요소를 보여주는 컴포넌트

const Layout = () => {
  return (
    <div>
      <header>
        <Link to={"sign-in"}>로그인</Link> |
        <Link to={"sign-up"}>회원가입</Link> |
        <Link to={"/"}>홈</Link> |
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        회사 정보, 이용약관, 사이트맵
      </footer>
    </div>
  );
};

export default Layout;