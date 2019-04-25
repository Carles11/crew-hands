import React from "react";
import Select from "react-select";

const options = [
  { value: "pkw", label: "PKW" },
  { value: "lkw 7.5T", label: "LKW bis 7,5T" },
  { value: "lkw 14T", label: "LKW bis 14T" },

  { value: "staplers", label: "Stappler" },
  { value: "lift", label: "Steiger" }
];

const InputDrivingLicense = props => {
  return (
    <Select
      options={options}
      type="text"
      name="drivingLicense"
      value={props.drivingLicense}
      onChange={props.handleInput}
    />
  );
};

export default InputDrivingLicense;
