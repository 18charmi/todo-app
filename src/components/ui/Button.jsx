import cx from "classnames";

const Button = ({
  className,
  name,
  onClick,
  type,
  children,
  border = false,
  shadow = false,
  transparent = false,
  fullWidth = false,
  sm = false,
  linkElement = false,
}) => {
  return (
    <button
      className={cx(
        { "bg-gray-800 hover:bg-gray-900 ": !transparent },
        { "w-full": fullWidth },
        { "text-sm font-medium": sm },
        { "border border-gray-900 text-gray-800 bg-transparent p-2": border },
        { " shadow-lg": shadow },
        { " text-gray-800 bg-transparent hover:bg-transparent": linkElement },
        " text-gray-100 p-4  tracking-wide font-semibold font-display rounded-full  focus:outline-none focus:shadow-outline  ",
        className
      )}
      name={name}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
