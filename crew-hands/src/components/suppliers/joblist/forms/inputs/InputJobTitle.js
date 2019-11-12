import React from "react";

const InputJobTitle = props => {
  return (
    <input
      type="text"
      name="jobtitle"
      value={props.jobtitle}
      onChange={props.handleInput}
    />
  );
};

export default InputJobTitle;
