import React from "react";
import profile from "../images/profile.jpg";
import { RiInstagramFill, RiGithubFill, RiSearchLine } from "react-icons/ri";

const Aside = () => {
  return (
    <div
      style={{
        fontFamily: "Architects Daughter, cursive",
        width: "250px",
        margin: "0 30px",
      }}
    >
      <img src={profile} alt="" style={{ width: "250px", height: "250px" }} />
      <section
        className="intro"
        style={{ borderBottom: "1px solid lightgray", paddingBottom: "50px" }}
      >
        <b>Shim Yu Seob</b>
        <p>this is my Portfolio</p>
        <a
          href="https://www.instagram.com/shimyuseob/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "black" }}
        >
          <RiInstagramFill />
        </a>
        <a
          href="https://github.com/seob717"
          target="_blank"
          rel="noreferrer"
          style={{ color: "black", marginLeft: "5px" }}
        >
          <RiGithubFill />
        </a>
      </section>
      <section className="category" style={{ margin: "50px 0" }}>
        <b>Category</b>
        <ul style={{ padding: "0", margin: "0" }}>
          {/* li margin 10px 해야함. */}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/diary">Diary</a>
          </li>
          <li>
            <a href="/notice">Notice</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
        </ul>
      </section>

      <section className="info" style={{ margin: "50px 0" }}>
        <b>Information</b>
        <address>
          <p>Tel. 010-9688-5549</p>
          <p>Email. shimyuseob@gmail.com</p>
          <p>Addr. Korea</p>
        </address>
      </section>
      <section className="search">
        <form
          action=""
          style={{
            border: "1px solid lightgray",
            padding: "10px",
            display: "flex",
          }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              border: "none",
              outline: "none",
              flex: "1",
            }}
          />
          <button
            type="submit"
            style={{
              outline: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <RiSearchLine />
          </button>
        </form>
      </section>
    </div>
  );
};

export default Aside;
