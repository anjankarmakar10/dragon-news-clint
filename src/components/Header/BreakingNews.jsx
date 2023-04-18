import React from "react";
import Button from "../buttons/Button";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className=" p-4 bg-[#F3F3F3] rounded-md flex flex-col md:flex-row items-center gap-4">
      <Button bg={"#D72050"}>Latest</Button>
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover
        className="cursor-pointer"
      >
        <p className="text-lg text-[#403F3F] font-semibold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
