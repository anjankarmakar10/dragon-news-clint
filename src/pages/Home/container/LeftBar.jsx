import React from "react";
import Categories from "../components/Categories/Categories";

const LeftBar = ({ onCatagory }) => {
  return (
    <aside className="md:sticky top-4 h-fit">
      <Categories onCatagory={onCatagory} />
    </aside>
  );
};

export default LeftBar;
