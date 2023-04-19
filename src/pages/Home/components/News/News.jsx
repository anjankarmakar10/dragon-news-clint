import React from "react";
import { BsBookmark, BsEye } from "react-icons/bs";
const News = ({ news }) => {
  return (
    <article className="rounded-md overflow-hidden border">
      <header className="flex items-center justify-between bg-[#F3F3F3] p-4">
        <Profile author={news?.author} />
        <BsBookmark className="cursor-pointer" size={24} />
      </header>
      <section className="p-4">
        <h2 className="text-[#403F3F] text-lg font-bold mb-4">{news?.title}</h2>
        <img
          className="w-full rounded-md mb-6"
          src={news?.image_url}
          alt={news?.title}
        />
        <p className="text-[#706F6F] font-medium text-base line-clamp mb-1">
          {news?.details}
        </p>

        <div className="flex items-center justify-between">
          <div className="font-semibold cursor-pointer text-[#FF8034]">
            Read More
          </div>

          <div className="flex items-center gap-2 text-base font-medium text-[#706F6F]">
            <BsEye size={20} />
            {news?.total_view}
          </div>
        </div>
      </section>
    </article>
  );
};

const Profile = ({ author }) => {
  return (
    <div className="flex items-center gap-3">
      <img className="w-10 rounded-full" src={author?.img} alt="" />
      <div className="flex flex-col">
        <h5 className="text-[#403F3F] font-semibold">{author?.name}</h5>
        <p className="text-[#706F6F] text-sm">{author?.published_date}</p>
      </div>
    </div>
  );
};

export default News;
