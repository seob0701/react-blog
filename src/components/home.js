import React from "react";
import { Aside, Nav } from "../components/index";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Nav />
      </div>
      <div
        style={{
          display: "flex",
          fontFamily: "sans-serif",
          margin: "0 350px",
          justifyContent: "center",
        }}
      >
        <aside>
          <Aside />
        </aside>
        <section
          style={{
            flex: "1",
            margin: "0 30px",
            fontFamily: "Architects Daughter, cursive",
            minWidth: "450px",
            backgroundColor: "lightcoral",
          }}
        >
          Home
        </section>
      </div>
    </div>
  );
};

export default Home;
