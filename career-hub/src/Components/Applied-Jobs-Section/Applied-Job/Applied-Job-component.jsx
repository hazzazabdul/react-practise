import PropTypes from "prop-types";
import ButtonCompenent from "./../../Button-Compenent/ButtonCompenent";
import SecondaryButton from "./../../Secondaray-Button/SecondaryButton";

import { MdMyLocation } from "react-icons/md";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";

const AppliedJobcomponent = ({ appliedJob }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = appliedJob;
  return (
    <div className="flex border rounded-md justify-between items-center p-4">
      <div className="flex">
        <div className="mr-2 bg-[#F4F4F4] p-3 flex items-center rounded-sm">
          <img src={logo} alt={`logo for ${company_name}`} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-[#474747]">{job_title}</h1>
          <p className="mt-2 font-bold text-[#474747]">{company_name}</p>
          <div className="flex gap-1 my-2">
            <SecondaryButton title={remote_or_onsite} />
            <SecondaryButton title={job_type} />
          </div>

          <div className="flex">
            <p className="flex items-center gap-1">
              <MdMyLocation />
              {location}
            </p>
            <p className="flex items-center gap-1 ml-4">
              <PiCurrencyCircleDollarFill />
              <span>Slaray : </span>
              {salary}
            </p>
          </div>
        </div>
      </div>
      <div>
        <ButtonCompenent title="View Details" />
      </div>
    </div>
  );
};

AppliedJobcomponent.propTypes = {
  appliedJob: PropTypes.object,
};

export default AppliedJobcomponent;
