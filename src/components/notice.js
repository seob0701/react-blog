import React from "react";
import "../scss/notice.scss";
import { useHistory } from "react-router-dom";
import { Aside, Nav } from "../components/index";
import list from "../json/notice_list.json";

const Notice = () => {
  const history = useHistory();
  const handleClick = (ele) => {
    history.push(`/contents/${ele.id}`);
  };
  //store 공부하자!!! 데이터 전달을 위해서

  console.log(list.notice_list);

  return (
    <div className="notice">
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

            {list.notice_list.map((ele, index) => {
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
