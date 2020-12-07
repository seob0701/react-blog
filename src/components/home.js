import React from "react";
import { Aside, Nav } from "../components/index";
import "../scss/home.scss";
import album from "../json/album.json";

const Home = () => {
  return (
    <div className="home">
      <div className="body-box">
        <aside>
          <Aside />
        </aside>
        <section className="home-section">
          <h1>My Favorite Music</h1>
          {album.album_list.map((ele, index) => {
            return (
              <div className="album_box" key={index}>
                <h1>{ele.album_title}</h1>
                <img src={ele.album_cover} alt="" />
                <p>{ele.singer}</p>
                <p>{ele.release_date}</p>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Home;
