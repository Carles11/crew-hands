import React from "react";

class Plz extends React.Component {
  render() {
    return (
      <label htmlFor="inp" className="inp">
        <input
          type="text"
          name="plz"
          value={this.props.plz}
          onChange={this.props.onChange}
        />
        <span className="border" />
      </label>
    );
  }
}

export default Plz;
