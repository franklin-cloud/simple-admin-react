import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">账号页面</Link>
        </li>
        <li>
          <Link to="user">用户页面</Link>
        </li>
        <li>
          <Link to="nothing-here">notFound页面</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutPage;
