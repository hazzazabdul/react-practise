import { useLoaderData } from "react-router-dom";
import AppliedJobsComponent from "../../Components/Applied-Jobs-Section/Applied-Jobs/AppliedJobsComponent";
import JobDetailsBanner from "./../../Components/JobDetails-Component/JobDetailsBanner/JobDetailsBanner";

const AppliedJobsPage = () => {
  const jobs = useLoaderData();

  return (
    <div>
      <JobDetailsBanner title="Applied Jobs" />
      <AppliedJobsComponent jobs={jobs} />
    </div>
  );
};

export default AppliedJobsPage;
