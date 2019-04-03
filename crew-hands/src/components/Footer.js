import React from "react";
import styled from "styled-components";

const Section = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  flex: 1;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  z-index: 1;
  background-color: #0a6285;
  color: white;
  height: 80px;
`;
const FooterItem = styled.li`
  justify-self: center;
  align-self: center;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Footer = () => {
  return (
    <Section>
      <FooterItem>Datenschutzerklärung</FooterItem>
      <FooterItem>Impressum</FooterItem>
      <FooterItem>CriX Design</FooterItem>
    </Section>
  );
};

export default Footer;
