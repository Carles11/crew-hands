import React from "react";
import styled from "styled-components";

const Fragment = styled.input`
  margin: 10px;
  min-width: 70%;
`;
const InputJobStreet = props => {
  return (
    <Fragment
      type="textarea"
      name="jobStreet"
      value={props.jobStreet}
      onChange={props.handleInput}
    />
  );
};

export default InputJobStreet;
