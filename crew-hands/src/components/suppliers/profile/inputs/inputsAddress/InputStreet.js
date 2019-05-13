import React from "react";

class InputStreet extends React.Component {
  render() {
    return (
      <label htmlFor="inp" className="inp">
        <input
          type="text"
          name="street"
          value={this.props.street}
          onChange={this.props.onChange}
        />
        <span className="border" />
      </label>
    );
  }
}

export default InputStreet;
