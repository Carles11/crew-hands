import React from "react";
import styled from "styled-components";

import SliderButton from "./SliderButton";


const SubTitle = styled.h2`
  font-family: "Raleway", sans - serif;
  padding-left: 20px;
  padding-top: 40px;
`;

const insurances = ["Betreibshaftpflicht", "Krankenversicherung"]
const Insurance = () => {
  return (
    <div>
      <SubTitle>Wie du versichert bist:</SubTitle>
      {insurances.map(item => (
        <SliderButton label={item} />
      ))}
    </div>
  );
};

export default Insurance;
