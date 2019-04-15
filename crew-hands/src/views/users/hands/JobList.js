import React from "react";
import styled from "styled-components";

import Header from "../../../components/Header";
import HandsNavigation from "../../../components/hands/navigation/HandsNavigation";
import HandsJobListe from "../../../components/hands/joblist/HandsJobListe";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  @media only screen and (min-width: 601px) {
    padding-left: 170px;
  }
`;
const Section = styled.section`
  font-family: "Raleway", sans-serif;
`;
const JobList = () => {
  return (
    <MainDiv>
      <Header />
      <Section>
        <HandsNavigation />
        <HandsJobListe />
      </Section>
    </MainDiv>
  );
};

export default JobList;
