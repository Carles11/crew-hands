import React from "react";
import styled from "styled-components";

import Header from "../../../components/Header";
import HandsNavigation from "../../../components/hands/navigation/HandsNavigation";
import HandsProfileForm from "../../../components/hands/profile/HandsProfileForm";

const Section = styled.section`
  font-family: "Raleway", sans-serif;
`;
const MainDiv = styled.div`
  padding-left: 20px;
`;
const HandProfile = () => {
  return (
    <MainDiv>
      <Header />
      <Section>
        <HandsNavigation />
        <HandsProfileForm />
      </Section>
    </MainDiv>
  );
};

export default HandProfile;
