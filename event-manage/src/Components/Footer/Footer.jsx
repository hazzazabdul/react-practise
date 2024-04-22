import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailUnread, IoMdArrowDropright } from "react-icons/io";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-4 bg-pri text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-start py-7 gap-20">

        <div className="flex flex-col gap-2 w-2/4">
          <h2 className="text-xl font-montserrat">Event Planner</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            cum optio molestiae explicabo ipsa maxime?
          </p>
          <p className="flex items-center gap-2">
            <IoIosMailUnread size={20} />
            Hello@happy.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneVolume size={20} />
            +880242352
          </p>
        </div>
        
        <div className="w-2/4">
          <h2 className=" font-montserrat mb-3">Quick Links</h2>
          <div className="flex flex-col gap-1">
            <Link className="flex items-center">
              <IoMdArrowDropright size={20} />
              Home
            </Link>
            <Link className="flex items-center">
              <IoMdArrowDropright />
              About
            </Link>
            <Link className="flex items-center">
              <IoMdArrowDropright />
              Our Services
            </Link>
            <Link className="flex items-center">
              <IoMdArrowDropright />
              Projects
            </Link>
            <Link className="flex items-center">
              <IoMdArrowDropright />
              Contact Us
            </Link>
          </div>
        </div>

        <div className="w-2/4">
          <h2 className=" font-montserrat mb-3">Quick Links</h2>
          <div className="flex flex-col gap-1">
            <Link className="flex items-center">
              <IoMdArrowDropright size={20} />
              Home
            </Link>
            <Link className="flex items-center">
              <IoMdArrowDropright />
              About
            </Link>
            <Link className="flex items-center">
              <IoMdArrowDropright />
              Our Services
            </Link>
            <Link className="flex items-center">
              <IoMdArrowDropright />
              Projects
            </Link>
            <Link className="flex items-center">
              <IoMdArrowDropright />
              Contact Us
            </Link>
          </div>
        </div>

        <div className="w-2/4">
          <h2 className=" font-montserrat mb-3">FollowUs On Social Media</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
            quibusdam?
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
