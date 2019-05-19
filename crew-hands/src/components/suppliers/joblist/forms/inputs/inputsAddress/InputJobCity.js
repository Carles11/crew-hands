import React from "react";
import styled from "styled-components";

const Fragment = styled.input`
  margin: 10px;
`;
const InputJobCity = props => {
  return (
    <Fragment
      type="text"
      name="jobcity"
      value={props.jobcity}
      onChange={props.handleInput}
    />
  );
};

export default InputJobCity;
