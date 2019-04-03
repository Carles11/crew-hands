import React from "react";
import styled from "styled-components";
import img from "../assets/images/theater-truss.jpg";

import KontoEinlegenButton from "./KontoEinlegenButton";

const Section = styled.section`
  font-family: "Raleway", sans-serif;
  text-align: center;
  width: 100%;
  color: white;
  padding-top: 1px;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  background-attachment: scroll;
  background-attachment: fixed;
  height: 100%;

  @media screen and (min-width: 601px) {
    padding-top: 10px;
    padding-bottom: 8px;
    font-size: 1.3em;
  }
  @media screen and (min-width: 801px) {
    padding-top: 20px;
    padding-bottom: 17px;
    font-size: 1.5em;
  }
  @media screen and (min-width: 1111px) {
    padding-top: 40px;
    padding-bottom: 28px;
    font-size: 2em;
  }
`;
const Title = styled.h3`
  padding-top: 25px;
`;
const Paragraph = styled.h4`
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 25px;
  max-width: 95%;
  margin: auto;
  line-height: 1.7;
`;

const HowItWorks = () => {
  return (
    <Section>
      <Title>Wie es funktioniert</Title>
      <Paragraph>
        Als Crew-Director meldest du erst deine Firma von Technikern- und
        Stage-Handsvermittlung an. Nur du kannst Personal zu deinen Team
        einladen.
      </Paragraph>
      <Paragraph>
        Wenn sie die Einladung akzeptieren sind sie schon ein teil deines Teams.
        Wenn ein neuen Job bei dir eintrift wählst du die Profis, die das
        Angebot erhalten sollten. Ihnen allen stehen jetzt alle Daten und nötige
        Dokumente für den Job zur Hand.
      </Paragraph>
      <Paragraph>
        Jeder hat die gleiche Infos und du erstellst per Knopfdruck ein Dokument
        mit alle Job Infos und auch die Daten deine Crew, die du an deine Kunde
        mühelos weiterschicken kannst. Er ist Glücklich, weil Ihr organisiert
        seid. Du bist Glücklich, weil es stimmt. Den Rest übernehmen deine
        Jungs.
      </Paragraph>
      <KontoEinlegenButton />
    </Section>
  );
};

export default HowItWorks;
