import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // console.log(updateCoffee);

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {console.log(data)
      if (data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Coffee Updated",
          showConfirmButton: false,
          timer: 1500
        });
      }
      });
  };


  return (
    <div className="p-24 bg-slate-200">
      <h2 className="font-bold text-3xl">Update {name} Coffee</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* Form Row name & quantity */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2 mr-2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Coffee Name"
                name="name"
                className="input input-bordered w-full "
                defaultValue={name}
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Available Quantity"
                name="quantity"
                className="input input-bordered w-full"
                defaultValue={quantity}
              />
            </label>
          </div>
        </div>

        {/* Form Row supplier name & taste */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2 mr-2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Supplier Name"
                name="supplier"
                className="input input-bordered w-full "
                defaultValue={supplier}
              />
            </label>
          </div>
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Taste"
                name="taste"
                className="input input-bordered w-full "
                defaultValue={taste}
              />
            </label>
          </div>
        </div>

        {/* Form Row Category & details */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2 mr-2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input input-bordered w-full "
                defaultValue={category}
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Details"
                name="details"
                className="input input-bordered w-full "
                defaultValue={details}
              />
            </label>
          </div>
        </div>

        {/* Form Row name & quantity */}
        <div className="md:flex mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered w-full "
                defaultValue={photo}
              />
            </label>
          </div>
        </div>
        <input type="submit" className="btn btn-block" value="Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
