import React from "react";
import ButtonLogin from "../../components/buttons/ButtonLogin";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const Profile = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Header isNavbar={false} isBreaking={false} />
      <div className="max-w-2xl py-8  mx-auto px-4 flex justify-center">
        <div onClick={handleSignOut}>
          <ButtonLogin>Sign out</ButtonLogin>
        </div>
      </div>
    </>
  );
};

export default Profile;
