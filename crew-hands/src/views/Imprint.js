/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Section = styled.section`
  font-family: "Raleway", sans-serif;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 80vh;

  @media only screen and (min-width: 600px) {
    padding-left: 180px;
    padding-right: 80px;
  }
`;
const Button = styled.button`
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 0.8em;
  background-color: #ffffff;
  border: 2px solid #0a6285;
  border-radius: 5px;
  color: #0a6285;
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
const Title = styled.h2`
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

      <Section>
        <h3>CriX Web Development</h3>
        <p>Carles del Río Francés</p>
        <p>Dipl. Audio Eng. (SAE)</p>
        <p>Eventmanager (IHK)</p>
        <p>Javascript Developer (BCS)</p>
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

        <Button>
          <Link to="/">Home</Link>
        </Button>
      </Section>
    </div>
  );
};
export default Imprint;
