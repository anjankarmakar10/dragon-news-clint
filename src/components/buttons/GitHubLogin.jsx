import React from "react";
import { ImGithub } from "react-icons/im";

const GitHubLogin = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-md border-2 border-[#403F3F] font-semibold p-2 w-full justify-center hover:bg-slate-300"
    >
      <ImGithub />
      Login with GitHub
    </button>
  );
};

export default GitHubLogin;
