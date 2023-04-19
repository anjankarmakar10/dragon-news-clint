import React from "react";
import GoogleLogin from "../../../../components/buttons/GoogleLogin";
import GitHubLogin from "../../../../components/buttons/GitHubLogin";

const LoginContainer = ({ showTitle = true }) => {
  return (
    <div>
      <h3 className="text-lg md:text-xl text-[#403F3F] font-semibold mb-4">
        {showTitle ? "Login Width" : ""}
      </h3>
      <div className="flex flex-col gap-2">
        <GoogleLogin />
        <GitHubLogin />
      </div>
    </div>
  );
};

export default LoginContainer;
