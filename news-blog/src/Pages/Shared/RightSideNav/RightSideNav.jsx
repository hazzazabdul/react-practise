import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      {/* Login Section */}
      <div className="mb-3 p-2">
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn w-full my-3">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn w-full">
          <FaGithub />
          Login With Github
        </button>
      </div>

      {/* Socail Login */}

      <div className="mb-3 p-2">
        <h2 className="text-2xl font-bold mb-3">Find Us on</h2>
        <a
          target="_blank"
          href="https://www.facebook.com/DailyStarNews/"
          className="flex items-center p-4 w-full border rounded-t-lg"
        >
          <FaFacebook className="mr-2 " />
          <span>Facebook</span>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/DailyStarNews/"
          className="flex items-center p-4 w-full border-x"
        >
          <FaTwitter className="mr-2 " />

          <span>X</span>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/DailyStarNews/"
          className="flex items-center p-4 w-full border rounded-b-lg"
        >
          <FaInstagram className="mr-2 " />
          <span>Instagram</span>
        </a>
      </div>

      {/* Q-Zone */}

      <div className="mb-3 p-2 bg-[#F3F3F3]">
        <h2 className="text-2xl font-bold text-[#403F3F]">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" className="my-2" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
