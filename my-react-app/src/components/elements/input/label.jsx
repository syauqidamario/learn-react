/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
const label = () => {
      const { htmlFor, children } = props;
      return(
            <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-bold mb-2">{text}
            </label>
      );
};

export default label;