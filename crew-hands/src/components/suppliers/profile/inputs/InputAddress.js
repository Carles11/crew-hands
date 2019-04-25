import React from "react";

class InputAddress extends React.Component {
  render() {
    return (
      <section>
        <label>
          <input
            type="text"
            name="city"
            value={this.props.city}
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            name="address"
            value={this.props.address}
            onChange={this.props.handleChange}
          />
        </label>
      </section>
    );
  }
}

export default InputAddress;
