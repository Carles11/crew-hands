import React from "react";
import Select from "react-select";
// import makeAnimated from "react-select/lib/animated";


const InputDrivingLicense = props => {
  const options = [
    { value: props.drivingPkw, label: "PKW" },
    { value: props.drivingLkw7, label: "LKW bis 7,5T" },
    { value: props.drivingLkw14, label: "LKW bis 14T" },
    { value: props.drivingStappler, label: "Stappler" },
    { value: props.drivingSteiger, label: "Steiger" }
  ];
  return (
    <Select
      closeMenuOnSelect={false}
      defaultValue=""
      isMulti
      options={options}
      value={options.value}
    />
  );
};

export default InputDrivingLicense;
