import { useEffect, useState } from "react";
import CategoryComponent from "../CategoryComponent";

const CategoriesComponent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex justify-between mt-6">
      {categories.map((category) => (
        <CategoryComponent key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesComponent;
