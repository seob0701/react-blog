import React, { useEffect, useState } from "react";
import { Aside, Nav } from "../components/index";
import "../scss/contents.scss";
import { GoComment } from "react-icons/go";
import { RiShareLine } from "react-icons/ri";
import list from "../json/notice_list.json";

const userInfo = [
  {
    name: "사용자",
    email: "user@gmail.com",
  },
];

const notice_list = list.notice_list;

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

console.log(notice_list);

const Contents = () => {
  const [toggle, setToggle] = useState(false);

  const [listId, setListId] = useState(1);

  useEffect(() => {
    setListId(parseInt(window.location.pathname.split("/")[2]));
  }, []);

  return (
    <div className="contents">
      <div className="body-box">
        <aside>
          <Aside />
        </aside>
        <section className="contents-section">
          <div className="titleAndDate">
            <h3>{notice_list[listId - 1].title}</h3>
            <p>
              <a href="/notice">notice</a>
              {notice_list[listId - 1].date}
            </p>
          </div>
          <div className="description">
            <p>{notice_list[listId - 1].description}</p>
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
