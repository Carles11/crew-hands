import React from "react";
import styled from "styled-components";

import SliderButton from "./SliderButton";

const Sliders = styled.section`
  display: flex;
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
`;
const Buttons = styled.div`
  display: flex;
`;
const SliderGroup = () => {
  return (
    <div>
      <SubTitle>Wähle was du gut kannst:</SubTitle>

      <Sliders>
        <Buttons>
          <Label>Tontechnik</Label>
          <SliderButton />
        </Buttons>
        <Buttons>
          <Label>Lichttechnik</Label>
          <SliderButton />
        </Buttons>
        <Buttons>
          <Label>Rigging</Label>
          <SliderButton />
        </Buttons>
        <Buttons>
          <Label>Veranstaltungstechnik</Label>
          <SliderButton />
        </Buttons>
        <Buttons>
          <Label>Video, Media</Label>
          <SliderButton />
        </Buttons>
        <Buttons>
          <Label>Stage-hand, allrounder</Label>
          <SliderButton />
        </Buttons>
        <Buttons>
          <Label>Stage-hand</Label>
          <SliderButton />
        </Buttons>
      </Sliders>
    </div>
  );
};

export default SliderGroup;
