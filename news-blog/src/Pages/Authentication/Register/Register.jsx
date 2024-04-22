import { Link } from "react-router-dom";
import Navbar from "./../../Shared/Navbar/Navbar";
import { AuthContext } from "../../../Providers/AuthProvider";
import {useContext} from "react"

const Register = () => {

  const {createUser} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    
    // Create New User
    createUser(email, password)
      .then((data) => {
        const user = data.user
        console.log(user)
      })
      .catch((e) => console.log(e.message))
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-center my-5 text-3xl">Please Register</h2>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              name="photo"
              required
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
              name="email"
              required
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
              name="password"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mt-3">
          Already have an account ?{" "}
          <Link to="/login" className="font-bold text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
