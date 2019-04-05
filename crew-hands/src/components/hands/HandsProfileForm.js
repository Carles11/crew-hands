import React from "react";
import styled from "styled-components";

import Categories from "./Categories";
import InputsGroup from "./InputsGroup";
import DrivingLicense from "./DrivingLicense";
import Insurance from "./Insurance";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  @media only screen and (min-width: 601px) {
    padding-left: 170px;
  }
`;

const HandsProfileForm = () => {
  return (
    <Form>
      <InputsGroup />
      <Categories />
      <DrivingLicense />
      <Insurance />
    </Form>
  );
};

export default HandsProfileForm;
