import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const loadedCoffee = useLoaderData();

  const { name, quantity, supplier, taste, category, details } = loadedCoffee;

  return (
    <div>
      <h2 className="text-center py-4 font-bold">Coffee Details for {loadedCoffee.name}</h2>
      <div className="border w-9/12 mx-auto p-4">
        <h2>Name: {name}</h2>
        <h2>Quantity: {quantity}</h2>
        <h2>Category: {category}</h2>
        <p>Details: {details}</p>
      </div>
    </div>
  );
};

export default CoffeeDetails;
