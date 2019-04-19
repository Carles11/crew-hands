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
const Categories = () => {
  return (
    <div>
      <SubTitle>Welche Jobs bietet deine Firma an?</SubTitle>
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
          <Label>Video-, Mediatechnik</Label>
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
        <Buttons>
          <Label>Messebau</Label>
          <SliderButton />
        </Buttons>
      </Sliders>
    </div>
  );
};

export default Categories;
