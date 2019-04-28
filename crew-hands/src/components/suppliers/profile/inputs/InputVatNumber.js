import React from "react";

class InputVatNumber extends React.Component {
  render() {
    return (
      <section>
        <legend>Steuernummer</legend>
        <input
          type="text"
          name="vatNumber"
          value={this.props.vatNumber}
          onChange={this.props.handleChange}
        />
      </section>
    );
  }
}

export default InputVatNumber;
