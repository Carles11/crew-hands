import React, { useState, useEffect } from "react";

import InputClientName from "./inputs/InputClientName";
import InputJobTitle from "./inputs/InputJobTitle"
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


const EditJobForm = props => {
  const [job, setJob] = useState(props.currentJob);

  useEffect(() => {
    setJob(props.currentJob);
  }, [props.currentJob]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };
  
  const optionsDrivingLicense = [
    { value: "pkw", label: "PKW" },
    { value: "lkw 7.5T", label: "LKW bis 7,5T" },
    { value: "lkw 14T", label: "LKW bis 14T" },
    { value: "staplers", label: "Stappler" },
    { value: "lift", label: "Steiger" }
  ]
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.updateJob(job);
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
      <InputClientName
        client={job.client}
        handleInput={handleInputChange}
      />
      <label>Job Titel</label>
      <InputJobTitle
        jobtitle={job.jobtitle}
        handleInput={handleInputChange}
      />
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
      <InputHourRate
        type="text"
        name="hourrate"
        hourrate={job.hourrate}
        handleInput={handleInputChange}
      />
      <label>Minimum Call</label>
      <InputMinCall
        type="text"
        name="mincall"
        mincall={job.mincall}
        handleInput={handleInputChange}
      />
      <label>Führerschein nötig?</label>
      <InputDrivingLicense
        type="text"
        name="drivinglicense"
        date={job.drivinglicense}
        options={optionsDrivingLicense}
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
      <button type="submit">Ändern</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Abbrechen
      </button>
    </form >
  );
};

export default EditJobForm;
