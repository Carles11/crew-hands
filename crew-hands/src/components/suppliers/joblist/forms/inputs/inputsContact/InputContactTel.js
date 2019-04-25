import React from "react";
import styled from "styled-components";

const Fragment = styled.input`
  margin: 10px;
`;
const InputContactTel = props => {
  return (
    <Fragment
      type="number"
      name="contactTel"
      value={props.contactTel}
      onChange={props.handleInput}
    />
  );
};

export default InputContactTel;
