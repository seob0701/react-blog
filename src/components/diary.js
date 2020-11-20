import React from "react";
import { Aside, Nav } from "../components/index";
import "../scss/diary.scss";

const Diary = () => {
  return (
    <div className="diary">
      <div className="nav-box">
        <Nav />
      </div>
      <div className="body-box">
        <aside>
          <Aside />
        </aside>
        <section className="diary-section">Diary</section>
      </div>
    </div>
  );
};

export default Diary;
