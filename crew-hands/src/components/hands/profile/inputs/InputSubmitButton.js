import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-left: 15px;
  cursor: pointer;
`;
class InputSubmitButton extends React.Component {
  render() {
    return <Button>Speichern</Button>;
  }
}

export default InputSubmitButton;
