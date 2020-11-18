import React, { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { CgUserlane } from "react-icons/cg";

const Register = () => {
  
  const [input, setInput] = useState({
    name:'',
    email:'',
    password:'',
    confirm:''
  })

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(input.name +" / "+ input.email+" / "+input.password +" / "+ input.confirm)
  }

  return (
    <div style={{ display: "flex" }}>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          flex: "1",
          marginLeft: "15px",
          padding: "100px 0",
        }}
      >
        <form
          action=""
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            width: "400px",
            height: "500px",
          }}
        >
          <h1 style={{ fontSize: "32px" }}>Sign up</h1>
          <div
            id="name"
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid lightgray",
              marginBottom: "20px",
            }}
          >
            <CgUserlane style={{ fontSize: "20px" }} />
            <input
              type="text"
              placeholder="Name"
              style={{
                flex: "1",
                padding: "10px",
                outline: "none",
                border: "none",
                fontWeight: "bold",
              }}
              value={input.name}
              onChange={(e)=>setInput({...input,name:e.target.value})}
            />
          </div>
          <div
            id="email"
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid lightgray",
              marginBottom: "20px",
            }}
          >
            <MdEmail style={{ fontSize: "20px" }} />
            <input
              type="text"
              placeholder="Email"
              style={{
                flex: "1",
                padding: "10px",
                outline: "none",
                border: "none",
                fontWeight: "bold",
              }}
              value={input.email}
              onChange={(e)=>setInput({...input,email:e.target.value})}
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
              onChange={(e)=>setInput({...input,password:e.target.value})}
            />
          </div>
          <div
            id="corfirm_password"
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
              placeholder="Confirm Password"
              style={{
                flex: "1",
                padding: "10px",
                outline: "none",
                border: "none",
                fontWeight: "bold",
              }}
              value={input.confirm}
              onChange={(e)=>setInput({...input,confirm:e.target.value})}
            />
          </div>

          
          <input
            type="submit"
            value="Sign up"
            style={{
              padding: "15px 10px",
              marginBottom: "15px",
              fontWeight: "bold",
              outline: "none",
              border: "1px solid lightgray",
              backgroundColor: "#0061fe",
              color: "white",
            }}
          />
          
        </form>
      </section>
    </div>
  );
};

export default Register;
