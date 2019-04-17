import React from "react";
import styled from "styled-components";

import Header from "../../../components/Header";
import HandsNavigation from "../../../components/hands/navigation/HandsNavigation";

const Section = styled.section`
  font-family: "Raleway", sans-serif;
  padding-left: 20px;
  @media only screen and (min-width: 600px) {
    padding-left: 180px;
  }
`;

const HandsJobList = () => {
  return (
    <div>
      <Header />
      <Section>
        <HandsNavigation />
        <h2>Hands Job List</h2>
      </Section>
    </div>
  );
};
export default HandsJobList;
