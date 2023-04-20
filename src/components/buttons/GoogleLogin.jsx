import React from "react";
import { ImGoogle } from "react-icons/im";
import { useAuth } from "../../context/AuthContext";
const GoogleLogin = () => {
  const { loginWithGoogle } = useAuth();

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center gap-2 rounded-md border-2 border-[#403F3F] font-semibold p-2 w-full justify-center hover:bg-slate-300 "
    >
      <ImGoogle />
      Login with Google
    </button>
  );
};

export default GoogleLogin;
