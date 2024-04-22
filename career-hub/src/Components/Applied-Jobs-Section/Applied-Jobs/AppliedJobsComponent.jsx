import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getJobsFromLS } from "../../../utility/local-storage/local-storage";
import AppliedJobcomponent from "../Applied-Job/Applied-Job-component";

const AppliedJobsComponent = ({ jobs }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);

  useEffect(() => {
    const jobApplicationID = getJobsFromLS();

    if (jobs.length > 0) {
      const savedJobApplication = jobs.filter((job) =>
        jobApplicationID.includes(job.id)
      );
      setAppliedJobs(savedJobApplication);
      setDisplayedJobs(savedJobApplication);
    }
  }, [jobs]);

  const handleFilterButton = (title) => {
    if (title === "All") {
      setDisplayedJobs(appliedJobs);
    } else if (title === "Remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayedJobs(remoteJobs);
    } else if (title === "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayedJobs(onsiteJobs);
    }
  };

  return (
    <div>
      <div className="text-right">
        <div className="dropdown my-4">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-white text-black hover:bg-transparent"
          >
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-slate-300  rounded-box w-28"
          >
            <li onClick={() => handleFilterButton("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilterButton("Remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleFilterButton("Onsite")}>
              <a>OnSite</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4">
        {displayedJobs.map((appliedJob) => (
          <AppliedJobcomponent key={appliedJob.id} appliedJob={appliedJob} />
        ))}
      </div>
    </div>
  );
};

AppliedJobsComponent.propTypes = {
  jobs: PropTypes.array,
};

export default AppliedJobsComponent;
