import React from "react";

import JobTable from "./tables/JobTable";

const JobList = () => {
  return (
    <div className="container">
      <h1>Job Liste</h1>
      <div className="flex-row">
        <JobTable />
      </div>
    </div>
  );
};

export default JobList;
