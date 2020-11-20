import React, { useState } from "react";
import { Aside, Nav } from "../components/index";
import "../scss/contents.scss";
import { GoComment } from "react-icons/go";
import { RiShareLine } from "react-icons/ri";

const userInfo = [
  {
    name: "사용자",
    email: "user@gmail.com",
  },
];

const notice_list = [
  {
    title: "공지사항",
    description:
      "지금 나머지 scss를 마치고 contents 페이지 디자인 중입니다. 빨리 게시판 디자인 및 구성을 끝내고 DB와 서버 부분도 만들 수 있으면 좋겠습니다.",
    date: "2020-11-16",
  },
]; //넘어온 데이터라 가정.

const comments = [
  {
    name: "윤하늘",
    text: "좋아요",
    date: "2020-11-19",
  },
  {
    name: "권진아",
    text: "응원해요",
    date: "2020-11-19",
  },
  {
    name: "김은정",
    text: "힘 내요!!",
    date: "2020-11-19",
  },
];

const Contents = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="contents">
      <div className="nav-box">
        <Nav />
      </div>
      <div className="body-box">
        <aside>
          <Aside />
        </aside>
        <section className="contents-section">
          <div className="titleAndDate">
            <h3>{notice_list[0].title}</h3>
            <p>
              <a href="/notice">notice</a>
              {notice_list[0].date}
            </p>
          </div>
          <div className="description">
            <p>{notice_list[0].description}</p>
          </div>
          <div className="commentAndShareBtns">
            <button
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? (
                <GoComment style={{ fontSize: "20px", color: "#0061fe" }} />
              ) : (
                <GoComment style={{ fontSize: "20px" }} />
              )}
              <p>{comments.length}</p>
            </button>
            <button>
              <RiShareLine style={{ fontSize: "20px" }} />
            </button>
          </div>

          {toggle ? (
            <div className="comments">
              {comments.map((ele, index) => {
                return (
                  <ul key={index}>
                    <li>
                      <b>{ele.name}</b>
                      <p style={{ flex: 1, marginRight: "20px" }}>{ele.text}</p>
                      <p>{ele.date}</p>
                    </li>
                  </ul>
                );
              })}
              <section>
                <p>{userInfo[0].name}</p>
                <input type="text" />
                <button>댓글</button>
              </section>
            </div>
          ) : (
            <div></div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Contents;
