import React from "react";
import styled from "styled-components";

const Fragment = styled.input`
  margin: 10px;
`;
const InputJobPlz = props => {
  return (
    <Fragment
      type="text"
      name="zipcode"
      value={props.jobzipcode}
      onChange={props.handleInput}
    />
  );
};

export default InputJobPlz;
