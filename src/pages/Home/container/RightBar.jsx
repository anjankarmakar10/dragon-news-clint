import React from "react";
import LoginContainer from "../components/login/LoginContainer";
import SocialLinks from "../components/Social/SocialLinks";

const RightBar = () => {
  return (
    <aside>
      <div className="hidden lg:block">
        <LoginContainer />
      </div>
      <SocialLinks />
    </aside>
  );
};

export default RightBar;
