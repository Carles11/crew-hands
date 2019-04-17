import React from "react";

class InputAddress extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="inp" className="inp">
          <input
            type="text"
            id="inp"
            name="address"
            value={this.props.address}
            onChange={this.props.handleChange}
          />
          <span className="label">Adresse</span>
          <span className="border" />
        </label>
      </section>
    );
  }
}

export default InputAddress;
