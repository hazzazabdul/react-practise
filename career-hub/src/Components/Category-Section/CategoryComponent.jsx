import PropTypes from "prop-types";

const CategoryComponent = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="bg-[#F9F9FF] p-8 rounded-lg">
      <div className="w-10 mb-3">
        <img className="w-full" src={logo} alt={`logo for ${category_name} `} />
      </div>
      <div>
        <h2 className="font-bold text-xl text-[#474747] mb-2">
          {category_name}
        </h2>
        <p className="text-[#A3A3A3] text-sm">{availability}</p>
      </div>
    </div>
  );
};

CategoryComponent.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryComponent;
