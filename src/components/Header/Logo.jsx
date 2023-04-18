import React from "react";

import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <a className="flex flex-col justify-center items-center gap-3 md:gap-4">
      <img className="w-64 md:w-80 lg:w-96" src={logo} alt="" />
      <p className="text-sm md:text-base lg:text-lg text-[#706F6F] font-medium">
        Journalism Without Fear or Favour
      </p>
    </a>
  );
};

export default Logo;
