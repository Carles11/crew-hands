import React from "react";

const InputMinCall = props => {
  return (
    <input
      type="number"
      name="mincall"
      value={props.mincall}
      onChange={props.handleInput}
    />
  );
};

export default InputMinCall;
