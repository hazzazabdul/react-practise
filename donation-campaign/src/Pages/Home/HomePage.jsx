import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DonationsContainer from "../../Components/Donations-Card-Section/Donations-Container/DonationsContainer";
import Banner from "../../Components/Home-Page-Banner/Banner";

const HomePage = () => {
  const donationCards = useLoaderData();
  const [displayedCards, setDisplayedCards] = useState([...donationCards]);

  const handleFilterButton = (value) => {
    const finalValue = value.toLocaleLowerCase();
    if (finalValue === ("education" || "Education")) {
      const educationCards = donationCards.filter(
        (donation) => donation.category === "Education"
      );
      setDisplayedCards(educationCards);
    } else if (finalValue === ("food" || "Food")) {
      const foodCards = donationCards.filter(
        (donation) => donation.category === "Food"
      );
      setDisplayedCards(foodCards);
    } else if (finalValue === ("health" || "Health")) {
      const healthCards = donationCards.filter(
        (donation) => donation.category === "Health"
      );
      setDisplayedCards(healthCards);
    } else if (finalValue === ("cothing" || "Cothing")) {
      const cothingCards = donationCards.filter(
        (donation) => donation.category === "Cothing"
      );
      setDisplayedCards(cothingCards);
    }
  };

  return (
    <div>
      <Banner onSubmit={handleFilterButton} />
      <DonationsContainer donationCards={displayedCards} />
    </div>
  );
};

export default HomePage;
