import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const DonationPageCard = ({ donation }) => {
  const { id, title, image, price, category } = donation;

  const navigate = useNavigate();

  const handleDonationDetails = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="flex items-center bg-amber-100 rounded-md">
      <div className="mr-3">
        <img src={image} alt="" />
      </div>
      <div>
        <span className="bg-amber-200 text-amber-600 font-bold py-1 px-2 inline-block capitalize">
          {category}
        </span>
        <h1 className="text-xl font-bold my-1">{title}</h1>
        <p className="font-bold text-amber-600">${price}</p>
        <button
          onClick={handleDonationDetails}
          className="bg-amber-600 text-white py-1 px-3 rounded-sm mt-1"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

DonationPageCard.propTypes = {
  donation: PropTypes.object,
};

export default DonationPageCard;
