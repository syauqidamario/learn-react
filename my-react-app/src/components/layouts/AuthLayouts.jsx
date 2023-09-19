/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
      const { children, title } = props;
      return (
            <div className="w-full max-w-x3">
                  <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                  <p className="font-medium text-slate-600 mb-8">Welcome, please enter your detail</p>
            {children}
      </div>
      );
};

export default AuthLayout;
