import { Outlet } from "react-router-dom";
import FooterComponent from "../Components/Footer-Compenent/FooterComponent";
import NavbarComponent from "../Components/Navbar-Component/NavbarComponent";

const Root = () => {
  return (
    <>
      <NavbarComponent />
      <div className="max-w-6xl m-auto bg-white text-black  sm:px-4">
        <Outlet />
      </div>
      <FooterComponent />
    </>
  );
};

export default Root;
