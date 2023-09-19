/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
import Button from "../elements/button";
import InputForm from "../elements/Input";

const FormRegister = () => {
      return (
            <form action="">
            <InputForm label="Full Name" type="fullname" placeholder="insert your name here..." name="fullname"/>
            <InputForm label="Email" type="email" placeholder="example@mail.com" name="email"/>
            <InputForm label="Password" type="password" placeholder="********" name="password"/>
            <InputForm label="Confirm Password" type="password" placeholder="********" name="confirmpassword"/>
            <button className="bg-blue-600 w-full">Register</button>
            </form>
      );
};

export default FormRegister;