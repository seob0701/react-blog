import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { CgUserlane } from "react-icons/cg";
import "../scss/sign.scss";

const Register = () => {
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      input.name +
        " / " +
        input.email +
        " / " +
        input.password +
        " / " +
        input.confirm
    );
  };

  return (
    <div className="sign" style={{ display: "flex" }}>
      <section>
        <form action="" onSubmit={handleSubmit}>
          <h1 style={{ fontSize: "32px" }}>Sign up</h1>
          <div id="name">
            <CgUserlane style={{ fontSize: "20px" }} />
            <input
              type="text"
              placeholder="Name"
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            />
          </div>
          <div id="email">
            <MdEmail style={{ fontSize: "20px" }} />
            <input
              type="text"
              placeholder="Email"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
          </div>
          <div id="password">
            <MdLock style={{ fontSize: "20px" }} />
            <input
              type="password"
              placeholder="Password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <div id="corfirm_password">
            <MdLock style={{ fontSize: "20px" }} />
            <input
              type="password"
              placeholder="Confirm Password"
              style={{
                flex: "1",
                padding: "10px",
                outline: "none",
                border: "none",
                fontWeight: "bold",
              }}
              value={input.confirm}
              onChange={(e) => setInput({ ...input, confirm: e.target.value })}
            />
          </div>

          <input className="submit" type="submit" value="Sign up" />
          <div className="others">
            <input
              type="button"
              value="Home"
              onClick={() => {
                history.push("/");
              }}
            />
            <input
              type="button"
              value="Sign in"
              onClick={() => {
                history.push("/signin");
              }}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
