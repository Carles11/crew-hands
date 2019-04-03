import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Buttons = styled.section`
  display: flex;
  justify-content: space-around;
  opacity: 0.9;
  align-items: center;
`;
const ButtonL = styled.button`
  border: 1 px solid;
  border-color: #696969;
  border-radius: 50px;
  background-color: #0a6285;
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: white;
  height: 100px;
  width: 100px;
`;
const ButtonR = styled.button`
  border: 1 px solid;
  border-color: #696969;
  border-radius: 50px;
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-weight: bold;
  background-color: blanchedalmond;
  color: #0a6285;
  width: 100px;
  height: 100px;
`;

const HomeButtons = () => {
  return (
    <Buttons>
      <ButtonL>Ich bin Crew-Director </ButtonL>
      <div>
        <Link to="/hands-profile">
          <ButtonR>Ich bin Crew</ButtonR>
        </Link>
      </div>
    </Buttons>
  );
};

export default HomeButtons;
