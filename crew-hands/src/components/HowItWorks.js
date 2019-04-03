import React from "react";
import styled from "styled-components";
import img from "../assets/images/theater-truss.jpg";

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
`;
const Title = styled.h3`
  padding-top: 25px;
  font-size: 18px;
`;
const Paragraph = styled.h4`
  font-size: 14px;
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
      <Title>HowItWorks</Title>
      <Paragraph>
        Als Crew-Director meldest du erst deine Firma von Technikern- und
        Stage-Handsvermittlung an. Nur du kannst Personal zu deine Crew
        einladen. Wenn sie die Einladung akzeptiern und sie schon ein teil
        deines Crews sind, kannst du anfangen Jobs hochzuladen. Wenn ein neuen
        Job bei dir eintritt, lädst du die Daten an und die von Dir angewählte
        Profis erhalten die Daten und Dokumente, die du geschickt hast. Alles im
        Griff. Jeder hat die gleiche Infos und du erstellst per Knopfdruck eine
        Liste mit Job Infos und alle Details von deine Crew, die du an deine
        Kunde mühelos schicken kannst. Er ist Glücklich, weil Ihr organisiert
        seid. Den Rest übernehmen deine Jungs.
      </Paragraph>
    </Section>
  );
};

export default HowItWorks;
