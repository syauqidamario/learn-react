/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";

/* eslint-disable react/react-in-jsx-scope */
const Input = forwardRef((props, ref) => {

      // eslint-disable-next-line no-unused-vars
      const {type, placeholder, name} = props;

      return (
            <input type={type} className="text-sm border rounded w-full py-2 px-3 text-slate 700 placeholder:opacity-50"
                placeholder="{placeholder}"
                name={name}
                id={name}
                ref={ref}
                />
      );
});

export default Input;