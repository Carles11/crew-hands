import React from "react";
import styled from "styled-components";

import SliderButton from "./SliderButton";


const SubTitle = styled.h2`
  font-family: "Raleway", sans - serif;
  padding-left: 20px;
  padding-top: 40px;
`;


const categories = ["Tontechnik", "Lichttechnik", "Rigging", "Video-, Mediatechnik", "Messebau", "Stage-hand"]

const Categories = () => {
  return (
    <div>
      <SubTitle>Wähle, wo du gut bist:</SubTitle>
      {categories.map(item => (
        <SliderButton
          label={item} />
      ))}
    </div>

  )
}

export default Categories;