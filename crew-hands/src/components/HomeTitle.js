import React from "react";
import styled from "styled-components";

const TextBlock = styled.section`
  max-width: 95%;
  margin: auto;
`;
const Paragraph = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 1.3em;
  color: white;
  padding-left: 10px;
  padding-top: 150px;
  padding-bottom: 100px;
  text-align: center;
  text-justify: inter-word;
  max-width: 95%;

  @media screen and (min-width: 601px) {
    font-size: 1.7em;
  }
  @media screen and (min-width: 801px) {
    font-size: 2em;
  }
  @media screen and (min-width: 1111px) {
    font-size: 3em;
  }
`;

const HomeTitle = () => {
  return (
    <TextBlock>
      <Paragraph>
        Crew-Hands App hilft dir bei der Organisation alle deiner Stage-Hand und
        Technikern jobs.
      </Paragraph>
    </TextBlock>
  );
};

export default HomeTitle;
