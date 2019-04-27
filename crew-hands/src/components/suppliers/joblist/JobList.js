/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";

import JobTable from "./tables/JobTable";
import AddJobForm from "./forms/AddJobForm";
import EditJobForm from "./forms/EditJobForm";

const JobList = () => {
  //Data
  const jobsData = [
    {
      id: null,
      client: "",
      category: [],
      date: "",
      startTime: "",
      endTime: "",
      drivingLicense: "",
      jobCity: "",
      jobPlz: "",
      jobStreet: "",
      jobStreetNr: "",
      jobContact: "",
      jobContactTel: "",
      minCall: "",
      proof: "",
      jobStatus: ""
    }
  ];
  const initialFormState = {
    id: null,
    client: "",
    category: [],
    date: "",
    startTime: "",
    endTime: "",
    drivingLicense: "",
    jobCity: "",
    jobPlz: "",
    jobStreet: "",
    jobStreetNr: "",
    jobContact: "",
    jobContactTel: "",
    minCall: "",
    proof: "",
    jobStatus: ""
  };
  //Setting state with hooks
  const [jobs, setJobs] = useState(jobsData);
  const [editing, setEditing] = useState(false);
  const [currentJob, setCurrentJob] = useState(initialFormState);
  //CRUD ops
  const addJob = job => {
    debugger;
    job.id = jobs.length + 1;
    setJobs([...jobs, job]);
  };
  const deleteJob = id => {
    setEditing(false);
    setJobs(jobs.filter(job => job.id !== id));
  };
  const updateJob = (id, updateJob) => {
    setEditing(false);
    setJobs(jobs.map(job => (job.id === id ? updateJob : job)));
  };
  const editRow = job => {
    setEditing(true);
    setCurrentJob({
      id: job.id,
      client: job.client,
      category: job.category,
      date: job.date,
      startTime: job.startTime,
      endTime: job.endTime,
      drivingLicense: job.drivingLicense,
      jobCity: job.jobCity,
      jobPlz: job.jobPlz,
      jobStreet: job.jobStreet,
      jobStreetNr: job.jobStreetNr,
      jobContact: job.jobContact,
      jobContactTel: job.jobContactTel,
      minCall: job.minCall,
      proof: job.proof,
      jobStatus: job.jobStatus
    });
  };

  return (
    <div className="container">
      <h1>Job Liste</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>{currentJob.client} Job bearbeiten</h2>
              <EditJobForm
                editing={editing}
                setEditing={setEditing}
                currentJob={currentJob}
                updateJob={updateJob}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Neuen Job eintragen</h2>
              <AddJobForm addJob={addJob} />
            </Fragment>
          )}
        </div>

        <div className="flex-large">
          <h2>Aktuelle Jobs ({jobs.length})</h2>
          <JobTable jobs={jobs} editRow={editRow} deleteJob={deleteJob} />
        </div>
      </div>
    </div>
  );
};

export default JobList;
