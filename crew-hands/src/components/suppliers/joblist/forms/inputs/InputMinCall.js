import React from "react";

const InputMinCall = props => {
  return (
    <input
      type="number"
      name="minCall"
      value={props.minCall}
      onChange={props.handleInput}
    />
  );
};

export default InputMinCall;
