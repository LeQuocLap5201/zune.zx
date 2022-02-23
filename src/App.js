import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import productApi from "./api/productApi";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { setProducts } from "./redux/Cart/cart-actions";
import AboutUs from "./view/aboutUs/AboutUs";
import CartPage from "./view/cart/CartPage";
import HomePage from "./view/home/HomePage";
import ProductsPage from "./view/products/ProductsPage";
import Report from "./view/report/Report";

function App() {
  const dispatch = useDispatch();

  const fetchRedux = async () => {
    const list = await productApi.getAll();
    dispatch(setProducts(list));
  };

  useEffect(() => {
    fetchRedux();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Route path="/" component={HomePage} exact />
        <Route path="/products" component={ProductsPage} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/report" exact component={Report} />
      </Switch>
      <Footer />
      {/* <Switch>
        <Route path="/login" component={Login} />
        <Fragment>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" exact />
            <Route path="/" component={HomePage} exact />
            <Route path="/products" component={ProductsPage} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/cart" exact component={CartPage} />
            <Route path="/report" exact component={Report} />
          </Switch>
          <Footer />
        </Fragment>
      </Switch> */}
    </div>
  );
}

export default App;
