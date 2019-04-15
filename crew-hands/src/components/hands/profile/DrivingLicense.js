import React from "react";
import styled from "styled-components";

import SliderButton from "./SliderButton";

const Sliders = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-top: 40px;
`;
const SubTitle = styled.h2`
  font-family: "Raleway", sans - serif;
  padding-left: 20px;
  padding-top: 40px;
`;
const Label = styled.label`
  font-family: "Raleway", sans-serif;
  font-size: 1.1em;
  padding-right: 5px;
  padding-left: 15px;
`;
const Buttons = styled.div`
  display: flex;
`;
const DrivingLicense = () => {
  return (
    <div>
      <SubTitle>Was du fahren kannst:</SubTitle>

      <Sliders>
        <Buttons>
          <Label>Pkw</Label>
          <SliderButton />
        </Buttons>
        <Buttons>
          <Label>Lkw</Label>
          <SliderButton />
        </Buttons>
        <Buttons>
          <Label>Stappler</Label>
          <SliderButton />
        </Buttons>
        <Buttons>
          <Label>Steiger</Label>
          <SliderButton />
        </Buttons>
      </Sliders>
    </div>
  );
};

export default DrivingLicense;
