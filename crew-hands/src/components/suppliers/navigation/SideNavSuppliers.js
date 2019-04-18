import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SuppliersCrossMenu from "./SuppliersCrossMenu";

const SideNav = styled.nav`
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 150px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #0a6285;
  overflow-x: hidden;
  padding-top: 150px;
  padding-left: 20px;
`;
const MenuItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2em;
  display: block;
  margin: 0.5em 0;
  &:hover {
    text-decoration: underline;
    transition: 2s ease-in;
  }
  &.active {
    color: red;
  }
`;
const Cross = styled.div`
  @media only screen and (min-width: 601px) {
    visibility: hidden;
  }
`;

class SideNavSuppliers extends React.Component {
  render() {
    return (
      <SideNav>
        <Cross>
          <SuppliersCrossMenu handleClose={this.props.handleClose} />
        </Cross>
        <MenuItem to="/suppliers-profile">Mein Profil</MenuItem>
        <MenuItem to="/suppliers-job-list">Job Liste</MenuItem>
        <MenuItem to="/suppliers-invite-hands">Deine Crew</MenuItem>
        <MenuItem to="/suppliers-einstellungen">Einstellungen</MenuItem>
        <MenuItem to="/suppliers-kontakt">Kontakt</MenuItem>
        <MenuItem to="/log-out">Abmelden</MenuItem>
      </SideNav>
    );
  }
}

export default SideNavSuppliers;
