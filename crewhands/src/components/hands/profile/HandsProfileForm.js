import React from "react";
import styled from "styled-components";

import Categories from "./Categories";
import InputsGroup from "./InputsGroup";
import DrivingLicense from "./DrivingLicense";
import Insurance from "./Insurance";
import UploadFiles from "./UploadFiles";
import UploadAvatar from "./UploadAvatar";
import InputSubmitButton from "./inputs/InputSubmitButton";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-content: space-between;

  @media only screen and (min-width: 601px) {
    padding-left: 140px;
  }
`;

const HandsProfileForm = () => {
  return (
    <Section>
      <InputsGroup />
      <UploadAvatar />
      <Categories />
      <DrivingLicense />
      <Insurance />
      <UploadFiles />
      <InputSubmitButton />
    </Section>
  );
};

export default HandsProfileForm;
