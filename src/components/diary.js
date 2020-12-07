import React from "react";
import { Aside, Nav } from "../components/index";
import "../scss/diary.scss";
import profile from "../images/profile.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
//like 클릭시 color, font 변경

const data = [
  {
    image:
      "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    title: "리액트로 쇼핑몰 만들기",
    description:
      "현재 진행단계 - 공지사항 (Notice)부분 디자인 및 반응형으로 수정, 남은 단계 - 홈, 다이어리, 샵 구현하기 <쇼핑몰 데이터 json으로 정리하기 or DB구현해서 데이터 끌어오기 or 쇼핑몰 api 활용",
    profile: profile,
    name: "shimyuseob",
    date: "2020-11-22",
    view: "36",
    like: "3",
  },
  {
    image: "https://miro.medium.com/max/4492/1*ZBSX06fzK-gFy_Cj3FwzUg.png",
    title: "파이어베이스로 DB연결 및 호스팅 진행하기",
    description:
      "파이어베이스를 사용해 데이터베이스 연결과 호스팅을 진행해보자!",
    profile: profile,
    name: "shimyuseob",
    date: "2020-11-22",
    view: "12",
    like: "2",
  },
];

const Diary = () => {
  return (
    <div className="diary">
      <div className="body-box">
        <aside>
          <Aside />
        </aside>
        <section className="diary-section">
          {data.map((ele, index) => {
            return (
              <div className="diary-box" key={index}>
                <img src={ele.image} alt="" />
                <p>{ele.title}</p>
                <p>{ele.description}</p>
                <div className="writer">
                  <img src={ele.profile} alt="" />
                  <div className="writerInfo">
                    <p>{ele.name}</p>
                    <div>
                      <p>{ele.date}</p>
                      <p>{"조회수 " + ele.view}</p>
                      <div className="like">
                        <AiOutlineHeart />
                        <p>{"좋아요 " + ele.like}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Diary;
