import React from "react";

class HandsCrossMenu extends React.Component {
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

export default HandsCrossMenu;

//<span onClick={this.props.handleClose} />;
