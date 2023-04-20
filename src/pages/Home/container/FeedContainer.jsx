import React from "react";
import News from "../components/News/News";
import useNews from "../../../hooks/useNews";

const FeedContainer = ({ category }) => {
  const news = useNews();

  const filterNews = (news, id) => {
    return news?.filter((item) => +item.category_id === id);
  };

  const allNews = +category === 0 ? news : filterNews(news, +category);

  return (
    <main>
      <h2 className="text-lg md:text-xl text-[#403F3F] font-semibold mb-4">
        Dragon News Home
      </h2>
      <section className="flex flex-col gap-4">
        {allNews?.length === 0 ? (
          <h1 className="font-semibold text-2xl text-cyan-950">
            No news found!!
          </h1>
        ) : (
          allNews?.map((news) => <News key={news?._id} news={news} />)
        )}
      </section>
    </main>
  );
};

export default FeedContainer;
