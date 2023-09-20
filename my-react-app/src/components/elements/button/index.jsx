/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
const Button = (props) => {
      const { children, classname = "bg-black", onClick = () => {}, type="button" } = props;
      return (
            <button className = {`h-10 px-6 font-semibold rounded-md ${classname} text-white`} 
            type={type}
            onClick={()=> onClick()}
            >
                  {children}
            </button>
      );
};

export default Button;