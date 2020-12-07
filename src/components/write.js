import React from "react";
import "../scss/write.scss";
import { useHistory } from "react-router-dom";
import { Aside, Nav } from "../components/index";

const Write = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/notice");
  };
  //store 공부하자!!! 데이터 전달을 위해서

  return (
    <div className="write">
      
      <div className="body-box">
        <aside>
          <Aside />
        </aside>
        <section className="notice-contents">
          <div className="notice-list">
            <ul className="list-ul">
              <li>
                <h5 className="title">공지사항</h5>
              </li>
            </ul>
            <div className="titleAndDesc">
              <label htmlFor="">제목</label>
              <input type="text" />
              <label htmlFor="">내용</label>
              <textarea name="" id=""></textarea>
            </div>

            <section className="createNotice">
              <button onClick={handleClick}>등록하기</button>
              {/* 관리자 계정에게만 디스플레이 */}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Write;
