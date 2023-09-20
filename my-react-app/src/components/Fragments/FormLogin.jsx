/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import Button from "../elements/button";
import InputForm from "../elements/Input";
const FormLogin = () => {
      const handleLogin = (event) =>
      {     
            event.preventDefault();
            localStorage.setItem('email', event.target.email.value);
            localStorage.setItem('password', event.target.password.value);
            console.log(event.target.email.value);
            console.log(event.target.password.value);
            window.location.href="/products";
      };
      return (
            <form onSubmit={handleLogin}>
            <InputForm 
                  label="Email" 
                  type="email"
                   placeholder="example@mail.com" 
                   name="email"/>
            <InputForm 
                  label="Password" 
                  type="password" 
                  placeholder="********" 
                  name="password"/>
            <Button className="bg-blue-600 w-full" type="submit">Login</Button>
            </form>
      );
};

export default FormLogin;