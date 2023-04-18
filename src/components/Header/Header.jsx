import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-4 pt-6 md:pt-8 lg:pt-10">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
