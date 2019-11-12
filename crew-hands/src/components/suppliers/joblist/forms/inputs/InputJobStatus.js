import React, { useState } from "react";
import Select from "react-select";


const InputJobStatus = props => {
  const [selectedOpt, setSelectedOpt] = useState("");
  
  const handleInputStatusChange = selectedOpt => {
    setSelectedOpt({ ...selectedOpt, selectedOpt });
    props.handleInput(selectedOpt)
  };
  
  const options = [
    { name: "jobstatusconfirmed", value: true, label: "Bestätigt" },
    { name: "jobstatuscancelled", value: true, label: "Abgesagt" },
    { name: "jobstatuspendent", value: true, label: "Anfrage" }
  ];
  return (

    <Select
      closeMenuOnSelect={false}
      defaultValue=""
      options={options}
      value={selectedOpt.value}
      name={selectedOpt.name}
      onChange={handleInputStatusChange}

    />

  );
};

export default InputJobStatus;
