/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { Fragment } from "react";
import Button from "../components/elements/button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
      {
            id: 1,
            name: "DX Gotchard Driver",
            price: "Rp 1.500.000",
            image: "/images/dx-gotchard-driver.jpg",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            A fugiat ea, quia quisquam provident explicabo ipsam! 
            Corrupti animi a eligendi, dicta, hic incidunt iusto delectus excepturi, voluptate exercitationem expedita ad.`
      },
      {
            id: 2,
            name: "DX Gotchard Driver",
            price: "Rp 1.500.000",
            image: "/images/dx-gotchard-driver.jpg",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            A fugiat ea, quia quisquam provident explicabo ipsam! 
            Corrupti animi a eligendi, dicta, hic incidunt iusto delectus excepturi, voluptate exercitationem expedita ad.`
      },
      {
            id: 3,
            name: "DX Gotchard Driver",
            price: "Rp 1.500.000",
            image: "/images/dx-gotchard-driver.jpg",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            A fugiat ea, quia quisquam provident explicabo ipsam! 
            Corrupti animi a eligendi, dicta, hic incidunt iusto delectus excepturi, voluptate exercitationem expedita ad.`
      },
      {
            id: 4,
            name: "DX Gotchard Driver",
            price: "Rp 1.500.000",
            image: "/images/dx-gotchard-driver.jpg",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            A fugiat ea, quia quisquam provident explicabo ipsam! 
            Corrupti animi a eligendi, dicta, hic incidunt iusto delectus excepturi, voluptate exercitationem expedita ad.`
      },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {

      const handleLogout = () => {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            window.location.href="/login";

      };

      return (
           <Fragment>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10">
                  {email}
                  <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                 {products.map((product) => (
                         <CardProduct key={product.id}>
                              <CardProduct.Header image ={product.image} />
                              <CardProduct.Body name={product.name}>
                              {product.desc}
                              </CardProduct.Body>
                              <CardProduct.Footer price={product.price}/>
                        </CardProduct>
                 ))}
            </div>
           </Fragment>
      );
};

export default ProductsPage