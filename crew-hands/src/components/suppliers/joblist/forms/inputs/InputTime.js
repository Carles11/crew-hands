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
    <section>
      <Fragment>
        <legend>Von</legend>
        <InputStartTime
          type="time"
          name="startTime"
          startTime={props.startTime}
          handleInput={props.handleInputChange}
        />
        <legend>bis</legend>
        <InputEndTime
          type="time"
          name="startTime"
          startTime={props.endTime}
          handleInput={props.handleInputChange}
        />
      </Fragment>
    </section>
  );
};

export default InputTime;
