import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";

const options = [
  { value: "bestätigt", label: "Bestätigt" },
  { value: "anfrage", label: "Anfrage" }
];

const InputJobStatus = props => {
  return (
    <Select
      closeMenuOnSelect={false}
      components={makeAnimated()}
      defaultValue=""

      options={options}
    />
  );
};

export default InputJobStatus;
