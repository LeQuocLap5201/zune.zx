import React from "react";
import "./style.css";


export default function Intro() {
  

  return (
    <div className="intro-home">
      <div className="intro-home-img" data-aos="fade-right">
        <img src="../img/home.jpg" alt="" />
      </div>
      <div className="intro-home-txt" data-aos="fade-up">
        <h1>ZUNE.ZX</h1>
        <p>
          Thương hiệu thời trang <span>PHI GIỚI TÍNH PHONG CÁCH NHẬT</span>.
          Tông màu chủ đạo
          <span>ĐỎ ĐEN TRẮNG</span> với những thiết kế khác biệt, độc đáo và cá
          tính muốn thông qua những bộ trang phục lan tỏa thông điệp{" "}
          <span>
            " PHÁ VỠ QUY TẮC ĐỂ TỰ DO THỂ HIỆN CÁI TÔI KHÁC BIỆT QUA THỜI TRANG
            PHI GIỚI TÍNH "
          </span>
        </p>
      </div>
    </div>
  );
}
