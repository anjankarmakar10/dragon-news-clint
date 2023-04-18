import React from "react";
import Logo from "./Logo";
import Date from "./Date";
import BreakingNews from "./BreakingNews";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-4 pt-4 md:pt-6 lg:pt-8">
        <Logo />
        <Date />
        <BreakingNews />
      </div>
    </header>
  );
};

export default Header;
