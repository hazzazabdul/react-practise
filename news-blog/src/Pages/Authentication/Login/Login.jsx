import { useContext } from "react";
import { Link, useNavigate , useLocation } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Navbar from "./../../Shared/Navbar/Navbar";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password)

    // User LogIn *****
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((e) => console.error(e.message));
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-center my-5 text-3xl">Please Login</h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-3">
          Do not have an account ?{" "}
          <Link to="/register" className="font-bold text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
