import React from "react";

const Nav = () => {
  return (
    <div
      className="nav"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px 380px",
        minWidth: "760px",
        width: "100%",
      }}
    >
      <h1>
        <a href="/" style={{ color: "black" }}>
          SEOB
        </a>
      </h1>
      <ul
        className="nav_list"
        style={{
          fontFamily: "sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <li style={{ margin: "0", padding: "0" }}>
          <a href="/mypage">
            <h5 style={{ marginRight: "15px", padding: "0" }}>My page</h5>
          </a>
        </li>
        <li style={{ margin: "0", padding: "0" }}>
          <a href="/signin">
            <h5 style={{ margin: "0", padding: "0" }}>Login</h5>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
