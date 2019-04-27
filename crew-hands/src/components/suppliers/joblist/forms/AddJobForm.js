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
    category: [
      "Tontechnik",
      "lichtTechnik",
      "rigging",
      "stageHand",
      "videoTechnik",
      "messeBau"
    ],
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
  const [job, setJob] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!job.client || !job.category) return;

        props.addJob(job);
        setJob(initialFormState);
      }}
    >
      <label>Kunde</label>
      <InputClientName

        client={job.client}
        handleInput={handleInputChange}
      />
      <label>Job Kategorie</label>
      <InputCategory

        categories={job.category}
        handleInput={handleInputChange}
      />
      <label>Job Datum</label>
      <InputDate

        date={job.date}
        handleInput={handleInputChange}
      />
      <label>Job Uhrzeiten</label>
      <InputTime
        startTime={job.startTime}
        endTime={job.endTime}
        handleInput={handleInputChange}
      />
      <label>Jobadresse</label>
      <InputJobAddress
        jobCity={job.jobCity}
        jobStreet={job.jobStreet}
        jobPlz={job.jobPlz}
        jobStreetNr={job.jobStreetNr}
        handleInput={handleInputChange}
      />
      <label>Kontaktdaten vor Ort</label>
      <InputContact
        jobContact={job.jobCjobContactity}
        jobContactTel={job.jobContactTel}
        handleInput={handleInputChange}
      />
      <label>Stundenlohn</label>
      <InputHourRate
        type="text"
        name="hourRate"
        date={job.hourRate}
        handleInput={handleInputChange}
      />
      <label>Minimum Call</label>
      <InputMinCall
        type="text"
        name="minCall"
        date={job.minCall}
        handleInput={handleInputChange}
      />
      <label>Führerschein nötig?</label>
      <InputDrivingLicense
        type="select"
        name="drivingLicense"
        date={job.drivingLicense}
        handleInput={handleInputChange}
      />
      <label>Job Status</label>
      <InputJobStatus
        type="select"
        name="jobStatus"
        date={job.jobStatus}
        handleInput={handleInputChange}
      />{" "}
      <label>Wähle die Hands aus, die diesen Job erhalten sollten</label>
      <InputSendJobTo
        type="text"
        name="sendJobTo"
        sendJobTo={job.sendJobTo}
        handleInput={handleInputChange}
      />
      <UploadJobProof />
      <button>Job einstellen</button>
    </form>
  );
};

export default AddJobForm;
