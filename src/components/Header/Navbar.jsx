import React from "react";
import { RxAvatar } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import ButtonLogin from "../buttons/ButtonLogin";

const Navbar = () => {
  return (
    <div className="mt-5 mb-8 flex flex-col gap-4">
      <nav className=" flex items-center justify-between md:mb-10">
        <div className="cursor-pointer md:hidden">
          <FiMenu size={40} />
        </div>
        <div></div>
        <ul className="text-lg text-[#706F6F] hidden md:flex items-center gap-4 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Favorites</a>
          </li>
        </ul>

        <div className="flex items-center gap-2 ">
          <div className="cursor-pointer">
            <RxAvatar size={40} />
          </div>
          <ButtonLogin>Login</ButtonLogin>
        </div>
      </nav>

      <div className="hidden">
        <MobileNav />
      </div>
    </div>
  );
};

const MobileNav = () => {
  return (
    <nav className=" flex justify-center">
      <ul className="text-lg text-[#706F6F] flex items-center gap-4 ">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Favorites</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
