import { useEffect, useState } from "react";

const useNews = () => {
  const [news, setNews] = useState(null);

  const getData = async () => {
    const response = await fetch("news.json");
    const data = await response.json();
    setNews(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return news;
};

export default useNews;
