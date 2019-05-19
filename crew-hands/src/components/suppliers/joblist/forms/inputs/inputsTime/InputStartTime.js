import React from "react";
import styled from "styled-components";

const Fragment = styled.input`
  margin: 10px;
`;
const InputStartTime = props => {
  return (
    <Fragment
      type="time"
      name="starttime"
      value={props.starttime}
      onChange={props.handleInput}
    />
  );
};

export default InputStartTime;
