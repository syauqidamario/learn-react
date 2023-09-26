/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

/* eslint-disable react/react-in-jsx-scope */
const TableCart = (props) => {
      const {products} = props;
      const cart = useSelector((state) => state.cart.data);
      const [totalPrice, setTotalPrice] = useState(0);
      const { isDarkMode  } = useContext(DarkMode);

      useEffect(() => {
            if (products.length > 0 && cart.length > 0) {
              const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
              }, 0);
              setTotalPrice(sum);
              localStorage.setItem("cart", JSON.stringify(cart));
            }
          }, [cart, products]);

          const totalPriceRef = useRef(null);

            useEffect(()=> {
                  if(cart.length > 0){
                        totalPriceRef.current.style.display = "table-row";
                  }else{
                        totalPriceRef.current.style.display = "none";
                  }
            }, [cart]);

      return (
            <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && cart.map((item) => {
                const productItem = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{productItem.title.substring(0, 10)}...</td>
                    <td>${" "}{productItem.price.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}</td>
                    <td>{item.qty}</td>
                    <td>${" "}{(item.qty * productItem.price).toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
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
                  ${" "}{totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
      )
}

export default TableCart