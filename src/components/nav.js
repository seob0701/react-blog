import React from "react";
import "../scss/nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <h1>
        <a href="/">SEOB</a>
      </h1>
      <ul className="nav_list">
        <li>
          <a href="/mypage">
            <h5>My page</h5>
          </a>
        </li>
        <li>
          <a href="/signin">
            <h5 style={{ margin: "0", padding: "0" }}>Login</h5>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
