const FormField = ({ label = "", children }) => {
  return (
    <div className="mb-8">
      {label.length > 0 ? (
        <div className="text-sm font-bold text-gray-700 tracking-wide">
          {label}
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default FormField;
