import React from "react";
import styled from "styled-components";

import Categories from "./Categories";
import InputsGroup from "./InputsGroup";
import Insurance from "./Insurance";
import UploadFiles from "./UploadFiles";
import UploadLogo from "./UploadLogo";

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
      <InputsGroup />
      <UploadLogo />
      <Categories />
      <Insurance />
      <UploadFiles />
    </Section>
  );
};

export default SuppliersProfileForm;
