import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";

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
      closeMenuOnSelect={false}
      components={makeAnimated()}
      defaultValue=""
      isMulti
      options={options}
      value={options.value}
    />
  );
};

export default InputDrivingLicense;
