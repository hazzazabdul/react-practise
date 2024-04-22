import PropTypes from "prop-types";

import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";

const NewsItem = ({ newsItem }) => {
  const {
    title,
    author: { img, name, published_date },
    total_view,
    rating: { number },
    image_url,
    details,
    _id,
  } = newsItem;

  return (
    <div className="border p-4 my-5">
      {/* News Heading */}

      <div className="p-4 flex justify-between items-center bg-[#F3F3F3]">
        <div className="flex items-center">
          <div className="w-12 mr-3">
            <img
              className="w-full rounded-full"
              src={img}
              alt={`${name} img`}
            />
          </div>
          <div>
            <p className="text-[#403F3F] font-semibold text-xs">{name}</p>
            <p className="text-xs mt-1 text-[#706F6F]">{published_date}</p>
          </div>
        </div>
        <div className="flex items-center text-xl text-[#706F6F]">
          <CiBookmark className="cursor-pointer" />
          <CiShare2 className="ml-2 cursor-pointer" />
        </div>
      </div>

      {/* News Body */}

      <div className="p-4 flex flex-col gap-3 border-b border-[#E7E7E7]">
        <h2>{title}</h2>
        <img src={image_url} alt={`Thumbnail for ${title}`} />
        <p className="text-sm">
          {details.length > 200 ? (
            <span>
              {details.slice(0, 200)}{" "}
              <Link
                className="bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] text-transparent bg-clip-text font-semibold"
                to={`/news/${_id}`}
              >
                Read More...
              </Link>
            </span>
          ) : (
            details
          )}
        </p>
      </div>

      {/* News Footer */}

      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex gap-1">
            <FaStar color="#FF8C47" />
            <FaStar color="#FF8C47" />
            <FaStar color="#FF8C47" />
            <FaStar color="#FF8C47" />
            <FaStar color="#FF8C47" />
          </div>
          <p className=" ml-2 mt-1">{number}</p>
        </div>
        <div className="flex items-center">
          <FaEye />
          <p className="ml-2">{total_view}</p>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  newsItem: PropTypes.object,
};

export default NewsItem;
