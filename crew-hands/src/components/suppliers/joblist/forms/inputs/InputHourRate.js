import React from "react";

const InputHourRate = props => {
  return (
    <input
      type="number"
      name="hourRate"
      value={props.hourRate}
      onChange={props.handleInput}
    />
  );
};

export default InputHourRate;
