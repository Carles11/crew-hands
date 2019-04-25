import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";

const InputCategory = props => {
  const options = [
    {
      name: "tontechnik",
      value: "Tontechnik",
      label: "Tontechnik"
    },
    {
      name: "lichttechnik",
      value: `${props.lichtTechnik}`,
      label: "Lichttechnik"
    },
    {
      name: "messeBau",
      value: `${props.messeBau}`,
      label: "Messebau"
    },
    {
      name: "rigging",
      value: `${props.lichtTechnik}`,
      label: "Rigging"
    },
    {
      name: "stageHand",
      value: `${props.stageHand}`,
      label: "StageHand"
    },

    {
      name: "videoTechnik",
      value: `${props.lichtTechnik}`,
      label: "Videotechnik"
    }
  ];
  return (
    <Select
      closeMenuOnSelect={false}
      components={makeAnimated()}
      defaultValue={[options[4]]}
      isMulti
      options={options}
      type="text"
      onChange={props.handleInput}
    />
  );
};

export default InputCategory;
