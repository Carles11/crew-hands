import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HandsCrossMenu from "./HandsCrossMenu";

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

class SideNavHands extends React.Component {
  render() {
    return (
      <SideNav>
        <Cross>
          <HandsCrossMenu handleClose={this.props.handleClose} />
        </Cross>
        <MenuItem to="/hands-profile">Mein Profil</MenuItem>
        <MenuItem to="/hands-job-list">Job Liste</MenuItem>
        <MenuItem to="/hands-einstellungen">Einstellungen</MenuItem>
        <MenuItem to="/hands-kontakt">Kontakt</MenuItem>
        <MenuItem to="/log-out">Abmelden</MenuItem>
      </SideNav>
    );
  }
}

export default SideNavHands;
