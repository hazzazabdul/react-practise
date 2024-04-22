import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const DonationCard = ({ card }) => {
  const { id, image, title, category, text_color, category_bg, card_bg } = card;

  const navigate = useNavigate();

  const handleCardDetails = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      onClick={handleCardDetails}
      className={`bg-[${card_bg}] cursor-pointer`}
    >
      <div>
        <img src={image} alt={`image for ${category}`} />
      </div>
      <div>
        <p
          className={`bg-[${category_bg.replace(/"/g)}] text-[${text_color}] `}
        >
          {category}
        </p>
        <h1 className={`text-[${text_color}]`}>{title}</h1>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  card: PropTypes.object,
};

export default DonationCard;
