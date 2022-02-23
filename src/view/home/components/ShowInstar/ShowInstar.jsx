import "aos/dist/aos.css";
import React from "react";
import "./style.css";

export default function ShowInstar() {

  return (
    <div className="show-instar">
      <div className="container">
        <div className="grid-instar">
          <div className="instar-img div1" data-aos="fade-right">
            <img src="../img/ins1.jpg" alt="" />
          </div>
          <div className="instar-img div2" data-aos="fade-right">
            <img src="../img/ins2.jpg" alt="" />
          </div>
          <div className="instar-img div3" data-aos="fade-right">
            <img src="../img/ins3.jpg" alt="" />
          </div>
          <div className="instar-img div4" data-aos="fade-right">
            <img src="../img/ins4.jpg" alt="" />
          </div>
          <div className="instar-img div5" data-aos="fade-right">
            <img src="../img/ins5.jpg" alt="" />
          </div>
          <div className="instar-img div6" data-aos="fade-right">
            <img src="../img/ins6.jpg" alt="" />
          </div>
          <div className="instar-img div7"  data-aos="fade-left">
            <h2>Instargram</h2>
            <p>
              Hành trình đi tìm bản ngã tuổi trẻ, đi tìm cái tôi cá nhân thông
              qua hơi thở thời trang “dị biệt” là một hành trình dài bất tận.
              Thật chẳng dễ dàng để về đích hay hữu hình để tha hồ chạm tới.
            </p>
            <h3>#ZUNE.ZX</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
