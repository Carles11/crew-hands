import React, { useState } from 'react'

import InputClientName from './inputs/InputClientName'
import InputJobTitle from './inputs/InputJobTitle'
import InputCategory from './inputs/InputCategory'
import InputDate from './inputs/InputDate'
import InputHourRate from './inputs/InputHourRate'
import InputDrivingLicense from './inputs/InputDrivingLicense'
import InputJobAddress from './inputs/InputJobAddress'
import InputTime from './inputs/InputTime'
import InputContact from './inputs/InputContact'
import InputJobStatus from './inputs/InputJobStatus'
import InputSendJobTo from './inputs/InputSendJobTo'
import UploadJobProof from './inputs/UploadJobProof'
import InputMinCall from './inputs/InputMinCall'

const AddJobForm = props => {
  const initialFormState = {
    id: null,
    client: '',
    jobtitle: '',
    categorytontechnik: false,
    categorylichttechnik: false,
    categoryrigging: false,
    categorystagehand: false,
    categoryvideotechnik: false,
    categorymessebau: false,
    date: '',
    starttime: '',
    endtime: '',
    drivingpkw: false,
    drivinglkw7: false,
    drivinglkw14: false,
    drivingstappler: false,
    drivingsteiger: false,
    street: '',
    streetnumber: '',
    city: '',
    zipcode: '',
    jobcontact: '',
    jobcontactphone: '',
    hourrate: '',
    mincall: '',
    proof: '',
    jobstatusconfirmed: false,
    jobstatuscancelled: false,
    jobstatuspendent: false,
    created: '',
    createdBy: '',
  }
  const [job, setJob] = useState(initialFormState)

  const handleInputChange = e => {
    const { name, value } = e.target
    setJob({ ...job, [name]: value })
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (!job.client) return
        console.log(job)
        setJob(initialFormState)
        props.handleJob(job)
      }}
    >
      <label>Job Status</label>
      <InputJobStatus
        statusConf={job.jobstatusconfirmed}
        statusCanc={job.jobstatuscancelled}
        statusPend={job.jobstatuspendent}
        handleInput={handleInputChange}
      />
      <label>Kunde</label>
      <InputClientName client={job.client} handleInput={handleInputChange} />
      <label>Job Titel</label>
      <InputJobTitle jobtitle={job.jobtitle} handleInput={handleInputChange} />
      <label>Job Kategorie</label>
      <InputCategory
        ton={job.categoryTontechnik}
        licht={job.categoryLichttechnik}
        rigging={job.categoryRigging}
        stagehand={job.categoryStagehand}
        video={job.categoryVideotechnik}
        messebau={job.categoryMessebau}
        handleInput={handleInputChange}
      />
      <label>Job Datum</label>
      <InputDate date={job.date} handleInput={handleInputChange} />
      <label>Job Uhrzeiten</label>
      <InputTime
        starttime={job.starttime}
        endtime={job.endtime}
        handleInput={handleInputChange}
      />
      <label>Jobadresse</label>
      <InputJobAddress
        city={job.city}
        street={job.street}
        zipcode={job.zipcode}
        streetnumber={job.streetnumber}
        handleInput={handleInputChange}
      />
      <label>Kontaktdaten vor Ort</label>
      <InputContact
        jobcontact={job.jobcontact}
        jobcontactphone={job.jobcontactphone}
        handleInput={handleInputChange}
      />
      <label>Stundenlohn</label>
      <InputHourRate hourrate={job.hourrate} handleInput={handleInputChange} />
      <label>Minimum Call</label>
      <InputMinCall mincall={job.mincall} handleInput={handleInputChange} />
      <label>Führerschein nötig?</label>
      <InputDrivingLicense
        pkw={job.drivingPkw}
        lkw7={job.drivingLkw7}
        lkw14={job.drivingLkw14}
        stappler={job.drivingStappler}
        steiger={job.drivingSteiger}
        handleInput={handleInputChange}
      />
      <label>Wähle die Hands aus, die diesen Job erhalten sollten</label>
      <InputSendJobTo
        sendjobto={job.sendjobto}
        handleInput={handleInputChange}
      />
      <UploadJobProof />
      <button type="Submit">Job einstellen</button>
    </form>
  )
}

export default AddJobForm
