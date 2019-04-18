import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #ffffff;
  border: 2px solid #ffffff;
  color: #0a6285;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 0.8em;
  cursor: pointer;
  padding: 4px 15px;
  opacity: 0.8;

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
