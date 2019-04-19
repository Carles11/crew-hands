import React from "react";

class InputAddress extends React.Component {
  render() {
    return (
      <section>
        <label>
          <input
            type="text"
            name="address"
            value={this.props.address}
            onChange={this.props.handleChange}
          />
          <span>Adresse</span>
        </label>
      </section>
    );
  }
}

export default InputAddress;
