import React from "react";
import LoginContainer from "../components/login/LoginContainer";

const RightBar = () => {
  return (
    <aside>
      <div className="hidden lg:block">
        <LoginContainer />
      </div>
    </aside>
  );
};

export default RightBar;
