import React from "react";
import styled from "styled-components";

import SliderGroup from "./SliderGroup";
import InputsGroup from "./InputsGroup";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HandsProfileForm = () => {
  return (
    <Form>
      <InputsGroup />
      <SliderGroup />
    </Form>
  );
};

export default HandsProfileForm;
