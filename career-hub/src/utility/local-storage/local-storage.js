const getJobsFromLS = () => {
  const gotJobs = localStorage.getItem("jobs");
  if (gotJobs) {
    return JSON.parse(gotJobs);
  } else {
    return [];
  }
};

const saveJobsToLS = (id) => {
  const savedJobs = getJobsFromLS();
  console.log(savedJobs)
  const exists = savedJobs.find((savedJobId) => savedJobId === id);
  console.log(exists)
  if (!exists) {
    savedJobs.push(id);
    localStorage.setItem("jobs", JSON.stringify(savedJobs));
  }
};

export { getJobsFromLS, saveJobsToLS };
