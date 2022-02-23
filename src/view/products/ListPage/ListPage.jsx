import React, { useEffect, useRef, useState } from "react";
import productApi from "../../../api/productApi";
import FormFilter from "./FormFilter/FormFilter";
import ListProducts from "./ListProducts/ListProducts";

export default function ListPage() {
  const [listProducts, setListProducts] = useState([]);
  const [filter, setFilter] = useState(0);

  const base = useRef([]);
  function handleChangeFilter(idCatalog) {
    setFilter(idCatalog);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const productsList = await productApi.getAll();
      base.current = [...productsList];
      setListProducts(productsList);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (filter === 0) {
      setListProducts(base.current);
    } else {
      const newList = base.current.filter((p) => p.idCatalog === filter + "");
      setListProducts(newList);
    }
  }, [filter]);

  return (
    <div className="container">
      <FormFilter filterChange={handleChangeFilter} />
      <ListProducts listProducts={listProducts} />
    </div>
  );
}
