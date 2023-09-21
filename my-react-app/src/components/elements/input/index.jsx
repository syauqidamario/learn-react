/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Input from "./Input";
import Label from "./Label";
import React, { forwardRef } from 'react'

const InputForm = forwardRef( (props, ref) => {
      const {title, name, type, placeholder} = props;
      return (
            <div className = "mb-6">
                  <label htmlFor={name}>{title}</label>
                  <input name={name} type={type} placeholder={placeholder} ref={ref} />
            </div>
      );
});
export default InputForm;