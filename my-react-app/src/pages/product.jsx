/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React, { Fragment, useEffect, useState, useRef } from "react";
import Button from "../components/elements/button";
import CardProduct from "../components/Fragments/CardProduct";
// Import Counter if it's used elsewhere

const products = [
  {
    id: 1,
    name: "DX Gotchard Driver",
    price: 1500000,
    image: "/images/dx-gotchard-driver.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    A fugiat ea, quia quisquam provident explicabo ipsam! 
    Corrupti animi a eligendi, dicta, hic incidunt iusto delectus excepturi, voluptate exercitationem expedita ad.`,
  },
  {
      id: 2,
      name: "DX Gotchard Driver",
      price: 1500000,
      image: "/images/dx-gotchard-driver.jpg",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      A fugiat ea, quia quisquam provident explicabo ipsam! 
      Corrupti animi a eligendi, dicta, hic incidunt iusto delectus excepturi, voluptate exercitationem expedita ad.`,
    },
  // Add other product items
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find(item => item.id === id)) {
      setCart(
        cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

const totalPriceRef = useRef(null);

useEffect(()=> {
      if(cart.length > 0){
            totalPriceRef.current.style.display = "table";
      }else{
            totalPriceRef.current.style.display = "none";
      }
}, [cart]);

  return (
    <Fragment>
      <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.desc}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
            </CardProduct>
          ))}
          <div className="w-1/4">
            <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
            <table className="text-left table-auto border-separate border-spacing-x-5">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartRef.current.map((item) => {
                  const productItem = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{productItem.name}</td>
                      <td>Rp{" "}{productItem.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}</td>
                      <td>{item.qty}</td>
                      <td>Rp{" "}{(item.qty * productItem.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                      </td>
                    </tr>
                  );
                })}
                <tr ref={(totalPriceRef)}>
                  <td colSpan={3}>
                    <b>Total Price</b>
                  </td>
                  <td>
                    Rp{" "}{totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
