import React from "react";
import { ImGithub } from "react-icons/im";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const GitHubLogin = () => {
  const { loginWithGitHub } = useAuth();

  const navigate = useNavigate();

  const { state } = useLocation();
  const from = state?.path || "/";

  const handleLogin = async () => {
    try {
      await loginWithGitHub();
      navigate(from);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center gap-2 rounded-md border-2 border-[#403F3F] font-semibold p-2 w-full justify-center hover:bg-slate-300"
    >
      <ImGithub />
      Login with GitHub
    </button>
  );
};

export default GitHubLogin;
