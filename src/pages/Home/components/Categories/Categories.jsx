import React from "react";
import useCategory from "../../../../hooks/useCategory";
import { useState } from "react";
const Categories = () => {
  const categories = useCategory();
  const [active, setActive] = useState(0);

  return (
    <section>
      <h3 className="text-lg md:text-xl text-[#403F3F] font-semibold mb-4">
        All Caterogy
      </h3>

      <div className="flex md:flex-col flex-wrap gap-[2px]">
        {categories?.map((category) => (
          <div
            onClick={() => setActive(+category?.id)}
            className={`font-medium text-base md:text-lg cursor-pointer hover:bg-[#E7E7E7]  rounded-md text-center p-2 md:p-3 ${
              +category?.id === active
                ? "bg-[#E7E7E7] text-[#403F3F]"
                : "text-[#9F9F9F]"
            }`}
            key={category.id}
          >
            {category?.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
