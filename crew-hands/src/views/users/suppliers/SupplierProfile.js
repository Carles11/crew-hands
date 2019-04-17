import React from "react";
import styled from "styled-components";

import Header from "../../../components/Header";
import SuppliersNavigation from "../../../components/suppliers/navigation/SuppliersNavigation";
import SuppliersProfileForm from "../../../components/suppliers/profile/SuppliersProfileForm";

const Section = styled.section`
  font-family: "Raleway", sans-serif;
  padding-left: 20px;
`;

const SupplierProfile = () => {
  return (
    <div>
      <Header />
      <Section>
        <SuppliersNavigation />
        <SuppliersProfileForm />
      </Section>
    </div>
  );
};

export default SupplierProfile;
