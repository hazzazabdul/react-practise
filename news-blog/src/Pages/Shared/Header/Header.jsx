import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center py-5">
      <img className="mx-auto" src={logo} alt="logo for the website" />
      <p className="my-2">Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
