import React from "react";
import LeftBar from "./container/LeftBar";
import FeedContainer from "./container/FeedContainer";
import RightBar from "./container/RightBar";

const Home = () => {
  return (
    <div className="home-grid container mx-auto px-4 pb-4">
      <LeftBar />
      <FeedContainer />
      <RightBar />
    </div>
  );
};

export default Home;
