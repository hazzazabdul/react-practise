import { useState } from "react";
import PropTypes from "prop-types"

const Banner = ({onSubmit}) => {

  const [value, setValue] = useState('')

  return (
    <div className="min-h-screen bg-no-repeat bg-center bg-[url('https://i.postimg.cc/8cGxjCVk/Rectangle-4281.png')]">
      <div className="flex flex-col justify-center items-center min-h-screen bg-opacity-90 bg-white">
        <h1 className="text-4xl font-bold mb-10">
          I Grow By Helping People In Need
        </h1>
        <div className="flex items-center">
          <input
            className=" outline-none px-6 py-3 rounded-tl-md rounded-bl-md border-y border-l"
            type="search"
            name="search"
            placeholder="Search here..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="z-10 primary-bg border border-[#ff444a] py-3 px-6 rounded-tr-md rounded-br-md"
            onClick={() => onSubmit(value)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  onSubmit: PropTypes.func
}

export default Banner;
