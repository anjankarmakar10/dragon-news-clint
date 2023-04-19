import React from "react";
import { ImGoogle } from "react-icons/im";

const GoogleLogin = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-md border-2 border-[#403F3F] font-semibold p-2 w-full justify-center "
    >
      <ImGoogle />
      Login with Google
    </button>
  );
};

export default GoogleLogin;
