import React from "react";

const InputDate = props => {
  return (
    <input
      type="date"
      name="date"
      value={props.date.toString()}
      onChange={props.handleInput}
    />
  );
};

export default InputDate;
