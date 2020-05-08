import React from "react";

const InputClientName = props => {
  return (
    <input
      type="text"
      name="client"
      value={props.client}
      onChange={props.handleInput}
    />
  );
};

export default InputClientName;
