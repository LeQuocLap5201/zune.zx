import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Link, NavLink } from "react-router-dom";
import MiniCart from "./MiniCart";
import "./style.css";

export default function Header() {
  const client =
    "576645630093-1tlag6vkss17t8kscti000qaj8ceefqi.apps.googleusercontent.com";

  const [showNav, setShowNav] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showLogout, setShowLogout] = useState(false);
  const [user, setUser] = useState({ img: "", email: "" });
  const [showUser, setShowUser] = useState(false);
  const tlNav = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".logo", {
      scale: 0,
      duration: 2,
      opacity: 0,
      ease: "back.out(1.7)",
    });
    tl.from(".menu-right li", { y: -20, opacity: 0, stagger: 0.2 }, "-=.5");

    tlNav.current = gsap.timeline({ paused: true });
    tlNav.current.to(".nav-slide", { duration: 1, top: 0 });
    tlNav.current.from(".ulNavMenu li", {
      x: -30,
      duration: 0.3,
      opacity: 0,
      stagger: 0.2,
    });
    tlNav.current.from(
      ".social-links ul li",
      { y: 20, duration: 0.5, opacity: 0, stagger: 0.2 },
      "-=1"
    );
    tlNav.current.from(
      ".nav-close ion-icon",
      { y: -20, duration: 0.5, opacity: 0 },
      "-=1"
    );
  }, []);

  useEffect(() => {
    showNav ? tlNav.current.play() : tlNav.current.reverse();
  }, [showNav]);

  const loginSuccess = (res) => {
    console.log("Đăng nhập hành công: ", res.profileObj);
    setShowLogin(false);
    setShowLogout(true);
    setUser({
      img: res.profileObj.imageUrl,
      email: res.profileObj.email,
    });
    setShowUser(true);

    localStorage.setItem("email", user.email);
  };
  const loginFailure = (res) => {
    console.log("Đăng nhập thất bại", res);
  };

  const logoutSuccess = () => {
    setShowLogin(true);
    setShowLogout(false);
    setShowUser(false);
    localStorage.removeItem("email");
  };

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/home">
            <img src="../img/logo.png" alt="" />
          </Link>
        </div>
        <div className="btn-google">
          {showLogin ? (
            <GoogleLogin
              clientId={client}
              buttonText="Login"
              onSuccess={loginSuccess}
              onFailure={loginFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          ) : null}

          {showLogout ? (
            <GoogleLogout
              clientId={client}
              buttonText="Logout"
              onLogoutSuccess={logoutSuccess}
            />
          ) : null}
        </div>
        <ul className="menu-right">
          {showUser ? (
            <li style={{ cursor: "auto" }}>
              <img className="img-avt" src={user.img} alt="" />
            </li>
          ) : null}
          <MiniCart />
          <li className="hamburger" onClick={() => setShowNav(!showNav)}>
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
      </header>
      <div className="nav-slide">
        <div className="nav-close">
          <ion-icon
            name="close-circle"
            onClick={() => setShowNav(!showNav)}
          ></ion-icon>
        </div>
        <div className="page-links">
          <ul className="ulNavMenu">
            <li>
              <NavLink to="/" exact onClick={() => setShowNav(!showNav)}>
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={() => setShowNav(!showNav)}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" onClick={() => setShowNav(!showNav)}>
                Về chúng tôi
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/report" onClick={() => setShowNav(!showNav)}>
                Báo cáo
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="social-links">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/zunezxvn/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowNav(!showNav)}
              >
                <span className="desk">Facebook .</span>
                <span className="mobile">
                  <ion-icon name="logo-facebook"></ion-icon>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/zune.zx/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowNav(!showNav)}
              >
                <span className="desk">Instagram .</span>
                <span className="mobile">
                  <ion-icon name="logo-instagram"></ion-icon>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowNav(!showNav)}
              >
                <span className="desk">Tik Tok .</span>
                <span className="mobile">
                  <ion-icon name="logo-tiktok"></ion-icon>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCklZKNakn7dv4Q8uc4SwpQw?view_as=subscriber"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowNav(!showNav)}
              >
                <span className="desk">You Tube .</span>
                <span className="mobile">
                  <ion-icon name="logo-youtube"></ion-icon>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
