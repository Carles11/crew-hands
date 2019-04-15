import React from "react";

class CrossMenu extends React.Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          id="toggle-menu"
          onClick={this.props.handleClose}
        />
      </div>
    );
  }
}

export default CrossMenu;

//<span onClick={this.props.handleClose} />;
