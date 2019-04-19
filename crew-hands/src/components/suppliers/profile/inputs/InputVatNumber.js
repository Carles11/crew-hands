import React from "react";

class InputVatNumber extends React.Component {
  render() {
    return (
      <section>
        <label>
          <input
            type="text"
            name="vatNumber"
            value={this.props.vatNumber}
            onChange={this.props.handleChange}
          />
          <span>Ust.Id.Nr.</span>
        </label>
      </section>
    );
  }
}

export default InputVatNumber;
