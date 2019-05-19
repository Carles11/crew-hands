import React from "react";

const InputHourRate = props => {
  return (
    <input
      type="number"
      name="hourrate"
      value={props.hourrate}
      onChange={props.handleInput}
    />
  );
};

export default InputHourRate;
