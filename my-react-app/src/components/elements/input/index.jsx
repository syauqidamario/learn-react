/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
      const {title, name, type, placeholder } = props;
      return (
            <div className = "mb-6">
                  <label htmlFor={name}>{title}</label>
                  <input name={name} type={type} placeholder={placeholder} />
            </div>
      );
};

export default InputForm;