import React from "react";
import styled from "styled-components";

import Header from "../../../components/Header";
import HandsProfileNavigation from "../../../components/hands/HandsProfileNavigation";
import HandsProfileForm from "../../../components/hands/HandsProfileForm";

const Section = styled.section`
  font-family: "Raleway", sans-serif;
`;
const Title = styled.h1`
  padding-left: 20px;
`;
const MainDiv = styled.div`
  padding-left: 20px;
`;
const HandProfile = () => {
  return (
    <MainDiv>
      <Header />
      <Section>
        <HandsProfileNavigation />
        <Title>Profil</Title>
        <HandsProfileForm />
      </Section>
    </MainDiv>
  );
};

export default HandProfile;
