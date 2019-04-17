import React from "react";

import styled from "styled-components";

import Header from "../../../components/Header";
import SuppliersNavigation from "../../../components/suppliers/navigation/SuppliersNavigation";

const Section = styled.section`
  font-family: "Raleway", sans-serif;
  padding-left: 180px;
`;
const SuppliersJobList = () => {
  return (
    <div>
      <Header />
      <Section>
        <SuppliersNavigation />
        <h2>Suppliers Job List</h2>
      </Section>
    </div>
  );
};
export default SuppliersJobList;
