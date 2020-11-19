import React from "react";
import "../scss/notice.scss";
import { useHistory } from "react-router-dom";
import { Aside, Nav } from "../components/index";

const notice_list = [
  {
    title: "공지사항",
    description: "오늘은 11월 19일 입니다.",
    date: "2020-11-16",
  },
  {
    title: "게시판 코드 작성하기",
    description:
      "게시판 작성 및 클릭시 해당 게시글 디스플레이 구현 진행 하겠습니다.",
    date: "2020-11-17",
  },
  {
    title: "관리자 로그인 및 공지사항 작성 페이지 구현",
    description: "이번 로그인 구현은 파이어베이스로 해보겠습니다.",
    date: "2020-11-18",
  },
  {
    title: "파이어베이스 DB 연결",
    description: "생각보다 작업이 쉽진 않겠습니다...",
    date: "2020-11-18",
  },
];

const Notice = () => {
  const history = useHistory();
  const handleClick = (ele) => {
    history.push("/contents");
  };
  //store 공부하자!!! 데이터 전달을 위해서

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
                    onClick={() => handleClick(ele)}
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

            <section className="createNotice">
              <button
                onClick={() => {
                  history.push("/write");
                }}
              >
                공지사항
              </button>
              {/* 관리자 계정에게만 디스플레이 */}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Notice;
