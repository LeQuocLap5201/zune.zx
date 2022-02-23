import React, { useEffect, useState } from "react";
import "./style.css";

export default function Report() {
  const [weather, setWeather] = useState({
    name: "--",
    icon: "01d",
    temp: "--",
    desc: "--",
  });

  useEffect(() => {
    const apiKey = "df1d656824afc1f9f961a3d87c082f8f";
    let lat = 13.7667;
    let lon = 109.2333;
    const url = "http://api.openweathermap.org/data/2.5/weather?";
    const fullUrl = `${url}lat=${lat}&lon=${lon}&cnt=10=&appid=${apiKey}&units=metric&lang=vi`;

    fetch(fullUrl)
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .then((data) => {
        let name = data.name;
        let icon = data.weather[0].icon;
        let temp = Math.trunc(data.main.temp);
        let desc = data.weather[0].description;

        const newWeather = {
          ...weather,
          name,
          icon,
          temp,
          desc,
        };

        setWeather(newWeather);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, [weather]);

  return (
    <div className="report-page">
      <div className="weather">
        <h2>{weather.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt=""
        />
        <h2>
          {weather.temp} <sup>o</sup>C
        </h2>
        <h2>{weather.desc}</h2>
      </div>

      <h1>Những gì đã làm</h1>
      <ul>
        <li>
          Có các giao diện trang <span>Home</span>, <span>Shop</span>,{" "}
          <span>Chi tiết sản phẩm</span>, <span>Giỏ hàng</span>,{" "}
          <span>Giới thiệu</span>, <span>Báo cáo</span>, <span>Đăng nhập</span>
        </li>
        <li>
          Trang <span>HOME</span> có show sản phẩm xem nhiều, sản phẩm mới, sản
          phẩm hot
        </li>
        <li>
          Sử dụng <span>react-router-dom</span> để nhúng các trang chức năng vào
          layout: chi tiết sp, form đăng nhập, giỏ hàng.
        </li>
        <li>
          Dùng <span>Module GSAP</span> để làm <span>Animation</span> cho Menu
        </li>
        <li>
          Dùng <span>Module SWIPER</span> để làm <span>Slide show</span>
        </li>
        <li>
          Trang <span>SHOP</span> show tất cả sản phẩm, có nút{" "}
          <span>thích</span> và <span>sản phẩm theo loại</span>
        </li>
        <li>
          Có <span>định dạng tiền tệ</span>
        </li>
        <li>
          Tạo dữ liệu bằng <span>mock api</span> và request api bằng{" "}
          <span>axios</span>
        </li>
        <li>
          Trang <span>Giỏ hàng</span> làm bằng <span>Redux</span> có xóa sản phẩm, cập nhập tổng tiền
        </li>
        <li>
          Menu có hiện <span>số lượng sản phẩm</span> đã thêm vào{" "}
          <span>giỏ hàng</span>
        </li>
        <li>
          Trang <span>Chi tiết sản phẩm</span> hiện thông tin sản phẩm
        </li>
        <li><span>Đăng nhập</span> bằng <span>Google</span></li>
        <li>Sử dụng <span>API</span> có sẵn để hiện <span>thời tiết</span></li>
      </ul>
    </div>
  );
}
