import React, { useState } from "react";

import InputClientName from "./inputs/InputClientName";
import InputCategory from "./inputs/InputCategory";
import InputDate from "./inputs/InputDate";
import InputHourRate from "./inputs/InputHourRate";
import InputDrivingLicense from "./inputs/InputDrivingLicense";
import InputJobAddress from "./inputs/InputJobAddress";
import InputTime from "./inputs/InputTime";
import InputContact from "./inputs/InputContact";
import InputJobStatus from "./inputs/InputJobStatus";
import InputSendJobTo from "./inputs/InputSendJobTo";
import UploadJobProof from "./inputs/UploadJobProof";
import InputMinCall from "./inputs/InputMinCall";

const AddJobForm = props => {
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
    jobstreetnumber: "",
    jobcontact: "",
    jobcontactphone: "",
    mincall: "",
    proof: "",
    jobstatus: "",
    selectedOptionJobStatus: null,
    selectedOptionCategory: null,
    selectedOptionDrivingLicense: null
  };
  const [job, setJob] = useState(initialFormState);

  const handleInputChange = e => {

    const { name, value } = e.target;

    setJob({ ...job, [name]: value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!job.client) return;
        console.log(job)
        setJob(initialFormState);
        props.handleJob(job);
      }}
    >
      <label>Job Status</label>
      <InputJobStatus
        type="text"
        jobstatus={job.jobstatus}
        handleInput={handleInputChange}

      />
      <label>Kunde</label>
      <InputClientName

        client={job.client}
        handleInput={handleInputChange}
      />
      <label>Job Kategorie</label>
      <InputCategory
        categories={job.categories}
        handleInput={handleInputChange}
      />
      <label>Job Datum</label>
      <InputDate

        date={job.date}
        handleInput={handleInputChange}
      />
      <label>Job Uhrzeiten</label>
      <InputTime
        starttime={job.starttime}
        endtime={job.endtime}
        handleInput={handleInputChange}
      />
      <label>Jobadresse</label>
      <InputJobAddress
        jobcity={job.jobcity}
        jobstreet={job.jobstreet}
        jobplz={job.jobplz}
        jobstreetnumber={job.jobstreetnumber}
        handleInput={handleInputChange}
      />
      <label>Kontaktdaten vor Ort</label>
      <InputContact
        jobcontact={job.jobcontact}
        jobcontactphone={job.jobcontactphone}
        handleInput={handleInputChange}
      />
      <label>Stundenlohn</label>
      <InputHourRate
        type="text"
        name="hourrate"
        date={job.hourrate}
        handleInput={handleInputChange}
      />
      <label>Minimum Call</label>
      <InputMinCall
        type="text"
        name="mincall"
        date={job.mincall}
        handleInput={handleInputChange}
      />
      <label>Führerschein nötig?</label>
      <InputDrivingLicense
        type="text"
        name="drivinglicense"
        date={job.drivinglicense}
        handleInput={handleInputChange}
      />
      <label>Wähle die Hands aus, die diesen Job erhalten sollten</label>
      <InputSendJobTo
        type="text"
        name="sendJobTo"
        sendjobto={job.sendjobto}
        handleInput={handleInputChange}
      />
      <UploadJobProof />
      <button type="Submit">Job einstellen</button>
    </form>
  );
};

export default AddJobForm;
