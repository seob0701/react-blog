import React from "react";
import { Aside, Nav } from "../components/index";
import "../scss/home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="nav-box">
        <Nav />
      </div>
      <div className="body-box">
        <aside>
          <Aside />
        </aside>
        <section className="home-section">Home</section>
      </div>
    </div>
  );
};

export default Home;
