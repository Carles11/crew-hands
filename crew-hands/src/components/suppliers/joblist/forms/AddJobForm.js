import React, { useState } from "react";
import InputClientName from "./inputs/InputClientName";

const AddJobForm = props => {
  const initialFormState = { id: null, client: "", category: "" };
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
        type="text"
        name="client"
        client={job.client}
        handleInput={handleInputChange}
      />
      <label>Job Kategorie</label>
      <input
        type="text"
        name="category"
        value={job.category}
        onChange={handleInputChange}
      />
      <button>Job einstellen</button>
    </form>
  );
};

export default AddJobForm;
