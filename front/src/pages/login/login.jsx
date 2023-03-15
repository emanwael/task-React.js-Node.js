import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Login() {
  const navigate = useNavigate();

  let { UserData, isLogin } = useSelector((store) => store.userSlice);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const [errorMassge, seterrorMassge] = useState({
    name: "",
    password: "",
  });

  const getValue = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };
  const handelLogin = (e) => {
    if (user.name == "" && user.password == "") {
      seterrorMassge({
        ...errorMassge,
        name: "User Name is Required ",
        password: "Password is Required",
      });
    } else if (user.name == "") {
      seterrorMassge({ ...errorMassge, name: "User Name is Required " });
    } else if (user.password == "") {
      seterrorMassge({ ...errorMassge, password: "Password is Required " });
    } else {
      //redux save user date in user slice
      UserData = user;
      isLogin = true;
      console.log("lllll", isLogin);

      navigate("/search");
    }
  };
  return (
    <div className="container">
      <div className="box-form">
        <h2>Login</h2>
        <form className="form">
          {/* <label htmlFor="userName">User Name</label> */}
          <input
            className="inputText"
            id="userName"
            type="text"
            name="name"
            value={user.name}
            onChange={getValue}
            placeholder="Enter user Name"
          />
          {errorMassge.name != "" && (
            <p className="error-msg"> {errorMassge.name}</p>
          )}

          {/* <label htmlFor="password">Password</label> */}
          <input
            className="inputText"
            id="password"
            type="password"
            name="password"
            value={user.password}
            onChange={getValue}
            placeholder="Enter your password"
          />
          {errorMassge.password != "" && (
            <p className="error-msg"> {errorMassge.password}</p>
          )}
        </form>
        <button className="submitBtn" onClick={handelLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
