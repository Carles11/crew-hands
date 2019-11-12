import React from "react";

class Plz extends React.Component {
  render() {
    return (
      <label htmlFor="inp" className="inp">
        <input
          type="text"
          name="zipcode"
          value={this.props.zipcode}
          onChange={this.props.onInputChange}
        />
        <span className="border" />
      </label>
    );
  }
}

export default Plz;
