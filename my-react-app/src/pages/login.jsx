/* eslint-disable react/react-in-jsx-scope */
import AuthLayout  from "../components/layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin"

 const LoginPage = () => {

      return (
            <AuthLayout title="Login">
                  <FormLogin/>
            </AuthLayout>
      );
}

export default LoginPage