import React from "react";

import styled from "styled-components";

import Header from "../../../components/Header";
import SuppliersNavigation from "../../../components/suppliers/navigation/SuppliersNavigation";
import JobList from "../../../components/suppliers/joblist/JobList";

const Section = styled.section`
  font-family: "Raleway", sans-serif;
  padding-left: 20px;
  min-height: 80vh;

  @media only screen and (min-width: 600px) {
    padding-left: 180px;
  }
`;

const SuppliersJobList = () => {
  return (
    <div>
      <Header />
      <Section>
        <SuppliersNavigation />
        <JobList />
      </Section>
    </div>
  );
};
export default SuppliersJobList;
