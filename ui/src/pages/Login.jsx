import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Login.css";
// import {
//   getUser,
//   getUserFail,
//   getUserSuccess,
// } from "../redux/actions/usersAction";
import Clickhere from "../components/Clickhere";
import Button from "../components/Button";
// import { useSelector } from "react-redux";

import axios from "axios";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const isAuthenticated = useSelector((state) => state);
  // console.log(isAuthenticated);
  const submit = async (e) => {
    e.preventDefault();
    console.log("1");
    // dispatch(getUser());

    await axios
      .post("http://localhost:9000/api/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log("message");
        var dat = res.data;
        // console.log(dat.token);
        if (res.data.message === "success") {
          // dispatch(getUserSuccess(dat.token));
          console.log(dat.token);
          // console.log(isAuthenticated);
          localStorage.setItem("isAuthenticated", isAuthenticated.loading);
          // if (isAuthenticated.isAuthenticated) {
          history.push("/home");
          window.location.pathname = "/home";
          // }

          // console.log(isAuthenticated);
        } else {
          // dispatch(getUserFail(dat.message));
          console.log(res.data.message);
          window.alert(res.data.message);
        }
      });
  };
  const handle = (e) => {
    const loginDetails = { ...data };
    loginDetails[e.target.id] = e.target.value;
    setData(loginDetails);
  };
  const style = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    width: "100px",
    marginTop: "10px",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <>
      <div className="main">
        <div className="background">
          <div className="left">
            <div className="div1"></div>
            <div className="div3"></div>
          </div>
          <div className="right">
            <div className="div2"></div>
            <div className="div4"></div>
          </div>

          <div className="frontground">
            <div className="photo">
              <img
                className="loginImage"
                src="https://media.istockphoto.com/photos/you-can-log-into-your-account-worldwide-picture-id501550413"
              />
            </div>

            <form className="form" onSubmit={(e) => submit(e)}>
              <h3>LOGIN FORM</h3>
              <label>Enter your email</label>
              <input
                id="email"
                onChange={(e) => handle(e)}
                value={data.email}
                type="text"
                placeholder="enter email"
                required
              />
              <label>Enter your password</label>
              <input
                id="password"
                onChange={(e) => handle(e)}
                value={data.password}
                type="text"
                placeholder="enter password"
                required
              />
              {/* <Link to="home"> */}
              <Button text="LOGIN" style={style} />
              {/* </Link> */}

              <Clickhere text="sign up" navigation="signup" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
