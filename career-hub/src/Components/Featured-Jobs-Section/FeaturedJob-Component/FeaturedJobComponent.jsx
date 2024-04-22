import PropTypes from "prop-types";
import ButtonCompenent from "../../Button-Compenent/ButtonCompenent";
import SecondaryButton from "../../Secondaray-Button/SecondaryButton";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FeaturedJobComponent = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    salary,
    job_type,
  } = job;

  return (
    <div className="border-2 rounded-lg p-5">
      <div className="w-28 mb-4">
        <img className="w-full" src={logo} alt={`logo for ${company_name}`} />
      </div>
      <h1 className="text-xl font-bold">{job_title}</h1>
      <p className="my-2 text-[#757575]">{company_name}</p>
      <div className="flex gap-2">
        <SecondaryButton title={remote_or_onsite} />
        <SecondaryButton title={job_type} />
      </div>
      <div className="flex gap-4 my-2 text-[#757575]">
        <p className="flex items-center gap-1">
          <FaLocationDot />
          {location}
        </p>
        <p className="flex items-center gap-1">
          <AiOutlineDollarCircle />
          {salary}
        </p>
      </div>
      <Link to={`/job/${id}`}>
        <ButtonCompenent title="View Details" />
      </Link>
    </div>
  );
};

FeaturedJobComponent.propTypes = {
  job: PropTypes.object.isRequired,
};

export default FeaturedJobComponent;
