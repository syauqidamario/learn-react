/* eslint-disable react/react-in-jsx-scope */
const input = (props) => {

      // eslint-disable-next-line no-unused-vars
      const {type, placeholder, name} = props;

      return (
            <input type={type} className="text-sm border rounded w-full py-2 px-3 text-slate 700 placeholder:opacity-50"
                placeholder="{placeholder}"
                name={name}
                id={name}
                />
      );
};

export default input;