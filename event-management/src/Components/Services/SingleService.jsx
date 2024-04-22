import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  const { id, name, image } = service;

  return (
    <div className="text-center">
      <div className="w-28 h-28 mx-auto">
        <img className="w-full h-full rounded-full" src={image} alt="" />
      </div>
      <h2 className="text-xl mt-3 font-bold font-montserrat">{name}</h2>
      <Link to={`/servicedetails/${id}`}>
        <button className="mt-3 rounded-sm font-condensed text-white py-1 px-4 bg-gradient-to-r from-pri to-sec ">
          Details
        </button>
      </Link>
    </div>
  );
};

SingleService.propTypes = {
  service: PropTypes.object,
};

export default SingleService;
