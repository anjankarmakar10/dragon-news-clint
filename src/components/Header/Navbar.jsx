import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { FiMenu, FiX } from "react-icons/fi";
import ButtonLogin from "../buttons/ButtonLogin";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const { user } = useAuth();

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/favourite">Favourite</Link>
          </li>
        </ul>

        <div className="flex items-center gap-2 ">
          {user ? (
            <Link className="cursor-pointer">
              {user?.photoURL ? (
                <Link to="/profile" title={user?.displayName}>
                  <img
                    className="w-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </Link>
              ) : (
                <Link to="/profile" title={user?.displayName}>
                  <RxAvatar size={40} />
                </Link>
              )}
            </Link>
          ) : (
            <Link to="/login">
              <ButtonLogin>Login</ButtonLogin>
            </Link>
          )}
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/favourite">Favourite</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
