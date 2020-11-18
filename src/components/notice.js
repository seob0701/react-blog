import React from "react";
import "../scss/notice.scss";
import { Aside, Nav } from "../components/index";

const notice_list = [
  {
    title: "공지사항",
    date: "2020-11-16",
  },
  {
    title: "게시판 코드 작성하기",
    date: "2020-11-17",
  },
  {
    title: "관리자 로그인 및 공지사항 작성 페이지 구현",
    date: "2020-11-18",
  },
  {
    title: "파이어베이스 DB 연결",
    date: "2020-11-18",
  },
];

const Notice = () => {
  return (
    <div className="notice">
      <div className="nav-box">
        <Nav />
      </div>
      <div className="body-box">
        <aside>
          <Aside />
        </aside>
        <section className="notice-contents">
          <div className="notice-list">
            <ul className="list-ul">
              <li>
                <h5 className="title">제목</h5>
                <h5 className="date">작성시간</h5>
              </li>
            </ul>

            {notice_list.map((ele, index) => {
              return (
                <ul key={index}>
                  <li
                    style={{
                      borderTop: "1px solid #999999",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      alert(
                        `제목은 ${ele.title} 작성일자는 ${ele.date} 입니다.`
                      )
                    }
                  >
                    <h5
                      style={{
                        flex: "1",
                      }}
                    >
                      {ele.title}
                    </h5>
                    <h5
                      style={{
                        textAlign: "center",
                        padding: "12px 10px",
                        color: "#999999",
                      }}
                    >
                      {ele.date}
                    </h5>
                  </li>
                </ul>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Notice;
