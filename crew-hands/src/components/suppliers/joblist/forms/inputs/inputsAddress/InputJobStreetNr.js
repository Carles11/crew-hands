import React from "react";
import styled from "styled-components";

const Fragment = styled.input`
  margin: 10px;
  max-width: 80px;
`;

const InputJobStreetNr = props => {
  return (
    <Fragment
      type="number"
      name="jobStreetNr"
      value={props.jobStreetNr}
      onChange={props.handleInput}
    />
  );
};

export default InputJobStreetNr;
