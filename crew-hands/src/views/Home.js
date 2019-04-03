import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import HomeTitle from "../components/HomeTitle";
import HomeButtons from "../components/HomeButtons";
import Footer from "../components/Footer";
import img from "../assets/images/theater-truss.jpg";
import imgWide from "../assets/images/back-stage.jpg";
import WhatIsCrewHands from "../components/WhatIsCrewHands";
import HowItWorks from "../components/HowItWorks";

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
  @media only screen and (min. width: 1011px) {
    background-image: url(${imgWide});
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
      <Footer />
    </div>
  );
};

export default Home;
