import React from "react";
import styled from "styled-components";

import HandsBurgerMenu from "./HandsBurgerMenu";
import SideNavHands from "./SideNavHands";

const Mobile = styled.div`
  padding-right: 25px;

  @media only screen and (min-width: 601px) {
    visibility: hidden;
  }
`;

const Desktop = styled.div`
  white-space: nowrap;

  @media only screen and (max-width: 600px) {
    visibility: hidden;
  }
`;

class HandsNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClick() {
    this.setState({ showSideBar: true });
  }
  handleClose() {
    this.setState({ showSideBar: false });
  }
  render() {
    return (
      <div>
        <Desktop>
          <SideNavHands />
        </Desktop>
        <Mobile>
          {this.state.showSideBar ? (
            <SideNavHands handleClose={this.handleClose} />
          ) : (
            <HandsBurgerMenu handleClick={this.handleClick} />
          )}
        </Mobile>
      </div>
    );
  }
}

export default HandsNavigation;
