import React from "react";
import styled from "styled-components";

const Fragment = styled.input`
  margin: 10px;
`;
const InputEndTime = props => {
  return (
    <Fragment
      type="time"
      name="endtime"
      value={props.endtime}
      onChange={props.handleInput}
    />
  );
};

export default InputEndTime;
