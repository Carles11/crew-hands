import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";


const InputCategory = props => {
  console.log(props)
  const options = [
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
      name: "messebau",
      value: "messebaus",
      label: "Messebau"
    }
  ];
  return (
    <Select
      closeMenuOnSelect={false}
      components={makeAnimated()}
      defaultValue=""
      isMulti
      options={options}
      value={options.value}
    /* closeMenuOnSelect={false}
    components={makeAnimated()}
    defaultValue=""
    isMulti
    options={options}
    value={options.name}
    onChange={props.handleInput} */
    />
  );
};

export default InputCategory;
