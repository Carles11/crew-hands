import React from "react";
import styled from "styled-components";

import InputsGroup from "./InputsGroup";
import Insurance from "./Insurance";
import UploadFiles from "./UploadFiles";
import UploadLogo from "./UploadLogo";
import SuppliersNavigation from ".././navigation/SuppliersNavigation";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-content: space-between;

  @media only screen and (min-width: 601px) {
    padding-left: 140px;
  }
`;

const SuppliersProfileForm = () => {
  return (
      <Section>
        <SuppliersNavigation />

        <InputsGroup />
        <UploadLogo />
        <Insurance />
        <UploadFiles />
      </Section>
  );
};

export default SuppliersProfileForm;
