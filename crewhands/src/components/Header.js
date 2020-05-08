import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0a6284;
  @media screen and (min-width: 601px) {
    font-size: 1.3em;
    padding-left: 170px;
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
const Logo = styled(Link)`
  text-decoration: none;
  color: #0a6284;
`;

const Header = () => {
  return (
    <Section>
      <Logo to="./">
        <Title>Crew-Hands</Title>
      </Logo>
      <Moto>Best stage-hands organizer</Moto>
    </Section>
  );
};

export default Header;
