import React from "react";
import "./style.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="wrapper">
        <input id="signUpBtn" className="signUpBtn" type="radio" name="btn" />
        <label htmlFor="signUpBtn" />
        <input
          id="loginButton"
          className="loginBtn"
          type="radio"
          name="btn"
          defaultChecked
        />
        <label htmlFor="loginButton" />
        <form className="form">
          <label htmlFor="fname" className="fname" />
          <input
            type="text"
            id="fname"
            className="fname"
            placeholder="First Name"
          />
          <label htmlFor="lname" className="lname" />
          <input
            type="text"
            id="lname"
            className="lname"
            placeholder="Last Name"
          />
          <label htmlFor="username" className="username" />
          <input
            type="text"
            id="username"
            className="username"
            placeholder="Username"
          />
          <label htmlFor="secret" className="pass" />
          <input
            type="password"
            id="secret"
            className="pass"
            placeholder="Password"
          />
          <input type="checkbox" id="formButton" className="formButton" />
          <label htmlFor="formButtom" />
        </form>
      </div>
    </div>
  );
}
