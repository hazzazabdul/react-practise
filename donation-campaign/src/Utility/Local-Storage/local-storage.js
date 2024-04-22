const getDonationFromLocalS = () => {
  const getdonationData = localStorage.getItem("donation");

  if (getdonationData) {
    return JSON.parse(getdonationData);
  } else {
    return [];
  }
};

const saveDonationToLocalS = (id) => {
  const donationData = getDonationFromLocalS();

  const exists = donationData.find((data) => data === id);

  if (!exists) {
    donationData.push(id);
    localStorage.setItem("donation", JSON.stringify(donationData));
  }
};

export { getDonationFromLocalS, saveDonationToLocalS };
