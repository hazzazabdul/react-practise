import { useLoaderData, useParams } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonationToLocalS } from "../../../Utility/Local-Storage/local-storage";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idx = parseInt(id);

  const handleDonation = () => {
    toast("Donate Successfully");
    saveDonationToLocalS(idx);
  };

  const donation = donations.find((donet) => donet.id === idx);

  const { image, description, title, price } = donation;

  return (
    <div className="py-4">
      <div className="w-full h-80 bg-gradient-to-b from-transparent to-black relative">
        <img
          className="w-full h-full object-cover absolute mix-blend-overlay rounded-md"
          src={image}
          alt={`Image for ${title}`}
        />
        <button
          onClick={handleDonation}
          className="bg-[#FF444A] rounded-md bottom-12 left-12 absolute text-white py-2 px-4"
        >
          {`Donate $${price}`}
        </button>
      </div>
      <div className="py-4 ">
        <h1 className="text-3xl font-bold mb-1">{title}</h1>
        <p>{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
