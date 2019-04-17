import React from "react";
import styled from "styled-components";

import Header from "../../../components/Header";
import HandsNavigation from "../../../components/hands/navigation/HandsNavigation";
import HandsProfileForm from "../../../components/hands/profile/HandsProfileForm";

const Section = styled.section`
  font-family: "Raleway", sans-serif;
  padding-left: 20px;
`;
const HandProfile = () => {
  return (
    <div>
      <Header />
      <Section>
        <HandsNavigation />
        <HandsProfileForm />
      </Section>
    </div>
  );
};

export default HandProfile;
