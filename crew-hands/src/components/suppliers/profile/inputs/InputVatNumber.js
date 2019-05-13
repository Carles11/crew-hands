import React from "react";

class InputVatNumber extends React.Component {
  render() {
    return (
      <section>
        <legend>Steuernummer</legend>
        <input
          type="text"
          name="vatnumber"
          value={this.props.vatnumber}
          onChange={this.props.onChange}
        />
      </section>
    );
  }
}

export default InputVatNumber;
