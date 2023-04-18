import React from "react";
import Logo from "./Logo";
import Date from "./Date";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-4 pt-4 md:pt-6 lg:pt-8">
        <Logo />
        <Date />
      </div>
    </header>
  );
};

export default Header;
