/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import Button from "../elements/button";
import InputForm from "../elements/Input";
const FormLogin = () => {
      return (
            <form action="">
            <InputForm label="Email" type="email" placeholder="example@mail.com" name="email"/>
            <InputForm label="Password" type="password" placeholder="********" name="password"/>
            <button className="bg-blue-600 w-full">Login</button>
            </form>
      );
};

export default FormLogin;