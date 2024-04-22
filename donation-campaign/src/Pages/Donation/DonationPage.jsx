import { useLoaderData } from "react-router-dom";
import DonationsPageContainer from "../../Components/Donation-Page-Section/DonationsPageContainer";

const DonationPage = () => {

  const donations = useLoaderData();



  return (
    <div className="py-6">
      <DonationsPageContainer donations={donations} />
    </div>
  );
};

export default DonationPage;
