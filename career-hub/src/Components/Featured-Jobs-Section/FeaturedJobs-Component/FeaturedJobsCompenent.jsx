import { useEffect, useState } from "react";
import FeaturedJobComponent from "../FeaturedJob-Component/FeaturedJobComponent";

const FeaturedJobsCompenent = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);

  return (
    <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-3">
      {featuredJobs.map((job) => (
        <FeaturedJobComponent key={job.id} job={job} />
      ))}
    </div>
  );
};

export default FeaturedJobsCompenent;
