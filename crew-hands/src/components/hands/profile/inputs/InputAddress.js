import React from "react";

class InputAddress extends React.Component {
  render() {
    return (
      <section>

        <label htmlFor="inp" className="inp">
          <span className="label">Adresse</span>
          <input
            type="text"
            id="inp"
            name="address"
            value={this.props.address}
            onChange={this.props.handleChange}
          />
          <span className="border" />
        </label>
      </section>
    );
  }
}

export default InputAddress;
