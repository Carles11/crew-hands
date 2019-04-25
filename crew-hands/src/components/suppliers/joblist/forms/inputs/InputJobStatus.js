import React from "react";
import Select from "react-select";

const options = [
  { value: "bestätigt", label: "Bestätigt" },
  { value: "anfrage", label: "Anfrage" }
];

const InputJobStatus = props => {
  return (
    <Select
      options={options}
      type="text"
      name="jobStatus"
      value={props.jobStatus}
      onChange={props.handleInput}
    />
  );
};

export default InputJobStatus;
