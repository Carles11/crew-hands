import React from "react";
import styled from "styled-components";

const Section = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;

  margin-top: 0;
  margin-bottom: 0;
  list-style: none;

  width: 100%;
  z-index: 1;
  background-color: silber;
  color: #0a6285;
  height: 80px;
  @media only screen and (min-width: 601px) {
    height: 100px;
    font-size: 1.2em;
  }
  @media only screen and (min-width: 801px) {
    height: 140px;
    font-size: 1.3em;
  }
  @media only screen and (min-width: 1111px) {
    height: 180px;
    font-size: 1.4em;
  }
`;
const FooterItem = styled.li`
  align-self: center;
  margin-bottom: 0;
  padding-bottom: 0;
  padding-left: 2%;
`;

const Footer = () => {
  return (
    <Section>
      <FooterItem>Datenschutzerklärung</FooterItem>
      <FooterItem>Impressum</FooterItem>
      <FooterItem>&copy; CriX Design</FooterItem>
    </Section>
  );
};

export default Footer;
