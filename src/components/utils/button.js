const Button = ({ children, variant = "default", onClick, className = "", ...props }) => {
  const baseStyles = "rounded cursor-pointer transition duration-200";
  const variants = {
    default: "px-4 py-2 bg-black text-white hover:bg-gray-800",
    outline: "px-6 py-4 w-[200px] bg-transparent text-white border border-gray-50 hover:bg-black hover:border-none",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button