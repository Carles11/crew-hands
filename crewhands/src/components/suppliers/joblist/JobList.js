/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react'

import JobTable from './tables/JobTable'
import AddJobForm from './forms/AddJobForm'
import EditJobForm from './forms/EditJobForm'

const JobList = () => {
  //Data
  const initialFormState = {
    id: null,
    client: '',
    jobtitle: '',
    categoryTontechnik: '',
    categoryLichttechnik: '',
    categoryRigging: '',
    categoryStagehand: '',
    categoryVideo: '',
    categoryMessebau: '',
    date: '',
    starttime: '',
    endtime: '',
    drivinglicense: [],
    street: '',
    streetnumber: '',
    city: '',
    zipcode: '',
    jobcontact: '',
    jobcontactphone: '',
    hourrate: '',
    mincall: '',
    proof: '',
    jobstatus: '',
    created: '',
    createdBy: '',
    selectedOptionJobStatus: null,
    selectedOptionCategory: null,
    selectedOptionDrivingLicense: null,
  }
  //Setting state with hooks
  const [jobs, setJobs] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [editing, setEditing] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [currentJob, setCurrentJob] = useState(initialFormState)
  //CRUD ops

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:9000/api/user/job', {
          method: 'GET',
        })
        setFetching(true)
        if (response.ok) {
          const jobsData = await response.json()
          console.log('fetchResponse', jobsData)
          setJobs(jobsData.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [fetching])

  const handlePost = async body => {
    try {
      const response = await fetch('http://localhost:9000/api/user/job', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(body),
      })
      const jobRes = await response.json()
      setJobs([...jobRes.data])
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async job => {
    const c = window.confirm(
      `Bist du sicher, dass der Job ${job.jobtitle} gelöscht werden soll? Das kanst du danach nicht mehr ändern.`,
    )
    console.log('JobTitle', job.title)
    if (c) {
      const promise = await fetch(
        `http://localhost:9000/api/user/job/${job._id}`,
        {
          method: 'DELETE',
        },
      )
      if (promise.ok) {
        const jobData = await promise.json()
        setJobs(jobData.data)
      } else {
        return null
      }
    }
  }

  const handleUpdate = async job => {
    try {
      const request = await fetch(
        `http://localhost:9000/api/user/job/${job._id}`,

        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'PUT',
          body: JSON.stringify(job),
        },
      )

      if (request.ok) {
        const jobRes = await request.json()
        setJobs([...jobRes.data])
      } else {
        throw new Error('req', request)
      }
    } catch (error) {
      console.log('CatchError Update', error)
      throw new Error('error message', error)
    }
  }

  const editRow = id => {
    setEditing(true)
    const actualJob = jobs.filter(job => job._id === id)
    console.log('ActualJob', actualJob)
    setCurrentJob(actualJob[0])
  }

  return (
    <div className="container">
      <h1>Job Liste</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>
                {currentJob.client}´s {currentJob.jobtitle} Job bearbeiten
              </h2>
              <EditJobForm
                editing={editing}
                setEditing={setEditing}
                currentJob={currentJob}
                updateJob={handleUpdate}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Neuen Job eintragen</h2>
              <AddJobForm handleJob={handlePost} />
            </Fragment>
          )}
        </div>
        )}
        <div className="flex-large">
          <h2>Aktuelle Jobs ({jobs.length})</h2>
          <JobTable
            jobs={!!jobs.length && jobs}
            editRow={editRow}
            deleteJob={handleDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default JobList
