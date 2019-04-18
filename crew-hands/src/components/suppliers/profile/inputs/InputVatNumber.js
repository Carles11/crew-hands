import React from "react";

class InputVatNumber extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="inp" className="inp">
          <input
            type="textarea"
            id="inp"
            name="vatNumber"
            value={this.props.vatNumber}
            onChange={this.props.handleChange}
          />
          <span className="label">Ust.Id.Nr.</span>
          <span className="border" />
        </label>
      </section>
    );
  }
}

export default InputVatNumber;
