/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from "react";

import JobTable from "./tables/JobTable";
import AddJobForm from "./forms/AddJobForm";
import EditJobForm from "./forms/EditJobForm";

const JobList = () => {
  //Data
  const initialFormState = {
    id: null,
    client: "",
    category: [],
    date: "",
    starttime: "",
    endtime: "",
    drivinglicense: [],
    jobcity: "",
    jobplz: "",
    jobstreet: "",
    jobstreetnr: "",
    jobcontact: "",
    jobcontactphone: "",
    mincall: "",
    proof: "",
    jobstatus: []
  };
  //Setting state with hooks
  const [jobs, setJobs] = useState([]);
  const [editing, setEditing] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [list, setList] = useState([])
  const [currentJob, setCurrentJob] = useState(initialFormState);
  //CRUD ops

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:9000/api/user/job", {
          method: "GET",
        })
        console.log("response", response)
        setFetching(true)
        if (response.ok) {
          const jobsData = await response.json();
          console.log("fetchResponse", jobsData)
          setJobs(jobsData.data);
        }
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();

  }, [fetching])


  const handlePost = async body => {
    try {
      debugger
      const response = await fetch("http://localhost:9000/api/user/job", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(body)

      })
      console.log(response)
      const jobRes = await response.json();
      console.log("data", jobRes);
      setJobs([...jobRes.data]);
    } catch (error) {
      console.log(error)
    }

  }
  console.log("currentJobs", jobs)

  const handleDelete = async id => {
    const c = window.confirm(
      "Bist du sicher, dass dieser Job gelöscht werden soll? Das kanst du danach nicht mehr ändern."
    )

    if (c) {
      debugger
      try {
        debugger
        const response = await fetch(`http://localhost:9000/api/user/job/${id}`, {
          method: "DELETE",
        })
        debugger
        console.log("deleteResponse", response)

      } catch (error) {
        console.log(error)
      }


    }

    setEditing(false);
  };
  const updateJob = (id, updateJob) => {
    setEditing(false);
    setJobs(jobs.map(job => (job._id === id ? updateJob : job)));
  };
  const editRow = id => {
    setEditing(true);
    console.log(id);

    const currentJob = jobs.filter(job => job._id === id)
    console.log(currentJob);
    setCurrentJob(
      currentJob[0]
    );
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
                <AddJobForm
                  handleJob={handlePost}
                />
              </Fragment>
            )}
        </div>

        )}
        <div className="flex-large">
          <h2>Aktuelle Jobs ({jobs.length})</h2>
          <JobTable jobs={!!jobs.length && jobs} editRow={editRow} deleteJob={handleDelete} />
        </div>

      </div>
    </div>
  );
};

export default JobList;
