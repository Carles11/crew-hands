import React from "react";

class CrossMenu extends React.Component {
  render() {
    return <span onClick={this.props.handleClose} />;
  }
}

export default CrossMenu;
