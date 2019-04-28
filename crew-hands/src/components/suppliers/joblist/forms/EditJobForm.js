import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";

import InputJobAddress from "./inputs/InputJobAddress";
import InputContact from "./inputs/InputContact";
import InputSendJobTo from "./inputs/InputSendJobTo";
import UploadJobProof from "./inputs/UploadJobProof";

const Fragment = styled.div`
  display: flex;
  flex-direction: row;
`;
const Input = styled.input`
  margin: 10px;
`;

const EditJobForm = props => {
  const [job, setJob] = useState(props.currentJob);

  useEffect(() => {
    setJob(props.currentJob);
  }, [props]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };
  const options = [
    {
      name: "TonTechnik",
      value: `${props.categories[0]}`,
      label: "Tontechnik"
    },
    {
      name: "lichtTechnik",
      value: `${props.categories[1]}`,
      label: "Lichttechnik"
    },
    {
      name: "rigging",
      value: `${props.categories[2]}`,
      label: "Rigging"
    },
    {
      name: "stageHand",
      value: `${props.categories[3]}`,
      label: "Stage-Hand"
    },
    {
      name: "videoTechnik",
      value: `${props.categories[4]}`,
      label: "Videotechnik"
    },
    {
      name: "messeBau",
      value: `${props.categories[5]}`,
      label: "Messebau"
    }
  ]; return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.updateJob(job.id, job);
      }}
    >
      <label>Kunde</label>
      <input
        type="text"
        name="client"
        value={job.client}
        onChange={handleInputChange}
      />
      <label>Kategorie</label>

      <Select
        closeMenuOnSelect={false}
        components={makeAnimated()}
        defaultValue=""
        isMulti
        options={options}
      />

      <label>Job Datum</label>
      <input
        type="date"
        name="date"
        value={job.date}
        onChange={handleInputChange}
      />
      <label>Job Uhrzeiten</label>
      <Fragment>
        <legend>Von</legend>
        <Input
          type="number"
          name="startTime"
          value={job.startTime}
          onChange={handleInputChange}
        />
        <legend>bis</legend>
        <Input
          type="number"
          name="startTime"
          value={job.endTime}
          onChange={handleInputChange}
        />
      </Fragment>
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
      <input
        type="number"
        name="hourRate"
        value={job.hourRate}
        onChange={handleInputChange}
      />
      <label>Minimum Call</label>
      <input
        type="number"
        name="minCall"
        value={job.minCall}
        onChange={handleInputChange}
      />
      <label>Führerschein nötig?</label>
      <input
        type="select"
        name="drivingLicense"
        value={job.drivingLicense}
        onChange={handleInputChange}
      />
      <label>Job Status</label>
      <input
        type="select"
        name="jobStatus"
        value={job.jobStatus}
        onChange={handleInputChange}
      />
      <label>Wähle die Hands aus, die diesen Job erhalten sollten</label>
      <InputSendJobTo
        type="text"
        name="sendJobTo"
        sendJobTo={job.sendJobTo}
        handleInput={handleInputChange}
      />
      <UploadJobProof />
      <button>Ändern</button>
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
