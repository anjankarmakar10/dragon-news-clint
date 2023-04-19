import React from "react";
import LeftBar from "./container/LeftBar";
import FeedContainer from "./container/FeedContainer";
import RightBar from "./container/RightBar";
import LoginContainer from "./components/login/LoginContainer";

const Home = () => {
  return (
    <>
      <div className="container w-full md:w-2/4 mx-auto px-4 lg:hidden pb-2">
        <LoginContainer showTitle={false} />
      </div>
      <div className="home-grid container mx-auto px-4 pb-4">
        <LeftBar />
        <FeedContainer />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
