import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../../Providers/AuthProvider";


const Register = () => {

  const {createUser} = useContext(AuthContext)

  const handleUserRegistration = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // login user
    createUser(email, password)
      .then((res) => {
        console.log(res.user)
      })
      .catch((er) => console.log(er));
  };

  return (
    <div className="w-96 mx-auto shadow-md my-20 p-8">
      <form onSubmit={handleUserRegistration}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
            name="name"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            placeholder="Image Url"
            className="input input-bordered"
            required
            name="imageurl"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            required
            name="email"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            required
            name="password"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="mt-2 font-bold">
        Already have an account?{" "}
        <Link className="text-blue-700 font-bold underline" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
