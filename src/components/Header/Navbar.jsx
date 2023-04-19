import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { FiMenu, FiX } from "react-icons/fi";
import ButtonLogin from "../buttons/ButtonLogin";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleMenuClicked = () => setActive((prev) => !prev);

  return (
    <div className="mt-5 mb-6 flex flex-col gap-4">
      <nav className=" flex items-center justify-between ">
        <div className="cursor-pointer md:hidden">
          {active ? (
            <FiX onClick={handleMenuClicked} size={40} />
          ) : (
            <FiMenu onClick={handleMenuClicked} size={40} />
          )}
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

      <div className={active ? "block" : "hidden"}>
        <MobileNav />
      </div>
    </div>
  );
};

const MobileNav = () => {
  return (
    <nav className="bg-slate-400 p-2 rounded-md ">
      <ul className="text-lg text-[#250101] flex items-center gap-4 justify-evenly">
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
