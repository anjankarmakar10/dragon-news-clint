import React from "react";
import { ImGoogle } from "react-icons/im";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
const GoogleLogin = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const { state } = useLocation();
  const from = state?.path || "/";

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate(from);
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
