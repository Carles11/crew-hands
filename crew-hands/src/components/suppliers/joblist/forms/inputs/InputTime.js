import React from "react";
import styled from "styled-components";

import InputStartTime from "./inputsTime/InputStartTime";
import InputEndTime from "./inputsTime/InputEndTime";

const Fragment = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputTime = props => {
  return (
    <Fragment>
      <legend>Von</legend>
      <InputStartTime
        starttime={props.starttime}
        handleInput={props.handleInput}
      />
      <legend>bis</legend>
      <InputEndTime endtime={props.endtime} handleInput={props.handleInput} />
    </Fragment>
  );
};

export default InputTime;
