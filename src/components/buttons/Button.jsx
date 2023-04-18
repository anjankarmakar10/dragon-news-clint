import React from "react";

const Button = ({ children, bg }) => {
  return (
    <button
      className={`bg-[${bg}] rounded-sm px-5 pb-2 text-white font-medium pt-[10px]`}
    >
      {children}
    </button>
  );
};

export default Button;
