import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {

  const {loginUser} = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email")
    const password = form.get("password");

    // login user
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/")
      })
      .catch((er) => console.error(er.message))
  } 

  return (
    <div className="w-96 mx-auto shadow-md my-20 p-8">
      <form onSubmit={handleLogin}>
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="mt-2 font-bold">
        New Here?{" "}
        <Link className="text-blue-700 font-bold underline" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
