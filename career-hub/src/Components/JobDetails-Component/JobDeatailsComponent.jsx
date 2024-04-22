import { useLoaderData, useParams } from "react-router-dom";
import ButtonCompenent from "../Button-Compenent/ButtonCompenent";
import JobDetailsBanner from "./JobDetailsBanner/JobDetailsBanner";

import { AiOutlineDollarCircle, AiTwotoneMail } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa";
import { PiAddressBookFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { toast } from "react-toastify";
import { saveJobsToLS } from "../../utility/local-storage/local-storage";

const JobDeatailsComponent = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idx = Number(id);

  const job = jobs.find((j) => j.id === idx);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information: { phone, email, address },
  } = job;

  const handleApplyButton = () => {
    saveJobsToLS(idx)
    toast("Applied Successfully")
  }

  return (
    <div>
      <JobDetailsBanner title="Job Details" />
      <div className="flex my-10 gap-3">
        <div className="w-2/3 bg">
          <p className="mb-4">
            <span className="font-bold">Job Description: </span>
            {job_description}
          </p>
          <p className="mb-4">
            <span className="font-bold">Job Responsibility: </span>
            {job_responsibility}
          </p>
          <p className="mb-4">
            <span className="font-bold">Educational Requirements: </span>
            <br />
            {educational_requirements}
          </p>
          <p className="mb-4">
            <span className="font-bold">Experiences: </span>
            <br />
            {experiences}
          </p>
        </div>
        <div className="w-1/3 ">
          <div className="bg-[#F4F2FF] p-4 rounded-lg">
            <p className="font-bold border-b-2 pb-2 mb-3 text-xl">
              Job Details
            </p>
            <p className="flex items-center gap-1 text-[#757575] mb-2">
              <AiOutlineDollarCircle color="#7E90FE" />
              <span className="font-bold text-[#474747]">Salary : </span>{" "}
              {salary} (per month)
            </p>
            <p className="flex items-center gap-1 text-[#757575] mb-2">
              <SlCalender color="#7E90FE" />
              <span className="font-bold text-[#474747]">Job Title : </span>
              {job_title}
            </p>
            <p className="font-bold border-b-2 pb-2 my-4 text-xl">
              Contact Information
            </p>

            <p className="flex items-center gap-1 text-[#757575] mb-2">
              <FaPhoneVolume color="#7E90FE" />
              <span className="font-bold text-[#474747]">Phone : </span>
              {phone}
            </p>
            <p className="flex items-center gap-1 text-[#757575] mb-2">
              <AiTwotoneMail color="#7E90FE" />
              <span className="font-bold text-[#474747]">Email : </span>
              {email}
            </p>
            <p className="flex justify-between flex-wrap items-start text-[#757575] mb-2">
              <p className="flex items-center gap-1 ">
                <PiAddressBookFill color="#7E90FE" />

                <span className="font-bold text-[#474747] ">Address :</span>
              </p>
              <p>{address}</p>
            </p>
            <ButtonCompenent handleOnClick={handleApplyButton} title="Apply Now"></ButtonCompenent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDeatailsComponent;
