import React from "react";
import styled from "styled-components";

const Cross = styled.span`
  span {
    position: relative;
    height: 65px;
    /* this can be anything */
    width: 65px;
    /* ...but maintain 1:1 aspect ratio */
    display: flex;
    flex-direction: column;
    justify-content: right;
    cursor: pointer;
  }

  span::before,
  span::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 9px;
    /* cross thickness */
    background: white;
  }

  span::before {
    transform: rotate(45deg);
  }

  span::after {
    transform: rotate(-45deg);
  }
`;
export default class CrossMenu extends React.Component {
  render() {
    return <Cross onClick={this.props.handleClose} />;
  }
}
