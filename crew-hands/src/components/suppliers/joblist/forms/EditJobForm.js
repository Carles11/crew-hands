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
  const optionsCategory = [
    {
      name: "tontechnik",
      value: "Tonttechniks",
      label: "Tonttttechnik"
    },
    {
      name: "lichttechnik",
      value: "Lichttechniks",
      label: "Lichttechnik"
    },
    {
      name: "rigging",
      value: "Riggings",
      label: "Rigging"
    },
    {
      name: "stagehand",
      value: "Stage-Hands",
      label: "Stage-Hand"
    },
    {
      name: "videotechnik",
      value: "Videotechniks",
      label: "Videotechnik"
    },
    {
      name: "messeBau",
      value: "messebaus",
      label: "Messebau"
    }];
  const optionsStatus = [
    { value: "bestätigt", label: "Bestätigt" },
    { value: "anfrage", label: "Anfrage" },
    { value: "abgesagt", label: "Abgesagt" }
  ];
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
        props.updateJob(job.id, job);
      }}
    >
      <label>Job Status</label>
      <Select
        closeMenuOnSelect={false}
        components={makeAnimated()}
        defaultValue=""
        isMulti
        options={optionsStatus}
        value={optionsStatus.value}
        onChange={handleInputChange}

      />
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
        options={optionsCategory}
        value={optionsCategory.value}
        onChange={handleInputChange}

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
          name="starttime"
          value={job.starttime}
          onChange={handleInputChange}
        />
        <legend>bis</legend>
        <Input
          type="number"
          name="endtime"
          value={job.endtime}
          onChange={handleInputChange}
        />
      </Fragment>
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
        jobcontact={job.obcontact}
        jobcontactphone={job.jobcontactphone}
        handleInput={handleInputChange}
      />
      <label>Stundenlohn</label>
      <input
        type="number"
        name="hourrate"
        value={job.hourrate}
        onChange={handleInputChange}
      />
      <label>Minimum Call</label>
      <input
        type="number"
        name="mincall"
        value={job.mincall}
        onChange={handleInputChange}
      />
      <label>Führerschein nötig?</label>
      <Select
        closeMenuOnSelect={false}
        components={makeAnimated()}
        defaultValue=""
        isMulti
        options={optionsDrivingLicense}
        value={optionsDrivingLicense.value}
        onChange={handleInputChange}

      />


      <label>Wähle die Hands aus, die diesen Job erhalten sollten</label>
      <InputSendJobTo
        type="text"
        name="sendjobto"
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
