import cx from "classnames";
const Input = ({
  name,
  placeholder,
  type,
  value,
  onChange,
  className,
  textArea = false,
}) => {
  if (textArea)
    return (
      <textarea
        className={cx(
          "w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-gray-500",
          className
        )}
        cols="40"
        rows="5"
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      ></textarea>
    );

  return (
    <input
      className={cx(
        "w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-gray-500",
        className
      )}
      type={type}
      name={name}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
