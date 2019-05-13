/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styled from "styled-components";

import Header from "../../../components/Header";
import HandsNavigation from "../../../components/hands/navigation/HandsNavigation";

const Section = styled.section`
  font-family: "Raleway", sans-serif;
  padding-left: 20px;
  min-height: 80vh;

  @media only screen and (min-width: 600px) {
    padding-left: 180px;
  }
`;
const Button = styled.button`
  font-size:12px;
  max-width: 100px;
  position: relative;
`;
const SubSection = styled.section`
  display: flex;
  flex-direction: row;
`;

const HandsEinstellungen = () => {
  return (
    <div>
      <Header />
      <Section>
        <HandsNavigation />
        <h2>Stage-hand Einstellungen</h2>
          <label>Anmeldedaten</label>
        <SubSection>
          <legend>Username:</legend><legend>//this.state.userName</legend> <Button> Ändern</Button>
        </SubSection>
<SubSection>
  <legend>Password:</legend><legend>//this.state.password</legend> <Button> Ändern</Button>
          </SubSection>
 <SubSection>
  <legend>E-Mail:</legend><legend>//this.state.email</legend> <Button> Ändern</Button>
        </SubSection>
        <div>
          <label>Weitere Profiledaten</label>
          <button> Bearbeiten</button>
        </div>
      </Section>
    </div>
  );
};
export default HandsEinstellungen;
