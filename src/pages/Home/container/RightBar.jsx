import React from "react";
import LoginContainer from "../components/login/LoginContainer";
import SocialLinks from "../components/Social/SocialLinks";
import { useAuth } from "../../../context/AuthContext";

const RightBar = () => {
  const { user } = useAuth();

  return (
    <aside>
      <div className="hidden lg:block">{!user && <LoginContainer />}</div>
      <SocialLinks />
    </aside>
  );
};

export default RightBar;
