import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #aaa;
  opacity: 0.9;
  border: 2px solid #aaa;
  padding: 4px 15px;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  margin-bottom: 25px;
  color: white;

  @media screen and (min-width: 601px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 801px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 1111px) {
    font-size: 1.2em;
  }
`;
const KontoEinlegenButton = () => {
  return <Button>Jetzt Konto Einlegen</Button>;
};

export default KontoEinlegenButton;
