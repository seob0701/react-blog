import React, { useState } from "react";
import "../scss/nav.scss";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { BsBoxArrowRight } from "react-icons/bs";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const btnClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="nav">
      <h1>
        <a href="/">SEOB</a>
      </h1>
      {!toggle ? (
        <button onClick={btnClick}>
          <FaBars />
        </button>
      ) : (
        <ul className="nav_list phone">
          <button onClick={btnClick}>
            <BsBoxArrowRight />
          </button>
          <li>
            <a href="/signin">
              <h5>Login</h5>
            </a>
          </li>
          <li>
            <a href="/">
              <h5>Home</h5>
            </a>
          </li>
          <li>
            <a href="/diary">
              <h5>Diary</h5>
            </a>
          </li>
          <li>
            <a href="/notice">
              <h5>Notice</h5>
            </a>
          </li>
          <li>
            <a href="/shop">
              <h5>Shop</h5>
            </a>
          </li>
        </ul>
      )}

      <ul className="nav_list desktop">
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
