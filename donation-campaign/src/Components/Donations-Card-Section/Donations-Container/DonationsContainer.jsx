import PropTypes from "prop-types";
import DonationCard from "../Donation-Card/DonationCard";

const DonationsContainer = ({ donationCards }) => {
  
  return (
    <div className="grid grid-cols-4 my-10 gap-x-3 gap-y-5">
      {donationCards.map((card) => (
        <DonationCard key={card.id} card={card} />
      ))}
    </div>
  );
};

DonationsContainer.propTypes = {
  donationCards: PropTypes.array,
};

export default DonationsContainer;
