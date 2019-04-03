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
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 25px;
  color: white;
`;
const KontoEinlegenButton = () => {
  return <Button>Jetzt Konto Einlegen</Button>;
};

export default KontoEinlegenButton;
