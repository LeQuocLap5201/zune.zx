import React, { useEffect, useState } from "react";
import Intro from "./components/Intro/Intro";
import RowSlider from "./components/RowSlider/RowSlider";
import SliderShow from "./components/Slider/SliderShow";
import productApi from "../../api/productApi";
import ShowInstar from "./components/ShowInstar/ShowInstar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  const [topView, setTopView] = useState([]);
  const [listHot, setListHot] = useState([]);
  const [listNew, setListNew] = useState([]);

  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 200,
      duration: 1000,
      easing: "ease",
      once: true,
    });
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsList = await productApi.getAll();
      const newProductsList = [...productsList];
      const hotList = newProductsList.filter((p) => p.hot === "1");
      setListHot(hotList);
      const newList = newProductsList.filter((p) => p.new === "1");
      setListNew(newList);
    };
    fetchProducts();
    const fetchTopView = async () => {
      const params = {
        sortBy: "view",
        order: "desc",
      };
      const list = await productApi.getAll(params);
      const newList = [...list].slice(0, 12);
      setTopView(newList);
    };
    fetchTopView();
  }, []);

  return (
    <>
      <SliderShow />
      <div className="home-intro">
        <div className="container">
          <Intro />
        </div>
      </div>
      <div className="home-product">
        <div className="container">
          <RowSlider products={topView} title={"xem nhiều"} />
          <RowSlider products={listNew} title={"mới"} />
          <RowSlider products={listHot} title={"hot"} />
        </div>
      </div>
      <ShowInstar />
    </>
  );
}
