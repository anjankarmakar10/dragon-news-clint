import { useEffect, useState } from "react";

const useCategory = () => {
  const [categories, setCategories] = useState(null);

  const getData = async () => {
    const response = await fetch("categories.json");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return categories;
};

export default useCategory;
