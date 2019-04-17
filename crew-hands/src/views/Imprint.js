import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Section = styled.section`
  font-family: "Raleway", sans-serif;
  padding-left: 20px;
  min-height: 80vh;

  @media only screen and (min-width: 600px) {
    padding-left: 180px;
  }
`;

const Imprint = () => {
  return (
    <div>
      <Header />
      <Section>
        <h2>Impressum</h2>
        <button>
          <Link to="/">Zürück</Link>
        </button>
      </Section>
    </div>
  );
};
export default Imprint;
