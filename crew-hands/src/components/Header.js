import React from "react";
import styled from "styled-components";

const Section = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0a6284;
  @media screen and (min-width: 601px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 801px) {
    font-size: 1.8em;
  }
  @media screen and (min-width: 1111px) {
    font-size: 2em;
  }
`;
const Title = styled.h2`
  font-family: "Raleway", sans-serif;
  padding-left: 15px;
`;
const Moto = styled.h4`
  font-family: "Lobster", cursive;
  font-weight: 100;
  padding-right: 15px;
`;

const Header = () => {
  return (
    <Section>
      <Title>Crew-Hands</Title>
      <Moto>Best stage-hands organizer</Moto>
    </Section>
  );
};

export default Header;
