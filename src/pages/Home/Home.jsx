import React from "react";
import LeftBar from "./container/LeftBar";
import FeedContainer from "./container/FeedContainer";
import RightBar from "./container/RightBar";
import LoginContainer from "./components/login/LoginContainer";
import { useState } from "react";
import Header from "../../components/Header/Header";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../config/firebase";
const Home = () => {
  const [id, setId] = useState(0);
  const { user } = useAuth();

  const handleCetagory = (id) => {
    setId(id);
  };

  return (
    <>
      <Header />
      <div className="container w-full md:w-2/4 mx-auto px-4 lg:hidden py-2">
        {!user && <LoginContainer showTitle={false} />}
      </div>
      <div className="home-grid container mx-auto px-4 pb-4">
        <LeftBar onCatagory={handleCetagory} />
        <FeedContainer category={id} />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
