import React from "react";
import moment from "moment/moment";
const Date = () => {
  return (
    <div className="text-base text-center lg:text-lg text-[#706F6F] font-medium mb-5">
      {moment().format("dddd, MMMM D, YYYY")}
    </div>
  );
};

export default Date;
