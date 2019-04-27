import React from "react";
import styled from "styled-components";

import SliderButton from "./SliderButton";

const SubTitle = styled.h2`
  font-family: "Raleway", sans - serif;
  padding-left: 20px;
  padding-top: 40px;
`;

const licenses = ["Pkw", "Stappler", "Steiger", "Lkw bis 7,5T.", "Lkw bis 12T.", "Eigenes Auto?"]
const DrivingLicense = () => {
  return (
    <div>
      <SubTitle>Was du fahren kannst:</SubTitle>


      {licenses.map(item => (

        <SliderButton
          label={item}
        />

      ))}

    </div>
  );
};

export default DrivingLicense;
