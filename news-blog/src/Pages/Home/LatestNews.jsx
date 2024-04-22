import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex my-5 bg-heading p-2 rounded-sm text-black">
      <p className=" bg-second text-white text-center p-2 rounded-sm w-40">
        Latest News
      </p>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to="/">
          I can be a React component, multiple React components
        </Link>
        <Link className="ml-5 mr-5" to="/">
          21 Ramadan will be start soon
        </Link>
        <Link to="/">Free Palestain</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
