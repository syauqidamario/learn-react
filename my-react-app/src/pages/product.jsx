/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import Button from "../components/elements/button";
import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {

      return (
            <div className="flex justify-center py-5">
                 <CardProduct>
                  <CardProduct.Header image ="/images/dx-gotchard-driver.jpg" />
                  <CardProduct.Body title="DX Gotchard Driver">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  A fugiat ea, quia quisquam provident explicabo ipsam! 
                  Corrupti animi a eligendi, dicta, hic incidunt iusto delectus excepturi, voluptate exercitationem expedita ad. 
                  </CardProduct.Body>
                  <CardProduct.Footer price="Rp 1.500.000"/>
                 </CardProduct>
                 <CardProduct>
                  <CardProduct.Header image ="/images/dx-gotchard-driver.jpg" />
                  <CardProduct.Body title="DX Gotchard Driver">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  A fugiat ea, quia quisquam provident explicabo ipsam! 
                  Corrupti animi a eligendi, dicta, hic incidunt iusto delectus excepturi, voluptate exercitationem expedita ad. 
                  </CardProduct.Body>
                  <CardProduct.Footer price="Rp 1.500.000"/>
                 </CardProduct> 
            </div>
      );
};

export default ProductsPage