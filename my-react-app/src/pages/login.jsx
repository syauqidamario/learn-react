/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import AuthLayout  from "../components/layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin"
// import { Link } from "react-router-dom";

 const LoginPage = () => {

      return (
            <AuthLayout title="Login" type="login">
                  <FormLogin/>
            </AuthLayout>
      );
}

export default LoginPage