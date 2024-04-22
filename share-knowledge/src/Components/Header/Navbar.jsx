import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-800 p-4 text-white text-center flex gap-4 justify-center">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "pending"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "pending"
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "pending"
        }
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "pending"
        }
        to="/form"
      >
        Form
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "pending"
        }
        to="/menu"
      >
        Menu
      </NavLink>
    </nav>
  );
};

export default Navbar;
