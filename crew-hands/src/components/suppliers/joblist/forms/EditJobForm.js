import React, { useState, useEffect } from "react";

const EditJobForm = props => {
  const [job, setJob] = useState(props.currentJob);

  useEffect(() => {
    setJob(props.currentJob);
  }, [props]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  return (
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
      <input
        type="text"
        name="category"
        value={job.category}
        onChange={handleInputChange}
      />
      <button>Ändern</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Abbrechen
      </button>
    </form>
  );
};

export default EditJobForm;
