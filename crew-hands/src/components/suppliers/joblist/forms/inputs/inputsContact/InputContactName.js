import React from "react";
import styled from "styled-components";

const Fragment = styled.input`
  margin: 10px;
`;
const InputContactName = props => {
  return (
    <Fragment
      type="text"
      name="jobcontact"
      value={props.jobcontact}
      onChange={props.handleInput}
    />
  );
};

export default InputContactName;
