import React from "react";
import styled from "styled-components";

const Fragment = styled.input`
  margin: 10px;
`;
const InputStartTime = props => {
  return (
    <Fragment
      type="time"
      name="startTime"
      value={props.startTime}
      onChange={props.handleInput}
    />
  );
};

export default InputStartTime;
