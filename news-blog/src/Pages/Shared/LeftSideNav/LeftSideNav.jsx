import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl">All Category</h2>
      <div className="py-3">
        {categories.map((category) => (
          <Link
            className="mb-2 block font-semibold p-3 transition-all hover:rounded-sm hover:text-[#403F3F] hover:bg-[#E7E7E7]"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
