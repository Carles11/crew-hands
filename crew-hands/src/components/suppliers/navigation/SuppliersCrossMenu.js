import React from "react";

class SuppliersCrossMenu extends React.Component {
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

export default SuppliersCrossMenu;

//<span onClick={this.props.handleClose} />;
