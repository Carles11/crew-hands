import React from "react";
import styled from "styled-components";

const Section = styled.section`
  font-family: "Raleway", sans-serif;
  text-align: center;
  width: 100%;
  background-color: #0a6285;
  opacity: 0.9;
  color: white;
  padding-top: 1px;

  @media screen and (min-width: 601px) {
    padding-top: 10px;
    padding-bottom: 8px;
    font-size: 1.3em;
  }
  @media screen and (min-width: 801px) {
    padding-top: 20px;
    padding-bottom: 17px;
    font-size: 1.7em;
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
  line-height: 1.7;
  padding-bottom: 25px;
  max-width: 95%;
  margin: auto;
`;

const WhatIsCrewHands = () => {
  return (
    <Section>
      <Title>
        {" "}
        Was Crew-Hands App <br />
        für dich macht
      </Title>
      <Paragraph>
        Lass der Professionalitätsruf deines Teams nicht wegen Missverständnisse
        bei der Organisation zu beeinflußen.
      </Paragraph>
      <Paragraph>
        Melde dich ein, nutze die App für 10 Jobs völlig kostenlos und bald wird
        die App dein best tool. Darüber sind wir aber sicher.
      </Paragraph>
      <Paragraph>
        Danach kostet es dir nur 1€ pro geposteten Job. Egal wie gross deine
        Crew.
      </Paragraph>
    </Section>
  );
};

export default WhatIsCrewHands;
