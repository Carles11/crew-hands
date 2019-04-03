import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Buttons = styled.section`
  display: flex;
  justify-content: space-around;
  opacity: 0.8;
  align-items: center;
  padding-left: 11%;
  padding-right: 11%;
  padding-bottom: 25%;
`;
const ButtonL = styled.button`
  border: 1 px solid;
  border-color: white;
  border-radius: 50px;
  background-color: #0a6285;
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: white;
  height: 100px;
  width: 100px;
  cursor: pointer;
  }
  @media screen and (min-width: 801px) {
    border-radius: 200px;
    font-size: 1.8em;
    width: 300px;
    height: 300px;
  }
  @media screen and (min-width: 1111px) {
    font-size: 2em;
    width: 350px;
    height: 350px;

  }
`;
const ButtonR = styled.button`
  border: 1 px solid;
  border-color: #0a6285;
  border-radius: 50px;
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-weight: bold;
  background-color: white;
  color: #0a6285;
  width: 100px;
  height: 100px;
  cursor: pointer;

  @media screen and (min-width: 601px) {
    border-radius: 100px;
    font-size: 1.3em;
    width: 200px;
    height: 200px;
  }
  @media screen and (min-width: 801px) {
    border-radius: 200px;
    font-size: 1.8em;
    width: 300px;
    height: 300px;
  }
  @media screen and (min-width: 1111px) {
    font-size: 2em;
    width: 350px;
    height: 350px;
  }
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
