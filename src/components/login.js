import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import "../scss/sign.scss";

const Login = () => {
  const history = useHistory();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.email + " / " + input.password);
  };
  return (
    <div className="sign">
      <section>
        <form action="" onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <div id="email">
            <MdEmail style={{ fontSize: "20px" }} />
            <input
              type="text"
              placeholder="Email"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
          </div>
          <div
            id="password"
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid lightgray",
              marginBottom: "30px",
            }}
          >
            <MdLock style={{ fontSize: "20px" }} />
            <input
              type="password"
              placeholder="Password"
              style={{
                flex: "1",
                padding: "10px",
                outline: "none",
                border: "none",
                fontWeight: "bold",
              }}
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>

          <div id="checkbox">
            <input type="checkbox" /> <b>Remember me</b>
          </div>
          <input className="submit" type="submit" value="Sign in" />
          <div className="others">
            <input type="button" value="Forgot password?" />
            <input
              type="button"
              value="Sign up"
              onClick={() => {
                history.push("/signup");
              }}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
