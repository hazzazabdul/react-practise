import { NavLink } from "react-router-dom";
import ButtonCompenent from "../Button-Compenent/ButtonCompenent";

const NavbarComponent = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/jobs">Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/applied">Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar px-0 bg-transparent max-w-6xl m-auto  sm:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" sm:mr-3 btn btn-primary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm gap-2 dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-black text-3xl font-bold">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex text-black ">
        <ul className="menu menu-horizontal gap-2 px-1 text-xl">{links}</ul>
      </div>
      <div className="navbar-end">
        <ButtonCompenent title="Start Applying" />
      </div>
    </div>
  );
};

export default NavbarComponent;
