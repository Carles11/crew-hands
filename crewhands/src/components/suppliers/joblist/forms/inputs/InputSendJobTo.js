import React from "react";

const InputSendJobTo = props => {
  return (
    <input
      type="text"
      name="sendJobTo"
      value={props.sendJobTo}
      onChange={props.handleInput}
    />
  );
};

export default InputSendJobTo;
