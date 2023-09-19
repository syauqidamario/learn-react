/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import AuthLayout from "../components/layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
      return (
            <AuthLayout title="Register">
                  <FormRegister/>
                  <p className="text-sm mt-5 text-center">Have an account?{" "} <Link to="/login" className="font-bold text-blue-600">Login</Link></p>
            </AuthLayout>
      );
};

export default RegisterPage;