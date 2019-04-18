import React from "react";

import styled from "styled-components";

import Header from "../../../components/Header";
import SuppliersNavigation from "../../../components/suppliers/navigation/SuppliersNavigation";
import JobList from "./JobList";

const Section = styled.section`
  font-family: "Raleway", sans-serif;
  padding-left: 20px;
  min-height: 80vh;

  @media only screen and (min-width: 600px) {
    padding-left: 180px;
  }
`;
const Button = styled.button`
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 0.8em;
  background-color: #ffffff;
  border: 2px solid #0a6285;
  border-radius: 5px;
  color: #0a6285;
  cursor: pointer;
  padding: 4px 15px;
  opacity: 0.8;

  @media screen and (min-width: 601px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 801px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 1111px) {
    font-size: 1.2em;
  }
`;
const SuppliersJobList = () => {
  return (
    <div>
      <Header />
      <Section>
        <SuppliersNavigation />
        <h2>Suppliers Job List</h2>
        <Button>Neuen Job eintragen</Button> <JobList />
      </Section>
    </div>
  );
};
export default SuppliersJobList;
