/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import AuthLayout from "../components/layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
      return (
            <AuthLayout title="Register">
                  <FormRegister/>
            </AuthLayout>
      );
};

export default RegisterPage;