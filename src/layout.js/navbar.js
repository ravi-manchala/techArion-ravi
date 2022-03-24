import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/tabledata"> TableData</Link>
          </li>
          <li>
            <Link to="/formdata">FormData</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
