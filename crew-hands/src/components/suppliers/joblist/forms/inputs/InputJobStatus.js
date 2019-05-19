import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";

const options = [
  { name: "jobstatus", value: "bestätigt", label: "Bestätigt" },
  { name: "jobstatus", value: "anfrage", label: "Anfrage" }
];

const InputJobStatus = props => {
  const [selectedOpt, setSelectedOpt] = useState("");

  const handleInputStatusChange = selectedOpt => {
    debugger
    setSelectedOpt({ ...selectedOpt, selectedOpt });
    debugger
    props.handleInput(selectedOpt)
  };

  return (

    <Select
      closeMenuOnSelect={false}
      components={makeAnimated()}
      defaultValue=""
      isMulti
      options={options}
      value={selectedOpt}
      onChange={handleInputStatusChange}

    />

  );
};

export default InputJobStatus;
