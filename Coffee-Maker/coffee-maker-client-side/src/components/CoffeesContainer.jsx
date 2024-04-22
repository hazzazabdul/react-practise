import { Link } from "react-router-dom";

import Swal from "sweetalert2";

const CoffeesContainer = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDeleteCoffee = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }

            const remaining = coffees.filter((cof) => cof._id !== id)
            setCoffees(remaining)
          });
      }
    });
  };

  return (
    <div className="flex border border-amber-700 p-4 justify-between items-center">
      <div>
        <h2>Name: {name}</h2>
        <h2>Quantity: {quantity}</h2>
        <h2>Category: {category}</h2>
      </div>
      <div className="flex flex-col gap-y-2">
        <Link
          className="border border-amber-700 p-2 text-center"
          to={`/coffees/${_id}`}
        >
          <button>View</button>
        </Link>
        <Link
          className="border border-amber-700 p-2 text-center"
          to={`/updatecoffee/${_id}`}
        >
          <button>Update</button>
        </Link>
        <button
          onClick={() => handleDeleteCoffee(_id)}
          className="border border-amber-700 p-2 text-center"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CoffeesContainer;
