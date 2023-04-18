import React from "react";

const ButtonLogin = ({ children }) => {
  return (
    <button className="bg-[#403F3F] px-6 pb-1 text-white font-medium pt-[6px] rounded-sm">
      {children}
    </button>
  );
};

export default ButtonLogin;
