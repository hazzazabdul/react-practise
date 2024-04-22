import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer-Component/Footer";
import Navbar from "../Components/Navbar-Component/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="md:max-w-6xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
