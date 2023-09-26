/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { useLogin } from "../../hooks/useLogin"
import Button from "../elements/button"
import { useSelector } from "react-redux";
import { useEffect, useState, useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
      const username = useLogin();
      const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
      const [totalCart, setTotalCart] = useState(0);
      const cart = useSelector((state) => state.cart.data);
      const { total } = useTotalPrice();

      useEffect(() => {
            const sum = cart.reduce((acc, item) => {
                  return acc + item.qty * item.price;
            }, 0);
            setTotalCart(sum);
      }, [cart, setTotalCart]);

      const handleLogout = () => {
            localStorage.removeItem("token");
            window.location.href = "/login";
      };

      return (
      <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10">
            {username}
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">Item: {totalCart} | price: $ {total}</div>
            <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            <Button className="bg-black px-10 mx-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </Button>
      </div>
      );
};

export default Navbar;
