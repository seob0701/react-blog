import React from "react";
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
            marginLeft: "50px",
            display: "flex",
            justifyContent: "center",
            margin: "0 30px",
          }}
        >
          <div
            id="notice"
            style={{
              width: "100%",
              border: "none",
              borderTop: "1px solid lightgray",
              borderBottom: "1px solid lightgray",
            }}
          >
            <ul style={{ margin: "0", padding: "0", minWidth: "450px" }}>
              <li style={{ display: "flex", width: "100%" }}>
                <h5
                  style={{
                    flex: "1",
                    textAlign: "center",
                    padding: "12px",
                    margin: "0",
                  }}
                >
                  제목
                </h5>
                <h5
                  style={{
                    textAlign: "center",
                    padding: "12px 20px",
                    margin: "0",
                  }}
                >
                  작성시간
                </h5>
              </li>
            </ul>

            {notice_list.map((ele, index) => {
              return (
                <ul style={{ margin: "0", padding: "0" }} key={index}>
                  <li
                    style={{
                      display: "flex",
                      width: "100%",
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
                        padding: "12px",
                        margin: "0",
                      }}
                    >
                      {ele.title}
                    </h5>
                    <h5
                      style={{
                        textAlign: "center",
                        padding: "12px 10px",
                        margin: "0",
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
