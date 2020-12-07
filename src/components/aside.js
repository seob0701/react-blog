import React from "react";
import profile from "../images/profile.jpg";
import { RiInstagramFill, RiGithubFill, RiSearchLine } from "react-icons/ri";
import "../scss/aside.scss";
const Aside = () => {
  return (
    <div className="aside">
      <img src={profile} alt="" />
      <section className="intro">
        <b>Shim Yu Seob</b>
        <p>this is my blog</p>
        <a
          href="https://www.instagram.com/shimyuseob/"
          target="_blank"
          rel="noreferrer"
        >
          <RiInstagramFill />
        </a>
        <a
          className="git"
          href="https://github.com/seob717"
          target="_blank"
          rel="noreferrer"
        >
          <RiGithubFill />
        </a>
      </section>
      <section className="category">
        <b>Category</b>
        <ul className="category-ul">
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
        </ul>
      </section>

      <section className="info">
        <b>Information</b>
        <address>
          <p>Tel. 010-9688-5549</p>
          <p>E-mail. shimyuseob@gmail.com</p>
          <p>Addr. Korea</p>
        </address>
      </section>
      <section className="search">
        <form className="search-form" action="">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <RiSearchLine />
          </button>
        </form>
      </section>
    </div>
  );
};

export default Aside;
