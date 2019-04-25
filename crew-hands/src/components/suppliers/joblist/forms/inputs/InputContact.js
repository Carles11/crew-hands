import React from "react";
import styled from "styled-components";

import InputContactName from "./inputsContact/InputContactName";
import InputContactTel from "./inputsContact/InputContactTel";

const Fragment = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContact = props => {
  return (
    <section>
      <Fragment>
        <div>
          <legend>Name</legend>
          <InputContactName
            type="text"
            name="jobContact"
            jobContact={props.jobContact}
            handleInput={props.handleInput}
          />
        </div>
        <div>
          <legend>Telefonnummer</legend>
          <InputContactTel
            type="number"
            name="startTime"
            startTime={props.endTime}
            handleInput={props.handleInput}
          />
        </div>
      </Fragment>
    </section>
  );
};

export default InputContact;
