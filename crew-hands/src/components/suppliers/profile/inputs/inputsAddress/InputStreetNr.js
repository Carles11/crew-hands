import React from "react";

class InputStreetNr extends React.Component {
  render() {
    return (
      <label htmlFor="inp" className="inp">
        <input
          type="text"
          name="streetnumber"
          value={this.props.streetnumber}
          onChange={this.props.onChange}
        />
        <span className="border" />
      </label>
    );
  }
}

export default InputStreetNr;
