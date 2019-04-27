import React from "react";

class InputStreetNr extends React.Component {
  render() {
    return (
      <label htmlFor="inp" className="inp">
        <input
          type="text"
          name="streetNr"
          value={this.props.streetNr}
          onChange={this.props.handleChange}
        />
        <span className="border" />
      </label>
    );
  }
}

export default InputStreetNr;
