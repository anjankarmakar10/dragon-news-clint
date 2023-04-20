import React from "react";
import Logo from "./Logo";
import Date from "./Date";
import BreakingNews from "./BreakingNews";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = ({ isBreaking = true, isLogo = true, isNavbar = true }) => {
  return (
    <header>
      <div className="container mx-auto px-4 py-2">
        {isLogo && (
          <>
            <Link to="/">
              <Logo />
            </Link>
            <Date />
          </>
        )}
        {isBreaking && <BreakingNews />}
        {isNavbar && <Navbar />}
      </div>
    </header>
  );
};

export default Header;
