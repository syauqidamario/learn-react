/* eslint-disable no-undef */
/* eslhandleAddToCart
int-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React, { Fragment, useEffect, useState, useRef, useContext } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar  from "../components/layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

// const email = localStorage.getItem("token");

const ProductsPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [products, setProducts] = useState([]);
  useLogin();


  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
 
  

  return (
    <Fragment>
      <Navbar/>
      <div className= {`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} id={product} />
              <CardProduct.Body name={product.title}>
                {product.desc}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id}/>
            </CardProduct>
          ))}
          <div className="w-2/6">
            <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
            <TableCart products={products}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
