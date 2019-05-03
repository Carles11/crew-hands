import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";


const InputCategory = props => {
  console.log(props)
  const options = [
    {
      name: "TonTechnik",
      value: `${props.categories[0]}`,
      label: "Tontechnik"
    },
    {
      name: "lichtTechnik",
      value: `${props.categories[1]}`,
      label: "Lichttechnik"
    },
    {
      name: "rigging",
      value: `${props.categories[2]}`,
      label: "Rigging"
    },
    {
      name: "stageHand",
      value: `${props.categories[3]}`,
      label: "Stage-Hand"
    },
    {
      name: "videoTechnik",
      value: `${props.categories[4]}`,
      label: "Videotechnik"
    },
    {
      name: "messeBau",
      value: `${props.categories[5]}`,
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
