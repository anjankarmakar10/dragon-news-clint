import React from "react";

const ButtonSubmit = ({ children, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="font-semibold text-lg md:text-xl text-white p-4 bg-[#403F3F] rounded-md"
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
