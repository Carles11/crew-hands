/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const SectionName = styled.section`
  font-family: "Raleway", sans-serif;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 0.3;

  @media only screen and (min-width: 600px) {
    padding-left: 180px;
    padding-right: 80px;
  }
`;
const Section = styled.section`
  font-family: "Raleway", sans-serif;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 0.3;
  min-height: 80vh;

  @media only screen and (min-width: 600px) {
    padding-left: 180px;
    padding-right: 80px;
  }
`;

const Title = styled.h2`
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and (min-width: 600px) {
    padding-left: 180px;
    padding-right: 80px;
  }
`;
const SubTitle = styled.h3`
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and (min-width: 600px) {
    padding-left: 180px;
    padding-right: 80px;
  }
`;

const Imprint = () => {
  return (
    <div>
      <Header />
      <Title>Impressum</Title>
      <SubTitle>CriX Web Development</SubTitle>

      <SectionName>
        <p>Carles del Río Francés</p>
        <p>Dipl. Audio Eng. (SAE)</p>
        <p>Eventmanager (IHK)</p>
        <p>Javascript Developer (BCS)</p>
      </SectionName>
      <br />
      <br />
      <br />
      <br />
      <Section>
        <p>Ust.Id.Nr.: DE275710941</p>
        <p>Elbestr. 15</p>
        <p>60329 Frankfurt am Main</p>
        <p>Tel.; 0049-1782871785</p>
        <p>
          E-Mail:
          <a href="mailto:carles@crix.design?subject=Kontakt aus crew-hands Seite">
            carles@crix.design
          </a>
        </p>
        <p>
          <a href="https://crix.design">CriX Web Development</a>
        </p>
        <p>Germany</p>
        <br />
        <br />
        <button className="button muted-button">
          <Link to="/">Zum Startseite</Link>
        </button>
      </Section>
    </div>
  );
};
export default Imprint;
