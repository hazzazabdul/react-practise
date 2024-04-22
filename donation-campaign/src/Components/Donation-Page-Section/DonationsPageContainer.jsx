import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getDonationFromLocalS } from "../../Utility/Local-Storage/local-storage";
import DonationPageCard from "./DonationPageCard";

const DonationsPageContainer = ({ donations }) => {
  const [savedDonations, setSavedDonations] = useState([]);

  useEffect(() => {
    const donationFromLS = getDonationFromLocalS();
    const newDonation = donations.filter((donation) =>
      donationFromLS.includes(donation.id)
    );
    setSavedDonations(newDonation);
  }, [donations]);

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-5">
      {savedDonations.map((donation) => (
        <DonationPageCard key={donation.id} donation={donation} />
      ))}
    </div>
  );
};

DonationsPageContainer.propTypes = {
  donations: PropTypes.array,
};

export default DonationsPageContainer;
