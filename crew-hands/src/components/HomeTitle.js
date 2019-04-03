import React from "react";
import styled from "styled-components";

const Paragraph = styled.h3`
  font-family: "Raleway", sans-serif;
  color: white;
  padding-left: 10px;
  padding-top: 150px;
  padding-bottom: 50px;
  text-align: center;
  text-justify: inter-word;
  max-width: 95%;
`;
const TextBlocks = styled.section`
  max-width: 95%;
  margin: auto;
`;

const HomeTitle = () => {
  return (
    <TextBlocks>
      <Paragraph>
        Crew-Hands App hilft dir bei der Organisation aller Jobs für deiner
        Crew.
      </Paragraph>
    </TextBlocks>
  );
};

export default HomeTitle;
