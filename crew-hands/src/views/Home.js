import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import HomeTitle from "../components/home/HomeTitle";
import HomeButtons from "../components/home/HomeButtons";
import img from "../assets/images/theater-truss.jpg";
import wide from "../assets/images/stage-light.jpg";
import WhatIsCrewHands from "../components/home/WhatIsCrewHands";
import HowItWorks from "../components/home/HowItWorks";

const BgImage = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  background-attachment: scroll;
  background-attachment: fixed;
  height: auto;
  display: block;
  max-width: 100%;
  @media only screen and (min-width: 1101px) {
    background-position: top;

    background-image: url(${wide});
  }
`;

const Home = () => {
  return (
    <div>
      <Header />
      <BgImage>
        <HomeTitle />
        <HomeButtons />
      </BgImage>
      <WhatIsCrewHands />
      <HowItWorks />
    </div>
  );
};

export default Home;
